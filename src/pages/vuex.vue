<template>
    <div style="text-align: center;">
        <p>点击{{count1}}/{{getCount}}次，ClickCount 是{{EvenOrOdd}}  </p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">加1</button>
        <button @click="incrementAsync">减1</button>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
    name: "vuex_test",
    data(){
        return{
            ClickCount: this.$store.state.count
        }
    },
    computed:{
        ...mapState({
            count1: state => state.count
        }),
        ...mapGetters([
            'getCount',
            'isLoading'
        ]),
        EvenOrOdd(){
            return this.ClickCount %2 === 0 ? '偶数':'奇数';
        }
    },
    methods:{
        increment(){
            this.$store.commit('addCount')
        },
        decrement(){
            this.$store.commit('delCount')
        },
        incrementIfOdd(){
            this.$store.dispatch('getAddCount')
        },
        incrementAsync(){
            this.$store.dispatch('getDelCount')
        },
    },
    mounted(){
        //mock
        this.axios({
            method: 'get',
            url: 'http://api.com'
        }).then(function(response) {
            console.log(response);
        })
    }
}
</script>
 
<style scoped>
 
</style>
