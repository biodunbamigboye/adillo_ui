<template>
  <v-dialog v-model="dialog" width="400px" height="600px" persistent="false">
    <template v-slot:activator="{ props }">
      <v-btn
        rounded
        color="#EF5350"
        style="margin-top: 20px; margin-right: 20px"
        prepend-icon="mdi-record"
        v-bind="props"
        class="text-white"
        >Start Recording
      </v-btn>
    </template>

    <v-card>
      <div class="dialog-header flex flex-row">
        <v-card-title class="headline">New Recording</v-card-title>
        <v-spacer></v-spacer>
        <v-btn flat @click="dialog = false">
          <v-icon size="40px">mdi-close</v-icon>
        </v-btn>
      </div>
      <v-card-text> Save the recording in </v-card-text>
      <v-card-text>
        <v-select
          v-model="form.project"
          :items="items"
          label="Select a Project"
          outlined
        ></v-select>
        <span
          class="text-red-500 justify-center text-center"
          v-if="formErrors.project"
          >{{ formErrors.project }}</span
        >
      </v-card-text>

      <div class="flex flex-row">
        <v-card-text color="#21455E"> Record Screen </v-card-text>
        <v-spacer></v-spacer>
        <v-switch v-model="form.screen" color="success" inset></v-switch>
      </div>

      <div class="flex flex-row">
        <v-card-text color="#21455E"> Record Camera </v-card-text>
        <v-spacer></v-spacer>
        <v-switch color="success" v-model="form.camera" inset></v-switch>
      </div>

      <div class="flex flex-row">
        <v-card-text color="#21455E"> Record Mic </v-card-text>
        <v-spacer></v-spacer>
        <v-switch color="success" v-model="form.mic" inset></v-switch>
      </div>

      <v-card-actions style="align-items: center; justify-content: center">
        <v-btn
          variant="flat"
          width="80%"
          @click="handleSubmit"
          color="success"
          rounded
          >Start Recording</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      selected: null,
      items: ["Test Project 1 ", "Test Project 2", "Test Project 3"],
      form: {
        project: null,
        screen: true,
        camera: true,
        mic: false,
      },
      formErrors: {},
    };
  },

  methods: {
    handleSubmit() {
      this.formErrors = {};
      if (!this.form.project) {
        this.formErrors.project = "Please Select a Project";
      }
    },
  },
};
</script>
<style scoped>
.dialog-header {
  border-bottom: 1px solid #a3bac6;
}
</style>
