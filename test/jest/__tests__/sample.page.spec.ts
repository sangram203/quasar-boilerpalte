import Vue from 'vue'
import samplepage from 'pages/sample.page.vue'
describe('check for sum of two digit', ()=> {
  it('dsa', ()=>{
    const constructor = Vue.extend(samplepage)
    const vm:any  = new constructor().$mount()
    let ans:any = vm.sumOfTwoNumbers(2,2)
    expect(ans).toBe(4)
  })
})