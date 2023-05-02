<template>
  <figure :style="{width:`${size}`}" :class="className">
   <svg  width="100%" height="100%" viewBox="0 0 756.047 756.047">
  <defs>
    <linearGradient id="linear-gradient-1" x1="1.59" y1="-2.471" x2="0.663" y2="1.112" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#5cbef8"/>
      <stop offset="1" stop-color="#1a1e22"/>
    </linearGradient>
    <filter id="Rectangle_45" x="0" y="0" width="756.047" height="756.047" filterUnits="userSpaceOnUse">
      <feOffset input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="17" result="blur"/>
      <feFlood flood-color="#5cbef8" flood-opacity="0.647"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Rectangle_45)">
    <path id="Rectangle_4-2" data-name="Rectangle 4" d="M87.869,61.841,272.293,5.457a124.128,124.128,0,0,1,155,82.413l56.384,184.424a124.128,124.128,0,0,1-82.413,155L216.836,483.673a124.128,124.128,0,0,1-155-82.413L5.457,216.836A124.128,124.128,0,0,1,87.869,61.841Z" transform="matrix(0.44, 0.9, -0.9, 0.44, 490.63, 51)" fill="url(#linear-gradient-1)"/>
  </g>
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
