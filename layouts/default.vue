<template>
  <v-app dark>
    <v-toolbar>
      <v-toolbar-title>
        <img src="~/assets/images/logo.png" class="logo" />
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn
          v-for="menu in menus"
          flat
          nuxt
          :to="menu.link"
          :key="menu.text"
        >
          {{ menu.text }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { text: 'Home', link: '/' },
        { text: 'Movies', link: '/movies' }
      ]
    }
  }
}
</script>

<style>
.logo {
  line-height: 1;
  vertical-align: middle;
  margin-right: 16px;
}
</style>
