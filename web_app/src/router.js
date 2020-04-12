import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import { store } from "./_store";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/Home",
      name: "Home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/Register",
      name: "Register",
      component: Register,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
router.beforeEach((to, from, next) => {
  /* must call `next` */
  // console.log(store.state.alert.message)
  //TODO: try to clear alert Here.
  if (store.state.alert.show) {
    // debugger;x
    store.dispatch("alert/clear");
  }
  let loggedIn = store.state.userProfile.loggedIn;
  console.log("Logged in ", loggedIn);
  if (to.meta.requiresAuth && !loggedIn) {
    // debugger;
    next("/login");
  } else {
    next();
  }
});
export default router;
