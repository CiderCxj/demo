import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        count: 0,
        loading: true
    },
    getters:{
        getCount(state) {
            return state.count
        },
        isLoading(state) {
            return state.loading
        }
    },
    mutations: {
        addCount(state){
            return state.count++;
        },
        delCount(state){
            return state.count--;
        }
    },
    actions:{
        getAddCount(content){
            content.commit('addCount')
        },
        getDelCount(content){
            content.commit('delCount')
        }
    }
})

export default store