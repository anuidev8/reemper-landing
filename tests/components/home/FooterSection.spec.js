import { createLocalVue, shallowMount } from '@vue/test-utils'
import FooterSection from '@/components/FooterSection';
import FooterLink from '@/components/FooterLink';

import { strategiesLinks } from '../../../utils/footerLinks';


describe('myreemper section', () => {
  const localVue = createLocalVue()
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(FooterSection, {
      localVue,
      stubs: {
        NuxtLink: true,
        routerLink:true,
        SuscriptionForm:true

        // Any other component that you want stubbed
      },
      data:()=>{
        return{

        }
      },
    })
  })

  test('Rendering first column ', (done) => {

    const elementsByTestId = [
      'p[data-testid="description-footer"]',
      'figure[data-testid="main-logo"]',
      'a[data-testid="facebook-link"]',
      'a[data-testid="instagram-link"]',
      'a[data-testid="email-link"]',



    ]

    elementsByTestId.forEach((element) => {

      expect(wrapper.find(`${element}`).exists()).toBeTruthy()


    });


    done()

  })




})
