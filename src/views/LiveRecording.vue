<template>
  <!-- <app-bar></app-bar> -->
  <v-container fluid>
    <div>
      <v-icon style="" color="red">mdi-record</v-icon>
      Live Preview
      <div class="centralize">
        <div class="recorder main-section"></div>
        <v-btn
          color="#0DABD8"
          rounded
          variant="flat"
          class="justify-center text-white mt-5"
          >Start Recording</v-btn
        >
      </div>
    </div>
  </v-container>
</template>
<script>
import AppBar from "../components/AppBar.vue";
import { useGlobalConfigStore } from "../stores/globalConfig";
export default {
  setup() {
    const globalConfig = useGlobalConfigStore();
    globalConfig.showSideNav = false;
    return { globalConfig };
  },
  components: {
    AppBar,
  },
  props: {
    formData: {
      type: Object,
      required: true,
    },
  },
  data: () => ({}),
  methods: {},
};
</script>

<style scoped>
.recorder {
  background: #21455e;
  border-radius: 10px;
  border: 1px dashed #a3bac6;
}

.main-section {
  position: relative;
  width: 918px;
  height: 463px;
  border: 1px dashed #a3bac6;
  opacity: 1;
}
.centralize {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
</style>
