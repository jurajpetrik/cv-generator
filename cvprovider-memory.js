CVProvider = function(){};
CVProvider.prototype.dummyData = {
profilePicture: 'images/profile.jpg',
name: 'Juraj Petrík',
cell: '+55 11 905970953',
email: 'jurajpetrik77@gmail.com',
github: 'https://github.com/jurajpetrik',
objective: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
blocks:
[{
	headline: 'Education',
	children:[
	{
		title: 'Via University College',
		time: '2011-2014(ongoing)',
		content: 'ICT Engineering'
	}]
},
{
	headline: 'Work experience',
	children:[
	{
		title: 'Taqtile',
		titleOverlay: 'Software developer',
		time: 'Feb 2014 - August 2014',
		content: 'iOs development<br  />C# backend'
	},
	{
		title: 'Ifactory Solutions',
		time: '2013-2014',
		content: 'not much'
	}	
	]
},
{
	headline: 'Project',
	children:[
	{
		title: 'World peace',
		time: '2002-2014',
		content: 'World leader'
	}
	]
}
]
};

CVProvider.prototype.findById = function(id, callback) {
  var result = this.dummyData;
  callback(null, result);
};

exports.CVProvider = CVProvider;
