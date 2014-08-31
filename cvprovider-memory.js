CVProvider = function(){};
CVProvider.prototype.dummyData = {
profilePicture: 'images/profile.jpg',
name: 'Juraj Petrík',
cell: '+421 944 922 384',
email: 'jurajpetrik77@gmail.com',
github: 'https://github.com/jurajpetrik',
linkedin: 'https://www.linkedin.com/pub/juraj-petrik/67/8a8/b59',
objective: 'I love writing code and often do so in my free time. My colleagues describe me as a good technology generalist and often say I am quick to pick up new technologies. I see software as a way to shape the world and I am looking for a company whose mission I can get behind. I have experience working in big software teams, alone and everything in between. I am currently living in Eindhoven, Netherlands but willing to relocate for the right opportunity',
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
	headline: 'Education',
	children:[
	{
		title: 'Via University College',
		secondaryTitle: '2011-present ICT Engineering',
		titleOverlay: 'Horsens, Denmark',
		content: [
			'I am currently still doing my bachelors in Information Communication Technology Engineering. At the moment I am on Erasmus exchange program in Fontys, Netherlands'
				]
	},
	{
		title: 'J.M.Hurban Gymnasium',
		secondaryTitle: '2007-2011',
		titleOverlay: 'Cadca, Slovakia',
		content: [
			''
				]
	}]
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
}
]
};

CVProvider.prototype.findById = function(id, callback) {
  var result = this.dummyData;
  callback(null, result);
};

exports.CVProvider = CVProvider;
