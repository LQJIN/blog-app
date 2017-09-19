<template>
  <div class="me">
    <me-head></me-head>
    <me-content></me-content>
    <foot></foot>
  </div>
</template>


<script>
  import MeHead from '../common/MeHead.vue'
  import Foot from '../common/foot.vue'
  import MeContent from '../common/MeContent.vue'

  export default {
    components:{
      MeHead,
      MeContent,
      Foot
    }
  }
</script>
