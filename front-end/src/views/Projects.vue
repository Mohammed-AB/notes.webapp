<template>
<v-container>
  <v-layout>
    <v-flex xs4>
      <Projects></Projects>
       </v-flex>
       <v-flex xs14 class='pl-4'>
       <Panel title="Tasks">
         <h1> tasks </h1>
       </Panel>
       </v-flex>
  </v-layout>
</v-container>
</template>
<script>

import { mapGetters } from 'vuex';
import Projects from '@/components/Projects.vue';
// import Tasks from '@/components/Tasks.vue';
import router from '../router';

export default {
   components: {
    Projects,
  },
  mounted() {
    if (!this.isLoggedIn) {
      return router.push('/login');
    }
  },
  computed: {
    ...mapGetters('authentication', [
      'isLoggedIn',
    ]),
  },

};
</script>
