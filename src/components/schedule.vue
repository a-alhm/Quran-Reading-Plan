<template>
    <div>
        <h1>لديك قراءة اليوم</h1>
        <div>يجب ان تقرأ {{ math }}</div>
    </div>
</template>

<script>
export default {
    props: ['plan'],
    computed: {
        math() {
            return Math.round(600 / (this.plan.userDuration * this.plan.userDaysSelection.length) / this.plan.userPeroidsSelection.length) + '  صفحه  '
        }
    }
}
</script>

<style scoped>
h1,
div {
    color: goldenrod;
    text-align: center
}
</style>

