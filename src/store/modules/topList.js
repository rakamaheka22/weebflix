import axios from 'axios';
import api from '../endpoints';

import {
    SET_UPCOMING_LIST,
    SET_TOP_LIST,
    SET_DETAIL_ANIME
} from '../mutations';

const state = () => ({
    upcoming_list: [],
    top_list: [],
    detail_anime: null
});

const getters = {
    getUpcomingList: state => {
        return state.upcoming_list &&
            state.upcoming_list.slice(0, 10) || [];
    },
    getTopList: state => {
        return state.top_list;
    },
    getDetailAnime: state => {
        return state.detail_anime;
    }
};

const mutations = {
    [SET_UPCOMING_LIST]: (state, payload) => {
        state.upcoming_list = payload;
    },
    [SET_TOP_LIST]: (state, payload) => {
        state.top_list = payload;
    },
    [SET_DETAIL_ANIME]: (state, payload) => {
        state.detail_anime = payload;
    },
};

const actions = {
    fetchTopList: async ({ commit }, payload) => {
        const { page, type } = payload;
        try {
            const { data } = await axios
                .get(`${api.TOP_LIST}/${page}/${type}`);

            if (type === 'upcoming') { 
                commit('SET_UPCOMING_LIST', data.top);
            } else {
                commit('SET_TOP_LIST', data.top);
            }
        } catch (error) {
            commit('SET_MESSAGE_ERROR', error.message, { root: true });
        }
    },
    findAnimeByQuery: async ({ commit }, search) => {
        try {
            const { data } = await axios
                .get(`${api.SEARCH_LIST}?q=${search}`);

            commit('SET_TOP_LIST', data.results);
        } catch (error) {
            commit('SET_MESSAGE_ERROR', error.message, { root: true });
        }
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
