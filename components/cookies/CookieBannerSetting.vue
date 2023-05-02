<template>
  <div class="cookie-banner-settings translate-x">
    <div class="cookie-banner-settings-header">
      <slot></slot>
      <h2>Configurador cookies </h2>
    </div>
     <p class="cookie-banner-settings-header-sub">Aquí puedes configurar tus cookies, más info:</p>
    <ul class="cookie-banner-settings-list">

      <li v-for="(setting ,key) in settings" :key="key"
        :class="`cookie-banner-settings-items ${setting.state && 'cookie-banner-settings-items--active'}`">
        <div class="cookie-banner-settings-box">
          <h3 class="cookie-banner-settings-title">{{ setting.name }}</h3>
           <SwitchButton :readOnly="setting.state" :title="setting.name" :settingKey="setting.key" @toggle="toggle" />
        </div>

        <p class="cookie-banner-settings-text">{{ setting.description }}</p>
      </li>
    </ul>

  </div>
</template>
<script>
  import SwitchButton from "./SwitchButton"
  export default {
    components: {
      SwitchButton,
    },
    props: {
      settings: {
        type: Array
      },

    },
    methods:{
      toggle(data){
        this.$emit('getCustomSetting',data)
      }
    }
  }

</script>
<style lang="scss" scoped>
  //settings
  .cookie-banner-settings {
    padding: var(--padding);
    padding-top: 1.8rem;
    margin-top: 2rem;
  }

  .cookie-banner-settings-list {
    padding: 0;
    list-style: none;
     @media (max-width:450px) {
         transform: translateY(-40px);
      }
  }

  .cookie-banner-settings {
    &-header{
      display: flex;
      align-items: center;
      margin-bottom: .4rem;
       @media (max-width:450px) {
         transform: translateY(-40px);
       }
    }
    &-header-sub{
       @media (max-width:450px) {
         transform: translateY(-40px);
       }
    }
    &-items {
      margin-top: 1.2rem;
      padding: .8rem 1rem;
      border-radius: .6rem;
      background-image: linear-gradient(to left, rgba(255, 255, 255, 0.02), #1c1e2b3d);
      transition: background-color .3s ease;
      cursor: pointer;

      &:hover {
        background-color: rgba(255, 255, 255, 0.06);
      }

      &--active {
        background-color: rgba(255, 255, 255, 0.06);
      }
    }

    &-box {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      transition: background-color .3s ease;

    }




    &-title {
      flex: 30%;
      font-weight: 600;
    }

    &-text {
      margin: 0;
      margin-top: .5rem;
      padding-right: 8vw;

    }
  }

</style>
