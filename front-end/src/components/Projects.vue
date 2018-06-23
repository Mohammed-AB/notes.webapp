<template>
    <Panel title="Projects">
        <div 
        v-for="project in projects" 
        :key="project.id"
        >
        {{project.title}}
        </div>
        <v-layout row wrap>
            <v-flex xs8>
                <v-text-field 
                placeholder="project name...."
                @input="setNewProjectName"
                :value="newProjectName"
                >
                </v-text-field>
            </v-flex>

            <v-flex xs4>
                <v-btn fab dark small color="green lighten-1" class='mt-3 ml-4'
                @click="createProject"
                >
                hello their
                <!-- <v-icon class='flex' dark>add_circle</v-icon> -->
                </v-btn>
                </v-flex>
                </v-layout>
                </Panel>
                </template>

<script>

import { mapActions, mapMutations, mapState } from 'vuex';

export default {
    computed: {
        ...mapState('projects', [
            'newProjectName',
            'projeects',
        ])
    },
    methods: {
        ...mapMutations('projects', [
            'setNewProjectName',
            ]),
            ...mapActions('projects', [
                'createProject',
    ]),
  },

};
</script>

<style>

</style>
