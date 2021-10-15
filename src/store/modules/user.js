import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import {
    SET_IS_AUTH,
    SET_USER_INFO
} from '../mutations';

const state = () => ({
    user_info: null,
    is_auth: false
});

const getters = {
    isAuthenticated: state => {
        return state.is_auth;
    },
    getUserInfo: state => {
        return state.user_info;
    }
};

const mutations = {
    [SET_IS_AUTH]: (state, payload) => {
        state.is_auth = payload;
    },
    [SET_USER_INFO]: (state, payload) => {
       state.user_info = payload; 
    }
};

const actions = {
    isUserLoggon: ({ commit }) => {
        return new Promise((resolve, reject) => {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    commit('SET_USER_INFO', user);
                    commit('SET_IS_AUTH', !!user);
                    resolve(true);
                } else{
                    commit('SET_USER_INFO', null);
                    commit('SET_IS_AUTH', !user);
                    resolve(false);
                }
            }, err => {
                reject(err);
            });
        });
    },
    fetchLogin: async ({ commit }, payload) => {
        const { email, password } = payload;
        try {
            if (email && password) {
                const loggedIn = await firebase
                    .auth()
                    .signInWithEmailAndPassword(email, password);
                return loggedIn;
            }
        } catch (error) {
            commit('SET_MESSAGE_ERROR', error.message, { root: true });
            return false;
        }
    },
    addAccountRegister: async ({ commit }, payload) => {
        const { email, password, name } = payload;
        try {
            if (email && password) {
                const data = await firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password);

                await data.user.updateProfile({displayName: name});
                return true;
            }
        } catch (error) {
            commit('SET_MESSAGE_ERROR', error.message, { root: true });
            return false;
        }
    },
    signOutAccount: async ({ commit }) => {
        try {
            await firebase.auth().signOut();
            return true;
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