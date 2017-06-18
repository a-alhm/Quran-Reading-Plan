<template>
  <div class='main'>
      <button @click='right' class='right btn'>&lt;</button>
      <button @click='left' class='left btn'>&gt;</button>
    <div class="con">
      <dayPlane :plan='plan[0][0]'></dayPlane>
    </div>
    <div class="con">
      هل انتهيت من قراءة هذا اليوم؟
      <checkboxes item='نعم' :selected='plan[0][0].done' @valueChanged='checkedDay'></checkboxes>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      plan: JSON.parse(localStorage.plan)
    }
  },
  methods: {
    right() {
      if (this.plan[1].length >= 1)
        this.plan[0].unshift(this.plan[1][this.plan[1].length - 1])
      this.plan[1].pop()
    },
    left() {
      if (this.plan[0].length > 1) {
        this.plan[1].push(this.plan[0][0])
        this.plan[0].shift()
      }
    },
    checkedDay(data) {
      this.plan[0][0].done = data.checked;
       localStorage.plan = JSON.stringify(this.plan)
    }
  }
}
</script>

<style>
.main{
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  position: relative;
  margin: 30px auto
}
.red,
.green {
  color: white
}

.red {
  background-color: red
}

.green {
  background-color: green
}

.left {
  left: 1px;
}

.right {
  right: 1px;
}

.con {
  width: initial;
  margin: 10px auto;
  background-color: #f3e8d6;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
  padding: 10px;
  text-align: center;
}

h1 {
  color: goldenrod;
  text-align: center
}

.right,
.left {
  position: absolute;
}

.hide {
  display: none
}
/*
@media screen and (min-width: 500px) {
  .con {
    width: 400px
  }
}
*/
</style>
