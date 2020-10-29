<template>
    <div>
        <input v-model="num"/>
        <div v-once>{{num}}</div>
        <el-button @click="test"><i class="fa fa-search"></i></el-button>
        <child :num="num">
            <template #header>Header</template>
            <div slot="body">Body</div>
            <template v-slot:foot>Foot</template>
        </child>
        <div>
            <bus-one show-str="嘿嘿"></bus-one>
            <bus-two ref="bustwo" propsOne="孙子值" @listDemo="showValue" :deepFunc="sayHi"></bus-two>
        </div>
        <router-view></router-view>
        <dynamic-dlg 
            title="提示" 
            :visible.sync="dialogVisible" 
            :before-close="beforeClose"
            @confirm="confirmRecover"
            @close="dialogVisible = false">
            <span>这是一段信息</span>
        </dynamic-dlg>
    </div>
</template>
<script>
import Child from './demo/child';
import { Loading,Confirm } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import BusOne from './demo/bus-one'
import BusTwo from './demo/bus-two'
import dynamicDlg from './dynamicDlg'
export default {
    components:{Child,BusOne,BusTwo,dynamicDlg},
    data(){
        const _this = this
        return{
            loading: null,
            num: '10',
            dialogVisible: false,
            sayHi: () => {
                console.log(_this);
                this.$message({
                    type: 'info',
                    message: 'information' + this.value1
                })
            }
        }
    },
    methods:{
        beforeClose(){
            console.log(1)
        },
        close(){
            console.log(this.dialogVisible)
        },
        confirmRecover(){
            // cb&&cb();
            setTimeout(() => {
                this.dialogVisible = false;
            },1000)
        },
        clickTest(){
            console.log(1)
        },
        showValue(val){
            this.$message({message:val})
        },
        test(){
            // console.log(this.$refs.bustwo.$refs.childson.value1)
            this.dialogVisible = true;
        }
    },
    created(){
        this.loading = Loading.service({
            lock: true,
            text: '加载中……',
            background: 'rgba(0, 0, 0, 0.7)'
        })
    },
    mounted(){
        this.$nextTick(()=>{
            this.loading.close();
        })
        let asd = '123';
        if(asd){
            console.log(true,asd)
        }else{
            console.log(false,asd)
        }
    }
}
</script>
<style lang="less">
    
</style>