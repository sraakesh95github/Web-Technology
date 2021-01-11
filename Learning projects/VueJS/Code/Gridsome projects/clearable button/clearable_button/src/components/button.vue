<template>
  <div class="mt-5">
    
    <b-form-input 
    v-model="text"
    placeholder="Enter value" 
    id="input-field"
    @click.stop="fieldClicked"
    v-clickoutside="fieldUnclicked">
    </b-form-input>
    <div :id="clicked? 'div-clicked' : 'div-unclicked' ">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      clicked: false
    }
  },
  methods: {
    fieldClicked() {
      this.clicked=true;
      // console.log("Value changed...");
      // console.log(event);
    },
    fieldUnclicked() {
      console.log("clicked outside...");
      this.clicked = false;
    }
  },
  directives: {
    clickoutside: {
      bind: function (el, binding, vnode) {
          el.eventSetDrag = function () {
              el.setAttribute('data-dragging', 'yes');
          }
          el.eventClearDrag = function () {
              el.removeAttribute('data-dragging');
          }
          el.eventOnClick = function (event) {
              var dragging = el.getAttribute('data-dragging');
              // Check that the click was outside the el and its children, and wasn't a drag
              if (!(el == event.target || el.contains(event.target)) && !dragging) {
                  // call method provided in attribute value
                  vnode.context[binding.expression](event);
              }
          };
          document.addEventListener('touchstart', el.eventClearDrag);
          document.addEventListener('touchmove', el.eventSetDrag);
          document.addEventListener('click', el.eventOnClick);
          document.addEventListener('touchend', el.eventOnClick);
      }, unbind: function (el) {
          document.removeEventListener('touchstart', el.eventClearDrag);
          document.removeEventListener('touchmove', el.eventSetDrag);
          document.removeEventListener('click', el.eventOnClick);
          document.removeEventListener('touchend', el.eventOnClick);
          el.removeAttribute('data-dragging');
      },
    }
  }
}
</script>

<style>
#input-field {
  box-shadow: none;
  border-radius: 0;
  border-width: 0;
  border-bottom-width: 1px;
  border-bottom-color: black;
  }

#div-unclicked {
  /* border-bottom-width: 2px; */
  background-color: blue;
  transform: scaleX(0);
  height: 2px;
  transition: transform 500ms ease-in-out;
  }

#div-clicked {
  border-bottom-width: 2px;
  background-color: blue;
  transform: scaleX(1);
  height: 2px;
  transition: transform 500ms ease-in-out;
}
</style>