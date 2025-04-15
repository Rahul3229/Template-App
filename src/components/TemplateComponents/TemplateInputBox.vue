<template>
    <div class="TemplateInputBox" :style="{ border: '0.1rem solid ' + Color,width: DivWidth }">
        <p :style="{ color: Color }">{{ Heading }}</p>
        <input type="text"  class="TemplateInput"  v-model="message"   :style="{ border: '0.1rem solid ' + Color,width: Width, height: Height }" />
    </div>
  </template>
  
  <script>
  export default {
    props:['Heading','Color','Width','DivWidth','Height','Value','Message'],
    data() {
      return {
        message: this.Message,
        Status:this.$store.state.FetchedObject.claimStatus,
        StatusCondition:false
      };
    },

    computed:{

       StatusCondition()
       {
        if(this.Status==='Approved')
        this.StatusCondition=true
        else if(this.Status==='Denied')
        this.StatusCondition=false
        console.log(this.StatusCondition)
       }

    }

  }
  </script>

<style scoped>

.TemplateInputBox
{   
    display:flex;
    height:100%;
    flex-direction:column;
    text-align:left;
    align-items: start;
    justify-content:center !important;
    width:40%;
    /* padding-left:2%; */
}

.TemplateInput {
  padding: 3px;
  height:2.5vh;
  font-size: 0.7rem;
  border: 1px solid ;
  position:relative;
  top:-1.3vh;
  /* width:auto; */
}
p
{
    font-size:0.7rem;
    /* text-align:center; */
    /* border:0.1rem solid black; */
}
</style>