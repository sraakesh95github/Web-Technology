<template>
  <div class="sparkline11-list shadow-reset nt-mg-b-20">
    <div class="container-fluid" style="padding: 15px 10px 10px 20px;background:#393939;border-bottom:1px solid #212121">
      <div class="row">
        <div class="col-lg-12" style="color:#FFFFFF">  
            <h4>{{data.name}}</h4>
        </div>
      </div>
    </div>
    <div class="container-fluid" style="padding: 15px 10px 10px 20px;background:#393939;border-bottom:1px solid #212121">
      <div v-if="periodType==='Monthly'" class="row" v-for="(item,index) in sampleGoalsData" :key="index">
        <div class="col-lg-3" style="color:#FFFFFF;padding: 10px;">  
            <p>{{ item.name }}</p>
        </div>
        <div class="col-lg-9" style="color:#FFFFFF">  
          <fusioncharts
          :type="type"
          width="100%"
          height="35"
          :dataSource="genderValues(item,index)"
          ></fusioncharts>
        </div>
      </div>
      <div v-if="periodType==='Quarterly'" class="row" v-for="(item,index) in sampleGoalsDataQuartely" :key="index">
        <div class="col-lg-3" style="color:#FFFFFF;padding: 10px;">  
            <p>{{ item.name }}</p>
        </div>
        <div class="col-lg-9" style="color:#FFFFFF">  
          <fusioncharts
          :type="type"
          width="100%"
          height="35"
          :dataSource="genderValues(item,index)"
          ></fusioncharts>
        </div>
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
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.carbon";
// Register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, FusionMaps, World, FusionTheme);
FusionCharts.options.creditLabel = false;
export default {
  name: "CardBullet",
  props: {
    periodType: {
      type: String
    },
    data: {
      type: Object
    }
  },
  data() {
    return {
      dataSource: {
        chart: {
          theme: "fusion",
          showlabel: "0"
        },
        colorrange: {
          color: [
            {
              minvalue: "0",
              maxvalue: "50",
              code: "#eaeaea"
            },
            {
              minvalue: "50",
              maxvalue: "75",
              code: "#d1d1d1"
            },
            {
              minvalue: "75",
              maxvalue: "100",
              code: "#b7b7b7"
            }
          ]
        }
      },
      type: this.data.type,
      dataFormat: "json",
      sampleGoalsData: [
        {
          name: "WhitePaper Form",
          target: "65",
          value: "20"
        },
        {
          name: "Avangate Purchase",
          target: "60",
          value: "30"
        },
        {
          name: "Subscription Form",
          target: "75",
          value: "43"
        },
        {
          name: "Sales Inquiry Form",
          target: "50",
          value: "21"
        },
        {
          name: "Source Code Request",
          target: "60",
          value: "40"
        },
        {
          name: "DAAS Form",
          target: "50",
          value: "24"
        },
        {
          name: "Buy Form",
          target: "50",
          value: "20"
        },
        {
          name: "Contact Us",
          target: "100",
          value: "75"
        }
      ],
      sampleGoalsDataQuartely: [
        {
          name: "WhitePaper Form",
          target: "150",
          value: "60"
        },
        {
          name: "Avangate Purchase",
          target: "180",
          value: "90"
        },
        {
          name: "Subscription Form",
          target: "200",
          value: "70"
        },
        {
          name: "Sales Inquiry Form",
          target: "150",
          value: "62"
        },
        {
          name: "Source Code Request",
          target: "180",
          value: "60"
        },
        {
          name: "DAAS Form",
          target: "150",
          value: "70"
        },
        {
          name: "Buy Form",
          target: "150",
          value: "60"
        },
        {
          name: "Contact Us",
          target: "150",
          value: "75"
        }
      ]
    };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      if (this.data.renderAt === "chart-container-goal") {
        this.dataSource.chart = this.data.chartCosmetics;
        this.dataSource.value = 200;
        this.dataSource.target = 1200;
      }
    },
    genderValues(item, index) {
      let copyObj = "";
      this.dataSource.chart = this.data.chartCosmetics;
      this.dataSource.value = item.value;
      this.dataSource.target = item.target;
      this.dataSource.renderAt = "goals".concat(index);
      copyObj = { ...this.dataSource };
      return copyObj;
    }
  }
};
</script>
