<template>
  <!--  -->
  <v-breadcrumbs :items="breadCrumbItems">
    <template v-slot:divider>
      <v-icon icon="mdi-chevron-right"></v-icon>
    </template>
  </v-breadcrumbs>

  <div class="flex flex-row ml-2">
    <span class="text-2xl font-bold mr-10">My Recordings 25</span>
    <v-btn variant="outlined" rounded prepend-icon="mdi-calendar" class="mr-3"
      >By Date
    </v-btn>

    <v-btn
      variant="outlined"
      rounded
      prepend-icon="mdi-filter-outline"
      append-icon="mdi-chevron-down"
      class="mr-3"
      >Add Filter
    </v-btn>

    <v-btn
      variant="flat"
      rounded
      color="secondary"
      prepend-icon="mdi-video"
      class="mr-3"
      >New Request
    </v-btn>

    <new-recording></new-recording>
  </div>

  <table
    class="table-auto border-separate border-spacing-2 border-slate-400 w-screen text-left"
  >
    <thead>
      <tr>
        <th>Recordings</th>
        <th>Title</th>
        <th>View</th>
        <th>Size</th>
        <th>Last Modified</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="content in contents" :key="content.recording">
        <td class="w-10">
          <v-img :src="content.recording" width="100px" height="50px"></v-img>
        </td>
        <td class="w-6/12 text-left">
          {{ content.title.main }}
          <br />
          <span class="text-sm text-gray-500">{{ content.title.sub }}</span>
        </td>
        <td class="w-10">{{ content.view }}</td>
        <td class="w-12">{{ content.size }}</td>
        <td>
          <span class="mr-5">{{ content.lastModified }}</span>
          <v-icon>mdi-dots-horizontal</v-icon>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { faker } from "@faker-js/faker";
import NewRecording from "../components/NewRecording.vue";
export default {
  components: {
    NewRecording,
  },
  data: () => ({
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
    // headers: ["Recordings", "Title", "View", "Size", "Last Modified"],
    contents: [
      {
        recording: faker.image.avatar(),
        title: {
          main: faker.lorem.sentence(),
          sub: faker.lorem.paragraph(),
        },
        view: "323",
        size: "923 KB",
        lastModified: "23rd Dec 2020",
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
