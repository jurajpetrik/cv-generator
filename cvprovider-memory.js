CVProvider = function(){};
CVProvider.prototype.dummyData = {
profilePicture: 'images/cthulu.png',
name: 'C\'thulu',
cell: '+55 11 905970953',
email: 'Cthulu@gmail.com',
objective: 'world domination',
education:[
	{
		name: 'Harvard',
		description: 'Aerospace engineering'
	},
	{
		name: 'Via University College',
		description: 'Majored in smoking weed and not giving a fuck'
	}
]
}

CVProvider.prototype.findById = function(id, callback) {
  var result = this.dummyData;
  callback(null, result);
};

exports.CVProvider = CVProvider;
