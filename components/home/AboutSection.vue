<template>
  <section class="about-section position-relative white  main-wrapper overflow-hidden">
    <div class="about-section-wrapper position-relative">
      <v-row>
        <v-col cols="12" md="6"
          class="d-flex flex-column justify-start align-start justify-lg-center align-lg-center pt-lg-10">
          <ReemperMainTag width="15rem" id="tag-about" class="d-flex d-lg-none w-100 justify-center mb-9 mt-5 " />
          <h2 data-testid="about-title" class="accent--text section-title fw-bold text-center text-md-left"><span class="primary--text">
              UBERIZAMOS </span> EL SECTOR LABORAL
            DE <span class="primary--text"> PROFESIONALES</span> EN COLOMBIA</h2>
          <p data-testid="description" class="section-paragrahp accent--text mt-6 text-center text-md-left ">
            Te presentamos una plataforma que fortalecerá tu imagen como profesional y te permitirá conecta en tiempo
            real con usuarios/clientes que necesitan de tus servicios profesionales.
          </p>
        </v-col>
        <v-col cols="12" md="6" class="position-relative d-flex justify-center py-0">
          <SquareApp className="position-absolute square-app" />
          <figure data-testid="app-image" class="mobile-figure mt-5 mt-md-0 img-cover position-relative z-index">
            <img src="~/assets/images/home/mobile-1.webp" loading="lazy" width="100%" height="100%" alt="app" />

          </figure>
        </v-col>
      </v-row>
    </div>
    <figure class="figure-bg position-absolute"></figure>
  </section>
</template>
<script>

  export default {
    components: {
      SquareApp:import('@/components/icons/SquareApp'),
      ReemperMainTag : import('@/components/icons/ReemperTag')
    }
  }

</script>
<style lang="scss" scoped>
  .about-section {
    padding-top: 4em;
    padding-bottom: 7em;
  }

  .about-section-wrapper {
    z-index: 100;
  }

  .figure-bg {
    bottom: 0%;
    left: -10%;
    transform: translateY(25%) rotate(60deg);
    width: 700px;
    height: 590px;
    background-color: #E6E9EC;
    border-radius: 30%;
  }

  .square-app {
    width: 450px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .mobile-figure {
    width: 220px;

  }

  @media (max-width: 430px) {
    .about-section {
      padding-top: 1em;
      padding-bottom: 4em;
    }

    .figure-bg {
      width: 400px;
      height: 350px;
      left: -60%;
      top: 6%;
      transform: translateY(0%) rotate(60deg);
      opacity: .6;
    }

    .mobile-figure {
      width: 180px;
    }

    .square-app {
      width: 350px
    }
  }

</style>
