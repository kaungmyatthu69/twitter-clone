<template>
  <div class="flex items-center justify-around w-full ">
    <TweetItemActionsIcon color="blue" :size="size">
      <template v-slot:icon="{classes}">
        <ChatBubbleOvalLeftIcon :class="classes"/>
      </template>
      <template #default>
        <span v-if="showStatus">
        {{props.tweet.repliesCount}}

        </span>
      </template>
    </TweetItemActionsIcon>

    <TweetItemActionsIcon color="green"  :size="size">
      <template v-slot:icon="{classes}">
        <ArrowPathRoundedSquareIcon :class="classes"/>
      </template>
      <template #default>
        <span v-if="showStatus">
        {{generateRandomNumber()}}

        </span>
      </template>
    </TweetItemActionsIcon>


    <TweetItemActionsIcon color="red"  :size="size">
      <template v-slot:icon="{classes}">
        <HeartIcon :class="classes"/>
      </template>
      <template #default>
        <span v-if="showStatus">
        {{generateRandomNumber()}}

        </span>
      </template>
    </TweetItemActionsIcon>


    <TweetItemActionsIcon color="blue"  :size="size">
      <template v-slot:icon="{classes}">
        <ArrowUpTrayIcon :class="classes"/>
      </template>
      <template #default>
        <span v-if="showStatus">
        {{generateRandomNumber()}}

        </span>
      </template>
    </TweetItemActionsIcon>

  </div>
</template>

<script setup>
import {
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  ArrowUpTrayIcon
} from "@heroicons/vue/24/outline";

const props = defineProps({
  tweet:{
    type:Object,
    required:true
  },
  compact:{
    type:Boolean,
    default:false
  }
})

function generateRandomNumber(){
  return Math.floor(Math.random()*100)
}
const showStatus = computed(()=>props.compact)
const size = computed(()=>props.compact?5:8)
</script>