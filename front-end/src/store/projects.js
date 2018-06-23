// import router from '../router';
// import Vue from 'vue';
import HTTP from '../http';

export default {
    namespaced: true,
    state: {
        projects: [],
        newProjectName: null,

    },
    actions: {
        createProject({ commit, state }) {
            return HTTP().post('/projects', {
              title: state.newProjectName,
            })
              .then(({ data }) => {
                commit('appendProject', data);
                commit('setNewProjectName', null);
              });
          },

    },
    getters: {

    },
    mutations: {
        appendProject(state, project) {
            state.projects.push(project);
          },
        setNewProjectName(state, name) {
            state.newProjectName = name;
        },

    },
}