<template>
  <v-app id="inspire">
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
            <v-list-item-title>{{ item }}</v-list-item-title>
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

    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item
          prepend-icon="mdi-video-outline"
          title="My Recordings"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-share-variant-outline"
          title="Requested"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!--  -->
      <v-breadcrumbs :items="breadCrumbItems">
        <template v-slot:divider>
          <v-icon icon="mdi-chevron-right"></v-icon>
        </template>
      </v-breadcrumbs>

      <!-- <div style="display: inline">
        <span class="text-2xl font-bold">My Recordings 25</span>
        <v-spacer></v-spacer>
        <v-btn variant="contained" color="danger" prepend-icon="mdi-video"
          >Start Recording</v-btn
        >
      </div> -->
      <table class="table-auto">
        <thead>
          <tr>
            <th v-for="header in headers" :key="header">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="content in contents" :key="content.recording">
            <td>{{ content.recording }}</td>
            <td>{{ content.title }}</td>
            <td>{{ content.view }}</td>
            <td>{{ content.size }}</td>
            <td>{{ content.lastModified }} ...</td>
          </tr>
        </tbody>
      </table>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    appBarItems: ["Channels", "Analytics", "Settings"],
    menuItems: ["Snapbyte Recorder", "Audio Bounce", "Sugar Voice"],
    breadCrumbItems: [
      {
        title: "Snapbyte",
        disabled: false,
        href: "breadcrumbs_dashboard",
      },
      {
        title: "My Recordings",
        disabled: false,
        href: "breadcrumbs_link_1",
      },
    ],
    headers: ["Recordings", "Title", "View", "Size", "Last Modified"],
    contents: [
      {
        recording: "Recording 1wwwwwwwwwwwwww",
        title: "Title 1",
        view: "View 1",
        size: "Size 1",
        lastModified: "Last Modified 1",
      },
    ],
  }),
};
</script>
<style scoped>
.tools-btn.v-btn {
  border-top: 5px solid #0dabd8;
  padding-top: 5px;
}
</style>
