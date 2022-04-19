// store/test.ts

import { defineStore } from 'pinia'

export const useTest = defineStore({
  id: 'test',

  state: () => ({
    userState:false,
    userPW:""
  }),

  getters: {
    valueWithName: state => `Value is ${state.userState}`,
    userPassword : state => state.userPW
  },

  actions: {
    setNewValue(newValue) {
      this.userState = newValue
    },

    setUserPW(userpw) {
      this.userPW = userpw
    }
  }
})
