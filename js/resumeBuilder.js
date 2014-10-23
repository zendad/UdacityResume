
var bio={
	"name":"Dereck Zenda",
	"role":"Web Developer",
	"contacts":{
		"mobile":"0718776643",
		"github":"zendad",
		"twitter":"@danzenda",
		"location":"Johannesburg",
		"email":"dereck.zenda@gmail.com"
	},
	"skills":["Programming","Java","Javascript","HTML"],
	"welcomeMessage":"Welcome to my cv",
	"biopic":"images/fry.jpg"
};

var education={
	"schools":[
	{
		"name":"Mbecity",
		"location":"Harare",
		"degree":"BA",
		"major":"Computer Science",
		"dates":"2001-2003"
	},
	{
		"name":"Mbare",
		"location":"Masvingo",
		"degree":"BA",
		"major":"Computer Science",
		"dates":"2003-2005"
	}
	],
	"onlineCourses":[
		{
		"name":"Orocity",
		"onlinecourse":"Computer Science",
		"dates":"2001-2003",
		"url":"http://www.example.com"
	},
	{
		"name":"Maracity",
		"onlinecourse":"Computer Science",
		"dates":"2001-2003",
		"url":"http://www.example.com"
	}
	]
};

var work={
	"jobs":[
	{
		"employer":"Musorowegomo",
		"location":"Harare",
		"title":"Systems Administrator",
		"dates":"2001-2003",
		"description":"who moved my cheese and puit in my congo.who moved my cheese and puit in my congo"
	},
	{
		"employer":"Mombe Chingwa",
		"location":"Cape Town",
		"title":"Systems Administrator",
		"dates":"2001-2003",
		"description":"who moved my cheese and puit in my congo.who moved my cheese and puit in my congo."
	},
	{
		"employer":"Sadza neNyama",
		"location":"London",
		"title":"Systems Administrator",
		"dates":"2001-2003",
		"description":"who moved my cheese and puit in my congo.who moved my cheese and puit in my congo"
	}
	]
};


var projectsDone={
	"workProjects":[
	{
		"title":"Udacity",
		"dates":"2001-2003",
		"description":"sadza nemuriwo",
		"images":"images/project1.png"
	},
	{
		"title":"Udacity",
		"dates":"2001-2003",
		"description":"chingwa chine dovi",
		"images":"images/project2.png"
	}
	]
};

function bioInfo(){
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedJob = HTMLheaderRole.replace('%data%', bio.role);
 	var formattedPic = HTMLbioPic.replace('%data%', 'images/fry.jpg');
	var formattedMessage = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
	var formattedNumber = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
	$('#header').prepend(formattedName, formattedJob);
	$('#header').append(formattedPic, formattedMessage, HTMLskillsStart);
	$('#topContacts').append(formattedNumber, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
	$('#footerContacts').append(formattedNumber, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
	if(bio.skills.length>0){
		for (skill in bio.skills){
			var formattedSkill=HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}

}


function displayWork(){
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle=formattedEmployer+formattedTitle;
		var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedCity=HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployerTitle,formattedDates,formattedCity,formattedDescription);
	}
}

function workProject(){
	for (project in projectsDone.workProjects) {
		$("#projects").append(HTMLprojectStart);
		var projectFormattedTitle=HTMLprojectTitle.replace("%data%",projectsDone.workProjects[project].title);
		var projectFormattedDates=HTMLprojectDates.replace("%data%",projectsDone.workProjects[project].dates);
		var projectFormattedDescription=HTMLworkDescription.replace("%data%",projectsDone.workProjects[project].description);
		var projectFormattedImage=HTMLprojectImage.replace("%data%",projectsDone.workProjects[project].images);
		$('.project-entry:last').append(projectFormattedTitle, projectFormattedDates, projectFormattedDescription, projectFormattedImage);
	}
}



function educationInfo(){
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var schoolFormattedTitle=HTMLschoolName.replace("%data%",education.schools[school].name);
		var schoolFormattedDegree=HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var schoolFormattedName= schoolFormattedTitle+schoolFormattedDegree;
		var schoolFormattedDates=HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var schoolFormattedLocation=HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var schoolFormattedMajor=HTMLschoolMajor.replace("%data%",education.schools[school].major);
		$('.education-entry:last').append(schoolFormattedName, schoolFormattedDates, schoolFormattedLocation, schoolFormattedMajor);
	}
/*
	for (course in education.onlineCourses) {
		$('#education').append(HTMLonlineClasses);
		var onlineFormattedCourse=HTMLonlineSchool.replace("%data%",education.onlineCourses[course].onlinecourse);
		var onlineFormattedTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[course].name);
		var onlineFormattedName=  onlineFormattedCourse+onlineFormattedTitle;
		var onlineFormattedDates=HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
		var onlineFormattedUrl=HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
		$('.education-entry:last').append(onlineFormattedName, onlineFormattedDates, onlineFormattedUrl);
	}
*/
}

$('#mapDiv').append(googleMap);	
	bioInfo();
	displayWork();
	workProject();
	educationInfo();
	initializeMap();



/**
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

$("#main").append(internationalizeButton);
$("#mapdiv").append(googleMap);
initializeMap();
**/