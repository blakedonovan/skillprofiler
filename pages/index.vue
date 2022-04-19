<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">

<v-form>
 <v-text-field
 v-model="loginName"
      label="loginName"
      :rules="rules"
      hide-details="auto"
      
    ></v-text-field>
    <v-text-field 
    v-model="password"
    label="password" ></v-text-field>
<v-btn @click="test.setUserPW(password)">Login</v-btn>


<div v-if="test.userState===false">Sie sind nicht eingeloggt</div>
</v-form>
      </v-card>
   {{test.userPW}}
    </v-col>
  </v-row>
</template>

<script>

import {useTest} from '~/store/index'
// import {userManager} from '~/store/userManagement'

export default {
  name: 'IndexPage',

  setup() {
 const test = useTest();
// const userManager = userManager();
return{
test,


// userManager
  }
  },

  data(){
  return{
password:null

 }
  },

  methods:{
// unnecessary if state action called directly
    setUserPw(){
      const pw = this.password

      test.setUserPW(pw)

    }
  }
}
</script>
