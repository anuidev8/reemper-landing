<template>
  <div data-testid="tools-list" class="mt-8 mt-lg-15 pt-8 position-relative z-index">
     <mq-layout  :mq="['lg']">
    <v-row justify="center">
      <v-col  v-for="(tool,key) in tools" :key="key" cols="12" md="4" lg="2" >
      <OurToolCard :title="tool.title" @showModalApp="showModalApp(tool.id)">
          <figure v-html="tool.icon" class="tool-card-icon primary "></figure>
        </OurToolCard>
      </v-col>
    </v-row>
     </mq-layout>
      <mq-layout  :mq="['xs','sm' ,'md']">
    <v-row justify="center" class="px-5" cols="12" md="4" lg="2" >
      <v-carousel height="260"  :show-arrows="false">
        <v-carousel-item v-for="(tool,i) in tools" :key="i" >
        <OurToolCard className="mr-2" :title="tool.title" @showModalApp="showModalApp(tool.id)" >
          <figure v-html="tool.icon" class="tool-card-icon primary "></figure>
        </OurToolCard>
        </v-carousel-item>
      </v-carousel>

    </v-row>
      </mq-layout>

  </div>
</template>
<script>
import { mapMutations } from 'vuex'
  import toolsData from '@/mixins/toolsData'

  export default {
    mixins: [toolsData],
    components: {
      OurToolCard:() =>import('@/components/home/OurToolCard')
    },
    methods:{
      ...mapMutations({
        onShowModalApp:'SET_SHOW_APP_FLOW'
      }),
      showModalApp(id){
          this.onShowModalApp({state:true,id})
      }
    }

  }

</script>
