<template>
  <div class="income-dashone-total shadow-reset nt-mg-b-20">
    <div class="income-title radious-5">
      <div class="main-income-head">
        <h2>{{ data.name }}</h2>
        <div class="main-income-phara order-cl">
          <p>{{ periodType }}</p>
        </div>
      </div>
    </div>
    <div class="income-dashone-pro">
      <div class="income-rate-total">
        <div class="price-adminpro-rate">
          <h3><span class="counter">{{ count }}</span></h3>
        </div>
      </div>
      <div :class="['income-range', order]">
        <p class="new-status">New {{ data.name }}</p>
        <span class="income-percentange">{{ statusValue }}% <i :class="['fa', status]"></i></span>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "kpi",
  data() {
    return {
      count: 0,
      statusValue: 0,
      status: "",
      order: ""
    };
  },
  props: {
    periodType: {
      type: String
    },
    data: {
      type: Object
    },
    receivedData: {
      type: Array
    }
  },
  watch: {
    receivedData() {
      this.parseData();
    },
    periodType() {
      this.parseData();
    }
  },
  methods: {
    parseData() {
      if (!this.receivedData) return false;
      let filter = this.data.filter;
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
      const originaldata = this.receivedData;
      let count = 0;
      let prevCount = 0;
      originaldata.forEach(element => {
        let receivedDate = element.Date;
        let receivedDateSplit = receivedDate.split("/");
        if (this.periodType === "Monthly") {
          if (
            parseInt(endMonth) === parseInt(receivedDateSplit[1]) &&
            parseInt(receivedDateSplit[0]) <= endDay
          ) {
            count += element[filter] * 1;
          }
          if (
            parseInt(endMonth - 1) === parseInt(receivedDateSplit[1]) &&
            parseInt(receivedDateSplit[0]) <= endDay
          ) {
            prevCount += element[filter] * 1;
          }

          if (count > prevCount) {
            this.statusValue = (((count - prevCount) * 100) / count).toFixed(2);
            this.status = "fa-level-up";
            this.order = "order-cl";
            this.count = count
              .toFixed(0)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          } else {
            this.statusValue = (
              ((prevCount - count) * 100) /
              prevCount
            ).toFixed(2);
            this.status = "fa-level-down";
            this.order = "low-value-cl";
            this.count = count
              .toFixed(0)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
        }
        if (this.periodType === "Quarterly") {
          if (
            parseInt(endMonth) <= parseInt(receivedDateSplit[1]) &&
            parseInt(receivedDateSplit[0]) <= endDay
          ) {
            count += element[filter] * 1;
          }
          if (
            parseInt(endMonth - 1) <= parseInt(receivedDateSplit[1]) &&
            parseInt(receivedDateSplit[0]) <= endDay
          ) {
            prevCount += element[filter] * 1;
          }

          if (count > prevCount) {
            this.statusValue = (((count - prevCount) * 100) / count).toFixed(2);
            this.status = "fa-level-up";
            this.order = "order-cl";
            this.count = count
              .toFixed(0)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          } else {
            this.statusValue = (
              ((prevCount - count) * 100) /
              prevCount
            ).toFixed(2);
            this.status = "fa-level-down";
            this.order = "low-value-cl";
            this.count = count
              .toFixed(0)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
        }
      });
    }
  }
};
</script>
