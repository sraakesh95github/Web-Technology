<template>
  <div class="mt-3" :style="style">
    <b-form-input
      @input="updateClear"
      v-model="text"
      id="input-select"
      @click.stop="fieldClicked"
    >
    </b-form-input>

    <div :id="clicked ? 'div-clicked' : 'div-unclicked'"></div>

    <p
      @click="fieldClicked"
      :id="labelPositionChange ? 'label-clicked' : 'label'"
      class="text-muted"
    >
      {{ label }}
    </p>

    <options-card
      id="optionsCard"
      :items="itemDetails"
      :searchKey="text"
      v-show="clicked"
      @select="selectItem"
    >
    </options-card>

    <close-icon
      v-if="clearable"
      @click="clearText"
      v-show="showClear"
      id="clearInput"
    ></close-icon>
  </div>
</template>

<script>
import CloseIcon from "../assets/close.svg";
import OptionsCard from "../components/OptionsCard.vue";

export default {
  data() {
    return {
      text: "",
      clicked: false,
      showClear: false,
      itemDetails: [],
      labelPositionChange: false,
    };
  },
  components: {
    "options-card": OptionsCard,
    CloseIcon,
  },
  watch: {
    text() {
      if (this.text != "") this.showClear = true;
      else this.showClear = false;
    },
  },
  props: {
    width: {
      type: String,
      default: "auto",
    },
    label: {
      type: String,
      default: "Label",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: ["Test"],
    },
  },
  mounted() {
    this.items.forEach((item) => {
      this.itemDetails.push({
        name: item,
        selected: false,
      });
    });
  },
  computed: {
    style() {
      return "width: " + this.width;
    },
  },
  methods: {
    updateClear() {
      if (event.target.value != "") {
        this.showClear = true;
      } else {
        this.showClear = false;
      }
      this.$emit("change", this.text);
    },
    fieldClicked() {
      this.clicked = true;
      this.labelPositionChange = true;
    },
    fieldUnclicked() {
      if (this.text === "") {
        this.clicked = false;
      }
    },
    clearText() {
      this.text = "";
    },
    selectItem(value) {
      this.clicked = false;
      this.text = value;
    },
  },
};
</script>

<style scoped>
#input-select {
  color: solid black;
  box-shadow: none;
  border-radius: 0;
  border-width: 0;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  background: transparent;
  z-index: 2;
  padding: 0px;
  font-size: 1rem;
}

#div-unclicked {
  background-color: rgb(64, 141, 218);
  transform: scaleX(0);
  height: 2px;
  transition: transform 0.3s ease-in-out;
}

#div-clicked {
  border-bottom-width: 2px;
  background-color: rgb(64, 141, 218);
  transform: scaleX(1);
  height: 2px;
  transition: transform 0.3s ease-in-out;
}

#clearInput {
  position: relative;
  top: -75px;
  left: 93%;
}

#label {
  position: relative;
  top: -30px;
  left: 0%;
  z-index: 1;
  font-size: 1rem;
  transition: font-size 0.3s, top 0.3s;
}

#label:hover {
  cursor: text;
}

#label-clicked {
  position: relative;
  top: -54px;
  left: 0%;
  font-size: 0.8rem;
  color: rgb(64, 141, 218) !important;
  transition: font-size 0.3s, top 0.3s;
}

#optionsCard {
  margin-top: -33px;
}
</style>
