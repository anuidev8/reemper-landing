<template>
  <button @click="toggle" type="button" class="switch-button">
    <div :class="`switch-button-range ${isActive || readOnly ? ' switch-button-range--active' : ''}`"></div>
    <div  :class="`switch-button-circle ${isActive || readOnly ? 'switch-button-circle--disabled' : ''}`"></div>
    <div :class="`switch-button-overlays switch-button-overlays--${isActive || readOnly ? 'active' : 'disabled'}`"></div>
  </button>
</template>
<script>
export default {
  props:{

   readOnly:{
      type:Boolean,
      default:false
    },
    title:{
      type:String
    },
     settingKey:{
      type:Number
    }
  },
  data(){
    return{
      isActive:false
    }
  },
  methods:{
    toggle(){
      if(!this.readOnly){
        this.isActive = !this.isActive
        this.$emit('toggle', {state:this.isActive,title:this.title,key:this.settingKey})
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .switch-button {
    --primary-color:#32A5EA;
    position: relative;
     height: 1.25rem;
    border: none;
    background: none;

  }

  .switch-button-range {
    width: 36px;
    height: 14px;
    background-color: rgb(236, 236, 236);
    transition: background-color .2s ease;
    border-radius:.5rem;
    &--active{
      background-color: #8bcef8;
    }
  }

  .switch-button-circle{
    position: absolute;
    top: calc(50% - 10px);
    left: -1px;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
      transform: translateX(0);
      background-color: white;
    transition: transform .3s ease;
    &--disabled{
      background-color: var(--primary-color);
      transform: translateX(100%);
      z-index: 10;
    }
  }

  .switch-button-overlays{

        position: absolute;
        top: calc(50% - 14.5px);
      left: -5.5px;
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        opacity: 0;
        transition: opacity .3s ease, background-color .3s ease,transform .3s ease;
        z-index: 10;



        &--disabled{
            background-color: rgba(255, 255, 255, 0.4);
            transform: translateX(0);
        }

        &--active{
          background-color: rgba(9, 206, 255, 0.4);
           transform: translateX(20px);

        }
      }
       .switch-button:hover > .switch-button-overlays{
          opacity: 1;
        }

</style>
