<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      Hello This Is Test Commit 
    </div>-->
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#"></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item v-show="this.$store.state.userProfile.loggedIn" to="/">Home</b-nav-item>
            <b-nav-item href="#" to="Home">User Management</b-nav-item>
            <b-nav-item href="#" to="Register">Register</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav v-show="this.$store.state.userProfile.loggedIn" class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content">
                <em>{{ this.$store.state.userProfile.username }}</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <b-alert
      :show="this.$store.state.alert.show"
      :variant="this.$store.state.alert.type"
    >{{this.$store.state.alert.message}}</b-alert>
    <router-view />
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      title: "My App Title "
    };
  },
  computed: {
    loggedIn: function() {
      return true;
    }
  }
};
</script>
<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
