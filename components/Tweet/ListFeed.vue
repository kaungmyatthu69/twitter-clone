<template>
  <div>
    <div v-if="isEmptyArray">
      <p class="text-center text-gray-500">No tweets </p>
    </div>

    <div class="pb-4 border-b  hover:bg-gray-100 dark:hover:bg-dim-300  " :class="[twitterBorderColor,defaultTransition ]" v-for="tweet  in props.tweets"  :key="tweet.id" >
      <TweetItem :tweet="tweet" compact/>
    </div>
  </div>
</template>
<script setup>
import useTailwindConfig from "~/composables/useTailwindConfig";

const {twitterBorderColor ,defaultTransition } = useTailwindConfig()
const props = defineProps({
  tweets:{
    type:Array,
    required:true
  }
})

const isEmptyArray = computed(()=>props.tweets.length === 0 )

</script>