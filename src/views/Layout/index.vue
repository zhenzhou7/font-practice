<script setup>
import LayoutNav from '@/views/Layout/LayoutNav.vue'
import LayoutHeader from '@/views/Layout/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/LayoutFooter.vue'
</script>

<template>
 <div>
   <LayoutNav />
   <LayoutHeader />
   <router-view></router-view>
   <LayoutFooter />
 </div>

</template>