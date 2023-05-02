<template>
  <figure :style="{width:`${size}`}" :class="className">
    <svg width="100%" height="100%" viewBox="0 0 630.457 630.457">
      <path id="Rectangle_4" data-name="Rectangle 4"
        d="M80.687,56.786,250.036,5.011A113.982,113.982,0,0,1,392.363,80.687l51.775,169.349a113.982,113.982,0,0,1-75.676,142.326L199.112,444.138A113.982,113.982,0,0,1,56.786,368.461L5.011,199.112A113.982,113.982,0,0,1,80.687,56.786Z"
        transform="matrix(0.616, 0.788, -0.788, 0.616, 353.934, 0)" fill="rgba(92,190,248,0.04)" />
    </svg>

  </figure>
</template>
<script>
  export default {
    props: {
      size: {
        type: String
      },
      className: {
        type: String
      }
    }
  }

</script>
