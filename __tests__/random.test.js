
const add=require('../lib/random.js')
test('check the sum',()=>{
  expect(add()).toBeGreaterThanOrEqual(1)
  expect(add()).toBeLessThanOrEqual(10)
})