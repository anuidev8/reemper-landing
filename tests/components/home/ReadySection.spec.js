import { createLocalVue, shallowMount } from '@vue/test-utils'
import ReadySection from '@/components/home/ReadySection';




describe('ReadySection section', () => {
  const localVue = createLocalVue()
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(ReadySection , {
      localVue,
      data:()=>{
        return{
          mdIcon:{
            mdiChevronRight:()=>`<span>lo</span>`,
          }
        }
      },
    })
  })

  test('Rendering elements of ready section',async (done) => {

      const downloadButton = wrapper.find(`a[data-testid="ready-button-section"]`)

      expect(wrapper.find(`h2[data-testid="ready-title-section"]`).exists()).toBeTruthy()
      expect(downloadButton.exists()).toBeTruthy()
      await downloadButton.trigger('click')

    expect(downloadButton.attributes('target')).toBe('_blank')
    expect(downloadButton.attributes('href')).toBe('/')


    done()

  })


})
