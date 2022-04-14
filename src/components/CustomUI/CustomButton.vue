<template>
  <button class="button" value="22">{{value}}</button>
</template>

<script>
export default {
    name: 'CustomButton',
     props: {
        value: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="sass" scoped>
.button
    padding: 10px
    border: 2px solid black
    border-radius: 10px
    cursor: pointer
</style>