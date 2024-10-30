<?php namespace BP_GB;

class Plugin{

    private static $_instance = null;


    public static function instance() {
        if ( is_null( self::$_instance ) ) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function __construct()
    {
        add_action( 'plugins_loaded', 'load_plugin_textdomain' );
        add_action('enqueue_block_assets', [ $this, 'load_block_assets']);
        add_action( 'wp_enqueue_scripts', [ $this, '_enqueue_scripts' ]);
        
    }
    public function _enqueue_scripts(){
        $jsPath = '/assets/js/frontend.js';
        wp_enqueue_script(
            'wts-bp-gb',
            plugins_url( $jsPath, __FILE__ ),
            ['jquery'],
            filemtime( BPGB_PATH . $jsPath )
        );
    }

    public function load_block_assets(){

        $blockPath = '/build/block.js';
        $stylePath = '/build/block.css';
        

        wp_enqueue_script(
            'wts-bp-gb',
            plugins_url( $blockPath, __FILE__ ),
            [ 'wp-i18n', 'wp-blocks', 'wp-components', 'wp-editor', 'wp-element' ],
            filemtime( BPGB_PATH . $blockPath )
        );
        
        // Enqueue frontend and editor block styles
        wp_enqueue_style(
            'wts-bp-gb',
            plugins_url ($stylePath, __FILE__),
            '',
            filemtime( BPGB_PATH . $stylePath )
        );
    }

    public function load_plugin_textdomain(){
        load_plugin_textdomain( 'bp-gb' );
    }
}

Plugin::instance();
