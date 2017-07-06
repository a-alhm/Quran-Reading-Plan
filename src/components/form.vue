<template>
 <div>
    <div class='co'>
        حدد المده:
        <input type='number' min='1' max='20' v-model='duration'>
        <label>اسبوع </label>
    </div>

    <div class='co'>
        اختر الايام التي ترغب القراءة فيها:
        <checkboxes 
        item="جميع الأيام" 
        index='0'
        @valueChanged='allChecked(days)' 
        :selected='days.isAllSelected' 
        class='all'>
        </checkboxes> 

        <checkboxes 
        v-for='(item, index) in days.array' 
        :item='item.time' 
        :selected='item.selected' 
        :index='index' 
        @valueChanged='checked(days, $event)'>
        </checkboxes>
    </div>

    <div class='co'>
        اختر الاوقات التي ترغب القراءة فيها:
        <checkboxes 
        item="جميع الأوقات" 
        index='0' 
        @valueChanged='allChecked(periods)' 
        :selected='periods.isAllSelected' 
        class='all'>
        </checkboxes>

        <checkboxes 
        v-for='(item, index) in periods.array' 
        :item='item.time' 
        :selected='item.selected' 
        :index='index' 
        @valueChanged='checked(periods, $event)'>
        </checkboxes>
    </div>       
        <button @click='save()' class='btn'>حفظ</button>
    
    </div>
  </div>  
</template>

<script>
import moment from 'moment'
import * as check from '../js/check.js'
import { days, periods } from '../js/model.js'
import userInputHandler from '../js/userInputHandler.js'

const cdays= days,
      cperiods = periods

export default {
    beforeCreate() {
        if (localStorage.plan) {
            this.$router.push('/dashboard')
        }
    },
    data() {
        return {
            duration: 0,
            days: cdays,
            periods: cperiods,
        }
    },
    methods: {
        checked(obj, data, isChecked = check.checked) {
            this.obj = check.checked(obj ,data)
        },
        allChecked(obj, isAllChecked = check.allChecked){
            this.obj = isAllChecked(obj)
        },
        save(
            userDaysSelection = this.days.array, 
            userPeroidsSelection = this.periods.array, 
            userDuration = Number(this.duration)
            ) {
            if (userDaysSelection.length === 0) {
                alert("الرجاء اختيار يوم واحد على الأقل!")
                return
            }
            if (userPeroidsSelection.length === 0) {
                alert("الرجاء اختيار وقت واحد على الأقل!")
                return
            }
            if (Number(this.duration) > 20 || Number(this.duration) < 1) {
                alert('الرجاء اختيار مده تتراوح بين اسبوع واحد الى 20 اسبوع')
                return
            }

            let handler= userInputHandler(userDaysSelection, userPeroidsSelection, userDuration)

            localStorage.plan = JSON.stringify(handler)
            this.$router.push('/dashboard')
        }

    }

}
</script>

<style scoped>
div {
    font-size: 20px;
}

.co {
    width: 265px;
    margin: 10px auto;
    background-color: #f3e8d6;
    ;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
    padding: 10px;
}

input[type="number"]:focus {
    border-color: #e77600;
    box-shadow: 0 0 3px 2px rgba(228, 121, 17, .5);
}

input[type="number"] {
    border: 1px solid #a6a6a6;
    border-radius: 4px;
    outline: 0;
    padding: 5px;
    font-size: 17px;
}

.btn {
    width: initial
}

.all {
    color: darkcyan
}
</style>