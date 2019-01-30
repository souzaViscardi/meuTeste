<template>
<div id="my-label" :class="{'position': labelTop}">
  <label v-if="label" class="label"> {{label}} </label>
  <label v-if="label" class="text"> {{fillValue}} </label>
</div>
</template>

<script>
export default {
  name: 'my-input',
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
  methods: {
  },
  watch: {
    fillValue () {
      this.value = this.fillValue
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#my-label {
  display: flex;
  flex-direction: row;
  justify-content:flex-start;
  align-items: flex-start;
  margin-top: 1rem;
  width: 100%;
  .label{
     min-width: 6rem;
     font-weight: 400px;
  }
  .text{
      width: 100%;
  }
}
#my-label.position {
  flex-direction: column;
  justify-content:flex-start;
  .label{
     min-width: 6rem;
     font-weight: 400px;
     display: flex;
     align-self: flex-start;
  }

}

</style>
