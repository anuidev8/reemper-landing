<template>

        <ul class="list-style-none footer-nav-items">
            <li class="footer-nav-item">
                <a :data-testid="testId" translate="no" v-if="!isLocal && router != 'false'" :href="router" target="_blank" :class="`white--text text-decoration-none f--light ${testId}`" :to="router">
                        {{ routerName  }}
                </a>
                <a translate="no" v-if="!router && router === 'false'"  :style="`opacity:${routerName === 'Reemp Seeker' ? '.3' : '1'};`" class="white--text text-decoration-none f--light" >
                        {{ routerName  }}
                </a>
                <nuxt-link  v-if="isLocal" :to="router" class="white--text text-decoration-none">{{ routerName }}</nuxt-link>
            </li>
        </ul>
</template>
<script>
export default {
    props:{
        router:{
            type:String,
            default:'/'
        },
        routerName:{
            type:String
        },
        testId:{
            type:String
        },
        isLocal:{
          type:Boolean
        },
    },
    computed:{
      getMode(){
        const currentPath = window.location.href;
        let isPathIsValid = false;
        isPathIsValid = currentPath.includes("dev") ? true : false;
         let currentApiUrl;
        if (isPathIsValid) {
          return true
        } else {
          currentApiUrl =
            process.env.NODE_ENV === "development"
              ? true
              : false
        }

        return currentApiUrl;


      }
    }
}
</script>
<style lang="scss" scoped>
    .footer-nav-items{
        padding: 0;
    }
    .footer-nav-item{
        margin-top: .8em;
    }
    .footer-nav-item a{
           @media (max-width: 768px) {
               font-size: 1.25rem;
           }
    }

  .f--light {
    font-family: Helvetica, 'Helvetica-Light';
    font-weight: lighter;
}

.f--bold {
    font-weight: bold;
}


</style>
