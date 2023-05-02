import { createLocalVue, shallowMount } from '@vue/test-utils'
import TransformSection from '@/components/home/TransformSection';




describe('transform section', () => {
  const localVue = createLocalVue()
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(TransformSection, {
      localVue,

    })
  })

  test('Rendering elements of transform section', (done) => {

    const elementsByTestId = [
      'img[data-testid="transform-image-section"]',
      'h3[data-testid="transform-title-section"]',
      'p[data-testid="transform-description-section"]',

    ]

    elementsByTestId.forEach((element) => {

      expect(wrapper.find(`${element}`).exists()).toBeTruthy()


    });
    done()

  })


})
