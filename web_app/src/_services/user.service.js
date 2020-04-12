/* eslint-disable prettier/prettier */
import { authHeader } from "./authHeader";
import axios from "axios";

const baseApi = process.env.VUE_APP_BASE_API_URL;

export const userService = {
  login,
  logout,
  getAll,
  register
};

async function register(newUserInfo) {
  // debugger;
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
    // body: JSON.stringify(newUserInfo)
  };
  let result = "";

  await axios
    .post(`${baseApi}/api/user/Register`, newUserInfo, requestOptions)
    .then(response => {
      result = response.data;
    })
    .catch(error => {
      if (error.response.data && error.response.data.ExceptionMessage) {
        result += `: ${error.response.data.ExceptionMessage}`;
      } else {
        result = error.response.data;
      }
      console.error("Error:", error);
    });
  // debugger;
  return result;
}

async function login(_username, _password) {
  // debugger
  let res = await axios
    .post(
      `${baseApi}/api/User/Login`,
      {
        Username: _username,
        Password: _password
      },
      {
        headers: {
          // "Allow-Control-Allow-Origin": "*"
          "Access-Control-Allow-Origin": "*"
        }
      }
    )
    .then(response => {
      // console.log(this.parseJwt(response.data.Data));
      console.log("service axios response returned ", response);
      return response.data;
    })
    .catch(err => console.error("Error on Authentication Service:", err));
  return res;
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(`/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  debugger;

  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      debugger;
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      console.log("(response.error)", response);
      return Promise.reject(error);
    }

    return Promise.resolve(data);
  });
}
