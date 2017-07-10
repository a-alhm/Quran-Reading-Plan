import chai  from'chai'
import plan from '../src/js/plan'
import { sur } from '../src/js/model'

const assert = chai.assert

describe('plan.js', () => {
  it('should return the right length', () => {
    assert.lengthOf(plan(4, 4, 4, sur), 64);
    assert.lengthOf(plan(20, 7, 5, sur), 700);
    assert.lengthOf(plan(1, 1, 1, sur), 1);
  });

  it('should return the right result', () => {
    const result = [{end: {ayat: 50,name: "الإسراء"},start: {ayat: 1,name: "الفاتحة"}},{end: {ayat: 25,name: "غافر"},start: {ayat: 51,name:"الإسراء"}},{end:{ayat: 6,name: "الناس"},start:{ayat: 26,name: "غافر"}}]

      assert.deepEqual(plan(3, 1, 1, sur), result);
  })
});

