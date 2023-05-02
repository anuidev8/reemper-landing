export default {
  data() {
    return {
      currentPath: "",
      urlAppDownload:'https://play.google.com/store/apps/details?id=co.reemp.reemper.prod'
    };
  },
  methods: {
    isMode() {
      return this.currentPath.includes("dev") ? true : false;
    },
    goTo(id) {
      if (id) {
        try {
          const section = document.querySelector(`#${id}`)
          window.scrollTo(0, section.getBoundingClientRect().top)

        } catch (error) {

        }
      }
    },
    getOsType(){
      const androidUrl = 'https://play.google.com/store/apps/details?id=co.reemp.reemper.prod'
      const osUrl = 'https://apps.apple.com/app/reemper-ofrece-tus-servicios/id6444168734'
      let OSName = false
      let platform = navigator?.userAgentData?.platform || navigator?.platform || false
      if(platform.indexOf("Mac")!=-1 || platform.indexOf("iPhone")!=-1) {
        OSName = "MacOS"
        this.urlAppDownload =  osUrl
      }

     if(platform.indexOf("Win")!=-1 || platform.indexOf("Linux")!=-1  || platform.indexOf("Android")!=-1) {
        OSName = "Windows"
        this.urlAppDownload = androidUrl
      }

    }


  },
  computed: {
    strategiesLinks() {
      return [
        {
          name: "Reemp",
          router: `https://${this.isMode() ? "dev" : ""}reemp.co/`,
          isLocal: false,
        },
        {
          name: "Reemper",
          router: "/",
          isLocal: true,
        },
        {
          name: "Myreemper",
          router: `https://${this.isMode() ? "dev" : ""}myreemper.reemp.co/`,
          isLocal: false,
        },
        {
          name: "Reemp Seeker",
          router: 'false',
          isLocal: false,
        },

      ];
    },
    navBarLinks() {
      return [
        {
          name: "Inicio",
          router: `https://${this.isMode() ? "dev" : ""}reemp.co/`,
          isPage: false,
        },
        {
          name: "Descargar app",
          router: this.urlAppDownload,
          isPage: false,
        },
        {
          name: "Conocer tecnología",
          router: "goal-section",
          isPage: true,
        },
        {
          name: "My Reemper",
          router: `https://${this.isMode() ? "dev" : ""}myreemper.reemp.co/`,
          isPage: false,
        },
        {
          name: "My Reemper",
          router: "/about",
          isPage: false,
          isLocal: true,
        },
      ];
    },
  },
  mounted() {
    this.currentPath = window.location.href;
    this.getOsType()
  },
};
