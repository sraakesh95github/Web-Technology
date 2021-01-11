<template>
  <div class="sparkline11-list shadow-reset nt-mg-b-20">
    <div class="card-container" style="">
      <div class="row">
        <div class="col-lg-8" style="color:#e6e6e6">  
            <h4>{{data.name}}</h4>
        </div>
        <div class="col-lg-4 text-right">
          <div class="breadcome-heading">
            <select name="interestedcategory" class="valid" v-if="data.showFilter" v-model="traficSource"  style="background: #343F44;color: #e6e6e6;">
              <option value="traffic">Traffic</option>
              <option value="leads">Leads</option>
            </select>
            <img src="../assets/undo.png" v-if="undo" height="30px" width="20px" style="cursor:pointer" @click="undoChart">
          </div>
        </div>
      </div>
    </div>
    <div id="app">
        <div id="chart-container" style="padding:10px;background:#393939">
            <fusioncharts
            :type="type"
            width="100%"
            height="405"
            :dataSource="dataSource"
            @entityClick="filterChart"
            ></fusioncharts>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueFusionCharts from "vue-fusioncharts";
import FusionCharts from "fusioncharts";
import FusionMaps from "fusioncharts/fusioncharts.maps";
import World from "fusioncharts/maps/fusioncharts.world";

// Register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, FusionMaps, World);

export default {
  name: "CardMap",
  props: {
    periodType: {
      type: String
    },
    data: {
      type: Object
    },
    receivedData: {
      type: Array
    },
    filterBy: {
      type: String
    },
    filterApplied: {
      type: String
    }
  },
  watch: {
    filterApplied() {
      this.renderChart();
    },
    receivedData() {
      this.renderChart();
    },
    periodType() {
      this.renderChart();
    },
    traficSource() {
      this.renderChart();
    }
  },
  data() {
    return {
      filter: "",
      undo: false,
      dataSource: {
        chart: {}
      },
      type: this.data.type,
      renderAt: this.data.renderAt,
      dataFormat: "json",
      traficSource: "traffic",
      regionMapping: [
        {
          name: "Asia",
          id: "AS"
        },
        {
          name: "Europe",
          id: "EU"
        },
        {
          name: "North America",
          id: "NA"
        },
        {
          name: "Oceania",
          id: "AU"
        },
        {
          name: "South America",
          id: "SA"
        }
      ]
    };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      if (this.receivedData.length === 0) return false;
      let sortedKey = [];
      let endMonth = 0;
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1;
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      if (mm === 1 || mm === 4 || mm === 7 || mm === 10) {
        endMonth = 10;
      }
      if (mm === 2 || mm === 5 || mm === 8 || mm === 11) {
        endMonth = 11;
      }
      if (mm === 3 || mm === 6 || mm === 9 || mm === 12) {
        endMonth = 12;
      }
      const endDay = dd;
      this.receivedData.forEach(element => {
        let trafficCount = element.PageviewsperVisitor * 1;
        let leadsCount = element.TotalDownloads * 1;
        let checkStatus = false;
        let indexMatched = 0;
        let receivedDate = element.Date;
        let receivedDateSplit = receivedDate.split("/");
        if (this.periodType === "Monthly") {
          if (
            parseInt(endMonth) === parseInt(receivedDateSplit[1]) &&
            parseInt(receivedDateSplit[0]) <= endDay
          ) {
            sortedKey.forEach((key, index) => {
              if (key.label === element[this.filterBy]) {
                checkStatus = true;
                indexMatched = index;
              }
            });
            if (!checkStatus) {
              sortedKey.push({
                label: element[this.filterBy],
                traffic: element.PageviewsperVisitor * 1,
                leads: element.TotalDownloads * 1
              });
            } else {
              sortedKey[indexMatched]["traffic"] =
                sortedKey[indexMatched]["traffic"] * 1 + trafficCount * 1;
              sortedKey[indexMatched]["leads"] =
                sortedKey[indexMatched]["leads"] * 1 + leadsCount * 1;
            }
          }
        }
        if (this.periodType === "Quarterly") {
          if (
            parseInt(endMonth) <= parseInt(receivedDateSplit[1]) &&
            parseInt(receivedDateSplit[0]) <= endDay
          ) {
            sortedKey.forEach((key, index) => {
              if (key.label === element[this.filterBy]) {
                checkStatus = true;
                indexMatched = index;
              }
            });
            if (!checkStatus) {
              sortedKey.push({
                label: element[this.filterBy],
                traffic: element.PageviewsperVisitor * 1,
                leads: element.TotalDownloads * 1
              });
            } else {
              sortedKey[indexMatched]["traffic"] =
                sortedKey[indexMatched]["traffic"] * 1 + trafficCount * 1;
              sortedKey[indexMatched]["leads"] =
                sortedKey[indexMatched]["leads"] * 1 + leadsCount * 1;
            }
          }
        }
      });
      let label = [];
      let trafficData = [];
      let leadsData = [];
      let dataIdtraffic = [];
      let dataIdleads = [];
      let regionId = "";
      for (let i = 0; i < sortedKey.length; i++) {
        label.push({ label: sortedKey[i].label });
        trafficData.push({ value: sortedKey[i].traffic.toFixed(0) });
        leadsData.push({ value: sortedKey[i].leads.toFixed(0) });
        this.regionMapping.forEach(region => {
          if (region.name === sortedKey[i].label) {
            regionId = region.id;
          }
        });
        dataIdtraffic.push({
          id: regionId,
          value: sortedKey[i].traffic.toFixed(0),
          link: "javascript:void(0)"
        });
        dataIdleads.push({
          id: regionId,
          value: sortedKey[i].leads.toFixed(0),
          link: "javascript:void(0)"
        });
      }
      if (this.data.renderAt === "chart-container-geo") {
        this.dataSource.chart = Object.assign({}, this.data.chartCosmetics);
        this.dataSource.colorrange = {
          minvalue: "0",
          startlabel: "Low",
          endlabel: "High",
          code: "#D7DDFF",
          gradient: "1",
          alpha: 0,
          color: [
            {
              maxvalue: "9000",
              code: "#0e618b"
            },
            {
              maxvalue: "8000",
              code: "#1071a2"
            },
            {
              maxvalue: "7000",
              code: "#1381b9"
            },
            {
              maxvalue: "6000",
              code: "#1591d0"
            },
            {
              maxvalue: "5000",
              code: "#17a1e7"
            },
            {
              maxvalue: "4000",
              code: "#2eabea"
            },
            {
              maxvalue: "3000",
              code: "#45b4ec"
            },
            {
              maxvalue: "2000",
              code: "#5cbdee"
            },
            {
              maxvalue: "1000",
              code: "#73c7f1"
            },
            {
              maxvalue: "500",
              code: "#8ad0f3"
            },
            {
              maxvalue: "0",
              code: "#a1d9f5"
            }
          ]
        };
        if (this.traficSource === "traffic") {
          this.dataSource.data = dataIdtraffic;
        } else {
          this.dataSource.data = dataIdleads;
        }
      }
    },

    filterChart: function(e) {
      this.filter = e.data.label;
      if (this.filter === "Australia") {
        this.filter = "Oceania";
      }
      this.$store.commit("setFilter", {
        data: this.filter
      });
    },

    undoChart() {
      this.filter = "";
      this.$store.commit("setFilter", {
        data: this.filter
      });
    }
  }
};
</script>
