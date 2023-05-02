<template>
  <section class="cookie-banner-container">
    <article :class="`translate-y cookie-banner ${mode == 'config' && 'cookie-banner--active'}`">
        <div class="cookie-banner-overlays"></div>
      <div class="cookie-banner-header apper" v-if="mode == 'all'">
        <Logo :size="140" />
        <h2 class="cookie-banner-title">Cookies at Reemp </h2>
      </div>
      <div class="cookie-banner-body appear" v-if="mode == 'all'">
        <p class="cookie-banner-paragraph">Usamos cookies y otras tecnologías propias y de terceros para hacer funcionar
          de manera correcta y segura nuestra página web y personalizar su contenido. También las usamos para analizar
          la navegación de los usuarios y poder ajustar la publicidad a tus gustos y preferencias.
          <a class="link"
            href="https://prodreemppublic.s3.amazonaws.com/politicas/Politicas+MPDP+versi%C3%B3n+(001)+14-0322-1.pdf"
            target="_blank"> Política de Cookies. </a></p>
      </div>
      <CookieBannerSetting v-if="mode == 'config'" :settings="settings" @getCustomSetting="getCustomSetting">
        <PrevBtn @onPrev="prev()" />
      </CookieBannerSetting>
      <ul class="cookie-banner-actions ">
        <li v-if="mode == 'all'">
          <button @click="onAccept('all')"
            class="cookie-banner-buttons cookie-banner-buttons--accept appear">{{  loadingButton.type === 'all' &&  loadingButton.state ? 'Aceptando...' : 'Aceptar' }}
          </button>
        </li>
        <li v-if="mode != 'all'">
          <button @click="onAccept('custom')" class="cookie-banner-buttons cookie-banner-buttons--accept appear">
            {{  loadingButton.type === 'custom' &&  loadingButton.state ? 'Aceptando...' : 'Aceptar' }}
          </button>
        </li>
        <li v-if="mode == 'all'">
          <button @click="startToConfig()" class="cookie-banner-buttons cookie-banner-buttons--config appear">Configurar
          </button>
        </li>

        <li>
          <button @click="onAccept('reject')"
            class="appear cookie-banner-buttons cookie-banner-buttons--reject">
            {{ loadingButton.type === 'reject' &&  loadingButton.state ? 'Rechazando...' : 'Rechazar' }}
          </button>
        </li>
      </ul>

    </article>
  </section>
</template>
<script>
  //data
  import cookiesMutation from '@/apollo/mutations/cookies.graphql'
  import {
    Settings,
    setCookie,
    getRandomString
  } from '@/utils/cookieSettings'
  import CookiesSettings from '@/mixins/CookiesSettings'
  import Logo from '@/components/icons/brand/Logo'
  import CookieBannerSetting from './CookieBannerSetting'
  import PrevBtn from './PrevBtn'
  export default {
    mixins: [CookiesSettings],
    components: {
      Logo,
      CookieBannerSetting,
      PrevBtn
    },
    data() {
      return {
        mode: 'all',
        cookie: false,
        loadingButton: {
          state: false,
          text: 'Aceptar todas',
          type:'all'
        },
        customSetting: []
      }
    },
    methods: {
      startToConfig() {
        this.mode = 'config'
      },
      prev() {
        this.mode = 'all'
      },
      getCustomSetting(customSetting) {

        if (customSetting.state && !this.customSetting.includes(customSetting.key)) {
          this.customSetting.push(customSetting.key)
        } else {
          this.customSetting.forEach((element, key) => {
            customSetting.key === element && this.customSetting.splice(key, 1)

          });
        }


      },
    
     async onAccept(type) {

      try {
        
     
          this.loadingButton.type = type
          this.loadingButton.state = true
          let data = {}
          
            const getData = await fetch('https://ipapi.co/json/')
            const { ip,city } = await getData.json()
            if(ip && city){
              switch (type) {
            case 'reject':
              this.cookie = false
              setCookie('typeCookie', 'reject', {secure: true},60);
              setCookie('isTerm', 'false', {secure: true,},60);
              data = new Settings(
                this.$store.state.userData ?
                `${this.$store.state.userData.firstName} ${this.$store.state.userData.lastName}` :
                `cookie_${getRandomString(5)}`,
                ip ? ip : 'no_found',
                city ? city : 'no_found',
                window.location.href,
                this.cookie ? true : false,
                ''

              )
              break;
              case 'all':

              this.cookie = true
              setCookie('typeCookie', 'all', {secure: true},60);
              setCookie('isTerm', true, {secure: true},60);
              data = new Settings(
                this.$store.state.userData ?
                `${this.$store.state.userData.firstName} ${this.$store.state.userData.lastName}` :
                `cookie_${getRandomString(5)}`,
                ip ? ip : 'no_found',
                city ? city : 'no_found',
                window.location.href,
                this.cookie ? true : false,
                `1,2,3`

              )
              break;
            case 'custom':
              this.cookie = true
              localStorage.setItem('customize', JSON.stringify(this.customSetting));
              setCookie('typeCookie', 'custom', {secure: true,},60);
              setCookie('isTerm', true, {secure: true,},60)
              data = new Settings(
                this.$store.state.userData ?
                `${this.$store.state.userData.firstName} ${this.$store.state.userData.lastName}` :
                `cookie_${getRandomString(5)}`,
                ip ? ip : 'no_found',
                city ? city : 'no_found',
                window.location.href,
                this.cookie ? true : false,
                `${this.customSetting}`

              )
              break;
            default:
              break;
          }
          this.$apollo.mutate({
              mutation: cookiesMutation,
              variables: data
            })
            .then((res) => {
              this.loadingButton.state = false
              this.loadingButton.type = 'all'
              this.$emit('onAccept', type)
            })
            .catch((err)=>{
              if(err){
                this.loadingButton.state = false
                this.loadingButton.type = 'all'
                this.$emit('onAccept','null')
              }
            })
            }
           

            
          } catch (error) {
            console.log('something error happened');
                this.loadingButton.state = false
                this.loadingButton.type = 'all'
                this.$emit('onAccept','all')
        
          }
       
      
      }
    },

  }

</script>
<style lang="scss" scoped>
  h2,
  h2,
  h3 {
    margin: 0;
  }

  .cookie-banner-container {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: flex-end;
    background-color: rgba(255, 255, 255, 0.3);
    width: 100%;
    height: 100vh;
    z-index: 1000;
  }
  .cookie-banner-container::before {
    content: "";
    display: none;
    position: absolute;
    bottom: 0vh;
    left: 0;
    width: 100%;
    height: 50px;
    z-index: 100;
    background-image: linear-gradient(to bottom,#291c2200, #1b1e2c);
     @media (max-width:450px) {
       display: block;
     }
  }

  .cookie-banner {
    --primary-color: #32A5EA;
    --secondary-color: #1c1e29;
    --padding: 0 4vw;
    position: relative;
    //background-color: var(--secondary-color);
    background-image: linear-gradient(#1c1e29, #272b3d);
    width: 100%;
    height: 280px;
    border-top-left-radius: 1.8rem;
    border-top-right-radius: 1.8rem;
    font-family: Arial, Helvetica, sans-serif;
    transition: all .4s ease;
    overflow: hidden;

    @media (max-width:450px) {
      height: 370px;
      overflow: auto;
      overflow-x: hidden;
    }

      &-overlays{
        display: none;
        position: -webkit-sticky;
        position: sticky;
        top: 0px;
        left:0;
        height: 60px;
        width: 100%;
        background-image: linear-gradient(to top,#291c2200, #1b1e2c);
        z-index:10;
          @media (max-width:450px) {
            display: block;
          }
      }

    &--active {
      height: 680px;
    }

    &-header {
      padding: 2rem 3vw 1vh 3vw;
      display: flex;
      @media (max-width:450px) {
        transform: translateY(-20px);
        padding: 0 3vw 1vh 3vw;
      }
    }

    &-body {
      padding: var(--padding);
        @media (max-width:450px) {
        transform: translateY(-25px);
        }

    }

    &-paragraph {
      color: white;
      padding-right: 10vw;
      margin: 0;
      margin-top: 1rem;
       @media (max-width:450px) {
         text-align: center;
         padding: 0 2vw;
       }
    }

    &-paragraph a {
      color: var(--primary-color);
    }

    &-title {
      margin-left: 1rem;
      margin-top: 1rem;
      font-size: 1.6rem;
      color: white;
    }

    &-actions {
      display: flex;
      flex-wrap: wrap;

      margin: 0;
      margin-top: 1.8rem;
      margin-bottom: 2rem;
      padding: var(--padding);
      list-style: none;

      @media (max-width:450px) {
        justify-content: center;
        padding-bottom: 1.5rem;
      }
    }

    &-buttons {
      border: none;
      padding: 0 .9rem;
      width: 12rem;
      height: 50px;
      border-radius: 0.6em;
      margin-right: 1rem;
      font-size: 1rem;
      font-weight: 500;
      color: white;
      transition: background-color .3s ease;

    }

    &-buttons--accept {
      background-color: #57b4ee;
      color: white;

      &:hover {
        background-color: #378cc2;
      }
    }

    &-buttons--config {
      background-color: rgb(255, 255, 255, .15);

      @media (max-width:450px) {
        margin-top: 1rem;
      }

      &:hover {
        background-color: rgb(255, 255, 255, .05);
      }
    }

    &-buttons--reject {
      background-color: rgba(3, 10, 19, 0.514);

      @media (max-width:450px) {
        margin-top: 1rem;
      }

      &:hover {
        background-color: rgba(2, 7, 15, 0.753);
      }
    }
  }

</style>
