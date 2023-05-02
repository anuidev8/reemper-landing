<template>
    <div :style="{backgroundColor:`${bg && bg}`,backgroundImage:`${!bg && `linear-gradient(rgba(32, 158, 233,${tranparency}),rgba(255,255,255,${tranparency}))`}`,   borderRadius: `${bg ? '.8em' : '1.6em'}`,boxShadow:`${`${bg && '0 3px 6px rgba(0,0,0,.4)'}`}`}" :class="`reemper-tag d-flex justify-center align-center px-12 py-3 ${className}`">
      <div class="position-relative">
        <slot></slot>
        <span :style="{boxShadow:`${`${bg && '0 1px 6px rgba(0,0,0,.4)'}`}`}" class="position-absolute reemper-tag-badge primary">APP</span>
        </div>
    </div>
</template>
<script>
export default {
  props: {
      className: {
        type: String
      },
      gradient:{
        type:Boolean,
        default:true
      },
      bg:{
        type:String,
      },
      tranparency:{
        type:String,
        default:'.4'
      }
    }
}
</script>
<style lang="scss" scoped>
  .reemper-tag{
    width: max-content;
    &-badge{
      top: -6%;
      right: -6%;
      border-radius: .6em;
      font-size: .6rem;
      padding: 0 .7em;
       @media (max-width:430px){
         font-size: .5rem;
       }
    }
  }

</style>
