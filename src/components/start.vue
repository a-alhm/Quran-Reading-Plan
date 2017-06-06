<template>
    <div>
        <h1>{{ appTitle }}</h1>
        <span>{{ description }}</span>
        <router-link to="/form" class='btn'>ابدأ هنا</router-link>
    </div>
</template>
<script>
export default {
    beforeCreate() {
        if (localStorage.plan) {
            this.$router.push('/dashboard')
        }
    },
    name: 'start',
    props: ['appTitle'],
    data() {
        return {
            description: 'موقع يساعدك على تنظيم ختمك للقرآن'
        }
    }
}
</script>
<style scoped>
h1,
span {
    text-align: center;
    color: goldenrod;
}

h1 {
    font-size: 6em;
    margin-bottom: 0;
    text-shadow: 4px 3px 0 #fff8ed, 9px -2px 0 rgba(0, 0, 0, 0.15);
}

span {
    font-size: 2.3em;
    display: block;
}
</style>