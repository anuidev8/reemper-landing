<template>
    <fragment>
      <MainHeader />
      <OurMision />
      <OurGoal />
      <OurValues />
      <ReadyStart/>
      <FooterSection />

    </fragment>
</template>
<script>
import MainHeader from '@/components/about/MainHeader'
import OurMision from '@/components/about/OurMision'
import OurGoal from '@/components/about/OurGoal'
import OurValues from '@/components/about/OurValues'
import ReadyStart from '@/components/about/ReadyStart'
import FooterSection from '@/components/FooterSection'

export default {

  layout:'about',
    components:{
      MainHeader,
      OurMision,
      OurGoal,
      OurValues,
      ReadyStart,
      FooterSection
    },
    mounted(){
      document.body.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
}
</script>
<style lang="scss" scoped>
  .btn-about{
    height:0.625rem !important;
  }
</style>
