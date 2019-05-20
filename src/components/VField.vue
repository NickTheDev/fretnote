<!-- Represents a form field which can hold user input. -->

<template>
  <div class="field">
    <div class="control">
      <label>
        <input
          @input="$emit('input', parseFloat($event.target.value))"
          :value="onKey"
          :placeholder="title"
          class="input"
          type="number">
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VField',
  props: {
    title: {
      type: String,
      default: '',
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    onKey(value) {
      this.value = isNaN(value) ? 0 : value;
    },
  },
};
</script>

<style scoped lang="sass">
  @import '../assets/style/variables'

  // Prompts

  .field
    padding: .1rem 0 .1rem

  .input
    padding: 1.5em
    border-radius: .4rem
    border: none
    background-color: rgba($gray, .15)
    box-shadow: none
    font: .8rem $body
    color: $black
    transition: transform .2s

  .input::placeholder
    color: rgba($black, .5)

  .input:focus
    transform: scale(1.05)
</style>
