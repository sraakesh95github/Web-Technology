<template>
  <div>
    <v-app>
    <!-- Testing the Input Field Component -->
    <div class="container pt-5" id="input-field-section">
      <div class="row">
        <div class="col mx-5">
          <h2 class="display-2 text-center my-5">Input Field Component</h2>

          <h4>EdPlus Custom Component</h4>
          <input-field
            width="auto"
            label="First Name"
            @change="getInput"
            clearable
          ></input-field>

          <h4>Vuetify Component</h4>
          <v-text-field label="Regular" clearable></v-text-field>
        </div>
      </div>
    </div>

    <!-- Testing the Select Component -->

    <div class="container pt-5" id="select-section">
      <div class="row">
        <div class="col mx-5">
          <h2 class="display-2 text-center my-5">Autocomplete Component</h2>

          <h4>EdPlus Custom Component</h4>
          <select-field :items="items" label="Instrument"></select-field>

          <h4>Vuetify component</h4>

          <v-autocomplete
            :items="items"
            v-model="values"
            label="Testing"
          ></v-autocomplete>
        </div>
      </div>
    </div>
    </v-app>
  </div>
</template>

<script>
// import InputField from "../components/InputField.vue";
import InputField from "../components/InputField.vue";
import SelectField from "../components/SelectField.vue";
import OptionsCard from "../components/OptionsCard.vue";
import TestSelectField from "../components/TestSelectField";

export default {
  components: {
    "input-field": InputField,
    "select-field": SelectField,
    "options-card": OptionsCard,
    "test-select-field": TestSelectField,
  },
  data() {
    return {
      testText: "",
      items: [
        "Accoustic piano",
        "Electric guitar",
        "Acoustic guitar",
        "Trombone",
        "Electric piano",
        "Portable digital piano",
        "Digital console piano",
      ],
      values: ["piano", "keyboard"],
    };
  },
  methods: {
    getInput(value) {
      this.testText = value;
    },
  },
};
</script>

<style scoped>
#input-field-section {
  background-color: rgb(211, 241, 248);
}
#select-section {
  background: rgb(245, 245, 231);
}
</style>
