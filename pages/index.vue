<template>
<MainSection title="Home" :loading="loading">
  <TweetForm  />
</MainSection>
</template>
<script setup>
import useAuth from "~/composables/useAuth";

const loading = ref(false)
const {useAuthUser} = useAuth()
const user = useAuthUser()
</script>