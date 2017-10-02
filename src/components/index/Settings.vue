<template>
  <div class="settings">
    <div class="block">
      <ul>
        <li>Saved</li>
        <li>Download</li>
        <li>Dark</li>
      </ul>
    </div>
    <div class="block">
      <ul>
        <li>Saved</li>
        <li>Download</li>
        <li>Dark</li>
      </ul>
    </div>
    <div class="block">
      <ul>
        <li>Share This App</li>
        <li>Help</li>
        <li>About</li>
        <li><mt-switch v-model="value">开关</mt-switch></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>

  export default{
    data(){
      return{
        value: true
      }
    }
  }

</script>
