<template>
  <v-navigation-drawer v-model="drawer">
    <v-list>
      <v-list-item
        :to="{ name: 'recordings' }"
        active
        prepend-icon="mdi-video-outline"
        title="My Recordings"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-share-variant-outline"
        title="Requested"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    drawer: null,
  }),
};
</script>
