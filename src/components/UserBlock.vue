<template>
  <div class="main">
    <div class="user-id">id: {{ user.id }}</div>
    <div class="user-name">name: {{ user.name }}</div>
    <div>
      <custom-button
        @click="changeUser(user)"
        class="button-change"
        :value="'Изменить'"
      />
      <custom-button @click="removeUser(user)" :value="'Удалить'" />
    </div>
  </div>
</template>

<script>
import CustomButton from "./CustomUI/CustomButton.vue";
import { mapMutations, mapState } from "vuex";
export default {
  components: { CustomButton },
  name: "UserBlock",
  props: {
    user: {
      type: Object,
      requared: true,
    },
  },
  methods: {
    ...mapMutations(["deleteUser", "editUser"]),
    removeUser(user) {
      const newData = this.usersData.filter((us) => us.id !== user.id);
      this.deleteUser(newData);
      localStorage.usersData = JSON.stringify(this.usersData)
    },
    changeUser(user) {
      this.editUser(user);
      localStorage.usersData = JSON.stringify(this.usersData)
    },
  },
  computed: {
    ...mapState(["usersData", "currentUser"]),
  },
};
</script>

<style lang="sass" scoped>
.main
    display: flex
.user
    &-id
        display: block
    &-name
        display: block
.button
  &-change
    margin-right: 10px
</style>
