<template>
  <div
    class="mt-2 main-div"
    :class="state == null ? 'main-div' : state ? 'main-div' : 'main-div-error'"
  >
    <label :class="clicked ? 'label-clicked' : 'label'" class="text-muted">{{
      label
    }}</label>
    <input
      :name="name"
      v-if="type !== 'textarea'"
      :type="type"
      @input="updateClear"
      v-model="text"
      class="input-text"
      @blur="fieldUnclicked"
      @click="fieldClicked"
      @focus="fieldClicked"
    />

    <div
      :class="[
        type === 'textarea'
          ? clicked
            ? 'focus-effect-div-textarea'
            : 'focus-effect-div-textarea-clicked'
          : clicked
          ? 'focus-effect-div-clicked'
          : 'focus-effect-div',
        state !== null
          ? state
            ? 'div-no-error'
            : 'div-error'
          : 'div-not-dirty',
      ]"
    ></div>

    <close-icon
      v-if="clearable"
      @click="clearText"
      v-show="showClear"
      id="clearInput"
    ></close-icon>

    <small class="error-message" v-if="state != null ? !state : false">
      {{ errorMessage }}
    </small>
  </div>
</template>

<script>
import CloseIcon from "../assets/img/close.svg";

export default {
  data() {
    return {
      text: "",
      clicked: false,
      showClear: false,
      height: "60px",
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
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
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
    errorMessage: {
      type: String,
      default: "",
    },
    state: {
      type: Boolean,
      default: null,
    },
    errorMessage: {
      type: String,
      default: "",
    },
  },
  computed: {
    style() {
      console.log("Height: " + String(this.height));
      return ["width: " + this.width, "height: " + this.height];
    },
  },
  methods: {
    updateClear() {
      if (event.target.value != "") {
        this.showClear = true;
      } else {
        this.showClear = false;
      }
      this.$emit("change", { value: this.text, name: this.name });
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
      this.clicked = false;
      this.showClear = false;
    },
  },
};
</script>

<style scoped>
.main-div {
  position: relative;
  height: 2.5rem;
}

.main-div-error {
  height: 3.5rem;
}

.input-text {
  position: absolute;
  background-color: transparent;
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
  position: absolute;
  top: 2px;
  background-color: rgb(24, 41, 58);
  height: 2px;
  transform: scale(0);
  transition: transform 0.25s linear;
}

.focus-effect-div-clicked {
  position: relative;
  top: 30px;
  background-color: rgb(60, 132, 204);
  height: 2px;
  transform: scale(1);
  transition: transform 0.25s linear;
}

.focus-effect-div-textarea {
  position: relative;
  top: 30px;
  background-color: rgb(60, 132, 204);
  height: 2px;
  transform: scale(1);
  transition: transform 0.25s linear;
}

.focus-effect-div-textarea-clicked {
  position: relative;
  top: 30px;
  background-color: rgb(60, 132, 204);
  height: 2px;
  transform: scale(1);
  transition: transform 0.25s linear;
}

.div-not-dirty {
  background-color: rgb(60, 132, 204);
}

.div-no-error {
  background-color: rgb(72, 114, 25);
}

.div-error {
  background-color: rgb(224, 78, 92);
}

#clearInput {
  position: absolute;
  left: 95%;
}

#clearInput:hover {
  cursor: pointer;
}

.label {
  position: absolute;
  top: 5px;
  font-size: 1rem;
  transition: font-size 0.2s ease-out, top 0.2s ease-out;
}

.label-clicked {
  position: absolute;
  top: -14px;
  font-size: 0.75rem;
  color: rgb(60, 132, 204) !important;
  transition: font-size 0.2s ease-out, top 0.2s ease-out;
}

.error-message {
  position: absolute;
  color: rgb(224, 78, 92);
  top: 2rem;
}
</style>
