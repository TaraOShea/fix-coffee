<header>
	<h1 class="logo red-txt">
		<a href="<?php echo home_url(); ?>/">
     <?php bloginfo('name'); ?>
		</a>
	</h1>
    <div class="mobile-nav">
	  	<button id="mobile-menu-trigger"><span></span></button>	            
    </div>
      <div id="mobile-menu-container">
	      <nav class="mobile-menu">
	        <?php
	          if (has_nav_menu('primary_navigation')) :
	            wp_nav_menu(array('theme_location' => 'primary_navigation'));
	          endif;
	        ?>
		    </nav>     
      </div>
    <?php
      if (has_nav_menu('primary_navigation')) :
        wp_nav_menu(array('theme_location' => 'primary_navigation'));
      endif;
    ?>
</header>

