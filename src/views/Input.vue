<template>

<h1 class="Heading"><span>STEP-1 </span>: INPUT YOUR DETAILS</h1>   


<div class="neo FormBox">

<div class="Box neo">
    
    <div class="InputContain">
        <div>
            <p>Member ID</p>
            <InputBox PlaceHolder="Member ID" type="text" width="15vw" height="5vh" @EmittedValue="SetMemberID"/> 
        </div>       
    </div>
    <br />
    <Button ButtonText="Auto-Fill" height="6vh" @click="FetchDetails" />
    <div class="InputContain">
        <div>
            <p>Member Name</p>
            <InputBox :value="$store.state.FetchedObject?.memberName || ''"   type="text"  width="15vw"  height="5vh" />
        </div>

        <div>
            <p>Claim ID</p> 
            <InputBox :value="$store.state.FetchedObject?.claimId || ''" type="text" width="15vw" height="5vh"/> 
        </div>

        
    </div>
    <div class="InputContain">
        <div>
            <p>Claim Date</p>
            <InputBox :value="$store.state.FetchedObject?.claimDate || ''" type="text" width="10vw" height="5vh"/>
        </div>
        <div>
            <p>Claim Amount</p>
            <InputBox :value="$store.state.FetchedObject?.claimAmount || ''" type="text" width="7vw" height="5vh"/>
        </div>
        <div>
            <p>Claim Status</p>
            <InputBox :value="$store.state.FetchedObject?.claimStatus || ''" type="text" width="8vw" height="5vh"/>
        </div>
    </div>


    <div class="InputContain">
        <div>
            <p>Custom Message</p>
            <TextArea PlaceHolder="The reason for denial......" type="text" width="40vw" height="24vh" @EmittedTextAreaValue="SetCustomMessage"/>
        </div>
    </div>
    <br />
    <Button ButtonText="Next" height="6vh" @click="GoToTemplate"/>

</div>

<div class="SVGBox">
    <Vue3Lottie :animationData="WorkingJSON" :height="1000" :width="700" />
</div>

</div> 


</template>

<script>

import InputBox from "../components/InputBox.vue"
import Button from "../components/Button.vue"
import TextArea from "../components/TextArea.vue"
import { Vue3Lottie } from 'vue3-lottie'
import WorkingJSON from '../assets/json19.json'


export default{
components:{InputBox, Button, TextArea, Vue3Lottie},


data()
{
    return {
            Member_ID:'',
            FetchedData:null,
            CustomMessage:'',
            WorkingJSON
    }
},


methods:{

    SetMemberID(Value)
    {
        
        this.Member_ID=Value

    },

    SetCustomMessage(Value)
    {
        
        this.CustomMessage=Value
        console.log(this.CustomMessage)

    },

    FetchDetails()
    {
        const url=`http://localhost:5051/MemberId/${this.Member_ID}`

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
         this.$store.commit('SetFetchedObject', data);
        console.log(this.$store.state.FetchedObject);
     })
        .catch((error) => console.log(error));

    },
  

    GoToTemplate()
    {
        
        this.$store.commit('SetMessage',this.CustomMessage)

        setTimeout(()=>{
            this.$router.push({name:'Template'})
        },200)
       
    }
}
}
</script>

<style scoped>
p{
    text-align: left;
}
.FormBox
{
    height:110vh;
    width:90vw;
    margin: auto;
    display: flex;
    
    justify-content: space-evenly;
    /* align-items: center; */
    text-align: left;    
}

.Box
{
    width:50%;
    display: flex;
    flex-direction: column;
    /* border:0.1rem dotted red; */
    justify-content: space-evenly;
    padding: 3%;
}

.SVGBox
{
    width:45%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 0.1rem dotted red; */
}

.InputContain
{
    display: flex;
    justify-content:flex-start;
    gap:20px;
}

</style>