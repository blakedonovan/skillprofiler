// store/test.ts

import { defineStore } from 'pinia'

export const userManagement = defineStore({
  id: 'userManager',

  state: () => ({
    userState: false
  }),

  getters: {
    currentUserState: state => `Value is ${state.userState}`
  },

  actions: {
    changeUserState(newUserState) {
      this.userState = newUserState
    }
  }
})
