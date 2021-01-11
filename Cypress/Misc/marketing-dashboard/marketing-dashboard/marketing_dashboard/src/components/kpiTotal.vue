<template>
  <div class="text-white">
    <h4 class="small-stats-header">{{data.name}}</h4>
      <div class="row p-14">
        <div class="col-lg-4">
          <h3 class="m-0 count">{{ todayCount }}</h3>
          <p class="count-text">Today</p>
        </div>
        <div class="col-lg-4">
          <h3 class="m-0 count">{{ monthlyCount }}</h3>
          <p class="count-text">Monthly</p>
        </div>
        <div class="col-lg-4">
          <h3 class="m-0 count">{{ quarterlyCount }}</h3>
          <p class="count-text">Quarterly</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "kpiTotal",
  data() {
    return {
      todayCount: 0,
      monthlyCount: 0,
      quarterlyCount: 0
    };
  },
  props: {
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
      let today_count = 0;
      let monthly_count = 0;
      let quarterly_count = 0;

      originaldata.forEach(element => {
        let receivedDate = element.Date;
        let receivedDateSplit = receivedDate.split("/");
        if (
          parseInt(endMonth) === parseInt(receivedDateSplit[1]) &&
          parseInt(receivedDateSplit[0]) === endDay
        ) {
          today_count += element[filter] * 1;
        }
        if (
          parseInt(endMonth) === parseInt(receivedDateSplit[1]) &&
          parseInt(receivedDateSplit[0]) <= endDay
        ) {
          monthly_count += element[filter] * 1;
        }

        if (
          parseInt(endMonth) <= parseInt(receivedDateSplit[1]) &&
          parseInt(receivedDateSplit[0]) <= endDay
        ) {
          quarterly_count += element[filter] * 1;
        }
      });
      this.todayCount = today_count
        .toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      this.monthlyCount = monthly_count
        .toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      this.quarterlyCount = quarterly_count
        .toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
</script>
