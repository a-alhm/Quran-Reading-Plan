<template>
    <div class='pad'>
        <input :id='item' type="checkbox" :checked='selected' hidden @change='changeValue'>
        <label class='cbx' :for="item"></label>
        <label class='lbl'>{{ item }}</label>
    </div>
</template>
<script>
export default {
    props: ['item', 'selected', 'index'],
    methods: {
        changeValue(e) {
            this.$emit('valueChanged', { item: this.item, checked: !this.selected, index: this.index })
        }
    }
}
</script>

<style scoped>
.lbl {
    margin-left: 5px;
    cursor: pointer;
}

input[type='checkbox']:checked~.cbx {
    background: currentColor;
}

input[type='checkbox']~.cbx {
    background: floralwhite;
}

.pad {
    margin-top: 5px;
}

.cbx {
    position: relative;
    top: 1px;
    width: 30px;
    height: 30px;
    border: 1px solid #C8CCD4;
    border-radius: 3px;
    vertical-align: middle;
    transition: .1s ease;
    cursor: pointer;
    display: inline-block;
}

.cbx:after {
    content: '';
    position: absolute;
    top: 1px;
    left: 5px;
    width: 5px;
    height: 11px;
    opacity: 0;
    transform: rotate(45deg) scale(0);
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    transition: all .3s ease;
    transition-delay: .15s;
}
</style>