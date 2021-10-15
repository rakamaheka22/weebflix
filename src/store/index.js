import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import modules from './modules';
import { SET_MESSAGE_ERROR } from './mutations';

const store = new Vuex.Store({
    state: {
        error_message: null
    },
    getters: {
        getErrorMessage: state => {
            return state.error_message;
        }
    },
    mutations: {
        [SET_MESSAGE_ERROR]: (state, message) => {
            state.error_message = message;
        }
    },
    actions: {},
    modules: {
        ...modules
    }
});

export default store;
