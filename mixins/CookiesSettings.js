export default {
  data() {
    return {
      currentPath:'xxx',
      settings: [
        {
          name: "Cookies técnicas",
          description:
            "Estas cookies son necesarias para que funcione la página web por lo que no pueden ser desactivadas.",
          state: true,
        },
        {
          name: "Cookies de personalización",
          description:
            "Con estas cookies podemos adaptar la visualización de la página web y personalizar sus opciones",
          state: false,
          key: 1,
        },
        {
          name: "Cookies analíticas",
          description:
            "Con estas cookies podemos analizar la navegación que realizas por nuestro sitio web para realizar estudios estadísticos sobre su uso.",
          state: false,
          key: 2,
        },
        {
          name: "Cookies publicitarias",
          description:
            "Con estas cookies podemos personalizar los anuncios mostrados en función a tus gustos, preferencias y navegación por nuestro sitio además de mostrarte publicidad de DO-MY en sitios de terceros.",
          state: false,
          key: 3,
        },
      ],
      analyticsScript: {
        name: "analytics",
        tag: `https://www.googletagmanager.com/gtag/js?id=${this.getAnalityCode()}`,
        script: (type = "granted", ads, custom) => {
          return `
          window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date()); gtag('config', '${this.getAnalityCode()}');

            ${`gtag('consent', 'default', {'analytics_storage': '${type}'});`}
            ${ads}
            ${custom}
           `;
        },
      },

      facebookScript: {
        name: "facebook",
        tag: false,
        script: (config) => {
          return ``;
        },
        noScript: () => {
          return `<img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=606025257064267&ev=PageView&noscript=1" />`;
        },
        meta: {
          name: `facebook-domain-verification`,
          content: `9znqe08i7g3bgud4jt1lxlohynxhfk`,
        },
      },
      hotjar: {
        name: "hotjar",
        script: () => {
          return `

          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3216844,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

      `;
        }
      }
    };
  },
  methods: {
    isMode() {
      return this.currentPath?.includes("dev") ? true : this.currentPath?.includes("http://localhost:3000") ? true : false;
    },
    getAnalityCode(){

      return this.isMode() ? 'G-K87KET7123' : 'G-7BFGSN0DP2'
    },
    createInnerScript(script, typeElement = "script") {
      let script_tag = document.createElement(typeElement);
      script_tag.text = script;
      document.head.appendChild(script_tag);
    },
    createSrcScript(src) {
      let doc = document.createElement("script");
      doc.setAttribute("src", src);
      doc.setAttribute("async", true);
      document.head.appendChild(doc);
    },
    createMetaTag(name, content) {
      let doc = document.createElement("meta");
      doc.setAttribute("name", name);
      doc.setAttribute("content", content);
      document.head.appendChild(doc);
    },
    mountedScript(cookie = "false", type = "null", customize = []) {
      if (type === "all") {
        //VALIDATE CUSTOM COOKIES IF EXIST ONE OF THE CUSTOMIZE CONFIG

        //analytic
        this.createSrcScript(this.analyticsScript.tag);
        this.createInnerScript(this.analyticsScript.script());

        //facebook
        /* HERE... */

        //hotjar
        //this.createInnerScript(this.hotjar.script());
      } else if (type === "custom") {

        this.createSrcScript(this.analyticsScript.tag);
        this.createInnerScript(
          this.analyticsScript.script(
            customize.includes(2) ? `granted` : "denied",
            !customize.includes(1)
              ? `gtag('config', '${this.getAnalityCode()}', { 'allow_google_signals': false });`
              : ``,
            !customize.includes(3)
              ? `gtag('config',  {'allow_ad_personalization_signals': false });`
              : ``
          )
        );

        //analytic

        //facebook
        /* HERE... */

        //hotjar
        //customize.includes(2) && this.createInnerScript(this.hotjar.script());
      } else {
        //hotjar
        //customize.includes(2) && this.createInnerScript(this.hotjar.script());

        this.createSrcScript(this.analyticsScript.tag);
        this.createInnerScript(
          this.analyticsScript.script(
            'granted',
            `gtag('config', '${this.getAnalityCode()}', { 'allow_google_signals': false });`,
            `gtag('config',  {'allow_ad_personalization_signals': false });`
          )
        );
      }
    },

  },
  mounted(){
    this.currentPath = window.location.href;
  }
};
