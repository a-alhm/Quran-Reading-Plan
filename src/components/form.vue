<template>
    <div class='co'>
        حدد المده:
        <input type='number' min='1' max='365'>
        <label>يومًا </label>
        <hr> اختر الايام التي ترغب القراءة فيها:
        <checkboxes item="جميع الأيام" @valueChanged='allCheckedDays'></checkboxes>
        <checkboxes v-for='item in days' :item='item.day' :selected='item.selected' :key='item.day' @valueChanged='checkedDay'></checkboxes>
        <hr> اختر الاوقات التي ترغب القراءة فيها:
        <checkboxes item="جميع الأوقات" @valueChanged='allCheckedPeriods'></checkboxes>
        <checkboxes v-for='item in periods' :item='item.period' :selected='item.selected' :key='item.period' @valueChanged='checkedPeriod'></checkboxes>
        <button @click='save'>حفظ</button>
    </div>
</template>

<script>
export default {
    name: 'form',
    data() {
        return {
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
            const index = this.days.findIndex(ele => ele.day === data.item);
            this.days[index].selected = data.checked;
        },
        allCheckedDays() {
            this.isAllDaysSelected = !this.isAllDaysSelected;
            this.days.forEach(item => {
                this.checkedDay({ item: item.day, checked: this.isAllDaysSelected })
            });
        },
        checkedPeriod(data) {
            const index = this.periods.findIndex(ele => ele.period === data.item);
            this.periods[index].selected = data.checked;
        },
        allCheckedPeriods() {
            this.isAllPeriodsSelected = !this.isAllPeriodsSelected;
            this.periods.forEach(item => {
                this.checkedPeriod({ item: item.period, checked: this.isAllPeriodsSelected })
            });
        },
        save() {
            const userDaysSelection = this.days.filter(ele => ele.selected).map(ele => ele.day)
            const userPeroidsSelection = this.periods.filter(ele => ele.selected).map(ele => ele.period);
            if (userDaysSelection.length === 0) {
                alert("الرجاء اختيار يوم واحد على الأقل!")
            }
            if (userPeroidsSelection.length === 0) {
                alert("الرجاء اختيار وقت واحد على الأقل!")
            }
            localStorage.plan = JSON.stringify({userDaysSelection,userPeroidsSelection})

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
</style>