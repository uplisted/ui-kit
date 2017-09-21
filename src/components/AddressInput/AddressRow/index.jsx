/**
 * eslint-disable camelcase
 */
import React from 'react';
import parseSubstr from './util/parseSubstr';
import cs from './component.pcss';

/**
 * @class AddressLineRow
 */
class AddressLineRow extends React.Component
{

	static propTypes = {

		/**
		 * AddressLineRow object
		 */
		address: React.PropTypes.shape( {
			description: React.PropTypes.string,
			'matched_substrings': React.PropTypes.arrayOf(
				React.PropTypes.shape( {
					offset: React.PropTypes.number,
					length: React.PropTypes.number
				} )
			)
		} ).isRequired,

		isActive: React.PropTypes.bool,

		onClick: React.PropTypes.func
	};

	/**
	 * @constructor
	 */
	constructor()
	{
		super();
	}

	/**
	 * @return {void}
	 */
	onClick()
	{
		this.props.onClick( this.props.address.description );
	}

	/**
	 * Render component
	 * @return {XML} xml content
	 */
	renderText()
	{
		const subStr = parseSubstr(
			this.props.address.description,
			this.props.address.matched_substrings );

		const map = ( item, i ) =>
		{
			const className = item.isMatched ?
								cs.matched :
								'';

			return (
				<span
					key={ i }
					className={ className }>
					{ item.text }
				</span>
			);
		};

		return subStr.map( map );
	}

	/**
	 * Render component
	 * @return {XML} xml content
	 */
	render()
	{
		const className = this.props.isActive ?
							`${ cs.root } ${ cs.active }` :
							cs.root;

		return (
			<div
				className={ className }
				onClick={ this.onClick.bind( this ) }>
				{ this.renderText() }
			</div>
		);
	}
}

export default AddressLineRow;