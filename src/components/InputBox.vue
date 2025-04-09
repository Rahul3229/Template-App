<template>
<input v-model="Value" :type="type" class="InputBox" :placeholder="PlaceHolder" :style="{ width: width,height: height }" @input="SendValue">    
</template>

<script>
export default{
    props:['PlaceHolder','type','width','height'],

  data()
  {
    return {
      Value:''
    }
  },

  methods:
  {
    SendValue()
    {
      this.$emit('EmittedValue',this.Value)
    }
  }

}
</script>

<style scoped>

</style>