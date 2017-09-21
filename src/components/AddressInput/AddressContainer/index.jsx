import React from 'react';
import cs from './component.pcss';

/**
 * @class AddressContainer
 */
class AddressContainer extends React.Component
{

	static propTypes = {
		isHidden: React.PropTypes.bool,
		children: React.PropTypes.node
	};

	/**
	 * @constructor
	 */
	constructor()
	{
		super();
	}

	/**
	 * Render component
	 * @return {XML} xml
	 */
	render()
	{
		const className = this.props.isHidden ?
							`${ cs.root } ${ cs.hidden }` :
							cs.root;

		return (
			<div className={ className } >
				{ this.props.children }
			</div>
		);
	}
}

export default AddressContainer;