<?php

/* Theme setup */
add_action( 'after_setup_theme', 'wpt_setup' );
if ( ! function_exists( 'wpt_setup' ) ):
    function wpt_setup() {
        register_nav_menu( 'primary', __( 'AG Menu', 'AGmenu' ) );
    } endif;

 // gap to add BS3 menu support
    require_once('wp_bootstrap_navwalker.php');


  function cc_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
  }
  add_filter('upload_mimes', 'cc_mime_types');

  //Load custom js
  function customjs_with_jquery()
  {
    wp_register_script('custom_script', get_stylesheet_directory_uri () . '/js/custom.js', array( 'jquery','cookieJS'),'20170109',true );
    wp_enqueue_script('custom_script');

    wp_register_script('jquery_mousewheel', get_stylesheet_directory_uri () . '/js/jquery.mousewheel.min.js', array( 'jquery' ), '3.1.13', true );
    wp_enqueue_script('jquery_mousewheel');

    wp_register_script('jquery_hammer', get_stylesheet_directory_uri () . '/js/hammer.min.js.map', array( 'jquery' ), '2.0.8', true );
    wp_enqueue_script('jquery_hammer');

    wp_register_script( 'cookieJS', get_stylesheet_directory_uri() . '/js/js.cookie.js', array( 'jquery' ), '2.1.3', true );
    wp_enqueue_script('cookieJS');
}
  add_action( 'wp_enqueue_scripts', 'customjs_with_jquery' );

// Load Font Awesome
add_action( 'wp_enqueue_scripts', 'enqueue_load_fa' );
function enqueue_load_fa() {

    wp_enqueue_style( 'load-fa', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css' );

}

function wpse_dequeue_google_fonts() {
   wp_dequeue_style( 'divi-fonts' );
}
add_action( 'wp_enqueue_scripts', 'wpse_dequeue_google_fonts', 20 );

add_filter('show_admin_bar', '__return_false');

// function safari_style_sheet() {
// wp_enqueue_style( 'safari-styling', get_stylesheet_directory_uri() . '/safari.css' );
// }
// add_action('wp_enqueue_scripts', 'safari_style_sheet');

// function reformat_auto_p_tags($content) {
//     $new_content = '';
//     $pattern_full = '{(\[raw\].*?\[/raw\])}is';
//     $pattern_contents = '{\[raw\](.*?)\[/raw\]}is';
//     $pieces = preg_split($pattern_full, $content, -1, PREG_SPLIT_DELIM_CAPTURE);
//     foreach ($pieces as $piece) {
//         if (preg_match($pattern_contents, $piece, $matches)) {
//             $new_content .= $matches[1];
//         } else {
//             $new_content .= wptexturize(wpautop($piece));
//         }
//     }
//
//     return $new_content;
// }
//
// remove_filter('the_content', 'wpautop');
// remove_filter('the_content', 'wptexturize');
//
// add_filter('the_content', 'reformat_auto_p_tags', 99);
// add_filter('widget_text', 'reformat_auto_p_tags', 99);
// ?>
