import { createStore } from 'vuex'
const dataLink = "https://isaacszubaidah.github.io/Json-Data/"
import { createStore } from 'vuex';

export default createStore({
  state: { 
    Projects: null,
    Testimonials: null,
    Resume: null,

  state: {
  
  },
  getters: {
  },
  mutations: {
      setProjects(state, Projects) {
      state.Projects = Projects
    },
    setTestimonials(state, Testimonials) {
      state.Testimonials = Testimonials
    },
    setResume(state, Resume) {
      state.Resume = Resume
    },

  },
  actions: {

    
    
    
   

  },
  modules: {
  }
  
});

