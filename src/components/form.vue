<template>
    <div class='co'>
        حدد المده:
        <input type='number' min='1' max='20' v-model='duration'>
        <label>اسبوع </label>
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
        sur: [
            {name: 'الفاتحة', numberOfAyat: 7},
            {name: 'البقرة', numberOfAyat: 286},
            {name: 'آل عمران', numberOfAyat: 200},
            {name: 'النساء', numberOfAyat: 176},
            {name: 'المائدة', numberOfAyat: 120},
            {name: 'الأنعام', numberOfAyat: 165},
            {name: 'الأعراف', numberOfAyat: 206},
            {name: 'الأنفال', numberOfAyat: 75},
            {name: 'التوبة', numberOfAyat: 129},
            {name: 'يونس', numberOfAyat: 109},
            {name: 'هود', numberOfAyat: 123},
            {name: 'يوسف', numberOfAyat: 111},
            {name: 'الرعد', numberOfAyat: 43},
            {name: 'إبراهيم', numberOfAyat: 52},
            {name: 'الحجر', numberOfAyat: 99},
            {name: 'النحل', numberOfAyat: 128},
            {name: 'الإسراء', numberOfAyat: 111},
            {name: 'الكهف', numberOfAyat: 110},
            {name: 'مريم', numberOfAyat: 98},
            {name: 'طه', numberOfAyat: 135},
            {name: 'الأنبياء', numberOfAyat: 112},
            {name: 'الحج', numberOfAyat: 78},
            {name: 'المؤمنون', numberOfAyat: 118},
            {name: 'النور', numberOfAyat: 64},
            {name: 'الفرقان', numberOfAyat: 77},
            {name: 'الشعراء', numberOfAyat: 277},
            {name: 'النمل', numberOfAyat: 93},
            {name: 'القصص', numberOfAyat: 88},
            {name: 'العنكبوت', numberOfAyat: 69},
            {name: 'الروم', numberOfAyat: 60},
            {name: 'لقمان', numberOfAyat: 34},
            {name: 'السجدة', numberOfAyat: 30},
            {name: 'الأحزاب', numberOfAyat: 73},
            {name: 'سبأ', numberOfAyat: 54},
            {name: 'فاطر', numberOfAyat: 45},
            {name: 'بس', numberOfAyat: 83},
            {name: 'الصافات', numberOfAyat: 182},
            {name: 'ص', numberOfAyat: 88},
            {name: 'الزمر', numberOfAyat: 75},
            {name: 'غافر', numberOfAyat: 85},
            {name: 'فصلت', numberOfAyat: 54},
            {name: 'الشورى', numberOfAyat: 53},
            {name: 'الزخرف', numberOfAyat: 89},
            {name: 'الدخان', numberOfAyat: 59},
            {name: 'الجاثية', numberOfAyat: 37},
            {name: 'الأحقاف', numberOfAyat: 35},
            {name: 'محمد', numberOfAyat: 38},
            {name: 'الفتح', numberOfAyat: 29},
            {name: 'الحجرات', numberOfAyat: 18},
            {name: 'ق', numberOfAyat: 45},
            {name: 'الذاريات', numberOfAyat: 60},
            {name: 'الطور', numberOfAyat: 49},
            {name: 'النجم', numberOfAyat: 62},
            {name: 'القمر', numberOfAyat: 55},
            {name: 'الرحمن', numberOfAyat: 78},
            {name: 'الواقعة', numberOfAyat: 96},
            {name: 'الحديد', numberOfAyat: 29},
            {name: 'المجادلة', numberOfAyat: 22},
            {name: 'الحشر', numberOfAyat: 24},
            {name: 'الممتحنة', numberOfAyat: 13},
            {name: 'الصف', numberOfAyat: 14},
            {name: 'الجمعة', numberOfAyat: 11},
            {name: 'المنافقون', numberOfAyat: 11},
            {name: 'التغابن', numberOfAyat: 18},
            {name: 'الطلاق', numberOfAyat: 12},
            {name: 'التحريم', numberOfAyat: 12},
            {name: 'الملك', numberOfAyat: 30},
            {name: 'القلم', numberOfAyat: 52},
            {name: 'الحاقة', numberOfAyat: 52},
            {name: 'المعارج', numberOfAyat: 44},
            {name: 'نوح', numberOfAyat: 28},
            {name: 'الجن', numberOfAyat: 28},
            {name: 'المزمل', numberOfAyat: 20},
            {name: 'المدثر', numberOfAyat: 56},
            {name: 'القيامة', numberOfAyat: 40},
            {name: 'الإنسان', numberOfAyat: 31},
            {name: 'المرسلات', numberOfAyat: 50},
            {name: 'النبأ', numberOfAyat: 40},
            {name: 'النازعات', numberOfAyat: 46},
            {name: 'عبس', numberOfAyat: 42},
            {name: 'التكوير', numberOfAyat: 29},
            {name: 'الانفطار', numberOfAyat: 19},
            {name: 'المطففين', numberOfAyat: 36},
            {name: 'الانشقاق', numberOfAyat: 25},
            {name: 'البروج', numberOfAyat: 22},
            {name: 'الطارق', numberOfAyat: 17},
            {name: 'الأعلى', numberOfAyat: 19},
            {name: 'الغاشية', numberOfAyat: 26},
            {name: 'الفجر', numberOfAyat: 30},
            {name: 'البلد', numberOfAyat: 20},
            {name: 'الشمس', numberOfAyat: 15},
            {name: 'الليل', numberOfAyat: 21},
            {name: 'الضحى', numberOfAyat: 11},
            {name: 'الشرح', numberOfAyat: 8},
            {name: 'التين', numberOfAyat: 8},
            {name: 'العلق', numberOfAyat: 19},
            {name: 'القدر', numberOfAyat: 5},
            {name: 'البينة', numberOfAyat: 8},
            {name: 'الزلزلة', numberOfAyat: 8},
            {name: 'العاديات', numberOfAyat: 11},
            {name: 'القارعة', numberOfAyat: 11},
            {name: 'التكاثر', numberOfAyat: 8},
            {name: 'العصر', numberOfAyat: 3},
            {name: 'الهمزة', numberOfAyat: 9},
            {name: 'الفيل', numberOfAyat: 5},
            {name: 'قريش', numberOfAyat: 4},
            {name: 'الماعون', numberOfAyat: 7},
            {name: 'الكوثر', numberOfAyat: 3},
            {name: 'الكافرون', numberOfAyat: 6},
            {name: 'النصر', numberOfAyat: 3},
            {name: 'المسد', numberOfAyat: 5},
            {name: 'الإخلاص', numberOfAyat: 4},
            {name: 'الفلق', numberOfAyat: 5},
            {name: 'الناس', numberOfAyat: 6}
            
        ]
        }
    },
    methods: {
        checkedDay(data) {
            this.days[data.index].selected = data.checked;
            this.isAllDaysSelected = this.days.every(ele => ele.selected)
        },
        allCheckedDays() {
            this.isAllDaysSelected = !this.isAllDaysSelected
            if (this.isAllDaysSelected) {
                this.days.forEach((item, index) => {
                    this.checkedDay({ item: item.day, checked: true, index })
                })
            }
        },
        checkedPeriod(data) {
            this.periods[data.index].selected = data.checked;
            this.isAllPeriodsSelected = this.periods.every(ele => ele.selected)
        },
        allCheckedPeriods() {
            this.isAllPeriodsSelected = !this.isAllPeriodsSelected;
            if (this.isAllPeriodsSelected) {
                this.periods.forEach((item, index) => {
                    this.checkedPeriod({ item: item.period, checked: true, index })
                })
            }
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
            if (Number(this.duration) > 20 || Number(this.duration) < 1) {
                alert('الرجاء اختيار مده تتراوح بين اسبوع واحد الى 20 اسبوع')
                return
            }

            let plan = [],
                totalDays = userDuration * userDaysSelection.length,
                dailyQuantityOfAyat = 6236 / totalDays,
                date = new Date();
            for (let i = 0; i < totalDays; i++) {
                let obj = {
                    day: userDaysSelection[(date.getDay() + i + 1) % userDaysSelection.length],
                    week: Math.floor(i / userDaysSelection.length) + 1,
                    from: Math.floor(dailyQuantityOfAyat * i),
                    to: Math.floor(dailyQuantityOfAyat * (i + 1)),
                    surah: '',
                    dayInMilliseconds: Math.floor(date.getTime() * 1.15740740741E-8) + i,
                    done: false
                }
                plan.push(obj)
            }
            localStorage.plan = JSON.stringify(plan)
            localStorage.periods = JSON.stringify(userPeroidsSelection)
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