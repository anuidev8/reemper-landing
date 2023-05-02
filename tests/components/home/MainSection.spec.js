import { createLocalVue, shallowMount } from '@vue/test-utils'
import MainSection from '@/components/home/MainSection';




describe('main section', () => {
  const localVue = createLocalVue()
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(MainSection, {
      localVue,
      stubs: {
        NuxtLink: true,
        MqLayout:true
        // Any other component that you want stubbed
      },
      data:()=>{
        return{
          getBoundingClientRect:{top:200},
          mdIcon:{
            mdiChevronRight:()=>`<span>lo</span>`,
          }
        }
      },
    })
  })

  test('Rendering elements of main section', () => {
    const elementsByTestId = [
      'main-logo',
      'navbar',
      'main-title',
      'description',
      'download-button',
      'main-image',
      'reemp-tag',
      'MyReemper-tag'
    ]

    elementsByTestId.forEach((element) => {
      expect(wrapper.find(`[data-testid="${element}"]`)).toBeTruthy()

    });
  })
  it('calls redirect to download section  when button is clicked',async (done) => {

    //find the button and trigger click event
    const goToMethod = jest.spyOn(wrapper.vm, 'goTo')
    await  wrapper.find('[data-testid="download-button"]').trigger('click');
    expect(goToMethod).toHaveBeenCalled()

    done()
})

it('should render at least four anchor tags elements from navBar',()=>{
  expect( wrapper.findAll('.navbar a').length).toBe(4)

})

})
