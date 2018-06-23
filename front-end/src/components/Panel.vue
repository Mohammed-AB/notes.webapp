<template>
  <div class="white elevation-2">
    <v-toolbar
      flat
      dense
      dark
      color="teal lighten-3"
    >
      <v-toolbar-title>
        {{title}}
      </v-toolbar-title>
    </v-toolbar>

    <div class="pl-4 pr-4 pt-2 pb-2">
      <slot>You need to write something.</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style>

</style>
