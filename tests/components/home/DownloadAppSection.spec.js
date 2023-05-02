import { createLocalVue, shallowMount } from '@vue/test-utils'
import DownloadAppSection from '@/components/home/DownloadAppSection';




describe('download section', () => {
  const localVue = createLocalVue()
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(DownloadAppSection, {
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

  test('Rendering elements of download section', (done) => {

    const elementsByTestId = [
      'img[data-testid="myreemper-image-section"]',
      'img[data-testid="playStore-image"]',
      'img[data-testid="appleStore-image"]',
      'h2[data-testid="download-title-section"]',
      'h3[data-testid="myreemper-description-section"]',
      'figure[data-testid="MyReemper-tag"]',
      'figure[data-testid="reemp-tag"]',
      'a[data-testid="download-playStore-link"]',
      'a[data-testid="download-appleStore-link"]',


    ]

    elementsByTestId.forEach((element) => {

      expect(wrapper.find(`${element}`).exists()).toBeTruthy()


    });
    done()

  })

  test('should redirect to download myreemper app', async () => {
    const playStoreLink = wrapper.find('a[data-testid="download-playStore-link"]')
    const appleStoreLink = wrapper.find('a[data-testid="download-appleStore-link"]')
    await playStoreLink.trigger('click')
    await appleStoreLink.trigger('click')

    // validate utl to redirect to PlayStore
    expect(playStoreLink.attributes('target')).toBe('_blank')
    expect(playStoreLink.attributes('href')).toBe('/')

    // validate utl to redirect to AppStore
    expect(appleStoreLink.attributes('target')).toBe('_blank')
    expect(appleStoreLink.attributes('href')).toBe('/')
  })


})
