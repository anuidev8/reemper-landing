<template>
  <nav data-testid="navbar" :class="`navbar d-flex w-100 ${className} position-relative z-index`">
    <nuxt-link to="/" class="flex-grow-1 d-flex d-md-block justify-center">
        <Logo  :size="180" />
    </nuxt-link>
    <mq-layout mq="lg">
    <ul class="list-style-none pl-0 d-flex  align-center  ">
        <li class="mr-6" v-for="(item,key) in navBarLinks" :key="key">
          <nuxt-link v-if="item.isLocal && !item.isPage" :to="item.router" class="white--text text-decoration-none">Nosotros</nuxt-link>
            <a translate="no" v-if="item.isPage && !item.isLocal" class="white--text text-decoration-none" @click="goTo(item.router)">{{ item.name }}</a>
             <a translate="no" v-if="!item.isPage && !item.isLocal" :href="item.router" class="white--text text-decoration-none" target="_blank">{{ item.name }}</a>
             <a translate="no" v-if="item.isPage && item.isLocal" class="white--text text-decoration-none" @click="$router.push(item.router)">{{ item.name }}</a>
        </li>
    </ul>

    </mq-layout>
  </nav>
</template>
<script>
import Logo from '@/components/icons/brand/Logo'
import footerLinkMixin from '@/mixins/footerLinks'
import getOsType from '@/mixins/getOsType'
export default {
  mixins:[footerLinkMixin],
  props:{
    className:{
      type:String,

    }
  },
  components:{
    Logo
  },

  methods:{
     goTo(id){
        if(id){
        const section = document.querySelector(`#${id}`).getBoundingClientRect().top
        window.scrollTo(0,section)
        }
      }
  }
}
</script>
<style lang="scss" scoped>
  .navbar ul{
    visibility: hidden;
   @media (min-width:800px) {
        visibility: visible;
    }
  }

</style>
