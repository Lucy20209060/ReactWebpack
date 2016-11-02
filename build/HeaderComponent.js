var React = require('react');

var HeaderComponent = React.createClass({
	getDefaultProps:function(){
		return {
			url:'http://localhost/index.php'
		}
	},
	getInitialState:function(){
		return {
			category:[],
			cateId:0
		}
	},
	componentWillMount:function(){
		var _this = this;

		$.ajax({
			url:this.props.url
		}).success(function(res){
			var resultObj = JSON.parse(res);
			var resultCategory = resultObj.tngou;
			_this.setState({
				category:resultCategory
			})
		})
	},
	handlerChange:function(e){
		var cid = e.target.getAttribute('id');
		this.props.callbackParent(cid);
	},
	render:function(){

		var cates = [];
		var categories = this.state.category;
		var catesLen = categories.length;

		if(categories){
			for (var i = 0; i < catesLen ; i++) {
				cates.push(<li key={i}><a href="#" id={categories[i].id} onClick={this.handlerChange}>{categories[i].name}</a></li>)
			};
		}
		return (
			
			<div className="navbar-wrapper">
		      <div className="container">

		        <nav className="navbar navbar-inverse navbar-static-top" role="navigation">
		          <div className="container">
		            <div className="navbar-header">
		              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		                <span className="sr-only">Toggle navigation</span>
		                <span className="icon-bar"></span>
		                <span className="icon-bar"></span>
		                <span className="icon-bar"></span>
		              </button>
		              <a className="navbar-brand" href="#">Project name</a>
		            </div>
		            <div id="navbar" className="navbar-collapse collapse">
		              <ul className="nav navbar-nav">
		                <li className="active"><a href="#">Home</a></li>
		                <li><a href="#about">About</a></li>
		                <li><a href="#contact">Contact</a></li>
		                <li className="dropdown">
		                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <span className="caret"></span></a>
		                  <ul className="dropdown-menu" role="menu">
		                    {cates}
		                  </ul>
		                </li>
		              </ul>
		            </div>
		          </div>
		        </nav>

		      </div>
		    </div>

		)
	}
})
 
module.exports = HeaderComponent; 