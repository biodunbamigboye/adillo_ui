<template>
  <v-app id="inspire">
    <app-bar></app-bar>

    <side-nav v-if="globalConfig.showSideNav"></side-nav>

    <v-main style="padding-left: 100px">
      <!--  -->
      <router-view></router-view>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
import { faker } from "@faker-js/faker";
import SideNav from "./components/SideNav.vue";
import AppBar from "./components/AppBar.vue";
import { useGlobalConfigStore } from "./stores/globalConfig.js";
export default {
  setup() {
    const globalConfig = useGlobalConfigStore();

    return { globalConfig };
  },
  components: {
    SideNav,
    AppBar,
  },
};
</script>
