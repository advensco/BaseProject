/* eslint-disable prettier/prettier */
import { userService } from "../_services/user.service";

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
export const userProfile = {
  namespaced: true,
  state: {
    token: null,
    username: null,
    loggedIn: false
  },
  actions: {
    async register({ commit, state }, _userToRegister) {
      let response = await userService.register(_userToRegister);
      if (response && response.Data && response.Status == 1) {
        commit("alert/success", "User Registred Successfully");
      } else {
        commit("alert/error", `${response}`, {
          root: true
        });
      }
    },

    async logIn({ commit, state }, _userLogin) {
      // api call
      let response = await userService.login(
        _userLogin.username,
        _userLogin.password
      );
      //console.log("Resposnse awaited In Action ", response)

      if (response) {
        if (response.Data && response.Status == 1) {
          commit("successLogin", response.Data);
          commit("alert/success", `Welcome Back ${state.username}.`, {
            root: true
          });
        } else {
          commit(
            "alert/error",
            "Invalid Username Or Password, Please try again. "
          );
        }
      } else {
        commit("alert/error", "Something Went Wrong.", {
          root: true
        });
      }
    },
    logOut() {}
  },

  mutations: {
    successLogin(state, _loggedInToken) {
      // console.log("successLogin Mutation Committed ");
      console.log("successLogin Mutation Committed: ", _loggedInToken);

      let parsedToken = parseJwt(_loggedInToken);
      console.log(parsedToken);
      state.token = _loggedInToken;
      state.username = parsedToken.unique_name;
      state.loggedIn = true;
    }
  }
};
