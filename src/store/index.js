import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import statusFilters from '../constants/statusFilters';

Vue.use(Vuex);

const initialState = {
  todos: [],
  filterQuery: '',
  filterStatus: statusFilters.ALL,
};

export default new Vuex.Store({
  state: {
    ...initialState,
  },
  getters,
  mutations,
  actions,
});
