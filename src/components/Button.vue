<template>
    
    <div v-if="DifferentButton">
        <button :class="SetCondition ? 'ButtonStyleClick' : 'ButtonStyle'" @click="Console"  :style="{ width: width,height: height,padding:padding }">{{ ButtonText }}</button>  
    </div>

 

    <div v-else>
        <button :class="ClickCondition ? 'ButtonStyleClick' : 'ButtonStyle'"  @click="ChangeClass" :style="{ width: width,height: height,padding:padding }">{{ ButtonText }}</button> 
    </div>  

</template>

<script>
export default{
    props:['ButtonText','width','height','padding','DifferentButton','SetCondition'],
    data()
    {
        return{
            ClickCondition:false,
            DifferentButton:this.DifferentButton,
            SetCondition:this.SetCondition
        }
        
    },
    methods:
    {   

        Console(){
            console.log(this.SetCondition);
        },
        ChangeClass()
        {
            this.ClickCondition=!this.ClickCondition
            setTimeout(()=>{
                this.ClickCondition=!this.ClickCondition
            },100)
        },
        StaticClass()
        {
            this.ClickCondition=!this.ClickCondition
        },
        HandleClick()
        {
            if(this.Condition)
            {
                this.StaticClass() 
            } 
            else
            {
                this.ClickCondition=false
                this.ChangeClass() 
            }
             
        }
    }
}
</script>

<style scoped>
.ButtonStyle
{
    
    border-radius: 5px;
    padding:2%;
    width:20%;
    color: green;
    background: none;
    border:0.2rem solid  green;
    transition: 0.5s;
    /* background: #d3bbbb;
    box-shadow:  5px 5px 10px #ab9797,
             -5px -5px 10px #fbdfdf; */
             /* border:none */
}

.ButtonStyle:hover
{
    transition: 0.5s;
    transform: scale(1.1);
    cursor:pointer;
}

.ButtonStyleClick
{
    border-radius: 5px;
    padding:2%;
    width:20%;
    background-color: green;
    border:0.2rem solid  green;
    color:white;
}
</style>