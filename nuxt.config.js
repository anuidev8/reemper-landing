import colors from "vuetify/es5/util/colors";
import minifyTheme from 'minify-css-string'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  loading: {
    color: 'blue',
    height: '10px',
    failedColor:'red'
  },


  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  head: {
    title: "Reemper & My Reemper",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [

      {
        type:'text/javascript',
        innerHTML: `

        (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:3216844,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

        `,
        body:true,
        defer:true
      },
      {
        type:'text/javascript',
        innerHTML: `

        !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '329709695455649');
fbq('track', 'PageView');

        `,
        body:true,
        defer:true
      },
     /*  {
        type:'text/javascript',
        innerHTML: `

        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NFRZL2H');
        `,
        body:true,
        defer:true
      }, */
    ],
    __dangerouslyDisableSanitizers: ['script']
  },

  css: ["~/assets/scss/main.scss"],

  plugins: [
    { src: "@/plugins/vue-fragment", ssr: false },
    { src: "@/plugins/vue-mq", ssr: false },
    { src: "@/plugins/global-icons"},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxtjs/dotenv",
    'nuxt-purgecss'

  ],
  purgeCSS: {
    // your settings here
    mode: 'postcss',
    enabled: ({ isDev, isClient }) => (!isDev && isClient), // or `false` when in dev/debug mode
    paths: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js'
    ],
    styleExtensions: ['.css'],
    whitelist: ['body', 'html', 'nuxt-progress'],
    extractors: [
      {
        extractor: content => content.match(/[A-z0-9-:\\/]+/g) || [],
        extensions: ['html', 'vue', 'js']
      }
    ]
   },
  env: {
    BASE_TOKEN_URL: process.env.BASE_TOKEN_URL,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

    "@nuxtjs/pwa",
    "@nuxtjs/apollo",
    'nuxt-ssr-cache'

  ],

  cache: {
    useHostPrefix: false,
    pages: [
      // these are prefixes of pages that need to be cached
      // if you want to cache all pages, just include '/'
      '/index',

    ],



    store: {
      type: 'memory',

      // maximum number of pages to store in memory
      // if limit is reached, least recently used page
      // is removed.
      max: 100,

      // number of seconds to store this page in cache
      ttl: 60 * 60 * 24,
    },
  },
  bundleRenderer: {
    shouldPreload: (file, type) => {
      return ["script", "style", "font"].includes(type)
    },
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '.',
      name: true,
      maxSize: 244000,
      cacheGroups: {
        vendor: {
          name: 'node_vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          maxSize: 244000
        }
      }
    }
  },
  //APOLLO
  apollo: {
    includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
    // optional
    errorHandler: "~/apollo/errorHandler.js",
    // required
    clientConfigs: {
      default: "~/apollo/clientConfig.js",
    },
    authenticationType: "", // optional, default: 'Bearer'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },


  vuetify: {
    customVariables: ["~/assets/variables.scss"],
     defaultAssets: false,
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: "#209EE9",
          accent: "#1B1D27",
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
      options:{minifyTheme}
    },

  },


  build: {
    extractCSS: true,
    html:{
      minify:{
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true
      }
    },
    
  },
};
