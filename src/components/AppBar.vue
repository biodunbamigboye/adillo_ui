<template>
  <v-app-bar>
    <v-img
      src="./assets/swarm.png"
      alt="Vuetify Logo"
      class="ml-5 mr-0"
      max-width="40"
    ></v-img>
    <v-toolbar-title class="text-2xl font-bold">Adilo</v-toolbar-title>

    <v-btn variant="text">Projects</v-btn>

    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          variant="text"
          v-bind="props"
          class="tools-btn"
          append-icon="mdi-chevron-down"
        >
          Tools & App
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          :value="index"
        >
          <v-list-item-title
            ><RouterLink :to="{ name: item.route }">{{
              item.title
            }}</RouterLink></v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn variant="text" v-for="item in appBarItems">{{ item }}</v-btn>
    <v-spacer></v-spacer>
    <v-btn variant="plain">Help |</v-btn>
    <v-img
      src="./assets/user_avatar.png"
      alt="Vuetify Logo"
      max-width="40"
    ></v-img>

    <v-list-item
      title="Cody Fisher"
      subtitle="codyfisher@gmail.com"
    ></v-list-item>
  </v-app-bar>
</template>

<script>
import { faker } from "@faker-js/faker";
export default {
  data: () => ({
    appBarItems: ["Channels", "Analytics", "Settings"],
    menuItems: [
      {
        title: "Snapbyte Recorder",
        route: "recorder",
      },
      {
        title: "Audio Bouncer",
        route: "recorder",
      },
      {
        title: "Sugar Voice",
        route: "recorder",
      },
    ],
  }),
};
</script>
