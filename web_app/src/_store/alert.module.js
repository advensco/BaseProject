export const alert = {
  namespaced: true,
  state: {
    type: null,
    message: ""
  },
  actions: {
    success({ commit }, message) {
      commit("success", message);
    },
    error({ commit }, message) {
      commit("error", message);
    },
    clear({ commit }, message) {
      commit("clear", message);
    }
  },
  mutations: {
    success(state, message) {
      state.type = "success";
      state.message = message;
      state.show = true;
    },
    error(state, message) {
      state.type = "danger";
      state.message = message;
      state.show = true;
    },
    info(state, message) {
      state.type = "warning";
      state.message = message;
      state.show = true;
    },
    clear(state) {
      // debugger;
      state.type = null;
      state.message = "null";
      state.show = false;
    }
  }
};
