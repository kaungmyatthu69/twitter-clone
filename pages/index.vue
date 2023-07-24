<template>
<MainSection title="Home" :loading="loading">
  <Head>
    <Title>Home / Twitter</Title>
  </Head>
  <div class="border-b " :class="twitterBorderColor">
    <TweetForm  :user="user"/>
  </div>
  <TweetListFeed  :tweets="homeTweets" />
</MainSection>
</template>
<script setup>
import useAuth from "~/composables/useAuth";
import useTailwindConfig from "~/composables/useTailwindConfig";
import useTweets from "~/composables/useTweets";
const { twitterBorderColor }  = useTailwindConfig()
const loading = ref(false)
const {useAuthUser} = useAuth()
const user = useAuthUser()


const homeTweets = ref([])
const { getHomeTweets }  = useTweets()

onBeforeMount(async ()=>{
  loading.value = true
  try {
  const {tweets} =  await getHomeTweets()
  homeTweets.value = tweets
  }catch (error){
    console.log(error)
  }finally {
    loading.value = false

  }
})
</script>