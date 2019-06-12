<?php
/**
 * Custom functions
 */

function remove_menus () {
    global $menu;
    $restricted = array(__('Posts'), __('Comments'), __('Media'));
    end ($menu);
    while (prev($menu)){
        $value = explode(' ',$menu[key($menu)][0]);
        if(in_array($value[0] != NULL?$value[0]:"" , $restricted)){unset($menu[key($menu)]);}
    }
}
add_action('admin_menu', 'remove_menus');

//Remove wp-logo from admin menu
function annointed_admin_bar_remove() {
    global $wp_admin_bar;
    $wp_admin_bar->remove_menu('wp-logo');
    $wp_admin_bar->remove_menu('comments');
}
add_action('wp_before_admin_bar_render', 'annointed_admin_bar_remove', 0);

// Remove add new from admin menu
function OXP_admin_bar_edit() {
    global $wp_admin_bar;
    $wp_admin_bar->remove_menu('new-content');
}
add_action( 'wp_before_admin_bar_render', 'OXP_admin_bar_edit' );

function remove_footer_admin ()
{
    echo '<span id="footer-thankyou">Developed by Tara OShea for <a href="http://www.studiopartyline.com" target="_blank">S.PL</a></span>';
}
add_filter('admin_footer_text', 'remove_footer_admin');

//remove block editot 
function remove_gutenberg(){
    wp_dequeue_style('wp-block-library');
}
add_action( 'wp_enqueue_scripts', 'OXP_admin_remove_gutenbergbar_edit',100 );
