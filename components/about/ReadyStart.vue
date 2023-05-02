<template>
  <section class="about-wrapper pr-0 py-12 bg-primary-dark">
    <v-row>
      <v-col cols="6" class="pr-12 d-flex flex-column justify-center ">
        <h2 class="fw-bold align-self-start">¿Listo para empezar?</h2>
        <p class="mision-paragrahp pr-10 mt-2">
          Haz parte de nuestras comunidades y ¡hagamos el impacto juntos!
        </p>
      </v-col>
      <v-col cols="6" class="pl-0">
        <h3>Quiero ser un</h3>
        <div class="d-flex mt-3">
          <v-btn color="white" outlined style="box-shadow:none" solo class="px-6 py-6 btn-about primary--text mr-3">
            <a class="text-decoration-none white--text " :href="`https://${getEnvMode()}reemper.reemp.co/`"> Reemper</a>
            <v-icon right>
              {{ icons.mdiFormatHorizontalAlignRight }}
            </v-icon>
          </v-btn>
          <v-btn color="white" style="box-shadow:none" solo class="px-6 py-6 btn-about primary--text ">
            <a class="text-decoration-none text-primary-dark" :href="`https://${getEnvMode()}myreemper.reemp.co/`"> My Reemper </a>
            <v-icon right>
              {{ icons.mdiFormatHorizontalAlignRight }}
            </v-icon>
          </v-btn>



        </div>
      </v-col>
    </v-row>
  </section>
</template>
<script>
import { mdiFormatHorizontalAlignRight } from '@mdi/js'
export default {
  data(){
    return{
     icons:{
        mdiFormatHorizontalAlignRight:mdiFormatHorizontalAlignRight
     },
     currentPath:'',
    }
  },

  methods:{
    getEnvMode(){
        return  this.currentPath?.includes('dev') ?  'dev' : ''
      },
  },
    mounted() {
    this.currentPath = window.location.href;
  },
}
</script>
