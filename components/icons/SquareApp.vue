<template>
  <figure data-testid="figure" :style="{width:`${size}`}" :class="className">
   <svg  width="100%" height="100%" viewBox="0 0 654.047 654.047">
  <defs>
    <linearGradient id="linear-gradient" x1="1.59" y1="-2.471" x2="0.663" y2="1.112" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#5cbef8"/>
      <stop offset="1" stop-color="#1a1e22"/>
    </linearGradient>
  </defs>
  <path id="Rectangle_4" data-name="Rectangle 4" d="M87.869,61.841,272.293,5.457a124.128,124.128,0,0,1,155,82.413l56.384,184.424a124.128,124.128,0,0,1-82.413,155L216.836,483.673a124.128,124.128,0,0,1-155-82.413L5.457,216.836A124.128,124.128,0,0,1,87.869,61.841Z" transform="matrix(0.438, 0.899, -0.899, 0.438, 439.626, 0)" fill="url(#linear-gradient)"/>
</svg>


  </figure>
</template>

<script>
  export default {
    props: {
      size: {
        type: String,

      },
      className: {
        type: String
      }
    }
  }

</script>
<style lang="scss" scoped>
  @media (max-width: 430px) {
    .about-section {
      padding-top: 1em;
    }
  }
</style>
