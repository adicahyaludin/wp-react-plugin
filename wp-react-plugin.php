<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://ridwan-arifandi.com
 * @since             1.0.0
 * @package           Wp_React_Plugin
 *
 * @wordpress-plugin
 * Plugin Name:       WP React Plugin
 * Plugin URI:        https://ridwan-arifandi.com
 * Description:       React for WP Plugin
 * Version:           1.0.0
 * Author:            Orangerdev Team
 * Author URI:        https://ridwan-arifandi.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       wp-react-plugin
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'WP_REACT_PLUGIN_VERSION', '1.0.0' );

define( 'WP_REACT_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
define( 'WP_REACT_PLUGIN_URI', plugin_dir_url( __FILE__ ) );

/**
 * Print debug
 * @since 1.0.0
 * @return html
 */
if ( !function_exists( '__print_debug' ) ) :

	function __print_debug() {

		$bt     = debug_backtrace();
		$caller = array_shift($bt);
		$args   = [
			"file"  => $caller["file"],
			"line"  => $caller["line"],
			"args"  => func_get_args()
		];

		?><pre><?php print_r($args); ?></pre><?php

	}

endif;

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-wp-react-plugin-activator.php
 */
function activate_wp_react_plugin() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-wp-react-plugin-activator.php';
	Wp_React_Plugin_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-wp-react-plugin-deactivator.php
 */
function deactivate_wp_react_plugin() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-wp-react-plugin-deactivator.php';
	Wp_React_Plugin_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_wp_react_plugin' );
register_deactivation_hook( __FILE__, 'deactivate_wp_react_plugin' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-wp-react-plugin.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_wp_react_plugin() {

	$plugin = new Wp_React_Plugin();
	$plugin->run();

}
run_wp_react_plugin();
