CVProvider = function(){};
CVProvider.prototype.dummyData = {
profilePicture: 'images/cthulu.png',
name: 'Juraj Petrik',
cell: '+55 11 905970953',
email: 'jurajpetrik77@gmail.com',
github: 'https://github.com/jurajpetrik',
objective: 'colonization of the solar system',
blocks:
[{
	headline: 'education',
	children:[
	{
		title: 'Via University College',
		time: '2011-2014(ongoing)',
		content: 'ICT Engineering'
	}]
},
{
	headline: 'work experience',
	children:[
	{
		title: 'Ifactory Solutions',
		time: '2013-2014',
		content: 'not much'
	},
	{
		title: 'Taqtile',
		time: 'Feb 2014 - August 2014',
		content: 'Majored in doing fuck all'
	}]
}
]
};

CVProvider.prototype.findById = function(id, callback) {
  var result = this.dummyData;
  callback(null, result);
};

exports.CVProvider = CVProvider;
