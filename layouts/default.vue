<template>
  <div>
  <v-app dark >
    <v-main >
      <nuxt />

    </v-main>
  </v-app>

  <noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=329709695455649&ev=PageView&noscript=1"
/></noscript>
<noscript><iframe :src="`https://www.googletagmanager.com/ns.html?id=${getAnalityCode()}`"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  </div>


</template>
<script>
export default {
  data(){
    return{
      currentPath:'xxx',
    }
  },
  methods:{
    isMode() {
      return this.currentPath?.includes("dev") ? true : false;
    },
    getAnalityCode(){

      return this.isMode() ? 'G-K87KET7123' : 'G-GEGNVNS90Q'
    },
  },
  mounted(){
    this.currentPath = window.location.href;
  }
}
</script>

<style lang="scss">
.main-wrapper {
  padding: 0 5vw;
}

.main-btns {
  height: 50px !important;
}

.btn-radius {
  border-radius: 0.6em;
}

.btn-icon {
  transition: transform 0.3s;
  transform: translateX(0);
}

.btn-action:hover {
  .btn-icon {
    transform: translateX(7px);
  }
}

.section-title {
  font-size: 2rem;
}

.section-paragrahp {
  font-size: 1.35rem;
}

.goals-title {
  font-size: 1.8rem;
  line-height: 1.3em;
}

.z-index {
  z-index: 10;
}
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}



.loading-box{
  height:100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #182f40;
  justify-content: center;

}

@media (max-width: 420px) {
  .section-title {
    font-size: 1.6rem;
  }

  .main-btns {
    height: 55px;
  }

  .section-paragrahp {
    font-size: 0.9rem;
  }

  .paragrahp-app-items {
    font-size: 0.9rem;
  }

  .goals-title {
    font-size: 1.4rem;
  }
}
</style>
