<template>
    <div>
        <div>{{showStr}}</div>
        <el-input v-model="helloData"></el-input>
    </div>
</template>
<script>
import bus from './bus/index'
export default {
  name: "HelloWorld",
  props:{
    showStr: String
  },
  data () {
    return {
      helloData:"hello"
    };
  },
  watch:{
      helloData(){
        bus.$emit('test',this.helloData)
      }
  },
  methods: {
    trans(){
      bus.$emit('test',this.helloData)
    }
  },
}
</script>