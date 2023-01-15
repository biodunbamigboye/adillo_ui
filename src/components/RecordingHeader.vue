<template>
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
      color="#0DABD8"
      prepend-icon="mdi-video"
      class="text-white mr-3"
      >New Request
    </v-btn>

    <new-recording></new-recording>
  </div>
</template>
<script>
import NewRecording from "../components/NewRecording.vue";
export default {
  components: {
    NewRecording,
  },
};
</script>
