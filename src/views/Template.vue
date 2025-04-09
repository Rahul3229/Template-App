<template>
<h1 class="Heading">TEMPLATES</h1>   
<div class="Template neo">

<div class="TemplateContain1">
  
    <div class="ButtonContain">
        <Button ButtonText="Claim Approval" width="10vw" height="5vh"    @click="SetClaimsTemplateView"  />
        <Button ButtonText="Claim Denial" width="10vw" height="5vh"   @click="SetClaimsDenialTemplateView" />
        <Button ButtonText="Info Request" width="10vw" height="5vh" v-if="AuthorizedUser"  @click="SetInfoTemplateView" />
    </div>

    <br />
    <br />

    <div class=" TemplatePages">
        <transition name="fade" mode="out-in">
      <div :key="TemplateView">
        <div v-if="TemplateView === 'Claims'">
          <ClaimsTemplate ref="Template" :DownloadCondition="Download"  :PreviewCondition="Preview"/>
        </div>
        <div v-if="TemplateView === 'Denial'">
          <ClaimsDenial ref="Template" :DownloadCondition="Download" />
        </div>
        <div v-if="TemplateView === 'Info' && AuthorizedUser === true ">
          <ClaimsInfo ref="Template" :DownloadCondition="Download" />
        </div>
      </div>
    </transition>
    </div>
    
    <br/>
    <br />

    <div class="ButtonContain">
        <Button ButtonText="Download" width="10vw" height="5vh" @click="SetDownload"/>
    </div>

</div>

<div class="TemplateContain2">

</div>


</div>


</template>

<script>

import Button from "../components/Button.vue"
import ClaimApprovalTemplate from "../Templates/Template.vue"
import Logo1 from "../assets/QR_Code.png"
import Logo2 from "../assets/Logo2.png"

import InputBox from "../components/TemplateComponents/TemplateInputBox.vue"
import CheckBox from "../components/TemplateComponents/TemplateCheckBox.vue"

import ClaimsTemplate from "../Templates/ClaimsTemplate.vue" 
import ClaimsDenial from "../Templates/ClaimsDenialTemplate.vue"
import ClaimsInfo from "../Templates/ClaimsInfo.vue"  
  



export default{



components:{Button,ClaimApprovalTemplate,InputBox,CheckBox,ClaimsTemplate,ClaimsDenial,ClaimsInfo},

data()
{
    return{
        Logo1,
        Logo2,
        TemplateView:'',
        TemplateOption:'Claims',
        Download:false,
        Preview:false,
        AuthorizedUser:this.$store.state.Authorized,
        Status:this.$store.state.FetchedObject.claimStatus,

    }
},


computed: {
    TemplateView() {
      

    if(this.AuthorizedUser===false)
    {
        if (this.Status === 'Approved') {
            return 'Claims';
        } else if (this.Status === 'Denied') {
            return 'Denial';
        } 
    }

    if(this.AuthorizedUser===true)
    {
        if(this.TemplateOption==='Claims')
        return 'Claims';
        if(this.TemplateOption==='Denial')
        return 'Denial';
        if(this.TemplateOption==='Info')
        return 'Info';
    }

    }
},

methods:{
    SetClaimsTemplateView()
    {
        this.TemplateOption='Claims'
        console.log(this.Status)

    },
    SetClaimsDenialTemplateView()
    {
        this.TemplateOption='Denial'
        
    },   
    SetInfoTemplateView()
    {
        this.TemplateOption='Info'
    },
    SetDownload()
    {
        this.Download=!this.Download
     
    },
    SetPreview()
    {
        this.Preview=!this.Preview
    }
}

}


</script>

<style scoped>




/* ////////////////////////////////////////// */

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out; 
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.Template
{
    height:auto;
    width:90vw;
    margin: auto;
    padding-top: 3%;
    display: flex;
    justify-content: space-evenly;
}

.TemplateContain1
{
    width:60%;
    border:0.1rem dotted red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.TemplateContain2
{
    width:30%;
    border:0.1rem dotted red;
}

.ButtonContain
{
    display: flex;
    align-items: center;
    gap:20px;
}

.TemplatePages
{
    border-radius:0px;
    box-shadow:  11px 11px 1px #877878
}

</style>