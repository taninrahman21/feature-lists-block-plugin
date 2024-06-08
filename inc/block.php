<?php
class BFLHelloBlock{
	public function __construct(){
		add_action( 'init', [$this, 'onInit'] );
	}
	function onInit() {
		wp_register_style( 'bfl-hello-style', BFL_DIR_URL . 'dist/style.css', [ ], BFL_VERSION ); // Style
		wp_register_style( 'bfl-hello-editor-style', BFL_DIR_URL . 'dist/editor.css', [ 'bfl-hello-style' ], BFL_VERSION ); // Backend Style

		register_block_type( __DIR__, [
			'editor_style'		=> 'bfl-hello-editor-style',
			'render_callback'	=> [$this, 'render']
		] ); // Register Block

		wp_set_script_translations( 'bfl-hello-editor-script', 'b-feature-lists', BFL_DIR_PATH . 'languages' );
	}

	function render( $attributes ){
		extract( $attributes );

		wp_enqueue_style( 'bfl-hello-style' );
		wp_enqueue_script( 'bfl-hello-script', BFL_DIR_URL . 'dist/script.js', [ 'react', 'react-dom' ], BFL_VERSION, true );
		wp_set_script_translations( 'bfl-hello-script', 'b-feature-lists', BFL_DIR_PATH . 'languages' );

		$className = $className ?? '';
		$blockClassName = "wp-block-bfl-hello $className align$align";

		ob_start(); ?>
		<div class='<?php echo esc_attr( $blockClassName ); ?>' id='bflHelloBlock-<?php echo esc_attr( $cId ) ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

		<?php return ob_get_clean();
	}
}
new BFLHelloBlock();
require_once("ExtendMime.php");
