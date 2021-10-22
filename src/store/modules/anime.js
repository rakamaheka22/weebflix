import axios from 'axios';
import api from '../endpoints';

import {
    SET_ANIME_INFO,
    SET_EPISODES_LIST,
    SET_EPISODE_DETAIL
} from '../mutations';

const state = () => ({
    anime_info: null,
    episodes_list: [],
    episode: null
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
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
