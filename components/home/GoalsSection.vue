<template>
  <section id="goal-section" class="goals-section py-15 main-wrapper accent position-relative overflow-hidden">
    <v-row class="position-relative z-index pt-4 mb-0 mb-lg-8">
      <v-col md="12" lg="5" class="d-flex justify-center  ">
        <figure  class="img-cover appear">
          <img data-testid="reemper-logo" class="reemper-logo-shadow w-100" src="~/assets/images/home/reemper-logo-shadow.webp"
            alt="reemper-logo" loading="lazy" height="175px" width="100%">
        </figure>
      </v-col>
      <v-col cols="12" lg="7" class="pr-lg-10 mt-7 mt-lg-5">
        <h3  data-testid="goal-main-title" class="primary--text  text-center  text-lg-left goal-title mt-2">
          <span class="goal-title--subtitle fw-medium"> Creamos una vitrina digital</span> <br />
          <span class="goal-title-second d-block mt-2 mt-lg-0"> que te permite comunicar y vender
            <b>sobre ti y tus servicios</b></span>

        </h3>
        <p data-testid="section-paragrahp" class="section-paragrahp mt-1 text-center text-lg-left">
          Una plataforma que te permitirá construir y
          fortalecer tu imagen y la promoción de tus servicios profesionales.</p>
      </v-col>
    </v-row>
    <h2 data-testid="second-title"  class="text-center goals-subtitle  mt-4 mt-lg-15 ptl-g-6 position-relative z-index">
      Ampliamos las
      <span class="primary--text"> oportunidades</span> para que saques <br />
      el <span class="primary--text"> mayor</span> provecho de tu
      <span class="primary--text">profesión</span>
    </h2>
    <p  data-testid="second-section-paragrahp"  class="mt-5 text-center position-relative z-index section-paragrahp">Conoce cada una de las herramientas
      potenciales que te ofrece
      <br /> nuestra app para
      impulsar tu autonomía laboral:</p>

    <OurToolsList />
    <h2 data-testid="video-title" class="mt-7 mt-lg-15 pt-7 pt-lg-15 text-center video-title fw-bold mb-10 position-relative z-index">DESAFÍA EL
      FUTURO LABORAL
      <span class="primary--text">TRASCENDIENDO EN LA
        ERA DIGITAL</span></h2>
    <v-row justify="center">
      <v-col cols="10" lg="8">
        <div class="video-player-box ">
          <video data-testid="promotional-video"  class="video-player position-relative z-index" width="100%" height="100%" controls  preload>
            <source src="https://res.cloudinary.com/dqhme1rod/video/upload/v1663100687/aqwhtw8v50y578ahleqv.mp4" type="video/mp4"  />
          </video>

        </div>
      </v-col>

    </v-row>
    <div class="position-absolute sqfg-1">
      <SquareCurve size="100%" />
    </div>
    <div class="position-absolute sqfg-2">
      <SquareCurve size="100%" />
    </div>
    <div class="position-absolute sqfg-3">
      <SquareCurve size="100%" />
    </div>


  </section>
</template>
<script>

  export default {
    components: {
      OurToolsList:()=>import('@/components/home/OurToolsList'),
      SquareCurve:()=>import('@/components/icons/SquareCurve')
    },
  }

</script>
<style lang="scss" scoped>
  .goal-title {
    line-height: 2rem;
  }

  .goal-title--subtitle {
    font-size: 2.6rem;

  }

  .goals-subtitle {
    font-size: 1.9rem;
  }

  .goal-title-second {
    font-size: 1.3rem;
  }

  .video-title {
    font-size: 1.6rem;
  }

  .sqfg-1 {
    width: 400px;
    top: -10%;
    left: -10%;
  }

  .sqfg-2 {
    top: -10%;
    right: -40%;
  }

  .sqfg-3 {
    width: 600px;
    bottom: -15%;
    left: -8%;
  }

  .sqfg-4 {
    width: 400px;
    bottom: 16%;
    left: -8%;
  }

  .reemper-logo-shadow {
    transform-origin: center;
    transform: scale(1.28);
  }

  @media (max-width: 430px) {
    .reemper-logo-shadow {
      transform: scale(.9);
    }

    .goals-title,
    .goals-subtitle {
      font-size: 1.3rem;
    }

    .paragrahp-app-items {
      font-size: .9rem;
    }

    .video-title {
      font-size: 1.4rem;
    }

    .sqfg-1 {
      left: -40%;
      top: 0;
    }

    .sqfg-2 {
      top: 20%;
      right: -30%;
    }

    .sqfg-3 {
      left: -70%;
    }

    .sqfg-4 {
      left: 30%;
    }
  }

</style>
