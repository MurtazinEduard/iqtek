import { createStore } from "vuex";

export default createStore({
  state: () => ({
    usersData: [
      {
        id: 1,
        name: "Edward",
      },
      {
        id: 2,
        name: "Sonya",
      },
      {
        id: 3,
        name: "Katya",
      },
      {
        id: 4,
        name: "Anonim",
      },
      {
        id: 5,
        name: "Valera",
      }
    ],
    currentId: "",
    currentName: "",
    showDialog: false,
    currentUser: "",
    searchQuery: "",
  }),
  getters: {},
  mutations: {
    addNewId(state, id) {
      state.currentId = id;
    },
    addNewName(state, name) {
      state.currentName = name;
    },
    addNewUser(state) {
      const newUser = {
        id: "",
        name: "",
      };
      newUser.id = state.currentId;
      newUser.name = state.currentName;
      state.usersData.push(newUser);
      state.currentId = "";
      state.currentName = "";
      localStorage.currentId = "";
      localStorage.currentName = "";
    },
    deleteUser(state, usersData) {
      state.usersData = usersData;
    },
    editUser(state, user) {
      state.currentUser = user;
      state.showDialog = true;
    },
    saveOldUserChanges(state) {
      state.usersData.map((user) =>
        user.id === state.currentUser.id
          ? ((user.id = state.currentId), (user.name = state.currentName))
          : (user.id, user.name)
      );
      state.showDialog = false;
      state.currentId = "";
      state.currentName = "";
      localStorage.currentId = "";
      localStorage.currentName = "";
    },
    saveSearchQuery(state, query) {
      state.searchQuery = query;
    },
    hideDialogWindow(state) {
      state.showDialog = false;
    },
    setUsersFromLocalStorage(state, users) {
      state.usersData = JSON.parse(users);
    },
    setCurrentIdFromLocalStorage(state, id) {
      state.currentId = JSON.parse(id);
    },
    setCurrentNameFromLocalStorage(state, name) {
      state.currentName = JSON.parse(name);
    },
  },
  actions: {},
  modules: {},
});
