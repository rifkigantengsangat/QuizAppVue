<template>
  <button @click="loginCoba">Login With Google</button>
  <button @click="logoutCoba">Logout</button>

</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore();
const loginCoba = async()=>{
  await store.dispatch('LoginWithGoogle')
}
const logoutCoba = async()=>{
  const logout = await store.dispatch('Logout')
  console.log(logout)
}
</script>
