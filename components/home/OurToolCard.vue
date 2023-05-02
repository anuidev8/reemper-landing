<template>
  <article data-testid="tool-card"  @click="$emit('showModalApp')" :class="`tool-card white position-relative d-flex flex-column  align-center py-4 ${className}`">
    <div class="icon-container d-flex justify-center align-center">
    <slot></slot>

    </div>
    <p class="tool-card-title accent--text text-center mt-3 px-2">
      {{ title }}
    </p>

      <v-btn style="position:absolute"  icon class="primary position-absolute tool-card-link">
        <v-icon class="btn-icon" >{{ mdIcon.mdiArrowBottomRight }}</v-icon>
      </v-btn>

  </article>
</template>
<script>
  export default {
    props: {
      title: {
        type: String
      },
      router: {
        type: String
      },
      className:{
        type:String
      }
    },

  }

</script>
<style lang="scss" >
  .tool-card {
    height: 200px;
    border-radius: 1em;
    transform: translateY(0);
    box-shadow: 0px 0px 0px rgba(6, 197, 255, 0.3);
    transition: transform .3s ease,box-shadow .3s ease;
    cursor: pointer;

    &-icon{
      display: grid;
      place-items: center;
      width: 95px;
      height: 95px;
      border-radius: 50%;
    }
    &-icon svg{
      width: 3.6em;
      height: 3.6em;
    }
    &-link{
      bottom: -8%;

    }
    .btn-icon{
      transform-origin: center;
      transform: rotate(-45deg) translateX(0);
      transition: transform .3s ease;
    }
    &-link:hover{
      .btn-icon{
        transform: rotate(-45deg) translateX(3px);

      }
    }
  }

  .icon-container{

    height: 100px;
      @media (max-width:600px) {
        height: auto;
      }
  }
  @media (min-width:450px) {
   .tool-card:hover{
      transform: translateY(-10px);
      box-shadow: 0px 5px 35px rgba(6, 197, 255, 0.5);
    }

  }

</style>
