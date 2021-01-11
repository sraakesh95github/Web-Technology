<template>
  <v-container fluid class="py-0 px-5" style="overflow: hidden">
    <v-row>
      <v-col cols="12">
        <div class="text-center">
          <h4 class="text-h4">
            Physics Lab - Harmonic Oscillator
          </h4>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="2" class="pa-5 grey rounded-lg">
        <p class="text-center mb-5">Experiment Attributes</p>
        <div class="d-flex align-baseline mb-5">
          <label class="l">Setting:&nbsp;</label>
          <v-select v-model="setting" :items="options" solo> </v-select>
        </div>
        <div v-if="editX" class="d-flex align-baseline mb-5">
          <label>x<sub>0:</sub>&nbsp;</label>
          <v-text-field
            type="number"
            min="1"
            max="100"
            v-model="x"
            solo
          ></v-text-field>
        </div>
        <div class="mb-5">
          <div class="v-label" style="text-align:right; position: relative;">
            Alarm&nbsp;
            <div id="alarm"></div>
          </div>

          <label>F-M<sub>n</sub>&nbsp;</label>
          <br>
          <span><font color="Blue">{{d}}</font></span>
          <v-slider 
            v-model="d"
            :min="config.range.min"
            :max="config.range.max"
            :stepSize="1"
            @change="knobValue"/>
        </div>
        <v-img
          placeholder="Loading image..."
          :src="changeImg()"
          class="rcorners_img"
          width="100%"
        ></v-img>
      </v-col>

      <v-col :cols="getChartCols">
        <v-container fluid>
          <v-row>
            <v-col cols="auto">
              <v-btn color="green" dark v-on:click="play()">
                Play <v-icon>mdi-play</v-icon>
              </v-btn>
            </v-col>
            <!-- <v-col cols="1">
              <v-btn color="red" dark v-on:click="pause()">
                <v-icon>mdi-pause</v-icon>
              </v-btn>
            </v-col> -->
            <v-col cols="auto">
              <v-btn color="blue" dark v-on:click="stop()">
                Pause <v-icon>mdi-pause</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn
                v-if="stopped"
                color="brown"
                dark
                v-on:click="writeToCsv()"
              >
                Download
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn
                v-if="stopped"
                color="orange"
                dark
                v-on:click="resetData()"
              >
                Reset <v-icon>mdi-undo</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="auto" class="ml-auto"></v-col>
            <v-col cols="2" class="d-flex align-baseline">
              <label
                >t<sub>{{ index }}:</sub>&nbsp;</label
              >
              <v-text-field :value="round(t)" label="t" disabled solo-inverted>
              </v-text-field>
            </v-col>
            <v-col cols="2" class="d-flex align-baseline">
              <label
                >x<sub>{{ index }}:</sub>&nbsp;</label
              >
              <v-text-field :value="round(x)" disabled solo-inverted>
              </v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <div id="chart">
                <apexchart
                  ref="realtimeChart"
                  type="line"
                  height="650px"
                  :options="chartOptions"
                  :series="series"
                />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col v-if="instructorView" cols="2" class="grey rounded-lg">
        <p class="text-center">Configuration Attributes</p>
        <v-slider
          :value="speed"
          label="Speed"
          min="0"
          max="1000"
          step="1"
          thumb-size="18"
          thumb-label="always"
        ></v-slider>
        <div class="d-flex align-baseline">
          <label>k:&nbsp;</label>
          <v-text-field :value="config.k" solo></v-text-field>
        </div>
        <div class="d-flex align-baseline">
          <label>m:&nbsp;</label>
          <v-text-field :value="config.m" solo></v-text-field>
        </div>
        <div class="d-flex align-baseline">
          <label>b:&nbsp;</label>
          <v-text-field :value="config.b" solo></v-text-field>
        </div>
        <div class="d-flex align-baseline">
          <label>dt:&nbsp;</label>
          <v-text-field :value="config.dt" solo></v-text-field>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import config1 from "../data/config1.json";
import config2 from "../data/config2.json";
import VueApexCharts from "vue-apexcharts";
import { saveAs } from 'file-saver';

export default {
  name: "Lab",

  components: {
    apexchart: VueApexCharts,
  },
  props: {
    instructorView: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      text: "",
      t: 0.0,
      x: 0.0,
      v: 0.0,
      d: 0,
      speed: 1,
      first_noise: 0.02*(0.5 - Math.random()),
      editX: true,
      stopped: false,
      setting: "No mass",
      options: ["No mass", "With mass"],
      series: [
        {
          data: [],
        },
      ],
      chartOptions: {
        chart: {
          animations: {
            enabled: false,
            easing: "linear",
          },
          zoom: {
            autoScaleYaxis: true
          },
          toolbar: {
            show: true,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true | '<img src="/static/icons/reset.png" width="20">',
              customIcons: [],
            },
          },
        },
        markers: {
          style: 'inverted',
          size: 6
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          curve: "straight",
        },
        xaxis: {
          title: {
            text: "Time (sec)",
          },
          labels: {
            rotate: -45,
            rotateAlways: true,
            formatter: function(value) {
              return parseFloat(value).toFixed(2);
            },
          },
          tickAmount: 10,
        },
        yaxis: {
          title: {
            text: "Angle (mrad)",
          },
          decimalsInFloat: 2,
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
      },
    };
  },

  watch: {
     d() {
      // console.log(this.d);
      // this.checkAlarm();
      return this.d;
    },
  },

  computed: {

    t() {
      // console.log(this.t);
      return this.t
    },

    config() {
      console.log(this.setting);
      return this.setting === "No mass" ? config1 : config2;
    },
    index() {
      // console.log("Index changed...");
      return this.series[0].data.length;
    },
    getChartCols() {
      return this.instructorView ? 8 : 10;
    },
    a() {
      var fd = this.config.fs * (1 / (this.d - this.config.d0) + 1 / (this.d + this.config.d0));
      var force = fd + this.config.f + (this.first_noise + this.config.noise * (0.5 - Math.random()));
      // console.log(this.config.f);
      return ((-this.config.k * (this.x - force)) / this.config.m - this.config.b * this.v);
    }
  },

  methods: {
    round(val) {
      return parseFloat(val).toFixed(2);
    },
    getNewSeries() {
      // console.log(this.x);
      this.series[0].data.push({
        x: this.round(this.t),
        y: this.round(this.x)
      });
      const time = new Date();
      // console.log(time.getSeconds());
      // this.text=this.text + "\n" + this.t.toString() + "," + time.getSeconds().toString()
      this.t = this.t + this.config.dt;
      this.x = parseFloat(this.x) + this.v * this.config.dt;
      //Window Bounce
      if (Math.abs(this.x) > 100) {
        this.v = this.v * -1.2;
      } else {
        this.v = this.v + this.a * this.config.dt;
      }
    },
    writeToCsv() {
      // Declaring the required variables
      let csvContent = "data:text/csv;charset=utf-8,";
      let row = "Time(sec),Angle(mrad)";
      //Create the csv format
      this.series[0].data.forEach(function(d) {
        csvContent += row + "\r\n";   
        row = d.x + "," + d.y;
      });
      //Craete a filename for the CSV file
      var date = new Date();
      const d = date.getDate().toString();
      const m = date.getMonth().toString();
      console.log(m)
      const hh = date.getHours().toString();
      const mm = date.getMinutes().toString();
      const ss = date.getSeconds().toString();
      const filename =
        "plot_" + m + "_" + d + "_" + hh + "_" + mm + "_" + ss + ".csv";
      //Download the CSV file
      var encodedUri = encodeURI(csvContent);
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      // link.click();
    },

    intervals() {
      var me = this;
      this.interval = setInterval(function() {
        me.getNewSeries();
        me.$refs.realtimeChart.updateSeries([{ data: me.series[0].data }]);
      }, this.config.dt * this.speed);
    },

    play() {
      this.editX = false;
      this.intervals();
    },

    pause() {
      clearInterval(this.interval);
    },

    stop() {
      clearInterval(this.interval);
      // var FileSaver = require('file-saver');
      // var blob = new Blob([this.text], {type: "text/plain;charset=utf-8"});
      // FileSaver.saveAs(blob, "timelog.csv");
      // this.text="";
      this.stopped = true;
    },

    resetData() {
      this.editX = true;
      this.stopped = false;
      this.series[0].data = [];
      this.$refs.realtimeChart.updateSeries([{ data: this.series[0].data }]);
      this.t = 0.0;
      this.x = 0.0;
      this.v = 0.0;
      this.d = 0;
    },

    knobValue() {
      // console.log(this.d)
      this.checkAlarm();
      // return this.d;
    },
    checkAlarm() {
      var alarm = document.getElementById("alarm");
      if (alarm != null) {
        if (this.d >= this.config.alarm) {
          alarm.style.backgroundColor = "red";
          alarm.style.boxShadow =
            "rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 12px";
          var audio = new Audio(require(".././assets/toing.mp3"));
          audio.play();
          this.v = this.v + 1;
        } else {
          alarm.style.backgroundColor = "white";
          alarm.style.boxShadow = "";
        }
      }
    },
    rangeConverter(old_val, old_min, old_max, new_min, new_max) {
      var new_val =
        ((old_val - old_min) / (old_max - old_min)) * (new_max - new_min) +
        new_min;
      return Math.round(new_val);
    },
    changeImg() {
      var img_num = 0;
      var img_suffix = "";
      if (this.d < 0) {
        img_num = this.rangeConverter(this.d, this.config.range.min, -1, 0, 29);
        if (img_num < 10) {
          img_suffix = "0" + img_num.toString();
        } else {
          img_suffix = img_num.toString();
        }
      } else if (this.d >= 0 && this.d <= this.config.alarm) {
        img_num = this.rangeConverter(this.d, 0, this.config.alarm, 30, 61);
        img_suffix = img_num.toString();
      } else {
        img_suffix = "61";
      }
      var imgPath = require(".././assets/images/Animation_SwingM/SwingM" +
        img_suffix +
        ".jpg");
      return imgPath;
    }
  }
};
</script>
<style>
* {
  font-size: 18px;
}
#alarm {
  float: right;
  margin: 0 auto;
  padding: 0;
  width: 14px;
  height: 14px;
  background-color: white;
  border-radius: 50%;
}
</style>
