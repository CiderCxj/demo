<template>
    <div>
        {{newNum}}
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="foot"></slot>
        <div @click="handleClick">点击测试</div>
    </div>
</template>
<script>
export default {
    props:{
        num: String,
        // events:{
        //     type: Object,
        //     default: {
        //     }
        // }
    },
    data(){
        return {
            newNum: this.num
        }
    },
    methods:{
        init(){
        },
        handleClick(){
            this.$parent['clickTest']();
        }
    },
    mounted(){
        this.init();
    }
}
</script>