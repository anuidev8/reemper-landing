export const state = () => ({
  showAppFlow: false,
  selectDataAppFlow: {},
  appDataFlow: [
    {
      id: "appDesktop",
      titleSection: "Perfil profesional",
      descriptionSection: "en la web",
      slides: [
        {
          description:
            "Una ves creado tu perfi Reemper, tendrás un perfil web donde podrás compartir tu portafolio de trabajo y sobre tí.",
        },
      ],
    },
    {
      id: "reemper",
      titleSection: "Perfil Reemper",
      slides: [
        {
          description:
            "Desarrollamos una vitrina digital que te permite construir tu portafolio profesional y ofrecer tus servicios laborales de manera fácil y concisa.",
        },
        {
          title: "Video de presentación",
          description:
            "Comparte un video sobre ti y tu carrera profesional para generar mayor confianza en aquellos nuevos usuarios/clientes potenciales.",
        },
        {
          title: "Añadir redes sociales",
          description:
            "Agrega más información sobre ti compartiendo distintos canales de comunicación como redes sociales o inclusive tu sitio web.",
        },
        {
          title: "Añadir estudios profesionales",
          description:
            "Adjunta documentos que certifiquen tu conocimiento y así generes mayor seguridad en tus usuarios/clientes.",
        },
        {
          title: "Agregar servicios profesionales",
          description:
            "Ofrece tus servicios profesionales y llévate el 100% de las ganancias.",
        },
        {
          title: "Calificaciones y reseñas",
          description:
            "Deja en evidencia el testimonio de tus usuarios ante su experiencia contigo.",
        },
      ],
    },
    {
      id: "ranking",
      titleSection: "Ranking profesional",
      slides: [
        {
          description:
            "Posiciónate dentro de tu categoría y mejora tu visualización dentro de las búsquedas de tus usuarios.",
        },
        {
          title: "Puesto/posición",
          description: "Marcador de tu posición y puntaje alcanzado actual.",
        },
        {
          title: "Resumen de tus puntos",
          description:
            "Acumula puntos por completar encuentros, las calificaciones de tu perfil Reemper y por responder preguntas de otros usuarios en el chat global.",
        },
        {
          title: "Ranking profesional",
          description:
            "Posiciona tu marca profesional y hazte notar más frente a la demanda de las necesidades de usuarios/clientes potenciales.",
        },
      ],
    },
    {
      id: "chat",
      titleSection: "Chat global",
      descriptionSection: "Responde y conecta",
      slides: [
        {
          description:
            "Te conectamos directamente con los problemas de los usuarios.",
        },
        {
          title: "Encuentros y respuestas del chat global",
          description:
            "Marcador con el número de encuentros realizados y el número de preguntas respondidas del chat global.",
        },
        {
          title: "Pregunta del chat global",
          description:
            "Responde las preguntas de usuarios/clientes y acércate más a las oportunidades.",
        },
        {
          title: "Preguntas sin responder del chat global",
          description: "Mostrador de preguntas en tiempo real sin responder.",
        },
      ],
    },
    {
      id: "profile",
      titleSection: "Perfil de tu servicio",
      slides: [
        {
          description:
            "Especializamos la manera en la que ofreces tus servicios y maximizamos las oportunidades para generar una venta.",
        },
        {
          title: "Video de presentación",
          description:
            "Muestras los detalles y beneficios de tu servicio a través de un video. De esta manera generarás una mejor impresión de los usuarios/clientes.",
        },
        {
          title: "Agregar promoción o descuento",
          description:
            "Establece promociones o descuentos atractivos para promover la venta de tu servicio.",
        },
        {
          title: "Modalidades de encuentros",
          description:
            "Configura los encuentros con tu servicio en 4 distintas modalidades:",
          list: [
            {
              name: "To go:",
              description: "Dirígete hacía donde tu usuario/cliente.",
            },
            {
              name: "Meeting:",
              description:
                "Establece cafés o coworking como punto de encuentro.",
            },
            {
              name: "Resident:",
              description:
                "Dispón de tu consultorio u oficina para generar tus encuentros.",
            },
            {
              name: "Videoconsulta",
              description:
                "Sin salir de casa, realiza una videollamada para atender a tu usuario/cliente.",
            },
          ],
        },
        {
          title: "Calificaciones y reseñas",
          description:
            "Comparte la satisfacción de tus usuarios/clientes después de completar un encuentro y permite que otros usuarios/clientes generen mayor confianza con tu servicio.",
        },
      ],
    },
  ],
});

export const getters = {
  getAppDataById: (state) => (id) => {
    return state.appDataFlow.find((data) => data.id === id);
  },
};

export const mutations = {
  SET_SHOW_APP_FLOW(state, payload) {
    state.showAppFlow = payload.state;
    state.selectDataAppFlow = payload.id
      ? state.appDataFlow.find((data) => data.id === payload.id)
      : null;
  },
};
