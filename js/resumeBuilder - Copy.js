
var bio={
	"name":"Dereck Zenda",
	"role":"Web Developer",
	"çontacts":{
		"mobile":"0718776643",
		"github":"zendad",
		"tritter":"@danzenda",
		"location":"Johannesburg",
		"email":"dereck.zenda@gmail.com"
	},
	"skills":["Programming","Java","Javascript","HTML"],
	"welcomeMessage":"Welcome to my cv",
	"biopic":"images/fry.jpg"
};

var eduction={
	"schools":[
	{
		"name":"Udacity",
		"city":"San Franscisco",
		"degree":"BA",
		"major":"Computer Science",
		"dates":"2001-2003",
		"url":"http://www.example.com"
	},
	{
		"name":"Mbare",
		"city":"Harare",
		"degree":"BA",
		"major":"Computer Science",
		"dates":"2003-2005",
		"url":"http://www.example.com"
	}
	],
	"onlineCourses":[
		{
		"name":"Udacity",
		"city":"San Franscisco",
		"degree":"BA",
		"major":"Computer Science",
		"dates":"2001-2003",
		"url":"http://www.example.com"
	},
	{
		"name":"Mbare",
		"city":"Harare",
		"degree":"BA",
		"major":"Computer Science",
		"dates":"2003-2005",
		"url":"http://www.example.com"
	}
	]
};

var work={
	"jobs":[
	{
		"employer":"Udacity",
		"city":"San Franscisco",
		"title":"Systems Administrator",
		"dates":"2001-2003",
		"description":"who moved my cheese and puit in my congo.who moved my cheese and puit in my congo"
	},
	{
		"employer":"Udacity",
		"city":"San Franscisco",
		"title":"Systems Administrator",
		"dates":"2001-2003",
		"description":"who moved my cheese and puit in my congo.who moved my cheese and puit in my congo."
	},
	{
		"employer":"Udacity",
		"city":"San Franscisco",
		"title":"Systems Administrator",
		"dates":"2001-2003",
		"description":"who moved my cheese and puit in my congo.who moved my cheese and puit in my congo"
	}
	]
};


var projects={
	"projects":[
	{
		"title":"Udacity",
		"dates":"2001-2003",
		"description":"who moved my cheese and puit in my congo.who moved my cheese and puit in my congo",
		"images":["http://www.example.com","http://www.example.com"]
	},
	{
		"title":"Udacity",
		"dates":"2001-2003",
		"description":"who moved my cheese and puit in my congo.who moved my cheese and puit in my congo",
		"images":["http://www.example.com","http://www.example.com"]
	}
	]
};



if(bio.skills.length>0){
	$("#header").append(HTMLskillsStart;
	var formattedSkill=HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill=HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill=HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);
}

function displayWork(){
	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formttedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formttedTitle=HTMLworkTiltle.replace("%data%",work.jobs[job].title);
	var formttedEmployerTitle=formttedEmployer+formttedTitle;

	%(".work-entry:last").append(formttedEmployerTitle);

	var formttedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
	%(".work-entry:last").append(formttedDates);
	
	var formttedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
	%(".work-entry:last").append(formttedDescription);
	}
}

displayWork();

$(document).click(function(loc){
	var x=loc.pageX;
	var y=loc.pageY;

	logClicks(x,y);
});

function locationizer(work_obj){
	var locationArray=[];

	for(job in work_obj.jobs){
		var newlocation=work_obj.jobs[job].location;
		locationArray.push(newlocation);
	}

	return locationArray;
}

function inName(){
	name=name.trim().split(" ");
	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();

	return name[0]+" "+name[1];
}

$("#main").append(intenationalizeButton);
$("#mapdiv").append(googleMap);

projects.display=function(){
	for (project in projects.projects) {
	$("#wprojects").append(HTMLprojectStart);

	var formttedTitle=HTMLprojectTiltle.replace("%data%",projects.projects[project].title);
	%(".project-entry:last").append(formttedTitle);

	var formttedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
	%(".project-entry:last").append(formttedDates);

	var formttedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
	%(".project-entry:last").append(formttedDescription);

	if (projects.projects[project].images.length>0) {
		for(image in projects.projects[project].images){
			var formttedImage=HTMLprojectImage.replace("%data%",projects.projects[project].description.images[image]);
			%(".project-entry:last").append(formttedImage);
		}
	};
	}
};