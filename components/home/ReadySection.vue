<template>
  <section class="ready-section main-wrapper py-10 py-lg-14 primary">
    <v-row>
      <v-col cols="12" lg="6">
        <h2 data-testid="ready-title-section" class="section-title fw-light text-center text-lg-left">
          ¿Estás listo para <span class="fw-bold"> marcar </span> <br /> <span class="fw-bold"> la diferencia?</span>
        </h2>
      </v-col>
      <v-col cols="12" lg="6" class="d-flex justify-center">
         <a data-testid="ready-button-section" :href="urlAppDownload" target="_blank" style="z-index:50" class="text-decoration-none w-100 d-block h-100  position-relative">
        <v-btn  solo color="white"  class="main-btns btn-action text-none btn-radius mt-4 primary--text">

         Descargar App
          <v-icon class="btn-icon" color="primary" :size="25" right>{{ mdIcon.mdiChevronRight }}</v-icon>
        </v-btn>
         </a>
      </v-col>
    </v-row>
  </section>
</template>
<script>
import getOsType from '@/mixins/getOsType'
export default {
  mixins:[getOsType],

}
</script>

