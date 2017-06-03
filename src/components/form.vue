<template>
    <div class='co'>
    حدد المده:
        <input type='number' min='1' max='365'>
        <label>يومًا </label>
        <hr>
        اختر الايام التي ترغب القراءة فيها:
        <checkboxes v-for='item in days' :item='item.day' :key='item.day' @valueChanged='val => item.selected = !item.selected'></checkboxes>
        <hr>
        اختر الاوقات التي ترغب القراءة فيها:
        <checkboxes v-for='item in periods' :item='item.period' :key='item.period'  @valueChanged='val => item.selected = !item.selected'></checkboxes>
        <button @click='save'>حفظ</button>
    </div>
</template>

<script>
export default {
    name: 'form',
    data() {
        return {
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
                    }]
        }
    },
    methods: {
        save(){
            var infoObj = {
                days: this.days,
                periods: this.periods
            }
            console.log(ddd)
        }

    }
   
}
</script>

<style scoped>
div{
    font-size: 20px;
}
.co{
    width: 265px;
    margin: 50px auto;
    background-color: blanchedalmond;;        
    box-shadow: 0 3px 4px rgba(0,0,0,0.15);
    padding: 10px;
}
input[type="number"]:focus{
    border-color: #e77600;
    box-shadow: 0 0 3px 2px rgba(228,121,17,.5);
}
input[type="number"]{
    border: 1px solid #a6a6a6;
    border-radius: 4px;
    outline: 0;
    padding: 5px;
    font-size: 17px;
}
</style>