import chai from 'chai'
import { checked, allChecked } from '../src/js/check'
import { days, periods } from '../src/js/model'

const assert = chai.assert

describe('check.js', () => {
  it('should return the right day change', () => {
    const result = { isAllSelected: false, array: [{ time: 'السبت', selected: true }, { time: 'الاحد', selected: false }, { time: 'الاثنين', selected: false }, { time: 'الثلاثاء', selected: false }, { time: 'الاربعاء', selected: false }, { time: 'الخميس', selected: false }, { time: 'الجمعه', selected: false }] }

    assert.deepEqual(checked(days, { checked: true, index: 0, item: "السبت" }), result)

  });

  it('should return the right period change', () => {
    const result = { isAllSelected: false, array: [{ time: 'الفجر', selected: false }, { time: 'الظهر', selected: false }, {
        time: 'العصر', selected: false }, { time: 'المغرب', selected: false }, { time: 'العشاء', selected: false }] }
    
    assert.deepEqual(checked(periods, { checked: false, index: 3, item: "المغرب" }), result)
  })


  it('should return days All Checked', () => {
    const result = { isAllSelected: true, array: [{ time: 'السبت', selected: true }, { time: 'الاحد', selected: true }, { time: 'الاثنين', selected: true }, { time: 'الثلاثاء', selected: true }, { time: 'الاربعاء', selected: true }, { time: 'الخميس', selected: true }, { time: 'الجمعه', selected: true }] }

    assert.deepEqual.apply(allChecked(days), result)
  })
  it('should return periods All Checked', () => {
    const result = { isAllSelected: true, array: [{ time: 'الفجر', selected: true }, { time: 'الظهر', selected: true }, {
        time: 'العصر', selected: true}, { time: 'المغرب', selected: true }, { time: 'العشاء', selected: true }] }

    assert.deepEqual.apply(allChecked(periods), result)
  })
});

