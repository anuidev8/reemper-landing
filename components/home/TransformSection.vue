<template>
  <section class="transform-section  overflow-hidden">
      <v-row class="h-100">
        <v-col cols="12" lg="6" class="position-relative image-cover px-0 py-0" >
          <figure class="reemper-future-image d-none d-lg-block h-100 appear" >
            <img src="~/assets/images/home/reemper-future.webp" height="100%" width="100%" loading="lazy" alt="reemper">
          </figure>
        </v-col>
        <v-col cols="12" lg="6" class="d-flex flex-column justify-center align-start position-relative py-7 py-lg-14 pr-7 pl-7 pl-lg-0 pr-lg-14 transform-section-description">
          <h3 data-testid="transform-title-section" class="primary--text position-relative z-index  goals-title align-self-lg-start text-center text-lg-left">Creemos en la transformación  del sistema laboral</h3>
          <p data-testid="transform-description-section" class="position-relative z-index white--text section-paragrahp text-center text-lg-left mt-2">
            para brindar mayores oportunidades de crecimiento personal y laboral a todos aquellos profesionales que genuinamente impactan a la humanidad a través de su pasión.
          </p>
          <figure class="reemper-future-image d-block position-absolute  d-lg-none">
            <img data-testid="transform-image-section" src="~/assets/images/home/reemper-future.webp" height="100%" width="100%" loading="lazy" alt="Creemos en la transformación">
          </figure>
        </v-col>
      </v-row>
  </section>
</template>
<style lang="scss" scoped>
  .transform-section{
    background-color: #090A0C;
   &:hover .reemper-future-image{
     transform: perspective(3800px) rotateY(10deg) translateX(-15%);
     @media (max-width: 630px) {
       transform: none;
     }

    }
  }
  .reemper-future-image{
     transform: perspective(1500px) rotateY(15deg) translateX(-15%);
    transition: transform .4s ease;
    @media (max-width: 630px) {
       transform: none;
     }
  }
  .transform-section-description{
    transform: translateX(-7%);
  }
   @media (max-width: 630px) {

     .reemper-future-image{
       width: 320px;
       height: 320px;

       left: 20%;
       transform: translate(-50%,-50%);
       z-index: 0;
       opacity: .7;
       @media (max-width: 630px) {
         width: 100%;
       transform: none;
       left: 0%;
       img{
         object-fit: cover;
         object-position: top;
       }
     }

     }
     .transform-section-description{
    transform:none;
  }
   }


</style>
