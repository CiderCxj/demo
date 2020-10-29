<template>
    <el-dialog 
        :visible.sync="dialogVisible"
        :title="title"
        :width="width"
        :fullscreen="fullscreen"
        :top="top"
        :modal="modal"
        :modal-append-to-body="modelAppendToBody" 
        :append-to-body="appendToBody"
        :lock-scroll="lockScroll"
        :custom-class="customClass"
        :close-on-click-modal="closeOnClickModal"
        :close-on-press-escape="closeOnPressEscape"
        :show-close="showClose"
        :center="center"
        :before-close="beClose"
        :destroy-on-close="destoryOnClose"
        @close="close">
        <slot></slot>
        <div slot="footer" class="dialog-footer" v-if="showFooter">
            <slot name="footer">
                <el-button type="primary" @click="confirm">确 定</el-button>
                <el-button @click="close">取 消</el-button>
            </slot>
        </div>
    </el-dialog>
</template>
<script>
export default {
    inheritAttrs: false,
    props: {
        visible: { //显示
            type: Boolean,
            default: false
        },
        title: { //弹框标题
            type: String,
            default: ''
        },
        width: { //弹框的宽度，默认空即调用默认50%
            type: String,
            default: ''
        },
        fullscreen: { //是否为全屏 Dialog
            type: Boolean,
            default: false
        },
        top: { //距离顶部距离,默认5vh
            type: String,
            default: '5vh'
        },
        modal: { //是否需要遮罩层
            type: Boolean,
            default: true
        },
        modelAppendToBody: {
            type: Boolean,
            default: true
        },
        appendToBody: { //自身是否插入至 body 元素上
            type: Boolean,
            default: false
        },
        lockScroll: {
            type: Boolean,
            default: true
        },
        customClass: {
            type: String,
            default: ''
        },
        closeOnClickModal: {
            type: Boolean,
            default: true
        },
        closeOnPressEscape: {
            type: Boolean,
            default: true
        },
        showClose: {
            type: Boolean,
            default: true
        },
        beforeClose: {
            type: Function,
            default: () => {},
        },
        center: {
            type: Boolean,
            default: false
        },
        destoryOnClose: {
            type: Boolean,
            default: false
        },
        showFooter: { //显示底部按钮，true:显示/false:隐藏,默认显示
            type: Boolean,
            default: true
        },
    },
    computed:{
        dialogVisible:{
            get() {
                return this.visible
            },
            set(val){
                this.$emit('update:visible',val)
            }
        }
    },
    watch: {
        beforeClose(val){
            console.log(val)
        }
    },
    methods:{
        beClose(done){
            this.beforeClose()
            done();
        },
        confirm(){
            this.$emit('confirm')
        },
        close(){
            this.$emit('update:visible',false)
        }
    }
}
</script>