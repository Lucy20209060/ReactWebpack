var React = require('react'); 

var ListComponent = React.createClass({
	getDefaultProps:function(){
		return {
			url:'http://localhost/list.php',
			foodPrefix:'http://tnfs.tngou.net/image'
		}
	},
	getInitialState:function(){
		return {
			list:[]
		}
	},
	getData: function(cid){
		var _this = this;
		$.ajax({
			url:this.props.url,
			data:{
				id:cid
			}
		}).success(function(res){
			var resultObj = JSON.parse(res);
			var resultList = resultObj.tngou;
			_this.setState({
				list:resultList
			})
		})

	},
	componentWillMount:function(){
		this.getData(this.props.cid);
		
	},
	componentWillReceiveProps:function(nextProps,nextState){
		this.getData(nextProps.cid);
	},
	render:function(){

		var imageStyle = {
			width:'140px',
			height:'140px'
		}
		var lst = [];
		var lists = this.state.list;
		var listsLen = lists.length;
		if(lists){
			var rowList = [];
			for (var i = 0; i < listsLen/3; i++) {
				var colList = [];
				for (var j = 0; j < 3; j++) {
					var index= i*3+j;
					var imgUrl = this.props.foodPrefix + lists[index].img;

					colList.push(
						<div key={index} className="col-lg-4">
				          <img className="img-circle" style={imageStyle} src={imgUrl} alt="Generic placeholder image"/>
				          <h2>{lists[index].name}</h2>
				          <p>{lists[index].description}</p>
				          <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
				        </div>
					)
				};
				rowList.push(
					<div className="row" key={i}>{colList}</div>
				)
			};


			
		}

		/*
		var lst = [];
		var lists = this.state.list;
		var listsLen = lists.length;
		if(lists){
			for (var i = 0; i < listsLen ; i++) {
				var imgUrl = this.props.foodPrefix + lists[i].img;
				lst.push(
					<div key={i} className="col-lg-4">
			          <img className="img-circle" style={imageStyle} src={imgUrl} alt="Generic placeholder image"/>
			          <h2>{lists[i].name}</h2>
			          <p>{lists[i].description}</p>
			          <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
			        </div>
				)
			};
		}
		*/
		return (
			 <div className="container marketing">
			      {rowList}
			</div>
		)
	}
})

module.exports = ListComponent;