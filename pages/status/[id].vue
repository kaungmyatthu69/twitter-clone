<template>
  <div>
    <MainSection title="Tweet" :loading="loading">
      <Head>
        <Title></Title>
      </Head>
      <TweetDetails :tweet="tweet" :user="user" />

    </MainSection>
  </div>
</template>

<script setup>
import {useRoute} from "#app";
import useTweets from "~/composables/useTweets";
import useAuth from "~/composables/useAuth";
const {getTweetById} = useTweets()
const loading = ref(false)
const tweet =ref(null)
const {useAuthUser} = useAuth()
const user = useAuthUser()
function  getTweetIdFromRoute(){
  return useRoute().params.id
}

async function  getTweet(){
  try {
    loading.value = true
    const response= await  getTweetById(getTweetIdFromRoute())
  tweet.value = response.tweet
  }catch (error){
    console.log(error)
  }finally {
    loading.value =false
  }
}
onBeforeMount(()=>{
  getTweet()
})


</script>