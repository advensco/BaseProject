import Vue from "vue";
import Vuex from "vuex";
import { alert } from "./alert.module";
import { userProfile } from "./user.module";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    alert,
    userProfile
  },
  plugins: [createPersistedState()]
});
