<template>
  <div class="form col-4">
    <b-form-group label=" ">
      <b-form-input placeholder="Username" type="text" v-model="username"></b-form-input>
    </b-form-group>

    <b-form-group label=" ">
      <b-form-input placeholder="Password" type="password" v-model="password"></b-form-input>
    </b-form-group>
    <b-button variant v-on:click="loginClick">Login</b-button>
  </div>
</template>

<script>
import axios from "axios";
// import { debuglog } from 'util';
// import { debuglog } from "util";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    alertInfo: function() {
      // this.$store.commit("alert/error","Error MEssagee ")
      // this.$store.commit("alert/success","Success MEssagee ")
      // this.$store.commit("alert/info","Info  MEssagee ")
      // console.log(this.$store.state.alert)
      // console.log(this.$store.state.alert.type)
      // console.log(this.$store.state.alert.message)
      // console.log( process.env )
      return `${process.env.VUE_APP_BASE_API_URL} asd Info `;
      // return this.$store.alert.message;
    }
  },
  methods: {
    loginClick: function() {
      console.log(this.username + "-" + this.password);
      // debugger;
      let user = { username: this.username, password: this.password };
      this.$store.dispatch("userProfile/logIn", user);
    }
  }
};
</script>

<style></style>
