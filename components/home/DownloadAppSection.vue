<template>
  <section id="download-section" class="download-section py-4 py-lg-14 main-wrapper overflow-hidden">
    <v-row>
      <v-col  cols="12" lg="6" class="d-flex justify-center pl-lg-12 pt-14 flex-column">
        <h3 data-testid="myreemper-description-section" class="accent--text fw-light text-center text-lg-left">¿Qué estas esperando?</h3>
        <h2 data-testid="download-title-section" class="section-title primary--text fw-bold mb-10 text-center text-lg-left mt-2 mt-lg-0">DESCARGA NUESTRA APLICACIÓN</h2>
        <div>
        <v-row  class="justify-center justify-lg-start">
          <v-col cols="8" lg="5">
            <a data-testid="download-playStore-link" href="https://play.google.com/store/apps/details?id=co.reemp.reemper.prod" target="_blank" class="d-flex img-cover">
              <img data-testid="playStore-image" src="~/assets/images/home/play-store.svg" width="100%" loading="lazy" height="100%" alt="play store icon" >
            </a>
          </v-col>
          <v-col cols="8" lg="5">
            <a data-testid="download-appleStore-link"  href="https://apps.apple.com/app/reemper-ofrece-tus-servicios/id6444168734" target="_blank" class="d-flex img-cover">
              <img data-testid="appleStore-image" src="~/assets/images/home/apple-store.svg" alt="apple store"  width="100%" height="100%"  loading="lazy">
            </a>
          </v-col>
        </v-row>

        </div>
        <h3 class="accent--text mt-8 fw-light text-center text-lg-left download-title">Descarga nuestro Brochure Reemper App</h3>
        <div class="d-flex justify-center justify-lg-start">
          <v-btn  solo color="primary"
            class="main-btns btn-action text-none col-7 col-lg-5 btn-radius mt-4">
            <a class="text-decoration-none white--text" href="https://prodreemppublic.s3.amazonaws.com/politicas/Brochure+App+Reemper+(3%C2%B0+Versi%C3%B3n)+.pdf" target="_blank">DESCARGAR</a>
            <v-icon class="btn-icon" :size="25" right>{{ mdIcon.mdiChevronRight }}</v-icon>
          </v-btn>

        </div>
      </v-col>
      <v-col  cols="12" lg="6" class="position-relative  d-flex justify-center mb-15">
        <SquareApp  className="position-absolute square-app" />
        <figure class="mobile-figure position-relative appear img-cover">
          <img data-testid="myreemper-image-section" src="~/assets/images/home/mobile-1.webp" loading="lazy" width="120%" height="120%" alt="app">

        </figure>
        <MyReemperTag id="tag-download-df" className="reemper-tag-left position-absolute" width="290"  bgOpacity=".9" />
        <ReemperMainTag id="tag-download" className="reemper-tag-right position-absolute" width="240" />
      </v-col>
    </v-row>
  </section>
</template>
<script>



  export default {

    components: {
      SquareApp:()=>import('@/components/icons/SquareApp'),
      ReemperTag:()=>import('@/components/home/ReemperTag'),
      Logo:()=>import('@/components/icons/brand/Logo'),
      MyReemperLogo:()=>import('@/components/icons/brand/MyReemperLogo'),
      ReemperMainTag:()=>import('@/components/icons/ReemperTag'),
      MyReemperTag:()=>import('@/components/icons/MyReemperTag')
    },


  }

</script>
<style lang="scss" scoped>
  .download-section{
    background-color: #F8F8F8;
  }
  .square-app {
    width: 450px;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .mobile-figure {
    width: 220px;
    z-index: 10;
  }

  .reemper-tag-left{
    bottom: -3%;
    left: 7%;
    z-index: 15;
  }
  .reemper-tag-right{
    top: 15%;
    right: 7%;
    z-index: 15;
  }

   @media (max-width: 430px) {
      .mobile-figure {
      width: 160px;
    }
     .square-app {
      width: 350px
    }
    .reemper-tag-left,.reemper-tag-right{
      transform: scale(.6);
    }
     .reemper-tag-left{
    left: -8%;
    }
     .reemper-tag-right{

    right: -7%;

  }
   }



</style>
