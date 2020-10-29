<template>
    <div>
      <div>{{cdata}}</div>
      <child-son ref="childson" v-bind="$attrs" v-on="$listeners"></child-son>
    </div>
</template>
<script>
import bus from './bus/index'
import ChildSon from './child-son'
export default {
  name: "Child",
  components:{ChildSon},
  data () {
    return {
      cdata:"子数据"
    };
  },
  mounted(){
    bus.$on('test',val=>{
      console.log(val);
      this.cdata = val
    })
  }
}
</script>