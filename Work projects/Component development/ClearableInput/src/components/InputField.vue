<template>
  <div class="mt-7 main-div" :style="style">
    <label :class="clicked ? 'label-clicked' : 'label'" class="text-muted">{{
      label
    }}</label>
    <input
      type="text"
      @input="updateClear"
      v-model="text"
      class="input-text"
      @blur="fieldUnclicked"
      @click="fieldClicked"
    />

    <div
      :class="clicked ? 'focus-effect-div-clicked' : 'focus-effect-div'"
    ></div>

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
      console.log("fieldClick() has been called...");
      this.clicked = true;
    },
    fieldUnclicked() {
      if (this.text === "") {
        this.clicked = false;
      }
    },
    clearText() {
      this.text = "";
      this.clicked = false;
    },
  },
};
</script>

<style scoped>
.main-div {
  height: 60px;
}

.input-text {
  position: relative;
  top: -28px;
  width: 100%;
  box-shadow: none;
  border: 1px solid gray;
  border-width: 0px 0px 1px !important;
  height: 32px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 1rem;
}

.input-text:hover {
  border: 1px solid black;
}

.input-text:focus {
  outline: none;
}

.focus-effect-div {
  position: relative;
  top: -29px;
  background-color: rgb(24, 41, 58);
  height: 2px;
  transform: scaleX(0);
  transition: transform 0.25s linear;
}

.focus-effect-div-clicked {
  position: relative;
  top: -29px;
  background-color: rgb(60, 132, 204);
  height: 2px;
  transform: scaleX(1);
  transition: transform 0.25s linear;
}

#clearInput {
  position: relative;
  top: -60px;
  left: 95%;
}

#clearInput:hover {
  cursor: pointer;
}

.label {
  position: relative;
  top: 8px;
  left: 0%;
  font-size: 1rem;
  transition: font-size 0.2s ease-out, top 0.2s ease-out;
}

.label-clicked {
  position: relative;
  top: -15px;
  left: 0%;
  font-size: 0.75rem;
  color: rgb(60, 132, 204) !important;
  transition: font-size 0.2s ease-out, top 0.2s ease-out;
}
</style>
