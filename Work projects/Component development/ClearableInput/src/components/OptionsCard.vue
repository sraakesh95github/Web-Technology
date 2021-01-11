<template>
  <div>
    <ul class="list-group my-3" id="options">
      <li
        class="list-group-item"
        v-for="(item, index) in itemDetails"
        :key="index"
        :id="index"
        :class="item.selected ? 'selected' : ''"
        @click="selectedOption"
      >
        {{ item.preText }}<span id="mask">{{ item.maskText }}</span
        >{{ item.postText }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemDetails: {
        type: Array,
        default: [],
      },
    };
  },
  props: {
    items: {
      type: Array,
      default: [],
    },
    searchKey: {
      type: String,
      default: "",
    },
  },
  beforeCreate() {
    this.$store.commit("initStore");
  },
  mounted() {
    var stringItem = {
      maskText: "",
      preText: "",
      postText: "",
      selected: false,
    };
    var itemMatchArray = [];
    this.items.forEach((item) => {
      let clone = { ...stringItem };
      clone.preText = item.name;
      itemMatchArray.push(clone);
    });
    this.itemDetails = itemMatchArray;
    if (itemMatchArray.length !== 0) {
      this.refreshCache();
      this.commitSelectList();
    }
    this.getStoredList();
  },
  watch: {
    searchKey() {
      if (this.selectHotClick === false) {
        var itemMatchArray = [];
        var searchIndex = 0;
        var searchKeyLength = this.searchKey.length;
        var stringLength = 0;
        var stringItem = {
          maskText: "",
          preText: "",
          postText: "",
          selected: false,
        };
        this.items.forEach((item) => {
          stringLength = item.name.length;
          searchIndex = item.name
            .toLowerCase()
            .search(this.searchKey.toLowerCase());
          if (searchIndex !== -1) {
            let clone = { ...stringItem };
            clone.maskText = item.name.substring(
              searchIndex,
              searchIndex + searchKeyLength
            );
            clone.preText = item.name.substring(0, searchIndex);
            clone.postText = item.name.substring(
              searchIndex + searchKeyLength,
              stringLength
            );
            itemMatchArray.push(clone);
          }
        });
        this.itemDetails = itemMatchArray;
      } else {
        this.selectHotClick = false;
      }
    },
  },
  methods: {
    selectedOption() {
      this.itemDetails.forEach((item, i) => {
        item.preText = item.preText + item.maskText + item.postText;
        item.maskText = "";
        item.postText = "";
        item.selected = false;
      });
      this.selectHotClick = true;
      var id;
      id = Number(event.target.attributes.id.value);
      var itemName = this.itemDetails[id].preText;
      this.$emit("select", itemName);
      var selectedObj = this.itemDetails.find(
        (obj) => obj["name"] === itemName
      );
      this.itemDetails[id].selected = true;
    },
    refreshCache() {
      this.$store.commit("refreshCache");
    },
    getStoredList() {
      var storedlist = this.$store.state.selectItemsList;
      if (storedlist !== null) {
        this.itemDetails = storedlist;
      }
    },
    commitSelectList() {
      this.$store.commit("saveSelectList", this.itemDetails);
    },
  },
};
</script>

<style scoped>
#options {
  box-shadow: 0px 3px 5px 1px lightgrey !important;
  max-height: 300px;
  overflow-y: auto;
}

.list-group-item {
  border: None !important;
  font-family: roboto;
}

.list-group-item:hover {
  background-color: rgb(244, 245, 247) !important;
  cursor: pointer;
}

.selected {
  background-color: rgb(228, 239, 250) !important;
  color: rgb(51, 141, 238);
}

#mask {
  background-color: lightgrey;
}
</style>
