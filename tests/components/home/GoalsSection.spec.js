import { createLocalVue, shallowMount,mount } from '@vue/test-utils'
import GoalsSection from '@/components/home/GoalsSection';
import OurToolCard from '@/components/home/OurToolCard';
import OurToolsList from '@/components/home/OurToolsList';
import vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(vuex)

describe('goals section', () => {
  let wrapper ;
  let actions
  let state
  let store
  let mutations

  beforeEach(()=>{
    state = {
      appDataFlow:[]
    }
    actions = {
      onShowModalApp: jest.fn()
    }
    mutations ={
      SET_SHOW_APP_FLOW:jest.fn()
    }
    store = new vuex.Store({
      state,
      actions,
      mutations
    })

   wrapper =  shallowMount(GoalsSection, {
      localVue,
      stubs: {
        NuxtLink: true,
        MqLayout:true,
        OurToolCard:true
        // Any other component that you want stubbed
      },
          data:()=>{
        return{
          mdIcon:{
            mdiArrowBottomRight:()=>`<span>lo</span>`,
          }
        }
      },


    })
  })

  test('should render elements of goals section',  (done) => {

    const elementsByTestId = [
      'img[data-testid="reemper-logo"]',
      'h3[data-testid="goal-main-title"]',
      'p[data-testid="section-paragrahp"]',
      'h2[data-testid="second-title"]',
      'p[data-testid="second-section-paragrahp"]',
      'h2[data-testid="video-title"]',


    ]

    elementsByTestId.forEach((element) => {

      expect(wrapper.find(`${element}`).exists()).toBeTruthy()


    });
    done()
  })
  test('should show app screens modal ',async (done) => {
    const toolsWrapper = shallowMount(OurToolsList, {
      localVue,
      store,
      stubs: {
        NuxtLink: true,
        MqLayout:true,
        OurToolCard:true
      },

    })
    const home = shallowMount(OurToolsList, {
      localVue,

      stubs: {
        NuxtLink: true,
        MqLayout:true,
        OurToolCard:true
      },

    })

  await  toolsWrapper.vm.onShowModalApp({state:true,id:'appDesktop'})

  expect(mutations.SET_SHOW_APP_FLOW).toHaveBeenCalled()
  done()

  })


  test('should render elements a tool card', async (done) => {


   const toolsListWrapper = shallowMount(OurToolCard, {
      localVue,
      slots:{
        default:'<figure ><svg data-testid="tool-card-icon" ></svg></figure>'
      },
      data:()=>{
        return{
          mdIcon:{
            mdiArrowBottomRight:()=>`<span>lo</span>`,
          }
        }
      },

    })


      expect(toolsListWrapper.find(`article[data-testid="tool-card"`).exists()).toBeTruthy()
      expect(toolsListWrapper.find(`figure svg[data-testid="tool-card-icon"`).exists()).toBeTruthy()
    done()

  })


  test('should get the same video url', (done) => {
    const video = wrapper.find('video[data-testid="promotional-video"] source')
    expect(video.attributes('src')).toBe('https://res.cloudinary.com/dqhme1rod/video/upload/v1663100687/aqwhtw8v50y578ahleqv.mp4')
    done()
  })

})




