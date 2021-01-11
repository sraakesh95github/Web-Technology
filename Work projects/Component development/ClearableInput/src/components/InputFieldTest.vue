<template>
  <div class="mt-3" :style="style">
    <b-form-input
      @input="updateClear"
      v-model="text"
      id="text-input"
      @click.stop="fieldClicked"
    >
    </b-form-input>

    <div :id="clicked ? 'div-clicked' : 'div-unclicked'"></div>

    <p
      @click.stop="fieldClicked"
      :id="clicked ? 'placeholder-clicked' : 'placeholder'"
      class="text-muted"
    >
      {{ label }}
    </p>

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

export default {
  data() {
    return {
      text: "",
      clicked: false,
      showClear: false,
    };
  },
  watch: {
    text() {
      if (this.text != "") this.showClear = true;
      else this.showClear = false;
    },
  },
  components: {
    CloseIcon,
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
    },
    fieldUnclicked() {
      if (this.text === "") {
        this.clicked = false;
      }
    },
    clearText() {
      this.text = "";
    },
  },
};
</script>

<style scoped>
#text-input {
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

#placeholder {
  position: relative;
  top: -30px;
  left: 0%;
  z-index: 1;
  font-size: 1rem;
  transition: font-size 0.3s, top 0.3s;
}

#placeholder:hover {
  cursor: text;
}

#placeholder-clicked {
  position: relative;
  top: -52px;
  left: 0%;
  font-size: 0.8rem;
  color: rgb(64, 141, 218) !important;
  transition: font-size 0.3s, top 0.3s;
}
</style>
