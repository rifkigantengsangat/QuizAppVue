import { createStore } from 'vuex'
import {auth} from '../Firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth";
const providerGoogle = new  GoogleAuthProvider()
export default createStore({
  state: {
    users : {}
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async LoginWithGoogle(){
    const login = await signInWithPopup(auth,providerGoogle);
     console.log(login)
    },
    async Logout (){
      try {
        const response = await signOut(auth)
        console.log(response)
        
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
