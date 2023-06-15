<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://ridwan-arifandi.com
 * @since      1.0.0
 *
 * @package    Wp_React_Plugin
 * @subpackage Wp_React_Plugin/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Wp_React_Plugin
 * @subpackage Wp_React_Plugin/public
 * @author     Orangerdev Team <orangerdigiart@gmail.com>
 */
class Wp_React_Plugin_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Wp_React_Plugin_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Wp_React_Plugin_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		if ( get_query_var( 'wp-react' ) ) :
			wp_enqueue_style( 'wp-typescript', WP_REACT_PLUGIN_URI . 'assets/public/scripts.css', array(), $this->version, 'all' );
		endif;

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/wp-react-plugin-public.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Wp_React_Plugin_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Wp_React_Plugin_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		if ( get_query_var( 'wp-react' ) ) :

			$script_args = include( WP_REACT_PLUGIN_PATH . 'assets/public/scripts.asset.php');
			wp_enqueue_script( 'wp-typescript', WP_REACT_PLUGIN_URI . 'assets/public/scripts.js', $script_args['dependencies'], $script_args['version'], true ); 

		endif;

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/wp-react-plugin-public.js', array( 'jquery' ), $this->version, false );

	}

	/**
	 * Add wp react rewrite rule
	 * Hooked via action init
	 * @since 1.0.0
	 * @return void
	 */
	public function add_wp_react_rewrite_rule() {

		add_rewrite_rule( '^wp-react/?', 'index.php?wp-react=1', 'top' );

	}

	/**
	 * Add wp react query vars
	 * Hooked via filter query_vars
	 * @since 1.0.0
	 * @param array $query_vars
	 * @return array
	 */
	public function add_wp_react_query_vars( $query_vars ) {

		$query_vars[] = 'wp-react';
		
		return $query_vars;

	}

	/**
	 * Display wp react page
	 * Hooked via action template_redirect
	 * @since 1.0.0
	 * @return void
	 */
	public function display_wp_react_page() {

		if ( get_query_var( 'wp-react' ) ) :

			include WP_REACT_PLUGIN_PATH.'/public/partials/wp-react-plugin-public-display.php';
			exit;

		endif;

	}

}
