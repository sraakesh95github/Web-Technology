<template>
<div>
    <div class="card" style="width: 350px;">
        
        <h4 class="card-header"
            style="text-align: 'center';">
            ASU Departments
        </h4>

        <div v-if="loading" class="d-flex justify-content-center" style="padding-top: 50px;">
          <div class="spinner-border text-primary" role="status" style="padding: 30px;">
            <span class="sr-only">Loading...</span>
          </div>
        </div>

        <!-- <div class="spinner-grow"></div> -->

        <img class="card-img-top" 
               src="https://media-exp1.licdn.com/dms/image/C4D0BAQG2HrgshDJOXg/company-logo_200_200/0?e=2159024400&v=beta&t=HR3Mj38Do1BCZr3GLJOEvKsSB3mr_Wmho-W28XF-QSs"
               alt="No department selected"
               height = "247px"
               width = "204px"
               align = "center"
               v-if = "!loading && departmentSelected">

        <div class="card-body">

            <h4 v-if="!loading && !departmentSelected" style="text-align:center; padding:20px; color: gray">No department selected</h4>

            <div id='dropdownlist' style="width:250px; text-align: center;">
                <br>
                <ejs-dropdownlist popupHeight="200px" popupWidth="250px" @select="selectAction"
                :dataSource='listItemsData' :fields='localField' placeholder='Select a department'
                sortOrder='Descending' :value="selectedField">
                </ejs-dropdownlist>
            </div>

            <p v-if="departmentSelected" style="padding: 10px; text-align: 'center';" class="card-text">{{ departmentText }}</p>

        </div>
    </div>

</div>
</template>

<script>
import Vue from 'vue';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(DropDownListPlugin);
import { DataManager,WebApiAdaptor } from '@syncfusion/ej2-data';

var remoteDataSource = new DataManager({
  url: 'https://ej2services.syncfusion.com/production/web-services/api/Employees',
  adaptor: new WebApiAdaptor,
  crossDomain: true
});

export default Vue.extend({

  data: function() {
    return {
      // localData: [
      //     {Id: '1', Subject: 'Foundation of Algo'},
      //     {Id: '2', Subject: 'Embedded Microprocessor System'},
      //     {Id: '3', Subject: 'Data Processing at Scale'},
      //   ],
      localField: { text: 'Subject', id: 'Id', value: 'Id' },
      remoteData: remoteDataSource,
      remoteFields: { text: 'FirstName', value: 'EmployeeID' }
    };
  },

  props: {
      
      listItemsData: {
          type: Array,
          default: () => [],
      },

      listSettingData: {
          type: Object,
          default: () => {
              id: 'Id'
              text: 'Subject'
              value: 'Subject'
          }
      },
      loading: false,
      departmentSelected: false,
      departmentText: '',
      selectedField: '',
      imgSrc: '',
  },

  methods: {
    selectAction(value) {
      console.log("An item has been selected: " + value.id)
      this.$emit('selectEvent', value.id)
    }
  }

});

</script>
<style>
@import url(https://cdn.syncfusion.com/ej2/material.css);
</style>