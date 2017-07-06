<template>
  <div>
  
    <button @click='areUSure' class='btn new'>بدايه جديده</button>
    <div class='msgcon' :hidden='message'>
      <div class='con msg'>
        <div>
          هل انت متأكد؟
        </div>
        <button class='btn yn' @click='newPlan'>نعم</button>
        <button class='btn yn' @click='areUSure'>لا</button>
      </div>
    </div>
    <div class='main'>
      <progressBar :progress='planProgress'></progressBar>
      <button @click='moveRight' class='btn'>&lt;</button>
      <button @click='moveLeft' class='btn'>&gt;</button>
      <div class="con">
        <dayPlane :plan='right[0]'></dayPlane>
      </div>
  
      <div v-if='right[0].isDone && right[0].day.selected' class="con">
        هل انتهيت من قراءة هذا اليوم؟
        <checkboxes item='نعم' :selected='right[0].done' @valueChanged='checkedDay'></checkboxes>
      </div>
  
      <div v-if='delayDays > 0' style="color: red; text-align: center; font-size: 1.5em"> انت متأخر عن ختمتك بمقدار {{ delayDays }} يوم </div>
  
    </div>
  </div>
</template>
 
<script>
import moment from 'moment'
import * as dashboard from '../js/dashboard.js' 


export default {
  created() {
    while (moment(this.today).isAfter(this.right[0].date)) {
      this.canBeDone()
      this.moveLeft()
    }
    this.canBeDone()
  },
  data() {
    return {
      right: JSON.parse(localStorage.plan),
      left: [],
      today: moment().format('L'),
      message: true
    }
  },
  computed: {
    delayDays() {
      return dashboard.daysDoneBeforeToday(this.left, this.right, this.today)
    },
    planProgress() {
      return dashboard.progress(this.left, this.right)
    }
  },
  methods: {
    moveRight() {
     dashboard.moveRight(this.right, this.left)
    },
    moveLeft() {
      dashboard.moveLeft(this.right, this.left)
    },
    checkedDay(data) {
      this.right[0].done = data.checked;
      localStorage.plan = JSON.stringify(this.left.concat(this.right))
    },
    canBeDone() {
      this.right[0].isDone = true
    },
    newPlan() {
      localStorage.plan = ""
      this.$router.push('/')
    },
    areUSure() {
      this.message = !this.message
    }
  }
}
</script>

<style>
.main {
  /* display: flex; */
  flex-wrap: wrap;
  max-width: 600px;
  position: relative;
  margin: 0px auto
}

.new {
  position: absolute;
  top: 0px;
  left: 0;
  margin: 4px;
  padding: 5px;
  width: 90px;
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
  margin: 0px auto 15px;
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


.main .btn {
  display: inline-block;
  margin: auto;
  width: 49%;
}

.yn {
  margin: 20px;
  display: inline-block
}

.msg {
  max-width: 232px;
  margin: 90px auto !important
}

.msgcon {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
