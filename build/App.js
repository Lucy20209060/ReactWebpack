var React = require('react');
var ReactDOM = require('react-dom');
var HeaderComponent = require('./HeaderComponent.js');
var ListComponent = require('./ListComponent.js');
var FooterComponent = require('./FooterComponent.js');

var LayoutComponent = React.createClass({

	getInitialState:function(){
		return {
			cid:10
		}
	},
	onChildChange:function(newState){
		this.setState({
			cid:newState
		})
	},
	render:function(){
		return (
			<div>
				<header>
					<HeaderComponent ref="header" callbackParent={ this.onChildChange }/>
				</header>

				<section>
					<ListComponent ref="list" cid={this.state.cid}/>
				</section>

				<footer>
					<FooterComponent ref="footer"/>
				</footer>

			</div>
		)
	}
})

ReactDOM.render(<LayoutComponent/>,document.getElementById('app'));