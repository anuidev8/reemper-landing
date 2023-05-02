<template>
  <section class="questions-section py-14">
    <div class="main-wrapper">
      <p class="mt-8 text-center accent--text text-question">¿Tienes preguntas?</p>
      <h2 class="section-title accent--text  mt-4 text-center">Aquí podemos ayudarte</h2>
      <div class="mt-8  px-lg-15">
        <v-expansion-panels light>
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="6" v-for="(item,i) in questions" :key="i">
              <v-expansion-panel class="mt-4">
                <v-expansion-panel-header class="expansion-panel" >
                  <span class="fw-livvic question-title">{{ item.title }}</span>
                  <template v-slot:actions>
                    <v-icon color="primary">
                      {{ mdIcon.mdiChevronDown  }}
                    </v-icon>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p class="fw-livvic question-description-text" v-if="!item.isHtmlContent">{{ item.description }}</p>
                  <p class="fw-livvic question-description-text" v-if="item.isHtmlContent" v-html="item.description"></p>
                </v-expansion-panel-content>
              </v-expansion-panel>

            </v-col>
          </v-row>
        </v-expansion-panels>
      </div>
    </div>
  </section>
</template>
<script>

  export default {
    data() {
      return {

        questions: [
          {
            title: '¿Qué es app Reemper?',
            description: 'Es una plataforma en donde los profesionales ofrecen sus servicios e interactúan con nuevos clientes potenciales.',
            isHtmlContent:false
          },
          {
            title: '¿Qué es un Reemper?',
            description: `Un Reemper es todo aquel profesional activo en nuestra plataforma.`,
            isHtmlContent:false
          },
          {
            title: '¿Qué beneficios tiene un profesional Reemper?',
            description: `
              <ul>
                <li>Recibe el 100%, sin comisiones.</li>
                <li>Automatiza procesos operativos y gana tiempo.</li>
                <li>Fortalece tu imagen profesional y la presencia de tus servicios en digital.</li>
                <li>Mejora tu interacción, accesibilidad y conexión con tus clientes.</li>
                <li>Programa encuentros en 4 modalidades (Resident, Meeting, To go, Virtual).</li>
                <li>Perfil profesional con portafolio de servicios detallado.</li>
                <li>Gestiona tus encuentros con la agenda automatizada.</li>
                <li>Obtén calificaciones y testimonios.</li>

              </ul>
             Actualmente nos encontramos trabajando para ampliar las categorías en nuestra App.
            `,
            isHtmlContent:true
          },
          {
            title: '¿Cuáles profesionales pueden ofrecer servicios en la app?',
            description: `
            Inicialmente profesionales relacionados a las categorías; <br />
            <ul>
            <li>Salud</li>
            <li>Legal</li>
            <li>Veterinario</li>
            </ul>
            Actualmente nos encontramos trabajando para ampliar las categorías en nuestra App.
            `,
            isHtmlContent:true
          },
          {
            title: '¿Cómo es el proceso de registro?',
            description: `Descargar la app Reemper e inicia el proceso de registro con tus datos básicos. La app te indicará el paso a paso de manera sencilla.`,
            isHtmlContent:false
          },
          {
            title: '¿Qué documentos solicitan para registrarme como Reemper?',
            description: `
              <ul>
              <li>Documento de Identidad</li>
              <li>Matrícula profesional</li>
              </ul>

              Tu documentación será tratada con confidencialidad.

            `,
            isHtmlContent:true
          },
          {
            title: '¿Cómo validan mis datos y documentos?',
            description: 'Contamos con un equipo especializado que verifica los datos y documentos suministrados por los profesionales, se evalúa la validez de la matrícula y se descarta la presencia de sanciones disciplinarias.',
            isHtmlContent:false
          },
          {
            title: '¿Es seguro proporcionar mis datos como profesional?',
            description: 'Si, nuestra aplicación Reemper presenta una estructura con 5 niveles de seguridad en los servidores para proteger los datos sensibles. Además, se tiene implementado el cifrado de extremo a extremo en tus conversaciones del chat interno con tus clientes. Puede ampliar la información en las políticas de privacidad y manejo de datos.',
            isHtmlContent:false
          },
          {
            title: '¿En qué lugar y que modalidad de encuentro puedo agendar con el cliente?',
            description: `
              Tipo de modalidades: <br />
              <ul>
              <li>Resident: Encuentro en el consultorio u oficina del profesional.</li>
              <li>Meeting:  Encuentro en uno de los café o coworking aliados. </li>
              <li>To go: Encuentro en su domicilio o lugar de preferencia.</li>
              <li>Videoconsulta: Encuentro virtual en tiempo real desde cualquier lugugar.</li>

              </ul>

            `,
            isHtmlContent:true
          },
          {
            title: '¿Cómo agendo un encuentro con un cliente?',
            description: 'Es muy sencillo, el cliente podrá visualizar tu perfil a través de la aplicación My Reemper, si cumples con el perfil solicitado de acuerdo a su necesidad, el enviará un mensaje para concretar dicho encuentro a través de las diversas modalidades que tengas habilitadas. ',
            isHtmlContent:false
          },
          {
            title: '¿Cómo recibo el pago de mis clientes?',
            description: 'Puedes escoger el método de pago de tu preferencia (Efectivo, transferencias directas a tu cuenta, datáfono, o cualquier otro que se ajuste a tu necesidad).',
            isHtmlContent:false
          },
          {
            title: '¿Cómo le puedo dar visibilidad a mi perfil?',
            description: `
              <ul style="list-style-type:decimal;">
                <li>Haz tu perfil atractivo (videos y textos concisos) </li>
                <li>Coloca el enlace de tu perfil en redes sociales </li>
                <li> Responde dudas en el chat global para ganar puntos y subir en el ranking</li>
                <li>Pide a tus clientes realizar testimonio de tus servicios</li>
              </ul>

            `,
            isHtmlContent:true
          },
          {
            title: '¿La aplicación me cobra un porcentaje por cada cliente que atienda? ',
            description: 'No, no hay comisiones, tú obtienes el 100% de las ganancias de tus servicios. ',
            isHtmlContent:false
          },
          {
            title: '¿La app es pesada?',
            description: 'La App Reemper es liviana, el espacio utilizado es de 60 Mb.',
            isHtmlContent:false
          },


        ]
      }
    }
  }

</script>
<style lang="scss" scoped>
  .questions-section {
    background-color: #F2F2F2;
  }

  .text-question {
    font-size: 1.2rem;
  }

  .question-description-text{
    font-size: .9rem;
  }

</style>
