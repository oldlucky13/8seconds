<?php
/*
Template Name: Home Template
*/

get_header();

?>

<div id="preloader">
  <div id="status">&nbsp;</div>
</div>

<div id="main-content">
  <div id="the-nav">
    <img id="mobile-logo" src="/wp-content/uploads/2017/01/NavBarLogo.png" />
    <div class="button_container" id="toggle">
      <span class="top"></span>
      <span class="middle"></span>
      <span class="bottom"></span>
    </div>
    <div class="menuOverlay" id="overlayMenu">
      <nav class="overlay-menu">
        <ul id="nav-menu">
          
        </ul>
      </nav>
    </div>
  </div>
  
  <div id="ageGate" class="modal">
      <img src="/wp-content/uploads/2017/01/Jseeds-ageGate_mini.png">
      <h1>Are you over 21 years old?</h1>
      <div class="button-wrapper">
          <button id="over21" class="JSbtn">Yes</button>
          <button id="under21" class="JSbtn">No</button>
      </div>
  </div>
</div> <!-- #main-content -->







<div id="mobile-indicator"></div>
<?php get_footer(); ?>
