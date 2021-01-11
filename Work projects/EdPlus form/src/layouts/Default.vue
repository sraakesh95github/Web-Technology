<template>
  <div class="layout">
  <h3 class="display-4 mb-5 mt-3 text-center">Edplus Contact Form</h3>
  <form-google></form-google>
  </div>
</template>

<script>
import Form from '../components/Form'

export default {
  components: {
    'form-google': Form
  }
}

</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
