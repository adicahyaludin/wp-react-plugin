<?php

/**
 * Fired during plugin activation
 *
 * @link       https://ridwan-arifandi.com
 * @since      1.0.0
 *
 * @package    Wp_React_Plugin
 * @subpackage Wp_React_Plugin/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Wp_React_Plugin
 * @subpackage Wp_React_Plugin/includes
 * @author     Orangerdev Team <orangerdigiart@gmail.com>
 */
class Wp_React_Plugin_Activator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {

		flush_rewrite_rules();

	}

}
