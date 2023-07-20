<template>
  <div>
    <div class="flex items-center flex-shrink-0 p-4 ">
      <div class="flex w-12 items-start">
        <img
        :src="props.user?.profileImage"
        alt=""
        class="inline-block w-10 h-10 rounded-full"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  user:{
    type:Object,
    required:true
  }
})
</script>
