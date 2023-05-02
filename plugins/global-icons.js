import Vue from 'vue'
import {
  mdiChevronRight,
  mdiChevronLeft,
  mdiArrowBottomRight,
  mdiRecord,
  mdiPlus,
  mdiCloseCircleOutline,
  mdiChevronDown,
  mdiFormatHorizontalAlignRight,
  mdiDownload

} from '@mdi/js'
Vue.mixin({
  data:()=>{
    return{
      mdIcon:{
        mdiChevronRight:mdiChevronRight,
        mdiArrowBottomRight:mdiArrowBottomRight,
        mdiRecord:mdiRecord,
        mdiChevronLeft:mdiChevronLeft,
        mdiPlus:mdiPlus,
        mdiCloseCircleOutline:mdiCloseCircleOutline,
        mdiChevronDown:mdiChevronDown,
        mdiFormatHorizontalAlignRight:mdiFormatHorizontalAlignRight,
        mdiDownload:mdiDownload

      }
    }
  }
})
