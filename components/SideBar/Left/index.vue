<template>
<div  class="h-screen flex flex-col ">
  <div class="p-2 my-2 hover:bg-blue-50 rounded-full dark:hover:bg-white/20 w-min  "  :class="defaultTransition" >
    <nuxt-link to="/">
      <div class="w-8 h-8" >
        <LogoTwitter/>
      </div>
    </nuxt-link>
  </div>
  <div class="mt-2 space-y-3">
    <SideBarLeftTab >
      <template #icon>
        <HomeIcon/>
      </template>
      <template #name >
        Home
      </template>
    </SideBarLeftTab>
    <SideBarLeftTab >
      <template #icon>
       <MagnifyingGlassIcon/>
      </template>
      <template #name >
        Explore
      </template>
    </SideBarLeftTab>
    <SideBarLeftTab >
      <template #icon>
       <BellIcon/>
      </template>
      <template #name >
        Notification
      </template>
    </SideBarLeftTab>
    <SideBarLeftTab >
      <template #icon>
      <EnvelopeIcon/>
      </template>
      <template #name >
        Messages
      </template>
    </SideBarLeftTab>

    <SideBarLeftTab >
      <template #icon>
       <DocumentTextIcon/>
      </template>
      <template #name >
       Lists
      </template>
    </SideBarLeftTab>
    <SideBarLeftTab >
      <template #icon>
       <UsersIcon/>
      </template>
      <template #name >
        Communities
      </template>
    </SideBarLeftTab>

    <SideBarLeftTab >
      <template #icon>
       <UserIcon/>
      </template>
      <template #name >
      Profile
      </template>
    </SideBarLeftTab>

    <SideBarLeftTab >
      <template #icon>
        <EllipsisHorizontalCircleIcon/>
      </template>
      <template #name >
       More
      </template>
    </SideBarLeftTab>
    <div class="hidden xl:block">
      <UIButton liquid size="lg">
        <span class="font-bold">
        Tweet

        </span>
      </UIButton>
    </div>

    <div class="block xl:hidden">
      <UIButton >
      <div class="w-6 h-6 font-bold  ">
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="white" class="r-jwli3a r-4qtqp9 r-yyyyoo r-1472mwg r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"><g><path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path></g></svg>
      </div>
      </UIButton>
    </div>

  </div>

</div>
</template>
<script setup >

import useTailwindConfig from "~/composables/useTailwindConfig";
import {HomeIcon  }  from "@heroicons/vue/24/solid"
import {EllipsisHorizontalCircleIcon ,BellIcon,MagnifyingGlassIcon,EnvelopeIcon,UserIcon,UsersIcon ,DocumentTextIcon}  from  "@heroicons/vue/24/outline"

const { defaultTransition } = useTailwindConfig()
</script>