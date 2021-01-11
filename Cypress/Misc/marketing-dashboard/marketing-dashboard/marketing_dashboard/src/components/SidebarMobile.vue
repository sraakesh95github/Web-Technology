<template>
  <div class="mobile-menu-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="mobile-menu">
            <nav id="dropdown">
              <ul class="mobile-menu-nav">
                <li>
                  <a data-toggle="collapse" data-target="#Charts" href="index.html">Overview 
                    <span class="admin-project-icon adminpro-icon adminpro-down-arrow"></span>
                  </a>
                </li>
                <li>
                  <a data-toggle="collapse" data-target="#Charts" href="index.html">SEO & Web Analytics 
                    <span class="admin-project-icon adminpro-icon adminpro-down-arrow"></span>
                  </a>
                </li>
                <li>
                  <a data-toggle="collapse" data-target="#Charts" href="index.html">PPC 
                    <span class="admin-project-icon adminpro-icon adminpro-down-arrow"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarMobile"
};
</script>
