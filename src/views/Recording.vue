<template>
  <!--  -->
  <v-breadcrumbs :items="breadCrumbItems">
    <template v-slot:divider>
      <v-icon icon="mdi-chevron-right"></v-icon>
    </template>
  </v-breadcrumbs>

  <recording-header></recording-header>

  <table
    class="table-auto border-separate border-spacing-2 border-slate-400 w-screen text-left"
  >
    <thead>
      <tr>
        <th v-for="(heading, index) in headers" :key="index">{{ heading }}</th>
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
import { useGlobalConfigStore } from "../stores/globalConfig";
import RecordingHeader from "../components/RecordingHeader.vue";
export default {
  setup() {
    const globalConfig = useGlobalConfigStore();
    globalConfig.showSideNav = true;

    let contents = [];

    for (let i = 0; i < 10; i++) {
      contents.push({
        recording: faker.image.avatar(),
        title: {
          main: faker.lorem.sentence(),
          sub: faker.lorem.paragraph(),
        },
        view: 324,
        size: "923 KB",
        lastModified: "3 Months Ago",
      });
    }
    return { globalConfig, contents };
  },
  components: {
    RecordingHeader,
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
    headers: ["Recordings", "Title", "View", "Size", "Last Modified"],
  }),
};
</script>
<style scoped>
.tools-btn.v-btn {
  border-top: 5px solid #0dabd8;
  padding-top: 5px;
}
</style>
