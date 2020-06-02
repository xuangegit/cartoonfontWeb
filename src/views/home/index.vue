<template>
    <div>
        <Header></Header>
        <router-view></router-view>
    </div>
</template>
<script>
import Header from '../../components/layout/header'
export default {
    components: {
        Header
    }
}
</script>
<style  scoped>

</style>
