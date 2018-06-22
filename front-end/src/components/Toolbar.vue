<template>
<div>
    <v-toolbar color='teal lighten-3' dark fixed>
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-toolbar-title class='mr-4 '>See list</v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat v-if="isLoggedIn">
        <v-icon>playlist_add_check</v-icon>Todos</v-btn>
      </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to='/SignUp' v-if="!isLoggedIn">
        <v-icon class="mr-2">account_box</v-icon>
        Sign Up</v-btn>
      <v-btn flat v-if="!isLoggedIn">
        <v-icon class="mr-2">fingerprint</v-icon>
        Sign In
        </v-btn>
      <v-btn flat v-if="isLoggedIn" @click='setToken(null)'>
        <v-icon class="mr-2">exit_to_app</v-icon>
         Log Out</v-btn>
        <v-btn flat>
        <!-- <v-icon class="mr-2">github</v-icon> -->
        Github
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters('authentication', [
      'isLoggedIn',
    ]),
  },
  methods: {
    ...mapMutations('authentication', [
      'setToken',
    ]),
  },
};
</script>

<style>

</style>
