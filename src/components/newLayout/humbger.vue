<template>
  <div>
    <svg t="1597719682034" class="icon humbger" @click="triggerHandle" :class="{'is-active' : isActive}" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3652" width="64" height="64"><path d="M408 442h480a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8H408a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8z m-8 204a8 8 0 0 0 8 8h480a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8H408a8 8 0 0 0-8 8v56z m504-486H120a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h784a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8z m0 632H120a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h784a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8zM142.4 642.1L298.7 519a8.8 8.8 0 0 0 0-13.9L142.4 381.9a8.9 8.9 0 0 0-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" p-id="3653"></path></svg>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'humbger',
  data(){
    return {
      // isActive: false
    }
  },
  computed:{
    ...mapGetters('app',{
           isActive: 'isCollapse'
        }),
  },
  methods:{
     ...mapActions('app',{triggerState: 'triggerState'}),
    triggerHandle(){
       this.triggerState(!this.isActive)
    }
  }
}
</script>

<style scoped>
  .humbger{
    display: inline-block;
    width: 20px;
    height: 20px;
  }
  .humbger.is-active{
    transform: rotateY(180deg)
  }
</style>