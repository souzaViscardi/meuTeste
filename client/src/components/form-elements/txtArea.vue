<template>
<div id="my-input" :class="{'position': labelTop}">
  <label class="label"> {{label}} </label>
  <textarea @change="input" v-model="value" class="input" type="text" :placeholder="'input the ' + label"/>
</div>
</template>

<script>
export default {
  name: 'txt-area',
  props: {
    label: { type: String },
    fillValue: { type: String },
    labelTop: { type: Boolean, default: false }
  },
  data () {
    return {
      value: ''
    }
  },
  watch: {
    fillValue () {
      this.value = this.fillValue
    }
  },
  methods: {
    input () {
      const value = this.value
      this.$emit('input', value, this.label)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#my-input {
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  width: 100%;

  .label{
     min-width: 6rem;
     font-weight: 400px;
  }
  .input{
      width: 100%;
  }
}
#my-input.position {
  flex-direction: column;
  .label{
    min-width: 6rem;
    font-weight: 400px;
    display: flex;
    align-self: flex-start;
  }
}

</style>
