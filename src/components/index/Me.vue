<template>
  <div class="me">
    <me-head></me-head>
    <foot></foot>
  </div>
</template>


<script>
  import MeHead from '../common/MeHead.vue'
  import Foot from "../common/foot.vue"

  export default {
    components:{
      MeHead,
      Foot
    }
  }
</script>
