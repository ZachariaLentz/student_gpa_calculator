import Vue from "vue";
import Vuex from "vuex";
import students from './Modules/students'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {students}
});
