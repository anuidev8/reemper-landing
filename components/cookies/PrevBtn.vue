<template>
    <button class="prev-btn" @click="onPrev">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.6em" width="1.6em" ><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path></svg>
    </button>
</template>
<script>
export default {
  methods:{
    onPrev(){
      this.$emit('onPrev')
    }
  }
}
</script>
<style lang="scss" scoped>
    .prev-btn{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.75rem;
      height:1.75rem;
      margin-right: .8rem;
      background-color: rgba(255,255,255,.45);
      border-radius: 50%;
      border:none;
      color: #fff;
        transition: background-color .3s ease;
      &:hover{
        background-color: rgba(255,255,255,.6);
      }
      & svg{
        transform: translateX(0);
        transition: transform .3s ease;
      }
      &:hover svg{
        transform: translateX(-.2rem);
      }
    }
</style>
