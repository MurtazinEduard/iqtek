<template>
  <div class="dialog" v-if="showDialog" @click.stop="hideDialog">
    <div @click.stop class="dialog-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "CustomDialog",
  props: {
    showDialog: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  methods: {
    ...mapMutations(["hideDialogWindow"]),
    hideDialog() {
      this.hideDialogWindow();
    },
  },
};
</script>

<style lang="sass" scoped>
.dialog
    top: 0
    bottom: 0
    right: 0
    left: 0
    background-color: rgba(0, 0, 0, 0.5)
    position: fixed
    display: flex
    &-content
        margin: auto
        background: white
        border-radius: 10px
        min-width: 50px
        min-height: 50px
</style>
