import {
    enableIndexedDbPersistence,
    doc,
    collection,
    getDocs,
    addDoc,
    deleteDoc
} from 'firebase/firestore';
import { db } from '../../firebase';

import api from '../endpoints';

enableIndexedDbPersistence(db).catch((err) => {
    if (err.code === 'failed-precondition') {
        console.log('persistent failed');
    } else if (err.code === 'unimplemented') {
        console.log('persistance is not available');
    }
});

const state = () => ({
    watch_list: []
});

const getters = {
    getWatchList: (state) => {
        return state.watch_list;
    },
    getCountWatchList: (state) => {
        return state.watch_list.length;
    }
};

const mutations = {
    SET_WATCH_LIST: (state, payload) => {
        state.watch_list = payload;
    }
};

const actions = {
    fetchFirestore: async ({ commit }) => {
        const watchList = [];
        const list = await getDocs(collection(db, api.WATCH_LIST));

        if (list.docs.length > 0) {
            list.forEach((doc) => {
                watchList.push({
                    id: doc.id,
                    mal_id: doc.data().mal_id,
                    title: doc.data().title,
                    type: doc.data().type,
                    url: doc.data().url,
                    start_date: doc.data().start_date,
                    end_date: doc.data().end_date,
                    score: doc.data().score,
                    rank: doc.data().rank,
                    episodes: doc.data().episodes,
                    members: doc.data().members,
                    image_url: doc.data().image_url
                })
            });
        }
        commit('SET_WATCH_LIST', watchList);
    },
    addFirestore: async ({ commit }, payload) => {
        try {
            const response = await addDoc(collection(db, api.WATCH_LIST), payload);
            return response;
        } catch (error) {
            console.log(error);
            commit('SET_MESSAGE_ERROR', error.message, { root: true });
            return false;
        }
    },
    deleteFirestore: async ({ commit, dispatch }, id) => {
        try {
            await deleteDoc(doc(db, api.WATCH_LIST, id));
            await dispatch('fetchFirestore');

            return true;
        } catch (error) {
            commit('SET_MESSAGE_ERROR', error.message, { root: true });
            return false;
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
