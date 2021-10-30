import axios from 'axios';
import api from '../endpoints';

const aniapi = axios.create({
    baseURL: 'https://api.aniapi.com/v1'
});

import {
    SET_ANIME_INFO,
    SET_EPISODES_LIST,
    SET_EPISODE_DETAIL,
    SET_CAST_INFO
} from '../mutations';

const state = () => ({
    anime_info: null,
    episodes_list: [],
    episode: null,
    cast_info: []
});

const getters = {
    getAnimeInfo: state => {
        return state.anime_info;
    },
    getEpisodesList: state => {
        return state.episodes_list;
    },
    getEpisode: state => {
        return state.episode;
    },
    getCastInfo: state => {
        return state.cast_info;
    }
};

const mutations = {
    [SET_ANIME_INFO]: (state, payload) => {
        state.anime_info = payload;
    },
    [SET_EPISODES_LIST]: (state, payload) => {
        state.episodes_list = payload;
    },
    [SET_EPISODE_DETAIL]: (state, payload) => {
        state.episode = payload;
    },
    [SET_CAST_INFO]: (state, payload) => {
        state.cast_info = payload;
    }
};

const actions = {
    findAnimeById: async ({ commit }, id) => {
        try {
            if (id) {
                const { data } = await axios
                .get(`${api.ANIME}/${id}`);

                commit('SET_ANIME_INFO', data);
            } else {
                commit('SET_ANIME_INFO', null);
            }
        } catch (error) {
            commit('SET_MESSAGE_ERROR', error.message, { root: true });
        }
    },
    findCharaAnimeById: async ({ commit }, id) => {
        try {
            if (id) {
                const { data } = await axios
                .get(`${api.ANIME}/${id}/characters_staff`);

                commit('SET_CAST_INFO', data.characters);
            } else {
                commit('SET_CAST_INFO', []);
            }
        } catch (error) {
            commit('SET_MESSAGE_ERROR', error.message, { root: true });
        }
    },
    fetchEpisodesByAnimeId: async ({ commit }, id) => {
        try {
            const { data } = await aniapi.get(`/anime?mal_id=${id}`);
            const response = await aniapi.get(`/episode?anime_id=${data.data.documents[0].id}`);
            commit('SET_EPISODES_LIST', response.data.data.documents);
            return response.data.data.documents;
        } catch (error) {
            commit('SET_MESSAGE_ERROR', error.message, { root: true });
            return false;
        }
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
