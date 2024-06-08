<?php
/**
 * Plugin Name: Feature Lists
 * Description: The Feature Lists WordPress Block Plugin provides an intuitive and flexible way to showcase features in a visually appealing list format.Designed for ease of use within the Gutenberg editor, this plugin enables users to create and customize feature lists with icons, titles, and descriptions effortlessly.
 * Version: 1.0.0
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: feature-lists
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'BFL_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'BFL_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'BFL_DIR_PATH', plugin_dir_path( __FILE__ ) );



require_once BFL_DIR_PATH . 'inc/block.php';