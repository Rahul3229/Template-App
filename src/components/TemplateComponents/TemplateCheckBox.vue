<template>
<div class="TemplateCheckBox" :style="{ border: '0.1rem solid ' + Color }">
<p :style="{ color: Color }">{{ Heading }}</p>
<input type="checkbox" v-model="checked" :style="{ border: '0.1rem solid ' + Color }"  :class="checked ? 'Fill' : 'NoFill'"/>

</div>
</template>

<script>
export default
{
    props:['Heading','Color'],
    data() {
    return {
      checked: false  // Track whether the checkbox is checked
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
    /* border:0.1rem solid black; */
}

p
{
    font-size:0.7rem;
    /* border:0.1rem solid black; */
}

input[type="checkbox"] {
  width: 30px;
  height: 30px; 
  cursor: pointer;
}

.Fill
{
    background-color:green;
}
</style>