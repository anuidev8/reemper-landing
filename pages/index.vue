<template>
  <div :style="{height:`${showCValidateCookies ? 'auto' : '100vh'}`,overflow:`${showCValidateCookies ? 'visible' : 'hidden'}`}" >

         <div v-if="!isLoading">
        <MainSection />

         <v-lazy
        v-model="isAbout"
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >
        <AboueSection />
         </v-lazy>
          <v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >
        <GoalsSection />
          </v-lazy>

         <v-lazy
        v-model="isRe"
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >
        <ReemperSection/>
         </v-lazy>
          <v-lazy

        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >
        <TransformSection />
          </v-lazy>

           <v-lazy

        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >
        <DownloadAppSection />
           </v-lazy>

            <v-lazy

        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >
        <QuestionsSection />
            </v-lazy>
             <v-lazy

        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >
        <ReadySecction />
             </v-lazy>
                <v-lazy

        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >
        <FooterSection />
                </v-lazy>

        <AppSectionFlow v-if="modal && selectDataAppFlow"  />

          <Whatssap />
      <CookieBanner v-if="showCookies" @onAccept="onShowCookies" />
      <LegendModal v-if="showLegend.state" @onContinue="onContinue" />
      </div>
          <div v-if="isLoading" class="loading-box">
            <figure class="lds-dual-ring"></figure>
        </div>

  </div>
</template>
<script>


import CookiesSettings from "@/mixins/CookiesSettings";
import { getCookie } from "@/utils/cookieSettings";

export default {
  mixins: [CookiesSettings],
  components:{

    MainSection : () => import('@/components/home/MainSection'),
    AboueSection:()=>import('@/components/home/AboutSection'),
    GoalsSection:()=>import('@/components/home/GoalsSection'),
    ReemperSection:()=>import('@/components/home/ReemperSection'),
    TransformSection:()=>import('@/components/home/TransformSection'),
    DownloadAppSection:()=>import('@/components/home/DownloadAppSection'),
    ReadySecction:()=>import('@/components/home/ReadySection'),
    FooterSection:()=>import('@/components/FooterSection'),
    AppSectionFlow:()=>import('@/components/home/AppSectionFlow'),
    QuestionsSection:() => import('@/components/home/QuestionsSection'),
    Whatssap:() => import('@/components/Whatssap'),
    CookieBanner:() => import('@/components/cookies/CookieBanner'),
    LegendModal:() => import('@/components/leyend/LegendModal'),

  },
  data(){

  },
  head() {
  return {
      link: [
        {
          rel: 'preload',
          as: 'image',
          href: require('~/assets/images/home/img-people-m.webp'),
        },
        
       
      ],
    }
  },
   data() {
    return {
      showCookies: false,
      showCValidateCookies:false,
      showLegend: {
        state: false,
        type: "reject",
      },
      isLoading:true,
      loadingContent:true,
       isActive: false,
       isAbout: false,
       isRe: false,
       isAppSection:false

    };
  },
  computed:{
    modal(){
      return this.$store.state.showAppFlow
    },
    selectDataAppFlow(){
      return this.$store.state.selectDataAppFlow
    },
    
  },
   methods: {
    onShowCookies(type) {
      this.showCValidateCookies = getCookie("isTerm")
      const customize = localStorage.getItem("customize")
        ? JSON.parse(localStorage.getItem("customize"))
        : [];
      this.mountedScript(
        getCookie("isTerm"),
        type == "all" ? "all" : type === "custom" ? "custom" : "reject",
        customize
      );
   
       
        this.showCookies = !this.showCookies;
        if (type === "all" || type === "custom") {
          this.showLegend.state = true;
        }
   
    },
    onContinue() {
      this.showLegend = !this.showLegend;
    },
  
  },
  mounted(){
        this.$nextTick(() => {
       setTimeout(() => {
             this.isLoading = false
            this.showCookies = getCookie("isTerm") ? false : true;
            this.showCValidateCookies = getCookie("isTerm")
          const type = getCookie("typeCookie") ? getCookie("typeCookie") : "null";
          const customize = localStorage.getItem("customize")
            ? JSON.parse(localStorage.getItem("customize"))
            : [];
          this.mountedScript(getCookie("isTerm"), type, customize);
       }, 800);
   })

  }


}
</script>


