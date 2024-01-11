import { createStore } from "vuex";
const dataLink = "https://isaacszubaidah.github.io/Json-Data/index.json";


const fetchData = async (url, mutation, dataProperty, context) => {
  context.commit('setLoading', true);

  try {
    const response = await fetch(url);
    const data = await response.json();
    context.commit(mutation, data[dataProperty]);
  } catch (error) {
    context.commit('setError', true);
    alert(`Failed to fetch ${mutation}`);
  } finally {
    context.commit('setLoading', false);
  }
};

export default createStore({
  state: {
    projects: null,
    testimonials: null,
    resume: null,
    loading: false,
    error: false,
  },
  mutations: {
    setProjects: (state, projects) => {
      state.projects = projects;
    },
    setTestimonials: (state, testimonials) => {
      state.testimonials = testimonials;
    },
    setResume: (state, resume) => {
      state.resume = resume;
    },
    setLoading: (state, value) => {
      state.loading = value;
    },
    setError: (state, value) => {
      state.error = value;
    },
  },
  actions: {
    fetchData: async (context, { url, mutation, dataProperty }) => {
      await fetchData(url, mutation, dataProperty, context);
    },
    getProjects: async (context) => context.dispatch('fetchData', {
      url: dataLink,
      mutation: "setProjects",
      dataProperty: "projects",
    }),
    getTestimonials: async (context) => context.dispatch('fetchData', {
      url: dataLink,
      mutation: "setTestimonials",
      dataProperty: "testimonials",
    }),
    getResume: async (context) => context.dispatch('fetchData', {
      url: dataLink,
      mutation: "setResume",
      dataProperty: "resume",
    }),
  },
});
