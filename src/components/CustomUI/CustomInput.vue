<template>
  <input
    v-if="!textarea"
    class="input"
    :value="modelValue"
    @input="updateInput"
    :placeholder="placeholder"
  />
  <textarea
    v-else
    class="input"
    :value="modelValue"
    @input="updateInput"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    textarea: {
      type: Boolean,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
    },
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
};
</script>

<style lang="sass" scoped>
.input
    padding: 10px
    border: 2px solid black
    border-radius: 10px
</style>
