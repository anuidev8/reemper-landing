<template>
  <footer class="m-footer ">
    <div class="m-footer-wrapper">
      <div class="main-wrapper ">
        <div class="row">
          <div
            class="col-12 col-md-6 col-lg-3 d-flex  flex-column justify-center justify-md-start align-center align-md-start">
            <router-link to="/">
              <Logo :size="200" />
            </router-link>
            <p
            data-testid="description-footer"
              class="text-description white--text fw-light text-description tilte-sec-1 mt-1 text-center text-lg-left">
             Buscamos profesionales comprometidos con su profesión y el bienestar de la sociedad.
            </p>
            <aside class="contact-medias d-flex">

              <ul class="list-style-none d-flex justify-center contact-medias-items ">
                <li class="contact-social-media d-flex justify-center align-center">
                  <a data-testid="facebook-link" class="d-flex justify-center align-center" href="https://www.facebook.com/reempers">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512"
                      >
                      <path
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                      </path>
                    </svg>
                  </a>
                </li>
                <li class="contact-social-media d-flex justify-center align-center">
                  <a data-testid="instagram-link" class="d-flex justify-center align-center" href="https://www.instagram.com/reempers/">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512"
                     >
                      <path
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                      </path>
                    </svg>
                  </a>
                </li>
                <li class="contact-social-media d-flex justify-center align-center">
                  <a data-testid="email-link" class="d-flex justify-center align-center" href="mailto:atencioncliente@reemp.co">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512"
                      >
                      <path
                        d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z">
                      </path>
                    </svg>
                  </a>
                </li>
              </ul>
            </aside>
          </div>

          <div class="col-12 col-md-6 col-lg-3 d-flex flex-column align-center text-center text-md-left">
            <div class="footer-nav-wrapper">
              <h3 class="fw-bold primary--text footer-nav-title">Soporte</h3>
              <Links v-for="(item,key) in suportLinks " :key="key" :routerName="item.name" :router="item.router"
                :isLocal="item.isLocal" />

            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-3 d-flex flex-column align-center text-center text-md-left">
         <div class="footer-nav-wrapper">
              <h3 class="fw-bold primary--text footer-nav-title strategies-links">Líneas estratégicas</h3>
              <Links v-for="(item,key) in strategiesLinks " :key="key" :routerName="item.name" :router="item.router"
                :isLocal="item.isLocal" :testId="item.testId"/>

            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-3 d-flex flex-column align-center text-center text-md-left">
            <div class="footer-nav-wrapper">
              <h3 class="fw-bold primary--text footer-nav-title">Suscripción</h3>
              <div class="mt-2">
                <SuscriptionForm />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="copy-right-text d-flex justify-center">

      <p  class=" mb-0  px-0 py-0 text-center white--text f--ligth col-11 col-md-9">
          © 2021 GRUPO REEMP todo los derechos reservados. Informa que para la solicitud y acción de ejercicio de derecho sobre el manejo y protección de sus datos personales puede comunicarse al correo <a href="mailto:oficialmpdp@reemp.co" target="_blank" class="white--text text-decoration-none"> <b> oficialmpdp@reemp.co </b>  </a> o al teléfono  <a href="https://wa.me/573043725878?text=Hola!" target="_blank" class="text-decoration-none white--text"><b> +57304 372 5878.</b></a>
        </p>
    </div>
  </footer>
</template>
<script>
  //data example
  import {
    suportLinks,
  } from '@/utils/footerLinks'
  import footerLinkMixin from '@/mixins/footerLinks'

  export default {
    mixins:[footerLinkMixin],
    components: {
      Logo:()=>import('@/components/icons/brand/Logo'),
      Links:()=>import('@/components/FooterLink'),
      SuscriptionForm:()=>import('@/components/SuscriptionForm')
    },
    data() {
      return {
        suportLinks: suportLinks,

      }
    },

  }

</script>
<style lang="scss">
  .m-footer {
    background-color: #1B1D27;
    font-family: 'Helvetica', sans-serif;

    .m-footer-wrapper {
      padding: 3em 0;
    }

    .tilte-sec-1 {
      line-height: 1.4em;
      padding-right: 1em;
    }

    .contact-medias {
      margin-top: 2em;
    }

    .contact-medias-items {
      padding: 0;

      @media (max-width: 768px) {
        width: 180px;
        justify-content: space-between;
      }
    }

    .contact-social-media {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      border: 1px solid #fff;
      margin-right: 2.5em;

      @media (max-width: 768px) {
        margin-right: 1.2em;

      }
    }

    .contact-social-media a {

      color: #fff;

      & svg {
        width: 1.5em;
        height: 1.5em;
      }
    }

    .footer-nav-title {
      font-size: 1.4rem;

      @media (max-width: 768px) {
        font-size: 1.8rem;
      }
    }

    .footer-nav-wrapper {
      padding-top: 2em;
    }

    .copy-right-text {
      padding: 2.5em 0;
      background-color: #10121C;
      font-size: .9rem;

      @media (max-width: 768px) {
        font-size: 1rem;
        padding: .4em 2em;
      }
    }

    .text-description {
      font-size: 1.1rem;
    }

  }

</style>
