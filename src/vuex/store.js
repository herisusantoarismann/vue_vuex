import { createStore } from "vuex";
import state from './state';
import mutations from './mutation';
import actions from './action';
import getters from './getter'

const store = createStore({state:state, mutations:mutations, actions:actions, getters:getters})

export default store;