<template>
  <div class="home">
    <create-user class="user-create" />
    <custom-input
      :model-value="searchQuery"
      @update:model-value="updateSearchQuery"
      :placeholder="'Поиск по пользователям'"
      :textarea="false"
      style="width: 500px; padding: 20px; font-size: 24px; margin-top: 20px"
    />
    <user-list class="user-list" />
  </div>
</template>

<script>
import CreateUser from "@/components/CreateUser.vue";
import UserList from "@/components/UserList.vue";
import CustomInput from "@/components/CustomUI/CustomInput.vue";
import { mapMutations, mapState } from "vuex";

export default {
  name: "HomeView",
  components: {
    CreateUser,
    UserList,
    CustomInput,
  },
  methods: {
    ...mapMutations([
      "saveSearchQuery",
      "setUsersFromLocalStorage",
      "setCurrentNameFromLocalStorage",
      "setCurrentIdFromLocalStorage",
    ]),
    updateSearchQuery(e) {
      this.saveSearchQuery(e);
    },
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState(["searchQuery", "usersData"]),
  },
  mounted() {
    if (localStorage.usersData) {
      this.setUsersFromLocalStorage(localStorage.usersData);
    }
    if (localStorage.currentName) {
      this.setCurrentNameFromLocalStorage(localStorage.currentName);
    }
    if (localStorage.currentId) {
      this.setCurrentIdFromLocalStorage(localStorage.currentId);
    }
  },
};
</script>
<style lang="sass" scoped>
.home
  width: 100%
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
.user
  &-create
    display: flex
    padding: 20px
  &-list
    display: flex
    justify-content: center
    margin-top: 20px
    padding: 20px
</style>
