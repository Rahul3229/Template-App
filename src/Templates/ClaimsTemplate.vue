<template>
<div class="Template1" ref="Template" >

<div class="Section1">
<div class="Logos">
<div class="Logo1">
<img :src="Logo1" />
</div>
<div class="Logo2">
    <img :src="Logo2" />
</div>
</div>

<div class="Section1Text">
    <h1 class="TemplateHeading">HEALTH INSURANCE CLAIM FORM</h1>
    <p class="TemplateText">APPROVED BY NATIONAL UNIFORM CLAIM COMMITTEE (NUCC) 02/12</p>
</div>
</div>

<div class="Section2">
<div class="Section2Form">
<!-- <InputBox Heading="PATIENT'S NAME" Color="green"/>
<CheckBox Heading="PATIENT'S NAME" Color="green"/> -->

<div class="Section2Row1">
<div class="Section2Row1Col1">
    <CheckBox Heading="MEDICARE" Color="green" :Condition="StatusCondition ? $store.state.FetchedObject.medicare : false " />
    <CheckBox Heading="MEDICAID" Color="green" :Condition="StatusCondition ? $store.state.FetchedObject.medicaid : false " />
    <CheckBox Heading="TRICARE" Color="green" :Condition="StatusCondition ? $store.state.FetchedObject.tricare : false " />
    <CheckBox Heading="OTHER" Color="green" :Condition="StatusCondition ? $store.state.FetchedObject.other : false " />
</div>
</div>

<!-- <h1 class="Heading">{{ this.$store.state.FetchedObject.memberName }}</h1> -->

<div class="Section2Row2">
   
        <InputBox Heading="INSURED'S NUMBER" Color="green" Width="80%" :Message="StatusCondition ? $store.state.FetchedObject.memberId : ''"/>
        <InputBox Heading="INSURED'S NAME" Color="green" Width="80%" :Message="StatusCondition ? $store.state.FetchedObject.memberName : ''" />
        <!-- <input :value="this.$store.state.FetchedObject.memberName" type="text" class="InputBox1"> -->
        <InputBox Heading="INSURED'S ADDRESS" Color="green" Width="80%" :Message="StatusCondition ? $store.state.FetchedObject.address : ''"/>
    
</div>


<div class="Section2Row3">
   
   <InputBox Heading="CITY" Color="green" Width="60%" DivWidth="20%" :Message="StatusCondition ? $store.state.FetchedObject.city : ''"/>
   <InputBox Heading="ZIP CODE" Color="green" Width="60%" DivWidth="20%" :Message="StatusCondition ? $store.state.FetchedObject.zip : ''"/>
   <InputBox Heading=" STATE" Color="green" Width="60%" DivWidth="20%" :Message="StatusCondition ? $store.state.FetchedObject.state : ''"/>
   <InputBox Heading="TELEPHONE" Color="green" Width="60%" DivWidth="40%" :Message="StatusCondition ? $store.state.FetchedObject.phone : ''"/>

</div>


<div class="Section2Row4">
   
   <InputBox Heading="D.O.B" Color="green" Width="60%" DivWidth="40%" :Message="StatusCondition ? $store.state.FetchedObject.dob : ''" />
   <CheckBox Heading="MALE" Color="green" :Condition="StatusCondition ? $store.state.FetchedObject.male : false " />
   <CheckBox Heading="FEMALE" Color="green" :Condition="StatusCondition ? $store.state.FetchedObject.female : false " />
   <InputBox Heading="HOSPITAL NAME" Color="green" Width="80%" DivWidth="40%" :Message="StatusCondition ? $store.state.FetchedObject.hname : ''" />

</div>


<div class="Section2Row5">

    <InputBox Heading="INSURED'S POLICY GROUP" Color="green" Width="60%" DivWidth="40%" :Message="StatusCondition ? $store.state.FetchedObject.insuredGroup : ''" />
    <InputBox Heading="PROGRAM NAME" Color="green" Width="60%" DivWidth="30%" :Message="StatusCondition ? $store.state.FetchedObject.programName : ''" />
    <InputBox Heading="CLAIM AMOUNT" Color="green" Width="60%" DivWidth="30%" :Message="StatusCondition ? $store.state.FetchedObject.claimAmount : ''" />

</div>

<div class="Section2Row6">
    <br />
  <h1 class="TemplateHeading">MEDICARE AND CHAMPUS PAYMENTS:</h1>  <br/>
<p class="TemplateText ">
A patient’s signature requests that payment be made and authorizes release of any information necessary to process
the claim and certifies that the information provided in Blocks 1 through 12 is true, accurate and complete. In the case of a Medicare claim, the patient’s signature
authorizes any entity to release to Medicare medical and nonmedical information, including employment status, and whether the person has employer group health
insurance, liability, no-fault, worker’s compensation or other insurance which is responsible to pay for the services for which the Medicare claim is made. See 42
CFR 411.24(a). If item 9 is completed, the patient’s signature authorizes release of the information to the health plan or agency shown. In Medicare assigned or
CHAMPUS participation cases, the physician agrees to accept the charge determination of the Medicare carrier or CHAMPUS fiscal intermediary as the full charge,
and the patient is responsible only for the deductible, coinsurance and noncovered services. Coinsurance and the deductible are based upon the charge
determination of the Medicare carrier or CHAMPUS fiscal intermediary if this is less than the charge submitted. CHAMPUS is not a health insurance program but
makes payment for health benefits provided through certain affiliations with the Uniformed Services. Information on the patient’s sponsor should be provided in those
items captioned in “Insured”; i.e., items 1a, 4, 6, 7, 9, and 11. <br/>Coinsurance and the deductible are based upon the charge
determination of the Medicare carrier or CHAMPUS fiscal intermediary if this is less than the charge submitted. CHAMPUS is not a health insurance program but
makes payment for health benefits provided through certain affiliations with the Uniformed Services. Information on the patient’s sponsor should be provided in those
items captioned in “Insured”; i.e., items 1a, 4, 6, 7, 9, and 11.
<br />
<br />

</p>
<br />

<br/>

</div>

</div>
</div>

</div>

</template>

<script>
import Logo1 from "../assets/QR_Code.png"
import Logo2 from "../assets/Logo2.png"

import InputBox from "../components/TemplateComponents/TemplateInputBox.vue"
import CheckBox from "../components/TemplateComponents/TemplateCheckBox.vue"


import html2pdf from 'html2pdf.js';

export default{

props:['DownloadCondition','PreviewCondition'],

components:{InputBox,CheckBox},

data()
{
    return{
        Logo1,
        Logo2,
        pdfUrl: null,
        Status:this.$store.state.FetchedObject.claimStatus,
        NewObj:this.$store.state.FetchedObject.memberName,
        StatusCondition:false
        /// ||| \\\ ||| /// ||| \\\ ||| /// ||| \\\ ||| /// ||| \\\ ||| \\\ ||| /// ||| \\\ ||| /// ||| \\\ ||| /// ||| /// ||| \\\ ||| ///
    }
},


computed:{

StatusCondition()
{
 if(this.Status==='Approved')
 return this.StatusCondition=true
 else if(this.Status==='Denied')
 return this.StatusCondition=false
 console.log(this.StatusCondition)
}

},

watch: {
    DownloadCondition(NewValue,OldValue) {
      if(NewValue!=OldValue)
      this.DownloadTemplate()
    },

    PreviewCondition(NewValue,OldValue)
    {
        if(NewValue!=OldValue)
        this.PreviewPDF()
        
    }

  },

methods:{
    DownloadTemplate() {
           
            this.$nextTick(() => {
                const element = this.$refs.Template;
                const options = {
                     
                    margin: 0,              
                    html2canvas: { scale: 4 },  
                    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }  
                };

                // const holdPDF=html2pdf().from(element).set(options);
              
                html2pdf().from(element).set(options).save('generated-file.pdf');
            });
        },



    


    }

}
</script>

<style scoped>



.InputBox1
{
    border:0.1rem solid red;
    color:black;
}

.Template1
{
    /* height:100vh; */
    width:41.3vw;
    margin: auto;
    border:0.1rem solid black;
    background: white;
    overflow: hidden;
    transition:1.5s;
    
}

.Section1
{
    /* height:20%; */
    width:100%;
    background:rgba(0,255,0,0.5);
    border-bottom: 0.2rem solid green;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:start;
    padding-left: 3.5%;
    padding-top:6%;
}


.Logos
{
    height:60%;
    width:40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.Logo2
{
    width:15vw;
    object-fit: cover;
}

.Logo1
{
    width:3vw;
    object-fit: cover;
}

img
{
    height:90%;
    width:100%;
    object-fit:cover;
}

.TemplateHeading
{
    color:green;
    font-size: 0.9rem;
    margin: 0%;
}

.TemplateText
{
    color:green;
    font-size: 0.7rem;
    margin: 0%;
}



.Section1Text
{
    text-align: left;
    padding: 0%;
    margin-top: 2%;
}


.Section2
{
    height:80%;
    width:100%;
    margin:auto;
    display:flex;
    justify-content: center;
    align-items: start;    
}


.Section2Form
{
    height:93%;
    width:93%;
    border-left:0.1rem solid green;
    border-right:0.1rem solid green;
    border-bottom: 0.1rem solid green;
}


.Section2Row1
{
    width:100%;
    height:8%;
    display:flex;
}

.Section2Row2
{
    width:100%;
    height:8%;
    display:flex;

}

.Section2Row3
{
    width:100%;
    height:8%;
    display:flex;
}

.Section2Row4
{
    width:100%;
    height:8%;
    display:flex;
}

.Section2Row5
{
    width:100%;
    height:8%;
    display:flex;
}

.Section2Row6
{
    width:100%;
    height:8%;
    display:flex;
    flex-direction:column;
}

.Section2Row6>p
{
    text-align:left;
}

.Section2Row1Col1
{
    width:100%;
    border-bottom:0.1rem solid green;
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.Section2Row1Col2
{
    width:0%;
    border:0.1rem solid green;
    display:flex;
    justify-content: center;
    align-items: center;
}

.Section2Row6
{
    /* page-break-before: always; */
}


</style>