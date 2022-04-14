<template>
  <div class="main">
    <div v-if="searchedUsersData.length === 0">Список пользователей пуст</div>
    <user-block
      class="user-block"
      v-for="user in searchedUsersData"
      :key="user.id"
      :user="user"
    >
    </user-block>
    <custom-dialog :showDialog="showDialog">
      <div class="modal">
        <custom-input
          :model-value="currentId"
          @update:model-value="updateValueId"
          :placeholder="'Новый id'"
          :textarea="false"
          class="modal-input"
        />
        <custom-input
          :model-value="currentName"
          @update:model-value="updateValueName"
          :placeholder="'Новое имя'"
          :textarea="false"
          class="modal-input"
        />
        <custom-button
          @click="changeOldUser"
          :value="'Изменить'"
          class="modal-button"
        />
      </div>
    </custom-dialog>
  </div>
</template>

<script>
import UserBlock from "./UserBlock.vue";
import { mapMutations, mapActions, mapState } from "vuex";
import CustomDialog from "./CustomUI/CustomDialog.vue";
import CustomInput from "./CustomUI/CustomInput.vue";
import CustomButton from "./CustomUI/CustomButton.vue";
export default {
  components: { UserBlock, CustomDialog, CustomInput, CustomButton },
  name: "UserList",
  methods: {
    ...mapMutations(["addNewId", "addNewName", "saveOldUserChanges"]),
    updateValueId(e) {
      this.addNewId(e);
      localStorage.currentId = JSON.stringify(this.currentId);
    },
    updateValueName(e) {
      this.addNewName(e);
      localStorage.currentName = JSON.stringify(this.currentName);
    },
    changeOldUser() {
      if (this.currentId && this.currentName) {
        this.saveOldUserChanges();
        localStorage.usersData = JSON.stringify(this.usersData);
      }
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapActions([]),
    ...mapState([
      "usersData",
      "showDialog",
      "currentId",
      "currentName",
      "searchQuery",
    ]),
    searchedUsersData() {
      return this.usersData.filter((user) =>
        user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style lang="sass" scoped>
.main
    width: 500px
    border: 5px solid #42b983
    border-radius: 20px
    display: flex
    flex-direction: column

.user
    &-block
        border: 2px solid black
        border-radius: 10px
        padding: 10px
        margin: 10px 0px
        box-sizing: border-box
        display: flex
        flex-direction: row
        justify-content: space-between
        cursor: pointer
        align-items: center
.modal
    display: flex
    flex-direction: column
    padding: 20px
    &-input
        margin-bottom: 10px
</style>
