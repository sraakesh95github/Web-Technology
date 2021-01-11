<template>
  <div class="skill-content-3">
    <div class="skill sparkline11-hd text-white">
      <h4 class="">Today</h4>
      <div class="lead-content">
        <p>Traffic <span>2,346</span></p>
        <p>Leads <span>1,200</span></p>
        <fusioncharts 
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="dataSource"
        ></fusioncharts>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueFusionCharts from "vue-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import Widgets from "fusioncharts/fusioncharts.widgets";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
// Register VueFusionCharts component
Charts(FusionCharts);
Widgets(FusionCharts);
FusionTheme(FusionCharts);
Vue.use(VueFusionCharts, FusionCharts);

const dataSource = {
  chart: {
    theme: "fusion",
    showlabel: "0"
  },
  colorrange: {
    color: [
      {
        minvalue: "0",
        maxvalue: "50",
        code: "#F2726F"
      },
      {
        minvalue: "50",
        maxvalue: "75",
        code: "#FFC533"
      },
      {
        minvalue: "75",
        maxvalue: "100",
        code: "#62B58F"
      }
    ]
  },
  value: "2346",
  target: "1200"
};
export default {
  name: "Stats",
  data() {
    return {
      type: "hbullet",
      width: "100%",
      height: "60",
      dataFormat: "json",
      dataSource
    };
  }
};
</script>
