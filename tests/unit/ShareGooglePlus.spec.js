import { shallowMount } from '@vue/test-utils'
import ShareTwitter from '@/components/ShareGooglePlus.vue'

describe('ShareGooglePlus.vue', () => {
  it('renders html when passed', () => {
    const wrapper = shallowMount(ShareTwitter, {
      propsData: {
        url: 'http://recruit.istyle.co.jp/career/'
      }
    })
    let html = `<a class="googleplus--btn m circle" style="width: 35px; height: 35px; display: inline-block; overflow: hidden; position: relative; border-radius: 50%; box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12);"><rippleeffect-stub></rippleeffect-stub> <googlepluslogo-stub width="16" height="16"></googlepluslogo-stub></a>`
    expect(wrapper.html()).toMatch(html)
  })
})
