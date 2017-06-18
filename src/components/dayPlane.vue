<template>
  <div :class='{ done: isDone }'>
    <transition name="component-fade" mode="out-in"> 
    <h1 :key='plan.week'> الاسبوع رقم {{ plan.week}}</h1>
    </transition>  
    <transition name="component-fade" mode="out-in"> 
    <h2 :key='plan.day'> {{plan.day}}</h2>
    </transition>
    <transition name="component-fade" mode="out-in"> 
    <span :key='plan.from'>من {{ plan.from }} الى {{ plan.to }}</span>
    </transition>
  </div>
 
</template>

<script>
export default {
  props: ['plan'],
  computed:{
    isDone(){
      return this. plan.done
    }
  }
}
</script>

<<style>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
.done{
  opacity: 0.4
}
</style>
