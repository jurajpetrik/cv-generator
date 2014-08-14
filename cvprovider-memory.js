CVProvider = function(){};
CVProvider.prototype.dummyData = {
profilePicture: 'images/profile.jpg',
name: 'Juraj Petrík',
cell: '+55 11 905970953',
email: 'jurajpetrik77@gmail.com',
github: 'https://github.com/jurajpetrik',
linkedin: 'https://www.linkedin.com/pub/juraj-petrik/67/8a8/b59',
objective: 'stuff',
blocks:
[{
	headline: 'Work experience',
	children:[
	{
		title: 'Taqtile',
		titleOverlay: 'Sao Paulo, Brazil',
		secondaryTitle: 'Feb 2014 - August 2014',
		content: [
			'worked on huge iOs app for - ecommerce market leader in South America',
			'frontend in Objective C, using XIB files instead of Storyline',
			'worked on C# backend for said applications that must handle millions of users',			]
	},
	{
		title: 'Ifactory Solutions',
		titleOverlay: 'Fortaleza, Brazil',
		secondaryTitle: '2013-2014',
		content: ['worked on C# and Java backend',
				'participated in website UI testing']
	}	
	]
},
{
	headline: 'Projects',
	children:[
	{
		title: 'CV generator',
		link: 'https://github.com/jurajpetrik/cv-generator',
		content: ['Generates CV from your personal info in JSON. Using Node.JS, Express, Jade.',
		'Used to generate this very CV']
	},
	{
		title: 'Voice call in Browser',
		link: 'https://github.com/jurajpetrik/callMe',
		content: ['Voice calling in browser using HTML 5 Audio API, Node.js and Socket.io to',
		' Semi-successful, works with long delays in sound.']	
	}
	]
},
{
	headline: 'Education',
	children:[
	{
		title: 'Via University College - ICT Engineering',
		titleOverlay: 'Horsens, Denmark',
		time: '2011-2015(ongoing)',
		content: [
			'I am currently still doing my bachelors in Information Communication Technology Engineering. At the moment I am on Erasmus exchange program in Fontys, Netherlands'
				]
	}]
}
]
};

CVProvider.prototype.findById = function(id, callback) {
  var result = this.dummyData;
  callback(null, result);
};

exports.CVProvider = CVProvider;
