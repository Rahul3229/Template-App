<template>
<div class="LandingContain">
<div class="Contain1 ">

    <img :src="Symbol" >
   
    <video :src="videosAsset" autoplay loop muted class="VideoAsset" ></video>
</div>
<div class="Contain2 ">
<h1 class="Heading">ENTER YOUR<span><br/> CREDENTIALS</span></h1>
<div class="InputFields">
    <div>
        <p>User Name</p>
        <InputBox  type="text" width="16vw" height="5vh" @EmittedValue="SetUser"/>
    </div>

    <div>
        <p>Password</p>
        <InputBox  type="password" width="16vw" height="5vh" @EmittedValue="SetPassword"/>
    </div>

    <Button ButtonText="Log In" height="6vh" width="50%" @click=" Authenticate"/>
</div>
</div>
</div>    
</template>

<script>
import Button from "../components/Button.vue"
import InputBox from "../components/InputBox.vue"
import Symbol from "../assets/Symbol.svg"
import VideoAsset from "../assets/AssetVideo2.mp4" 

export default{
components:{Button,InputBox},

data()
{
    return{
        Symbol:Symbol,
        videosAsset:VideoAsset,
        
        User:'',
        Password:'',

        UserRep:'Jessie',
        PasswordRep:'1234',

        UserAdmin:'Pinkman',
        PasswordAdmin:'12345'
    }
},

methods:{


    Authenticate()
    {
        
        // const url = 'http://localhost:5051/auth/login'
        // fetch(url, {
        // method: 'POST',
        // headers: {
        // 'Content-Type': 'application/json' 
        // },
        // body: JSON.stringify({
        // username: this.User,
        // password: this.Password
        // })
        // })
        // .then(response=>{console.log(response)}) 
        // .catch(error => console.error('Error:', error))


        if(this.User===this.UserRep && this.Password===this.PasswordRep)
        {
            this.$store.commit('SetAuthorization',false)
            this.GoToInput()
        }

        else if(this.User===this.UserAdmin && this.Password===this.PasswordAdmin)
        {
            this.$store.commit('SetAuthorization',true)
            this.GoToInput()
        }
        else
        {
            alert('Wrong credentials')
        }
        

    },

    SetUser(Value)
    {
        this.User=Value
        console.log(this.User)
    },

    SetPassword(Value)
    {
        this.Password=Value
        console.log(this.Password)
    },

    GoToInput()
    {

        setTimeout(()=>{
            this.$router.push({name:'Input'})
        },50)
        

    }   
}

}
</script>

<style scoped>
.LandingContain
{
    height:100vh;
    width:100vw;
    /* margin-top:5vh !important; */
    margin: auto;
    display: flex;
    justify-content: space-between;
}
.Contain1
{
    height:100%;
    width:60%;
    overflow:hidden;
}

.Contain1>img
{
    height:100%;
    width:60%;
    object-fit:cover;
    opacity: 0.3;
    /* filter: blur(8px); */
    position:absolute;
    z-index: 3;
}

.VideoAsset
{
    height:100%;
    width:100%;
    object-fit:cover;
    filter: grayscale(100%);
    position: relative;
}

.Contain2
{
    height:100%;
    width:40%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    align-items:center;
    justify-content: center;
    background: rgb(0,0,0);
}

p{
    color:white;
}

.InputFields
{
    display:flex;
    flex-direction:column;
    gap:20px;
}
div>p
{
    text-align:left;
}

</style>