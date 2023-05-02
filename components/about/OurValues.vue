<template>
  <section class="about-wrapper py-15 pr-0  bg-accent-dark overflow-hidden">
    <v-row>
      <v-col cols="12" lg="6" class="  d-flex justify-center align-center flex-column">
        <figure class="img-cover">
          <img width="100%" height="100%" loading="lazy" alt="people" src="~/assets/images/about/people.png">
        </figure>
      </v-col>
      <v-col cols="12" lg="6" class="pl-lg-0 ">
        <h2 class="bg-primary-dark  text-center d-inline-block  ml-lg-0 px-3 py-2 fw-bold   align-self-start">VALORES
        </h2>
        <ul class="list-style-none px-10 px-lg-0 pr-lg-15 mt-7">
          <li v-for="(item,key) in items" :key="key" class="d-flex mt-3">
            <figure class="mr-2">
              <svg stroke="currentColor" fill="#209EE9" stroke-width="0" viewBox="0 0 1024 1024" height="1.4em"
                width="1.4em">
                <path
                  d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z">
                </path>
              </svg>
            </figure>
            <h4 class="white--text">{{ item }}</h4>
          </li>
        </ul>
      </v-col>
    </v-row>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          'Primero personas, luego profesionales. Empatía',
          'El trabajo es el medio, no el fin. Equilibrio',
          'Puedes ser profesional aun sin traje. Autenticidad',
          'La adaptabilidad es la manera en que surfeamos la ola del cambio. Adaptabilidad',
          'No es posible resolverlos problemas de hoy con las soluciones de ayer. Innovación',
          'El respeto al derecho ajeno es lo que trae paz. Respeto',
          'En un era de apariencias, ser transparente marca la diferencia. Transparencia',


        ]
      }
    }
  }

</script>
<style lang="scss" scoped>
  .image-group {
    transform: rotate(50deg);

    img {
      width: 420px;
      height: 420px;
      object-fit: cover;
      object-position: center;
      border-radius: 5em;
      border: 4px solid white;

    }
  }

</style>
