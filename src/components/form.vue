<template>
    <div class='co'>
        حدد المده:
        <input type='number' min='1' max='365' v-model='duration'>
        <label>يومًا </label>
        <hr> اختر الايام التي ترغب القراءة فيها:
        <checkboxes item="جميع الأيام" index='0' @valueChanged='allCheckedDays' :selected='isAllDaysSelected' class='all'></checkboxes>
        <checkboxes v-for='(item, index) in days' :item='item.day' :selected='item.selected' :index='index' @valueChanged='checkedDay'></checkboxes>
        <hr> اختر الاوقات التي ترغب القراءة فيها:
        <checkboxes item="جميع الأوقات" index='0' @valueChanged='allCheckedPeriods' :selected='isAllPeriodsSelected' class='all'></checkboxes>
        <checkboxes v-for='(item, index) in periods' :item='item.period' :selected='item.selected' :index='index' @valueChanged='checkedPeriod'></checkboxes>
        <button @click='save' class='btn'>حفظ</button>
    </div>
</template>

<script>
export default {
    beforeCreate() {
        if (localStorage.plan) {
            this.$router.push('/dashboard')
        }
    },
    name: 'form',
    data() {
        return {
            duration: 0,
            isAllDaysSelected: false,
            days: [{
                day: 'السبت',
                selected: false
            }, {
                day: 'الاحد',
                selected: false
            }, {
                day: 'الاثنين',
                selected: false
            }, {
                day: 'الثلاثاء',
                selected: false
            }, {
                day: 'الاربعاء',
                selected: false
            }, {
                day: 'الخميس',
                selected: false
            }, {
                day: 'الجمعه',
                selected: false
            }],
            isAllPeriodsSelected: false,
            periods: [{
                period: 'الفجر',
                selected: false
            }, {
                period: 'الظهر',
                selected: false
            }, {
                period: 'العصر',
                selected: false
            }, {
                period: 'المغرب',
                selected: false
            }, {
                period: 'العشاء',
                selected: false
            }],

        }
    },
    methods: {
        checkedDay(data) {
            this.days[data.index].selected = data.checked;
            this.isAllDaysSelected = this.days.every(ele => ele.selected === true)
        },
        allCheckedDays() {
            this.isAllDaysSelected = !this.isAllDaysSelected
            this.isAllDaysSelected ?
                this.days.forEach((item, index) => {
                    this.checkedDay({ item: item.day, checked: true, index })
                }) : this.isAllDaysSelected = false
        },
        checkedPeriod(data) {
            this.periods[data.index].selected = data.checked;
            this.isAllPeriodsSelected = this.periods.every(ele => ele.selected === true)
        },
        allCheckedPeriods() {
            this.isAllPeriodsSelected = !this.isAllPeriodsSelected;
            this.isAllPeriodsSelected ?
                this.periods.forEach((item, index) => {
                    this.checkedPeriod({ item: item.period, checked: true, index })
                }) : this.isAllPeriodsSelected = false
        },
        save() {
            const userDaysSelection = this.days.filter(ele => ele.selected).map(ele => ele.day)
            const userPeroidsSelection = this.periods.filter(ele => ele.selected).map(ele => ele.period);
            const userDuration = this.duration
            if (userDaysSelection.length === 0) {
                alert("الرجاء اختيار يوم واحد على الأقل!")
                return
            }
            if (userPeroidsSelection.length === 0) {
                alert("الرجاء اختيار وقت واحد على الأقل!")
                return
            }
            if (Number(this.duration) > 365 || Number(this.duration) < 1) {
                alert('الرجاء اختيار مده تتراوح بين يوم واحد الى 365 يوم')
                return
            }
            localStorage.plan = JSON.stringify({ userDaysSelection, userPeroidsSelection, userDuration })
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
    margin: 50px auto;
    background-color: blanchedalmond;
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
    color: #34d834
}
</style>