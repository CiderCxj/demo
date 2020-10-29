<template>
    <div>
        <div>{{propsOne}}</div>
        <el-button @click="deepFunc">测试</el-button>
    </div>
</template>
<script>
const _this = this;
export default {
    props:{
        propsOne: String,
        deepFunc: Function
    },
    data(){
        return{
            value1: '5'
        }
    },
    methods:{
        handleDemo(){
            this.$emit('listDemo',this.value1)
        },
        
    }
}
</script>