<template>
  <!-- <nav> -->
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  <!-- </nav> -->

  <router-view/>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {

}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}


body{
  margin: 0%;
  padding: 0%;
  background: #d3bbbb;
}

.neo
{
border-radius: 26px;
background: #d3bbbb;
box-shadow:  7px 7px 4px #af9b9b,
             -7px -7px 4px #f7dbdb;
}

.Heading
{
  font-family: "Boldonse", system-ui;
  font-weight: 800;
  font-size: 2.5rem;
  line-height: 60px;
  font-style: normal;
  color:white;
}

span{
  color:#d68910  ;
}

.InputBox
{
border-radius: 7px;
/* background: #d3bbbb;
box-shadow: inset 5px 5px 6px #9e8c8c,
            inset -5px -5px 6px #ffeaea; */

/* border:none; */
padding:1%;
text-align: left;           
border:0.1rem solid white; 
color:white;
}

.inputBox::placeholder {
  color: white;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Remove increment/decrement buttons for Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

input
{
    all: unset; 
}


textarea
    {
        all:unset;
    }

    textarea {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
    }
    
    textarea::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
    }








</style>
