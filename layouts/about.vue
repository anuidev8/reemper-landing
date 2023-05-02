<template>
  <v-app :style="{height:`${showCValidateCookies ? 'auto' : '100vh'}`,overflow:`${showCValidateCookies ? 'visible' : 'hidden'}`}" class="about-container">
    <v-main>

      <nuxt />
      <CookieBanner v-if="showCookies" @onAccept="onShowCookies" />
      <LegendModal v-if="showLegend.state" @onContinue="onContinue" />
    </v-main>
  </v-app>
</template>

<script>
  import CookiesSettings from '@/mixins/CookiesSettings'
  import {
    getCookie
  } from '@/utils/cookieSettings'
  import CookieBanner from '@/components/cookies/CookieBanner'
  import LegendModal from '@/components/leyend/LegendModal'
  export default {
    mixins: [CookiesSettings],
    components: {
      CookieBanner,
      LegendModal
    },
    data() {
      return {
        showCValidateCookies:false,
        clipped: false,
        drawer: false,
        fixed: false,
        items: [{
            icon: 'mdi-apps',
            title: 'Welcome',
            to: '/'
          },
          {
            icon: 'mdi-chart-bubble',
            title: 'Inspire',
            to: '/inspire'
          }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js',
        showCookies: false,
        showLegend: {
          state: false,
          type: 'reject'
        }
      }
    },
    methods: {
      onShowCookies(type) {
        this.showCValidateCookies = getCookie("isTerm")
        const customize = localStorage.getItem('customize') ?  JSON.parse(localStorage.getItem('customize')) : []
        this.mountedScript(getCookie('isTerm'),type == 'all' ? 'all' : type === 'custom' ? 'custom' :'reject',customize )
        setTimeout(() => {
          if(type === 'all' || type === 'custom'){ this.showLegend.state = true}
          this.showCookies = !this.showCookies
        }, 100);

      },
      onContinue() {
        this.showLegend = !this.showLegend
      }
    },
    mounted() {
      this.showCookies = getCookie('isTerm') ? false : true
      this.showCValidateCookies = getCookie("isTerm")
      const type = getCookie('typeCookie') ? getCookie('typeCookie') : 'null'
      const customize = localStorage.getItem('customize') ? JSON.parse(localStorage.getItem('customize')) : []
      this.mountedScript(getCookie('isTerm'), type, customize)
    }
  }

</script>
<style lang="scss">
  @font-face {
    font-family: 'poppins';
    font-style: normal;
    font-display: swap;
    src: url('~assets/fonts/poppins/Poppins-Regular.ttf');
  }

  @font-face {
    font-family: 'poppins-medium';
    font-style: normal;
    font-display: swap;
    src: url('~assets/fonts/poppins/Poppins-Medium.ttf');
  }

  @font-face {
    font-family: 'poppins-semi-bold';
    font-style: normal;
    font-display: swap;
    src: url('~assets/fonts/poppins/Poppins-SemiBold.ttf');
  }

  @font-face {
    font-family: 'poppins-bold';
    font-style: normal;
    font-display: swap;
    font-weight: bold;
    src: url('~assets/fonts/poppins/Poppins-Bold.ttf');
  }

  @font-face {
    font-family: 'poppins-extra-light';
    font-style: normal;
    font-display: swap;
    src: url('~assets/fonts/poppins/Poppins-ExtraLight.ttf');
  }

  @font-face {
    font-family: 'poppins-light';
    font-style: normal;
    font-display: swap;
    font-weight: lighter;
    src: url('~assets/fonts/poppins/Poppins-Light.ttf');
  }



  .about-wrapper {
    padding: 0 8em;
     @media (max-width:440px) {
       padding: 0 1rem;

     }
  }

  .btn-about {
    border-radius: 15px;
  }

  .overflow-hidden {
    overflow: hidden;
  }

  .mision-paragrahp {
    font-size: 1.2rem;
  }

  .about-container {
    background-color: #f9fbfd !important;
    font-family: 'poppins', sans-serif;

    .fw-bold {
      font-family: 'poppins-bold', sans-serif;
    }

    .fw-light {
      font-family: 'poppins-light', sans-serif;
    }

    .fw-medium {
      font-family: 'poppins-medium', sans-serif;
    }



  }

  .gray-color-text {
    color: #7D8E9D;
  }

  .bg-accent-dark {
    background-color: #1A1E22F8;
  }

  .bg-primary-dark {
    background-color: #209EE9;
  }

  .text-primary-dark {
    color: #209EE9;
  }

  .text-accent-dark {
    color: #1A1E22F8;
  }

</style>
