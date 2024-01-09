import { createStore } from 'vuex'
const dataLink = "https://isaacszubaidah.github.io/Json-Data/"

export default createStore({
  state: { 
    Projects: null,
    Testimonials: null,
    Resume: null,

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
})
