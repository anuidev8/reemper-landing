<template>
  <div class="app-modal d-flex justify-center align-center py-5 py-md-10 h-100 w-100">
    <div class="app-modal-container col-11 col-md-10 position-relative h-100 ">
      <v-btn @click="$emit('onClose')" icon style="position:absolute;top:2%;right:2%;z-index:100"  color="red">
      <figure >
        <v-icon color="red">{{ mdIcon.mdiCloseCircleOutline }}</v-icon>
      </figure>
      </v-btn>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .app-modal {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(48, 52, 56, .9);
    overflow-y: auto;
    z-index: 1000;
    &-container {
      background-color: #101010;
      border-radius: 1.5em;
       @media (max-width:480px) {
         max-height: 90vh;
         overflow-y: auto;
       }

    }


  }


</style>
