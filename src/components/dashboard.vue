<template>
  <div>
    <div class="con">
      <schedule v-if='isItToDay' :plan='plan' />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: ['الاحد', 'الاثنين', 'الثلاثاء', 'الاربعاء', 'الخميس', 'الجمعه', 'السبت'],
      plan: JSON.parse(localStorage.plan),
    }
  },
  computed: {
    isItToDay() {
      const today = new Date().getDay()
      return this.plan.userDaysSelection.some(ele => ele === this.days[today])
    }
  }
}
</script>

<style>
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

div {
  color: black;
}

.con {
  width: initial;
  margin: 50px auto;
  background-color: #f3e8d6;
  ;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
  padding: 10px;
}

@media screen and (min-width: 500px) {
  .con {
    width: 400px
  }
}
</style>
