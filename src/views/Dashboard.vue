<template>
  <h1>Hello, {{user.name}}!</h1>
</template>
<script>

import { mapGetters } from 'vuex';


export default {
  computed: {
    ...mapGetters({
      user: "auth/getUser"
    })
  },
}
</script>
