<template>
  <div>
    <img class="icon" v-b-toggle.sidebar-no-header :src="sidebarIcon" 
    />
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3">
            <h4 id="sidebar-no-header-title">Spuren</h4>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item :to="{ name: 'dashboard' }" active @click="hide">Dashboard</b-nav-item>
              <b-nav-item :to="{ name: 'kanban' }" @click="hide">Kanban</b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  data: function () {
    return {
      sidebarIcon: require('../assets/svg/sidebar.svg')
    }
  },
  computed: {
    ...mapGetters({
      user: "auth/getUser"
    })
  },
}
</script>