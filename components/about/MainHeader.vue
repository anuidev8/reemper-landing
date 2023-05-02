<template>
  <header class="about-header  bg-accent-dark about-wrapper d-flex  align-center">
      <ul class="list-style-none d-flex px-0 w-100">
          <li class=" flex-grow-1 d-flex  align-center ">
             <nuxt-link to="/" class="d-none d-md-block">
                    <Logo :size="200" />
               </nuxt-link>
             <nuxt-link to="/" class="d-block d-md-none">
                    <Logo :size="150" />
               </nuxt-link>
          </li>
      </ul>
  </header>
</template>
<script>
import Logo from '@/components/icons/brand/Logo'
export default {
  components:{
    Logo
  }
}
</script>
<style lang="scss" scoped>
  .about-header{
    height: 90px;
  }


</style>
