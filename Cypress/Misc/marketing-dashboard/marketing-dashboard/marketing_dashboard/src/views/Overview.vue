<template>
  <div class="darklayout">
    <div id="loader-wrapper" class="loader" v-if="loader">
        <div style="position: fixed; width: 6%; top: 43%; left: 47%;">
        <img src="../assets/FC_Loader.gif" style="max-width: 100%; height: auto;">
        </div>
    </div>
    <pageHeader />
    <div class="wrapper-pro">
      <!-- <sidebar /> -->
      <!-- Header top area start-->
      <div class="content-inner-all">
        <div class="feed-mesage-project-area border-bottom">
          <div class="">
            <div class="row">
              <div class="col-lg-8">
                  <div class="breadcome-area mg-b-20 small-dn"> 
                    <div class="">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="map-mg-t-40-gl">
                            <div class="row">
                              <div class="col-lg-9">
                                <div class="breadcome-heading">
                                  <h2>Overview</h2>
                                </div>
                              </div>
                              <div class="col-lg-3 text-right">
                                <div class="breadcome-heading">
                                  <!-- <div style="color:#e6e6e6;float:left">Select Measure</div> -->
                                  <select name="interestedcategory" class="valid" v-model="periodType" style="background: #343F44;color: #e6e6e6;">
                                    <option value="Monthly">This Month</option>
                                    <option value="Quarterly">This Quarter</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>  
              <div class="col-lg-4 individual-cont">
                <div class="breadcome-heading">
                  <div class="">
                    <h2>Snapshot</h2>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div class="">
            <div class="row">
              <div class="col-lg-8">
                <div class="income-order-visit-user-area">
                  <div class="">
                    <div class="row">
                      <div class="col-lg-6">
                        <kpi :data="trafficInfo" :receivedData="receiveddata" :periodType="periodType"/>
                      </div>
                      <div class="col-lg-6">
                        <kpi :data="leadsInfo" :receivedData="receiveddata" :periodType="periodType"/>
                      </div>
                      <div class="col-lg-6">
                        <kpi :data="sqlsInfo" :receivedData="receiveddata" :periodType="periodType"/>
                      </div>
                      <div class="col-lg-6">
                        <kpi :data="revenueInfo" :receivedData="receiveddata" :periodType="periodType"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 individual-cont">
                <div class="row">
                  <div class="col-lg-12 text-center">
                    <div class="nt-mg-b-20 traffic-sec"> 
                      <kpitotal :data="overalltrafficInfo" :receivedData="receiveddata" :periodType="periodType" />
                    </div>
                  </div>
                  <div class="col-lg-12 text-center">
                    <div class="nt-mg-b-20 leads-cont">
                      <kpitotal :data="overallleadsInfo" :receivedData="receiveddata" :periodType="periodType" />  
                    </div>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </div>
        <!-- income order visit user End -->
        <div class="feed-mesage-project-area">
          <div class="">
            <div class="row">
              <div class="col-lg-7">
                <CardMap :data="geoData" :receivedData="receiveddata" :periodType="periodType" filterBy="Region"  v-if="filterApplied ==='' "/>
                <card :data="countryData" :receivedData="receiveddata" :periodType="periodType" filterBy="Country" :filterApplied="filterApplied" v-if="filterApplied !=='' "/>
              </div>
              <div class="col-lg-5">
                <card :data="trafficData" :receivedData="receiveddata" :periodType="periodType" filterBy="Medium"/>
              </div>
            </div>
          </div>
        </div>
        <div class="feed-mesage-project-area">
          <div class="">
            <div class="row">
              <div class="col-lg-6">
                <card :data="industryData" :receivedData="receiveddata" :periodType="periodType" filterBy="Industry"/>
              </div>
              <div class="col-lg-6">
                <CardBullet :data="goalsData" :receivedData="receiveddata" :periodType="periodType"/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright-area">
        <div class="">
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer-copy-right">
                        <p>Marketing Dashboard by Fusioncharts.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import sidebar from "../components/Sidebar";
import sidebarmobile from "../components/SidebarMobile";
import card from "../components/Card";
import CardMap from "../components/CardMap";
import kpi from "../components/Kpi";
import kpitotal from "../components/kpiTotal";
import pagetitlemobile from "../components/PageTitleMobile";
import stat from "../components/Stats";
import pageHeader from "../components/Header";
import CardBullet from "../components/CardBullet";
import axios from "axios";

export default {
  name: "Overview",
  components: {
    sidebar,
    sidebarmobile,
    card,
    CardMap,
    kpi,
    kpitotal,
    pagetitlemobile,
    stat,
    pageHeader,
    CardBullet
  },
  computed: {
    hasFilter() {
      return this.$store.state.filterData && this.$store.state.filterData.data;
    }
  },
  watch: {
    hasFilter() {
      this.filterApplied = this.hasFilter;
    }
  },
  data() {
    return {
      loader: true,
      filterApplied: "",
      receiveddata: [],
      periodType: "Monthly",
      trafficInfo: {
        name: "Traffic",
        filter: "PageviewsperVisitor"
      },
      overalltrafficInfo: {
        name: "Traffic",
        filter: "PageviewsperVisitor"
      },
      leadsInfo: {
        name: "Leads",
        filter: "TotalDownloads"
      },
      overallleadsInfo: {
        name: "Leads",
        filter: "TotalDownloads"
      },
      sqlsInfo: {
        name: "SQLS",
        filter: "GoalConversionRate"
      },
      revenueInfo: {
        name: "Revenue",
        filter: "UniqueVisitors"
      },

      geoData: {
        name: "By Regions",
        chartCosmetics: {
          theme: "fusion",
          includevalueinlabels: "1",
          labelsepchar: ": ",
          bgcolor: "#393939",
          fillcolor: "#a1d9f5",
          borderColor: "#393939",
          showCanvasBorder: 0,
          toolTipColor: "#000000",
          showLabels: "1",
          entityFillHoverColor: "#46b5ea",
          baseFontColor: "#FFFFFF"
        },
        type: "world",
        renderAt: "chart-container-geo",
        showFilter: true
      },

      goalsData: {
        name: "By Goal Completions",
        chartCosmetics: {
          theme: "fusion",
          bgcolor: "#393939",
          bgAlpha: 100,
          showBorder: 0,
          canvasBgColor: "#393939",
          showVLineLabelBorder: 0,
          canvasBgAlpha: 100,
          canvasBorderColor: "#393939",
          showAlternateHGridColor: 0,
          legendBgColor: "#393939",
          legendBorderColor: "#393939",
          legendShadow: 0,
          legendItemFontColor: "#e6e6e6",
          baseFontColor: "#e6e6e6",
          showTickMarks: 0,
          showTickValues: 0,
          toolTipColor: "#000000",
          targetColor: "#000000",
          plotFillColor: "#0e618b",
          plotBorderColor: "#393939",
          valueFontColor: "#e6e6e6",
          showvalues: 1,
          valueFontSize: 12
        },
        type: "hbullet",
        renderAt: "chart-container-goal",
        showFilter: false
      },

      industryData: {
        name: "By Industries",
        chartCosmetics: {
          theme: "fusion",
          bgcolor: "#393939",
          bgAlpha: 100,
          showBorder: 0,
          canvasBgColor: "#393939",
          showVLineLabelBorder: 0,
          canvasBgAlpha: 100,
          canvasBorderColor: "#393939",
          showAlternateHGridColor: 0,
          legendBgColor: "#393939",
          legendBorderColor: "#393939",
          legendShadow: 0,
          legendItemFontColor: "#e6e6e6",
          baseFontColor: "#e6e6e6",
          borderPadding: "20px",
          valuePadding: "20px",
          usePlotGradientColor: 0,
          toolTipColor: "#000000",
          showvalues: 1,
          valueFontColor: "#e6e6e6",
          valueFontSize: 11
        },
        type: "msbar2d",
        renderAt: "chart-container-industries",
        showFilter: false
      },

      trafficData: {
        name: "By Traffic Source",
        chartCosmetics: {
          theme: "fusion",
          bgcolor: "#393939",
          bgAlpha: 100,
          showBorder: 0,
          canvasBgColor: "#393939",
          showVLineLabelBorder: 0,
          canvasBgAlpha: 100,
          canvasBorderColor: "#393939",
          showAlternateHGridColor: 0,
          legendBgColor: "#393939",
          legendBorderColor: "#393939",
          legendShadow: 0,
          legendItemFontColor: "#e6e6e6",
          baseFontColor: "#e6e6e6",
          borderPadding: "20px",
          valuePadding: "20px",
          usePlotGradientColor: 0,
          toolTipColor: "#000000",
          showvalues: 1,
          valueFontColor: "#e6e6e6",
          valueFontSize: 11
        },
        type: "mscolumn2d",
        renderAt: "chart-container-traffic",
        showFilter: false
      },

      countryData: {
        name: "By Country",
        chartCosmetics: {
          theme: "fusion",
          bgcolor: "#393939",
          bgAlpha: 100,
          showBorder: 0,
          canvasBgColor: "#393939",
          showVLineLabelBorder: 0,
          canvasBgAlpha: 100,
          canvasBorderColor: "#393939",
          showAlternateHGridColor: 0,
          legendBgColor: "#393939",
          legendBorderColor: "#393939",
          legendShadow: 0,
          legendItemFontColor: "#e6e6e6",
          baseFontColor: "#e6e6e6",
          borderPadding: "20px",
          valuePadding: "20px",
          usePlotGradientColor: 0,
          toolTipColor: "#000000",
          showvalues: 1,
          valueFontColor: "#e6e6e6",
          valueFontSize: 11
        },
        type: "mscolumn2d",
        renderAt: "chart-container-country",
        showFilter: false
      }
    };
  },

  async created() {
    const result = await axios.get(process.env.VUE_APP_SERVERURL, {
      params: {}
    });
    this.receiveddata = result.data;
    this.loader = false;
  }
};
</script>
