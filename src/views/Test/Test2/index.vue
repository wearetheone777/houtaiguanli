<template>
  <div>
       <el-button type="primary" v-show="$store.state.user.buttons.indexOf('btn.Add3')!=-1">添加按钮3</el-button>
  </div>
</template>

<script>
export default {
  name: '',
}
</script>

<style scoped>

</style>
