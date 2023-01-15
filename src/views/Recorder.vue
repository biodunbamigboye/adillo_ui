<template>
  <v-container fluid>
    <div class="main-section">
      <v-icon size="150" color="#a3bac6" style="margin-bottom: 20px"
        >mdi-file-document-multiple-outline</v-icon
      >
      <p class="hello-text">Say Hello to the World</p>

      <p class="first-video">
        Record your first video/audio and share it what your team, friends,
        followers and customers.
      </p>
      <div class="display:flex; flex-direction:row">
        <v-btn
          rounded
          color="#EF5350"
          style="margin-top: 20px; margin-right: 20px"
          prepend-icon="mdi-record"
          >Start Recording
        </v-btn>
        <v-btn
          rounded
          color="#0DABD8"
          style="margin-top: 20px"
          prepend-icon="mdi-video"
          >New Request</v-btn
        >
      </div>
    </div>

    <div class="advert-section flex flex-row mt-5 justify-left">
      <v-img src="./assets/ads.png" width="50px"></v-img>
      <div class="flex flex-col ml-5 items-center justify-center">
        <p class="text-2xl font-bold">
          Want more controls & better quality recording?
        </p>
        <p class="text-sm text-gray-500">
          <v-btn
            rounded
            color="#0DABD8"
            style="margin-top: 20px"
            prepend-icon="mdi-video"
            >Download the Desktop Recorder
          </v-btn>
        </p>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  data: () => {},
};
</script>

<style scoped>
.main-section {
  position: relative;
  left: 144px;
  width: 1018px;
  height: 463px;
  border: 1px dashed #a3bac6;
  border-radius: 38px;
  opacity: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.hello-text {
  font: normal normal medium 42px/55px Poppins;
  letter-spacing: 0px;
  color: #000000;
  font-size: large;
}
.first-video {
  font: normal normal normal 18px/24px Poppins;
  font-size: x-large;
  letter-spacing: 0px;
  color: #a3bac6;
  opacity: 1;
  margin-top: 20px;
}
</style>
