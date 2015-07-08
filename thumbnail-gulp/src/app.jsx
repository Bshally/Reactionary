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