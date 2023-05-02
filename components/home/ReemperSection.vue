<template>
  <section class="reemper-section main-wrapper py-4 py-lg-15 white position-relative overflow-hidden">
    <v-row class="position-relative z-index">
      <v-col cols="12" lg="6" class="pt-12 pb-12 d-flex flex-column align-center align-lg-start">

        <MyReemperTag id="tag-myreemper-tag" bgOpacity="1" />
        <h3 data-testid="myreemper-title-section" class="accent--text fw-bold goals-title text-center text-lg-left mt-5">
          Ahora tus clientes podrán <br />
          <span class="primary--text"> localizarte </span>, <span class="primary--text"> contactarte </span> y <span
            class="primary--text"> obtener </span> tus servicios profesionales de manera <span class="primary--text">
            rápida y segura. </span>
        </h3>
        <p data-testid="myreemper-description-section" class="accent--text mt-6 mt-lg-3 text-center text-lg-left paragrahp-app-items">(Visualización desde los
          productos de tus usuarios, My Reemper)</p>
        <v-btn  color="primary" class="main-btns btn-action text-none btn-radius mt-7 ">
          <a data-testid="myreemper-btn-section" class="white--text text-decoration-none" href="https://myreemper.reemp.co/" target="_blank">
            Ir al buscador
          </a>
          <v-icon class="btn-icon" :size="25" right>{{ mdIcon.mdiChevronRight }}</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" lg="6" class="d-flex justify-center align-center mb-6 ">
        <figure  class="img-cover appear app-platfform-icon">
        <img data-testid="myreemper-image-section" width="100%" height="100%" loading="lazy" src="~/assets/images/home/app-plattform-m.webp"  srcset="~/assets/images/home/app-plattform-m.webp 2x, ~/assets/images/home/app-plattform.webp 1x" alt="reemper">

        </figure>
      </v-col>
    </v-row>

    <figure class="square-left position-absolute col-3 d-none d-lg-block">
      <svg width="100%" height="100%" viewBox="0 0 416.738 416.738">
        <defs>
          <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#1a1e22" />
            <stop offset="1" stop-color="#5cbef8" />
          </linearGradient>
        </defs>
        <path id="Rectangle_4" data-name="Rectangle 4"
          d="M60.04,41.378,187.526,3.521c45.318-13.457,93.735,12.846,108.142,58.75L336.2,191.4c14.407,45.9-10.652,94.026-55.97,107.483L152.739,336.744C107.421,350.2,59,323.9,44.6,277.994L4.07,148.861C-10.337,102.957,14.722,54.835,60.04,41.378Z"
          transform="matrix(0.259, 0.966, -0.966, 0.259, 328.671, 0)" opacity="0.08" fill="url(#linear-gradient)" />
      </svg>

    </figure>

    <figure class="square-right position-absolute col-12 col-lg-7">
      <svg width="100%" height="100%" viewBox="0 0 924.169 924.168">
        <defs>
          <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#1a1e22" />
            <stop offset="1" stop-color="#5cbef8" />
          </linearGradient>
        </defs>
        <path id="Rectangle_4" data-name="Rectangle 4"
          d="M133.146,91.76,415.862,7.807C516.361-22.036,623.731,36.3,655.68,138.093l89.876,286.37c31.949,101.8-23.622,208.514-124.121,238.358L338.719,746.773C238.22,776.616,130.85,718.285,98.9,616.487L9.025,330.117C-22.924,228.319,32.647,121.6,133.146,91.76Z"
          transform="matrix(0.259, 0.966, -0.966, 0.259, 728.869, 0)" opacity="0.223" fill="url(#linear-gradient)" />
      </svg>


    </figure>
  </section>
</template>
<script>


  export default {
    components: {
      ReemperTag:()=>import('@/components/home/ReemperTag'),
      MyReemperLogo:()=>import('@/components/icons/brand/MyReemperLogo'),
      MyReemperTag:()=>import('@/components/icons/MyReemperTag')
    },

  }

</script>
<style lang="scss" scoped>
  .square-left {
    top: 50%;
    left: -10%;
    transform: translateY(-50%);
  }

  .square-right {
    bottom: -45%;
    right: -30%;
    transform: rotate(-180deg);
  }

  @media (max-width:420px) {
    .app-platfform-icon{
      width: 320px;
    }
    .goals-title {
      font-size: 1.3rem;
    }

    .square-right {
      bottom: 4%;
      right: -25%;
      transform: scale(1.2) rotate(-180deg);
    }
  }

</style>
