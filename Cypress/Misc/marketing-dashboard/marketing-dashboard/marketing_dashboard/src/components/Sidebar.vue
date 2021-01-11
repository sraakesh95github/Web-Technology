<template>
  <div class="left-sidebar-pro">
    <nav id="sidebar">
      <div class="sidebar-header">
        <h3>Marketing</h3>
        <p>Dashboard</p>
        <strong>MD</strong>
      </div>
      <div class="left-custom-menu-adp-wrap">
        <ul class="nav navbar-nav left-sidebar-menu-pro">
          <li class="nav-item">
            <a to="/"  role="button" aria-expanded="false" class="nav-link dropdown-toggle">
              <i class="fa big-icon fa-home"></i> 
              <span class="mini-dn">Overview</span> 
              <span class="indicator-right-menu mini-dn">
                <i class="fa indicator-mn fa-angle-left"></i>
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a to="/digital_marketing" role="button" aria-expanded="false" class="nav-link dropdown-toggle">
              <i class="fa big-icon fa-table"></i> 
              <span class="mini-dn">SEO & Web Analytics</span> 
              <span class="indicator-right-menu mini-dn">
                <i class="fa indicator-mn fa-angle-left"></i>
              </span>
            </a>
          </li>
          <li class="nav-item">
            <a to="/email_campaign" role="button" aria-expanded="false" class="nav-link dropdown-toggle">
              <i class="fa big-icon fa-envelope"></i> 
              <span class="mini-dn">PPC</span> 
              <span class="indicator-right-menu mini-dn">
                <i class="fa indicator-mn fa-angle-left"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>
