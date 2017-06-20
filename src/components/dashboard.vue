<template>
  <div class='main'>
    <button @click='moveRight' class='right btn'>&lt;</button>
    <button @click='moveLeft' class='left btn'>&gt;</button>
    <div class="con">
      <dayPlane :plan='right[0]'></dayPlane>
    </div>
    <div class="con">
      هل انتهيت من قراءة هذا اليوم؟
      <checkboxes item='نعم' :selected='right[0].done' @valueChanged='checkedDay'></checkboxes>
    </div>
  </div>
</template>
 
<script>
export default {
  created() {
    //day = 86400000 Milliseconds
    let today = Math.floor((new Date().getTime()) * 1.15740740741E-8);
        while(this.right[0].dayInMilliseconds < today){
            this.moveLeft()
        }
  },
  data() {
    return {
      right: JSON.parse(localStorage.plan),
      left: []
    }
  },
  methods: {
    moveRight() {
      if (this.left.length >= 1)
        this.right.unshift(this.left[this.left.length - 1])
      this.left.pop()
    },
    moveLeft() {
      if (this.right.length > 1) {
        this.left.push(this.right[0])
        this.right.shift()
      }
    },
    checkedDay(data) {
      this.right[0].done = data.checked;
    }
  }
}
</script>

<style>
.main {
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
