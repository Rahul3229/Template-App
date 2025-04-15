<template>
<div class="TemplateCheckBox" :style="{ border: '0.1rem solid ' + Color }">
<p :style="{ color: Color }">{{ Heading }}</p>
<input type="checkbox" v-model="checked" :style="{ border: '0.1rem solid ' + Color }"  :class="Condition || checked ? 'Fill' : 'NoFill'"/>

</div>
</template>

<script>
export default
{
    props:['Heading','Color','Condition'],
    data() {
    return {
      checked: false  
    }
}
}
</script>

<style scoped>

.TemplateCheckBox
{
    display:flex;
    
    align-items:center;
    justify-content:start;
    gap:20px;
    width:30%;
    height:100%;
}

p
{
    font-size:0.7rem;
}

input[type="checkbox"] {
  width: 30px;
  height: 30px; 
  cursor: pointer;
}

.Fill
{
    background-color:black;
}
</style>