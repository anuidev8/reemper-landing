<template>
  <section id="main-section" class="main-section white  overflow-hidden position-relative appear">
    <div class="py-6 pb-0 pb-lg-6  main-wrapper appear">
    <figure  class="bg-image-home h-100 w-100 position-absolute  appear ">
      <img loading="lazy" src="~/assets/images/home/bg-m.webp"  srcset="~/assets/images/home/bg-m.webp 2x, ~/assets/images/home/bg.webp 1x"  width="100%" height="100%"
        alt="app-reemper">
    </figure>
    <NavBar />
    <div class="mt-7 mt-md-15 main-section-content position-relative z-index">
      <v-row>
        <v-col cols="12" lg="6">
          <h1 data-testid="main-title" class="fw-bold main-title text-center text-md-left pt-4">IMPULSA TU <span
              class="primary--text">AUTONOMÍA</span> EN LA ERA
            DIGITAL</h1>
          <p data-testid="description" class="main-paragrahp mt-7 mt-md-6  text-center text-md-left">Una plataforma para profesionales que te
            permite conectar tus servicios y
            conocimientos directamente con <span class="fw-bold">clientes potenciales.</span> </p>
          <div class="d-flex flex-column flex-md-row justify-center justify-md-start mt-8 mt-md-9 mb-md-0">
            <div  class="align-self-center mt-5 mt-lg-0"  @click="goTo('download-section')">

              <v-btn data-testid="download-button"  translate="no"
                class="primary--text main-btns btn-action btn-radius mr-0 mr-md-8 mb-2 mb-md-0" color="white">
                DESCARGAR APP MOVIL

                <v-icon class="btn-icon" :size="25" right>{{ mdIcon.mdiChevronRight }}</v-icon>

              </v-btn>
            </div>
          </div>
        </v-col>

           <v-col v-if="$mq == 'lg'" cols="12" md="6" class="position-relative w-100  d-flex">
                <figure data-testid="main-image"  loading="lazy" class="position-absolute people-image w-100 h-100 img-cover appear">
                <img src="~/assets/images/home/people.webp" width="100%" height="100%"
                  alt="app-reemper">
              </figure>
          <Square className="position-absolute w-100 square-figure" />
          <ReemperMainTag id="tag-download-main"  className=" position-absolute reemper-tag reemper-tag--right" />
          <MyReemperTag className="position-absolute reemper-tag reemper-tag--left " />
        </v-col>

      </v-row>
    </div>
     </div>
    <figure class="bg-curve position-absolute ">
      <svg width="100%" height="100%" viewBox="0 0 2036.82 221.72">
        <title>bg-curve</title>
        <g id="52628c73-36f5-4b35-ac06-8516ac2aad6a" data-name="Layer 2">
          <g id="792a4646-4689-44bb-91d4-98d57542010c" data-name="Layer 1">
            <path id="213a2d80-a32d-498f-ad06-d60993677730" data-name="Trazado 6197"
              d="M0,136.29l113.16-18.95C226.31,98,452.62,60.66,678.94,31.91c226.31-28.2,452.62-47.78,678.94-14.23C1584.19,50.86,1810.5,136.29,1923.66,179l113.16,42.71H0Z"
              fill="#fff" />
          </g>
        </g>
      </svg>
    </figure>
     <mq-layout  :mq="['xs','sm' ,'md']">
    <figure data-testid="main-image" class="people-image  position-relative img-cover appear">
      <img loading="lazy" src="~/assets/images/home/img-people-m.webp" width="100%" height="100%"
        alt="app-reemper">
    </figure>
    </mq-layout>
  </section>
</template>
<script>
  import navigate from '../../mixins/footerLinks'
  import getOsType from '@/mixins/getOsType'
  export default {
    mixins:[navigate,getOsType],
    components: {
      NavBar:()=>import('@/components/Navbar'),
      Square:()=>import('@/components/icons/Square'),
      ReemperTag:()=>import('@/components/home/ReemperTag'),
      Logo:()=>import('@/components/icons/brand/Logo'),
      MyReemperLogo:()=>import('@/components/icons/brand/MyReemperLogo'),
      ReemperMainTag:()=>import('@/components/icons/ReemperTag'),
      MyReemperTag:()=>import('@/components/icons/MyReemperTag'),

    },


  }

</script>
<style lang="scss" scoped>
  .main-section {
    min-height: 730px;
  }
  .bg-image-home{
    top: 0;
    left: 0;
  }

  .main-title {
    font-size: 2.3rem;
  }

  .main-paragrahp {
    font-size: 1.35rem;
  }

  .square-figure {
    top: -12%;
  }

  .reemper-tag {
    &--right {
      z-index: 10;
      top: 90%;
      left: -2%;
    }

    &--left {
      top: 76%;
      right: 1%;
      z-index: 20;

    }
  }

  .people-image {
    transform-origin: center;
    transform: translate(-37%, 45%) scale(1.7);
    z-index: 10;

    img {
      object-fit: contain;
    }

    @media (min-width:1400px) {
      width: 750px;
      transform: translate(-35%, 220px) scale(2);
    }

  }

  .bg-curve {
    width: 112%;
    bottom: -8%;
    left: 0;
    z-index: 20;
  }

  @media (max-width:430px) {
    .main-section {
      height: auto;

    }

    .main-title {
      font-size: 1.6rem;
    }

    .main-paragrahp {
      font-size: .9rem;
    }

    .square-figure {
      width: 90%;
      left: 50%;
      top: 6%;
      transform: translateX(-50%);
      z-index: 5;

    }

    .reemper-tag {
      &--right {

        transform: scale(.76);
        z-index: 20;
      }

      &--left {
        transform: scale(.5) translate(5rem, 100px);
        z-index: 100;

      }
    }

    .bg-curve {
      bottom: -2%;
      z-index: 20;
    }
    .people-image {
      transform: translate(0,5%) scale(1);
    }

  }

</style>
