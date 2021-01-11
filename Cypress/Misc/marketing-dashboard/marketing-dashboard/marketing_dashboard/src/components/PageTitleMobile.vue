<template>
  <div class="breadcome-area mg-b-20 small-dn"> 
    <div class="container-fluid">
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
                  <div style="color:#FFFFFF;float:left">Select Measure</div>
                  <select name="interestedcategory" class="valid">
                    <option value="monthly" selected="" disabled="">Monthly</option>
                    <option value="yearly">Quarterly</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pagetitlemobile"
};
</script>
