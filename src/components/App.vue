<template>
  <div>
     <b-overlay :show="isLoading">
      <navbar />
      <b-container>
        <router-view />
      </b-container>
    </b-overlay>
  </div>
</template>

<script>

import Navbar from './Navbar.vue'
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    "navbar": Navbar
  },
  computed: {
    ...mapGetters({
      isLoading: "getLoading",
    }),
  }
};
</script>
