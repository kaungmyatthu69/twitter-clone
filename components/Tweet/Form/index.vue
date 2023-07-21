<template>
  <div v-if="loading" class="flex items-center justify-center p-6">
    <UISpinner/>
  </div>
<div v-else>
  <TweetFormInput  :user="props.user" @onSubmit="handleFormSubmit " />
</div>
</template>
<script setup>
import useTweets from "~/composables/useTweets";
const loading = ref(false)
const props = defineProps({
  user:{
    type:Object,
    required:true
  }
})
const { postTweet } = useTweets()
const handleFormSubmit =async (data)=>{
  loading.value =true
  try {
    const response = await  postTweet({
      text:data.text,
      mediaFiles : data.mediaFiles
    })
    alert(JSON.stringify(response))
  }catch (error){
    console.log(error)
  }finally {
    loading.value = false
  }
}

</script>