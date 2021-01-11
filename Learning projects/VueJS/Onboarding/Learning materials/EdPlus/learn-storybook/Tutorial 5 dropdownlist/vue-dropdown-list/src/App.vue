<template>
    <div>
      <div id='dropdownlist 'style="margin:50px auto 0; width:250px;">
        <br>
        <ejs-dropdownlist popupHeight="200px" popupWidth="250px" 
        :dataSource='localData' :fields='localField' placeholder='Select a name'
        sortOrder='Descending'>
        </ejs-dropdownlist>
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
      localData: [
          { Id: 'game1', Game: 'Football' },
          { Id: 'game2', Game: 'Basketball' },
          { Id: 'game3', Game: 'Volleyball' }
        ],
      localField: { text: 'Game', id: 'Id', value: 'Game' },
      remoteData: remoteDataSource,
      remoteFields: { text: 'FirstName', value: 'EmployeeID' }
    };
  }
});

</script>
<style>
@import url(https://cdn.syncfusion.com/ej2/material.css);
</style>