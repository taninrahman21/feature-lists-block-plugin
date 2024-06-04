import { registerBlockType } from '@wordpress/blocks';
import { IoIosList } from "react-icons/io";
import metadata from '../inc/block.json';
import Edit from './Edit';
import './editor.scss';

registerBlockType(metadata, {
	icon: {
		src: <IoIosList />,
		foreground: "#635bbc"
	},
	// Build in Functions
	edit: Edit,

	save: () => null,
});
