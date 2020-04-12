<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col cols="5">
        <b-form-group label-cols-sm="4" label-cols-lg="3" label="First Name:">
          <b-form-input id="fname" v-model="firstname" placeholder></b-form-input>
        </b-form-group>
        <b-form-group label-cols-sm="4" label-cols-lg="3" label="Last Name:">
          <b-form-input v-model="lastName" placeholder></b-form-input>
        </b-form-group>
        <b-form-group label-cols-sm="4" label-cols-lg="3" label="Email:">
          <b-form-input type="email" v-model="email" placeholder></b-form-input>
        </b-form-group>
        <b-form-group label-cols-sm="4" label-cols-lg="3" label="Password:">
          <b-form-input type="password" v-model="password" placeholder></b-form-input>
        </b-form-group>
        <b-form-group label-cols-sm="4" label-cols-lg="3" label="Confirm Password:">
          <b-form-input type="password" v-model="passwordConfirm" placeholder></b-form-input>
        </b-form-group>
        <b-form-group label-cols-sm="4" label-cols-lg="3">
          <b-button v-on:click="register" variant="outline-primary">Register</b-button>
        </b-form-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      test: "Register ",
      firstname: null,
      lastName: null,
      email: null,
      password: null,
      passwordConfirm: null
    };
  },
  methods: {
    register() {
      //   console.log(this.firstname);
      let user = {
        FirstName: this.firstname,
        LastName: this.lastName,
        Email: this.email,
        password: this.password
      };
      this.$store.dispatch("userProfile/register", user);
    }
  }
};
</script>

<style>
</style>
