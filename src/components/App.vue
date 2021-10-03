<template>
  <div>
     <b-overlay :show="isLoading">
      <navbar />
      <sidebar v-if="isAuthenticated" />
      <b-container>
        <router-view />
      </b-container>
    </b-overlay>
  </div>
</template>

<script>

import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'

import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    "navbar": Navbar,
    "sidebar": Sidebar,
  },
  computed: {
    ...mapGetters({
      isLoading: "getLoading",
      isAuthenticated: "auth/isAuthenticated",
    }),
  }
};
</script>
