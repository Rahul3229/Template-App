<template>
    <textarea :type="type" class="InputBox" :placeholder="PlaceHolder" :style="{ width: width,height: height }" v-model="TextAreaValue" @input="SendTextAreaValue"/>    
    </template>
    
    <script>
    export default{
        props:['PlaceHolder','type','width','height'],

        data()
  {
    return {
      TextAreaValue:''
    }
  },

  methods:
  {
    SendTextAreaValue()
    {
      this.$emit('EmittedTextAreaValue',this.TextAreaValue)
    }
  }
    }
    </script>
    
    <style scoped>

    
    </style>