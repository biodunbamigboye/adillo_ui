import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useGlobalConfigStore = defineStore("globalConfig", () => {
  const showSideNav = ref(true);

  return { showSideNav };
});
