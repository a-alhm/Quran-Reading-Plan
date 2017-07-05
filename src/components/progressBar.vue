<template>
    <div class='con'>
        <svg class="progress" width="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="54" fill="none" stroke="floralwhite" stroke-width="5" />
            <circle class="progress__value" cx="60" cy="60" r="54" fill="none" stroke="goldenrod" stroke-width="5" :stroke-dashoffset='prgress' />
        </svg>
        <div class="progressbar-text" style="position: absolute; left: 50%; top: 50%; padding: 0px; margin: 0px; transform: translate(-50%, -50%); color: goldenrod; font-size: 2em;">{{textpro}}</div>
    </div>
</template>
<script>
/* 
 circumference  2 * π * R  = C
progress mathod   C * (1 - 0.6) ≈ 135.717  for 60% progress 
*/
export default {
    props: ['numgh'],
    data() {
        return {
            C: 339.292
        }
    },
    computed: {
        prgress() {
            return this.C * (1 - this.numgh)
        },
        textpro() {
            return Math.round(this.numgh * 100) + '%'
        }
    }
}
</script>

<style>
.con {
    position: relative;
    margin: 10px
}

svg {
    transform: rotate(-90deg);
}

.progress__value {
    stroke-dasharray: 339.292 339.292;
}
</style>
