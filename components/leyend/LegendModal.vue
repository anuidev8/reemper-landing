<template>
  <section class="legend-modal ">
    <article class="legend-modal-container translate-y">
      <h2 class="legend-modal-title">LEYENDA AUTORIZACIÓN ENTORNOS WEB</h2>
      <p class="legend-modal-paragraph">Al diligenciar este formulario, usted en calidad de titular de la información,
        autoriza a <span class="legend-modal-reference"><b> GRUPO REEMP S.A.S. (en adelante REEMP)</b></span>,y/o a la
        persona natural o jurídica a quién este encargue, a realizar el tratamiento a los datos personales por usted
        suministrados, para todos aquellos aspectos inherentes a las actividades comerciales y promocionales, y
        cualquier otro relacionado con el desarrollo del objeto social principal de <span
          class="legend-modal-reference"><b> REEMP. </b></span> Las finalidades del tratamiento, así como los derechos
        que le corresponden como Titular los podrá conocer en nuestra Política de tratamiento de datos personales en la
        página
        <a class="legend-modal-link" href="https://prodreemppublic.s3.amazonaws.com/politicas/Politicas+MPDP+versi%C3%B3n+(001)+14-0322-1.pdf" target="_blank" hreflang="es-en"><b>
            https://tinyurl.com/reempPolicies</b></a></p>

      <ul class="legend-modal-actions ">
        <li>
          <button @click="$emit('onContinue')" class="legend-modal-buttons legend-modal-buttons--accept appear">Continuar
          </button>
        </li>
      </ul>

    </article>
  </section>
</template>
<style lang="scss" scoped>
  h2,
  h2,
  h3 {
    margin: 0;
  }

  .legend-modal {
    --primary-color: #32A5EA;
    --secondary-color: #9da6d8;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.3);
    width: 100%;
    height: 100vh;
    overflow: auto;
    z-index: 1000;


    &-container {
      display: flex;

      align-items: center;
      flex-direction: column;
      width: 50vmax;
      /*  height: 40vmax; */
      height: auto;
      padding: 5vmin 2vw;
      background-color: #272b3d;
      border-radius: .5rem;
      border-bottom: 4px solid var(--primary-color);
       @media (max-width:450px) {
         width: 43vmax;
         padding: 5vmin 4vw;
       }

    }

    &-title {
      width: 100%;
      padding-bottom: .6rem;
      border-bottom: 1px solid #474f6d;
      margin-bottom: 1rem;
      font-size: 1.3rem;
      text-align: center;
    }

    &-link {
      color: white;
    }

    &-reference {
      color: var(--primary-color);
    }

    &-paragraph {
      text-align: justify;
      margin-top: 1rem;
      line-height: 1.8rem;
      font-size: 1rem;
      @media (max-width:450px) {
         text-align: center;
       }
    }

    &-actions {
      display: flex;
      flex-wrap: wrap;

      margin: 0;
      margin-top: 2rem;

      list-style: none;

      @media (max-width:450px) {
        justify-content: center;
      }
    }

    &-buttons {
      border: none;
      padding: 0 .9rem;
      width: 12rem;
      height: 50px;
      border-radius: 0.6em;
      margin-right: 1rem;
      font-size: 1rem;
      font-weight: 500;
      transition: background-color .3s ease;

    }

    &-buttons--accept {
      background-color: #3ea8eb;
      color: white;

      &:hover {
        background-color: #378cc2;
      }
    }

  }

</style>
