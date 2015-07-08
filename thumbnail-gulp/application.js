var options ={
  thumbnailData: [{
  title: 'See Tutorials',
  number: 32,
  header: 'Learning React',
  description: 'React is a front end javascript framework that makes it easy to render composable, reusable components.',
  imageUrl: 'http://codewinds.com/assets/article/reactjs-conf-logo-dsc_5109-800.jpg'
  },{
  title: 'See Tutorials',
  number: 23,
  header: 'Learning Gulp',
  description: 'Gulp will speed up workflow in development.Gulp will speed up workflow in development. Gulp will speed up workflow in development.',
  imageUrl: 'https://pbs.twimg.com/profile_images/417078109075034112/iruTC031_400x400.png'
  },{
  title: 'See Tutorials',
  number: 15,
  header: 'Understanding Polymer',
  description: 'Polymer 1.0 has been rebuilt from the ground up for speed and efficiency. The new, leaner core library makes it easier than ever to make fast, beautiful, and interoperable web components.',
  imageUrl: 'https://www.dartlang.org/polymer/images/polymer-logo.svg'
  }]
};

var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.container'));
var Badge = React.createClass({displayName: "Badge",
    render: function(){
	return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
		this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
)
}
});
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
	render: function(){
		var list = this.props.thumbnailData.map(function(thumbnailProps){
			return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
		});
		return React.createElement("div", null, 
		list
		)
	}
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
	render: function(){
	return React.createElement("div", {className: "col-sm-6 col-md-4"}, 
				React.createElement("div", {className: "thumbnail"}, 
					React.createElement("img", {src: this.props.imageUrl, alt: "..."}), 
					React.createElement("div", {className: "caption"}, 
						React.createElement("h3", null, this.props.header), 
						React.createElement("p", null, this.props.description), 
						React.createElement("p", null, React.createElement(Badge, {title: this.props.title, number: this.props.number}))
					)
				)
			)
	}
});