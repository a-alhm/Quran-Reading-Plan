<template>
<div>
    <h1>{{ appTitle }}</h1>
    <span>{{ description }}</span>
    <router-link to="/form" class='btn'>ابدأ هنا</router-link>
</div>
</template>
<script>
export default {
        name: 'start',
        props:['appTitle'],
        data(){
            return {
                description: 'موقع يساعدك على تنظيم ختمك للقرآن'
            }
        }
    }
</script>
<style scoped>
    h1, span{
        text-align: center;
        color: goldenrod;
    }
    h1{
        font-size: 6em;
        margin-bottom: 0;
        text-shadow: 4px 3px 0 #fff8ed, 9px -2px 0 rgba(0, 0, 0, 0.15);
    }
    span{
        font-size: 2.3em;
        display: block;
    }
    .btn {
        margin: 20px auto;
        display: block;
        border: 1px solid gold;
        border-radius: 6px;
        padding: 10px 20px;
        background-color: goldenrod;
        color: white;
        font-size: 1.2em;
        font-family: 'Amiri', serif;
        outline: none;
        width: 48px;
        text-decoration: none;
    }
    .btn:hover {
        background-color: rgb(197, 149, 30);
        }
</style>