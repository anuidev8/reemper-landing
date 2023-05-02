import { createLocalVue, shallowMount } from '@vue/test-utils'
import ReemperSection from '@/components/home/ReemperSection';




describe('myreemper section', () => {
  const localVue = createLocalVue()
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(ReemperSection, {
      localVue,
      stubs: {
        NuxtLink: true,

        // Any other component that you want stubbed
      },
      data:()=>{
        return{
          mdIcon:{
            mdiChevronRight:()=>`<span>lo</span>`,
          }
        }
      },
    })
  })

  test('Rendering elements of myreemper section', (done) => {

    const elementsByTestId = [
      'img[data-testid="myreemper-image-section"]',
      'h3[data-testid="myreemper-title-section"]',
      'p[data-testid="myreemper-description-section"]',
      'figure[data-testid="MyReemper-tag"]',
      'a[data-testid="myreemper-btn-section"]',


    ]

    elementsByTestId.forEach((element) => {

      expect(wrapper.find(`${element}`).exists()).toBeTruthy()


    });
    done()

  })


  test('should redirect to myreemper landing page', async () => {
    const button = wrapper.find('a[data-testid="myreemper-btn-section"]')
    await button.trigger('click')

    expect(button.attributes('target')).toBe('_blank')
    expect(button.attributes('href')).toBe('https://myreemper.reemp.co/')
  })

})
