import { createLocalVue, shallowMount } from '@vue/test-utils'
import QuestionsSection from '@/components/home/QuestionsSection';




describe('QuestionsSection section', () => {
  const localVue = createLocalVue()
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(QuestionsSection, {
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

  test('Rendering elements of questions section', (done) => {



      expect(wrapper.findAll(`span.question-title`).length).toBe(14)
      expect(wrapper.vm.questions.length).toBe(14)

    done()

  })


})
