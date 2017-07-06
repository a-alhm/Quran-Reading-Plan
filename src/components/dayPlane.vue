<template>
  <div :class='{ done: isDone }'>
    <transition name="component-fade" mode="out-in">
      <h1 :key='plan.week'> الاسبوع رقم {{ plan.week}}</h1>
    </transition>
    <transition name="component-fade" mode="out-in">
      <h2 :key='plan.day'> {{plan.day.time}}</h2>
    </transition>
    <span v-if='plan.day.selected'>
      <div v-for='peroid in plan.peroids' class='bo'>
        <div class='sura'>{{ peroid.name }}</div>
        <div>من سورة {{ peroid.start.name }} اية رقم {{ peroid.start.ayat }}</div>
        <div>الى سورة {{ peroid.end.name }} اية رقم {{ peroid.end.ayat }}</div>
      </div>
    </span>
    <h2 v-else>ليس لديك قراءة هذا اليوم</h2>
  </div>
</template>

<script>
export default {
  props: ['plan'],
  computed: {
    isDone() {
      return this.plan.done
    }
  }
}
</script>

<style>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity .3s ease;
}

.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}

.bo {
  margin-top: 5px;
  background-color: floralwhite;
  display: flex;
  flex-wrap: wrap
}

.bo div {
  width: 50%;
  box-sizing: border-box;
  border: 1px solid goldenrod;
  padding: 4px;
}

.sura {
  width: 100% !important
}

.done {
  opacity: 0.4
}
</style>
