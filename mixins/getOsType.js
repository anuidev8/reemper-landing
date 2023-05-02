export default{
  data(){
    return{
      urlAppDownload:'https://play.google.com/store/apps/details?id=co.reemp.reemper.prod'
    }
  },
  methods:{
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
  mounted(){
    this.getOsType()
  }

}
