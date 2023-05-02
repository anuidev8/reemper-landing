<template>
  <figure   :class="className">
    <svg width="100%" height="100%" viewBox="0 0 877.247 877.247">
      <defs>
        <linearGradient id="linear-gradient" x1="0.316" y1="-0.459" x2="0.525" y2="0.986"
          gradientUnits="objectBoundingBox">
          <stop offset="0" stop-color="#5cbef8" />
          <stop offset="0.705" stop-color="#1a1e22" />
          <stop offset="1" stop-color="#101010" />
        </linearGradient>
        <filter id="Rectangle_4">
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="28" result="blur" />
          <feFlood flood-color="#5cbef8" result="color" />
          <feComposite operator="out" in="SourceGraphic" in2="blur" />
          <feComposite operator="in" in="color" />
          <feComposite operator="in" in2="SourceGraphic" />
        </filter>
      </defs>
      <g data-type="innerShadowGroup">
        <path id="Rectangle_4-2" data-name="Rectangle 4"
          d="M132.871,93.512,411.745,8.251C510.878-22.057,615.812,33.737,646.12,132.871l85.26,278.874c30.308,99.134-25.486,204.067-124.619,234.375L327.887,731.38C228.753,761.688,123.82,705.894,93.512,606.761L8.251,327.887C-22.057,228.753,33.737,123.82,132.871,93.512Z"
          transform="matrix(0.978, -0.208, 0.208, 0.978, 0, 153.778)" opacity="0.671" fill="url(#linear-gradient)" />
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Rectangle_4)">
          <path id="Rectangle_4-3" data-name="Rectangle 4"
            d="M132.871,93.512,411.745,8.251C510.878-22.057,615.812,33.737,646.12,132.871l85.26,278.874c30.308,99.134-25.486,204.067-124.619,234.375L327.887,731.38C228.753,761.688,123.82,705.894,93.512,606.761L8.251,327.887C-22.057,228.753,33.737,123.82,132.871,93.512Z"
            transform="matrix(0.98, -0.21, 0.21, 0.98, 0, 153.78)" fill="#fff" opacity="0.671" />
        </g>
      </g>
    </svg>

  </figure>
</template>

<script>
  export default {
    props: {
      size: {
        type: String,
        default: "100%"
      },
      className: {
        type: String
      }
    }
  }

</script>


