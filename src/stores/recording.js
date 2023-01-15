import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useRecordingStore = defineStore("recording", () => {
  const recordingFormData = ref(null);
  const isRecording = computed(() => recording.value !== null);

  return { recordingFormData, isRecording };
});
