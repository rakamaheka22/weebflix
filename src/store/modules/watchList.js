import firebase from '../../firebase';
import { enableIndexedDbPersistence } from 'firebase/firestore'; 
import 'firebase/compat/firestore';

import api from '../endpoints';

const db = firebase.firestore();

db.settings({ experimentalForceLongPolling: true });

enableIndexedDbPersistence(db).catch((err) => {
    console.log('firestore : ', err);
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
    fetchFirestore: ({ commit }) => {
        db.collection(api.WATCH_LIST).onSnapshot((list) => {
            const watchList = [];

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
        })
    },
    addFirestore: async ({ commit }, payload) => {
        try {
            const response = await db.collection(api.WATCH_LIST).add(payload);
            return response;
        } catch (error) {
            console.log(error);
            commit('SET_MESSAGE_ERROR', error.message, { root: true });
            return false;
        }
    },
    deleteFirestore: async ({ commit }, id) => {
        try {
            const response = await db.collection(api.WATCH_LIST).doc(id).delete();
            return response;
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
