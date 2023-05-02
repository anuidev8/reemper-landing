import { createLocalVue, shallowMount } from '@vue/test-utils'
import AboutSection from '@/components/home/AboutSection';




describe('about section', () => {
  const localVue = createLocalVue()
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(AboutSection, {
      localVue,

    })
  })

  test('Rendering elements of about section', () => {
    const elementsByTestId = [
      'about-title',
      'description',
      'app-image',
      'figure',

    ]

    elementsByTestId.forEach((element) => {
      expect(wrapper.find(`[data-testid="${element}"]`)).toBeTruthy()

    });
  })

})
