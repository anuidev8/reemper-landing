<template>

  <AppModal @onClose="onShowModalApp({state:false})">
    <div  class="py-6  py-md-0 h-100 d-flex justify-center">
      <v-row>
        <v-col cols="12" md="6" lg="6" class="d-flex justify-center align-center ">
          <figure v-if="selectDataAppFlow.id != 'appDesktop'" class="col-6 position-relative mt-5">
            <v-btn x-small ref="btnAdd" :style="`position:absolute;z-index:10;opacity:${onboarding == 0 ? 0:1}`"
              color="primary" fab>
              <v-icon size="20">{{ mdIcon.mdiPlus }}</v-icon>
            </v-btn>
            <SquareAppFlow v-if="selectDataAppFlow.id != 'appDesktop'" className="position-absolute square-flow-app" />
            <AppScreen v-if="selectDataAppFlow.id === 'ranking'" />
            <AppScreenChat v-if="selectDataAppFlow.id === 'chat'" />
            <AppScreenProfileServices v-if="selectDataAppFlow.id === 'profile'" />
            <AppScreeReemper v-if="selectDataAppFlow.id === 'reemper'" />
          </figure>
          <figure class=" w-100 position-relative img-cover" v-if="selectDataAppFlow.id === 'appDesktop'">
            <img width="100%" height="100%" src="~/assets/images/home/app-desktop.webp" alt="reemper" loading="lazy">
          </figure>
        </v-col>
        <v-col cols="12" md="6" lg="6" class="d-flex justify-center align-center flex-column">
          <v-window v-model="onboarding">
            <v-window-item v-for="(slide,key) in this.selectDataAppFlow.slides" :key="`card-${key}`">
              <article class="px-2  px-md-10 app-section-description">
                <h2 v-if="slide.title" class="primary--text app-title-section" translate="no">{{ slide.title }}</h2>
                <h3 translate="no" class="mb-4 fw-light app-title-description">
                  {{ slide.description }}
                </h3>
                <ul v-if="slide.list" class="list-style-none pl-0 mb-4">
                  <li v-for="(item,index) in slide.list" :key="index">
                    <h3 class="fw-light app-title-moods"><span translate="no" class="fw-medium primary--text app-title-moods">{{ item.name }}</span>
                      {{ item.description }}</h3>
                  </li>
                </ul>

              </article>
            </v-window-item>
          </v-window>
          <div class="px-10 w-100">
            <hr class="grey w-100 " />
          </div>
          <v-card-actions class="justify-space-around mt-5 w-100 px-8">
            <v-btn v-if="selectDataAppFlow.id != 'appDesktop'" fab style="transform:scale(.9)" @click="prev" x-small
              color="#5CBEF899">
              <v-icon size="20">{{ mdIcon.mdiChevronLeft }}</v-icon>
            </v-btn>
            <div class="text-center">

              <h3 translate="no" class="primary--text fw-medium">
                {{  selectDataAppFlow.titleSection }}
              </h3>
              <h4 class="primary--text fw-light" translate="no" v-if="selectDataAppFlow.descriptionSection">
                {{ selectDataAppFlow.descriptionSection }}</h4>
            </div>


            <v-btn v-if="selectDataAppFlow.id != 'appDesktop'" style="transform:scale(.9)" fab x-small color="#5CBEF899"
              @click="next">
              <v-icon>{{ mdIcon.mdiChevronRight }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-item-group v-model="onboarding" class="text-center" mandatory>
            <v-item v-for="n in this.fragments.length" :key="`btn-${n}`" v-slot="{ active }">
              <v-btn :input-value="active" x-small icon>
                <v-icon>{{ mdIcon.mdiRecord }}</v-icon>
              </v-btn>
            </v-item>
          </v-item-group>
        </v-col>
      </v-row>
    </div>
  </AppModal>

</template>
<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'

  import appDataFlow from '@/mixins/appDataFlow'
  import AppModal from '@/components/AppModal'
  import AppScreen from '@/components/home/flow/AppScreen'
  import AppScreenChat from '@/components/home/flow/AppScreenChat'
  import SquareAppFlow from '@/components/icons/SquareAppFlow'
  import AppScreenProfileServices from '@/components/home/flow/AppScreenProfileServices'
  import AppScreeReemper from '@/components/home/flow/AppScreeReemper'


  export default {
    mixins: [appDataFlow],
    components: {
      AppModal,
      AppScreen,
      AppScreenChat,
      SquareAppFlow,
      AppScreenProfileServices,
      AppScreeReemper,
    },
    data() {
      return {
        fragments: [],
        length: 3,
        onboarding: 0,
        fragmentSelect: null,
      }
    },
    computed: {
      ...mapState({
        selectDataAppFlow: 'selectDataAppFlow'
      }),
      moveElement() {
        return this.selectDataAppFlow.id === 'reemper' && (this.onboarding == 2 || this.onboarding == 3) ? "310px" :
          "-40px"
      }
    },
    methods: {
      ...mapMutations({
        onShowModalApp: 'SET_SHOW_APP_FLOW'
      }),
      next() {
        const windowWidth = window.innerWidth
        this.onboarding = this.onboarding + 1 === this.fragments.length ?
          0 :
          this.onboarding + 1
        this.fragmentSelect = this.fragments[this.onboarding].id
        const btn = this.$refs.btnAdd.$el
        const cors = this.fragments[this.onboarding].getBoundingClientRect()
        btn.style.transform = `translate(${this.selectDataAppFlow.id === 'reemper' && (this.onboarding == 2 || this.onboarding == 3) ? `${ windowWidth < 450 ? cors.right-100: cors.right-215}px` :
          "-40px"},${ windowWidth < 650 ? Math.floor(cors.top)-70: Math.floor(cors.top)-90}px)`


        for (const fragment of this.fragments) {
          fragment.style.transition = "opacity .3s ease"
          fragment.id == this.fragmentSelect ? fragment.style.opacity = '.4' : fragment.style.opacity = '0'

        }


      },
      prev() {
        const windowWidth = window.innerWidth

        this.onboarding = this.onboarding - 1 < 0 ?
        this.fragments.length - 1 : this.onboarding - 1

        this.fragmentSelect = this.fragments[this.onboarding].id
        const btn = this.$refs.btnAdd.$el
        const cors = this.fragments[this.onboarding].getBoundingClientRect()

        btn.style.transform = `translate(${this.selectDataAppFlow.id === 'reemper' && (this.onboarding == 2 || this.onboarding == 3) ?
          `${windowWidth < 450 ? cors.right-100: cors.right-215}px` :
          "-40px"},${windowWidth < 650 ? Math.floor(cors.top) - 80: Math.floor(cors.top)-60}px)`

        for (const fragment of this.fragments) {
          fragment.style.transition = "opacity .3s ease"
          fragment.id == this.fragmentSelect ? fragment.style.opacity = '.4' : fragment.style.opacity = '0'

        }

      },
    },
    mounted() {
      const fragments = document.querySelectorAll(`.rect-rank`)
      this.fragments = fragments
      for (const fragment of fragments) {
        fragment.style.opacity = '0'
      }


    }
  }

</script>
<style lang="scss" scoped>
  .square-flow-app {
    width: 580px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .app-title-section {
    font-size: 1.75rem;
  }

  .window-sections {
    height: 50%;
  }

  .app-section-description {
    min-height: 160px;
  }

  .app-desktop-img {
    transform: scale(1.15);
  }

  @media (max-width:440px) {
    .square-flow-app {
      width: 410px;
    }

    .app-desktop-img {
      transform: scale(1.3);
    }
    .app-title-section {
    font-size: 1.5rem;
    }
    .app-title-description{
      font-size: 1.2rem;
    }
    .app-title-moods{
      font-size: 1rem;
    }
  }

</style>
