<template>
  <form class="suscription-form" @submit.prevent="handleSubmit">
    <div class="mt-5 mt-lg-0">
      <input data-testid="username-input" v-model="dataUser.name" class="suscription-input w-100" type="text" name="fullname"
        placeholder="Nombre completo" required />
    </div>
    <div class="mt-4 mt-lg-2">
      <input data-testid="email-input" v-model="dataUser.email" class="suscription-input w-100" type="email" name="email"
        placeholder="Correo electrónico" required />
    </div>
    <div class="form-check  d-flex justify-center mt-4">
      <input data-testid="check-input" v-model="dataUser.isAccept" class="suscription-check" type="checkbox" value="" id="invalidCheck">
      <label data-testid="conditions-text" class="white--text f--light politics-label" for="invalidCheck">
        Acepto las condiciones de uso y <br> <a target="_blank" href="https://prodreemppublic.s3.amazonaws.com/politicas/Politicas+MPDP+versi%C3%B3n+(001)+14-0322-1.pdf"
          class="primary--text politics-link">políticas de
          privacidad de datos</a>
      </label>
    </div>
    <p v-if="dataUser.error">{{ dataUser.error }}</p>
    <v-btn type="submit" solo color="primary" class="main-btns btn-action text-none btn-radius mt-4 ">
      <span data-testid="submit-button" class="d-flex align-center" v-html="isLoading.message"></span>
    </v-btn>

  </form>
</template>
<script>

  import subscriptionMutation from '@/apollo/mutations/subscription.graphql'
  export default {

    data() {
      return {
        dataUser: {
          name: null,
          email: null,
          isAccept: false,
          error: false
        },
        isLoading: {
          state: false,
          message: 'SUSCRIBIRME'
        }
      }
    },
    methods: {
      async handleSubmit(e) {

        const {
          name,
          email,
          isAccept
        } = this.dataUser

        if (name && email) {

          this.dataUser.error = false
          this.isLoading.message = 'ENVIANDO..'

          fetch('https://ipapi.co/json/').then(res => {
            const resData = res.json()
            resData.then(({
              ip,
              city
            }) => {
              let data = {
                name,
                fullname: name,
                email,
                creadoEnIp: ip,
                acepta: isAccept,
                sitio: window.location.href,
                location: city
              }
              this.$apollo.mutate({
                  mutation: subscriptionMutation,
                  variables: data
                })

                .then((res) => {

                  this.dataUser.name = null,
                    this.dataUser.email = null,
                    this.dataUser.isAccept = false
                  this.isLoading.message = `

              <svg class="translate-y" stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 1024 1024" height="1.2rem" width="1.2rem" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
              <span class="appear mt-1 ml-1">ENVIADO</span>
              `
                })
                .catch(err => {

                  if (err) {
                    this.isLoading.message = `Intentelo de nuevo`
                  }
                })

            })
          })
        } else {
          this.dataUser.error = 'Completa los campos'
        }
      }
    }
  }

</script>
<style lang="scss" scoped>
  .politics-label {
    line-height: 1.5em;
    font-size: .9rem;
  }

  .suscription-check {
    transform: scale(1.3);
    background-color: #fff;
    border: none;
    margin-top: 5px;
    margin-right: 7px;
  }

  .suscription-input {
    padding: .85em 2em;
    border: none;
    background-color: #565C7A;
    color: #fff;
    border-radius: .5em;
    font-size: .9rem;

    &::placeholder {
      color: #fff;
    }

    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
      padding: 1em;
      font-size: 1.25rem;
    }
  }

  .suscription-form {
    @media (max-width: 768px) {
      width: 300px;


    }
  }

</style>
