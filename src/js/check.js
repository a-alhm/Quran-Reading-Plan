export let checked = (obj, data) => {
  obj.array[data.index].selected = data.checked
  obj.isAllSelected = obj.array.every(ele => ele.selected)

  return obj
}

export function allChecked (obj, callback = checked) {
  obj.isAllSelected = !obj.isAllSelected
  if (obj.isAllSelected) {
    obj.array.forEach((item, index) => {
      callback(obj, { item: item.time, checked: true, index })
    })
  }
}
