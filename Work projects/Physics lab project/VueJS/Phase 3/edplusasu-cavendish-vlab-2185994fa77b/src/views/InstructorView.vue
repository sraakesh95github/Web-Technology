<template>
  <Lab :instructor-view="authenticateInstructor()" />
</template>

<script>
import Lab from "../components/Lab";
import config from "../data/config.json";

export default {
  components: {
    Lab
  },
  data() {
    return {
      config: config
    };
  },
  methods: {
    authenticateInstructor() {
      var password = window.prompt("Enter password", "");
      return password === config.password;
    }
  }
};
</script>