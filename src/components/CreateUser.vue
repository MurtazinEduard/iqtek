<template>
  <div class="main">
    <custom-input
      :model-value="currentId"
      @update:model-value="updateValueId"
      class="input"
      :textarea="false"
      :placeholder="'Введите id'"
    />
    <custom-input
      :model-value="currentName"
      @update:model-value="updateValueName"
      class="input"
      :textarea="false"
      :placeholder="'Введите имя'"
    />
    <custom-button @click="createNewUser" class="button" :value="'ДОБАВИТЬ'" />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import CustomButton from "./CustomUI/CustomButton.vue";
import CustomInput from "./CustomUI/CustomInput.vue";
export default {
  components: { CustomInput, CustomButton },
  name: "CreateUser",
  methods: {
    ...mapMutations(["addNewId", "addNewName", "addNewUser"]),
    updateValueId(e) {
      this.addNewId(e);
      localStorage.currentId = JSON.stringify(this.currentId);
    },
    updateValueName(e) {
      this.addNewName(e);
      localStorage.currentName = JSON.stringify(this.currentName);
    },
    createNewUser() {
      if (this.currentId && this.currentName) {
        this.addNewUser();
        localStorage.usersData = JSON.stringify(this.usersData);
      }
    },
  },
  computed: {
    ...mapState(["currentId", "currentName", "usersData"]),
  },
  data() {
    return {};
  },
};
</script>
<style lang="sass" scoped>
.main
    display: flex
    flex-direction: column
    width: 500px
    border: 5px solid #42b983
    border-radius: 20px
    background-color: orange
.input
    height: 10px
    margin: 10px
    box-sizing: border-box
    padding: 20px
.button
    margin: 10px
</style>
