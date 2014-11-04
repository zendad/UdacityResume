

// biography infomation
var bio={
	"name":"Dereck Zenda",
	"role":"Front-End Web Developer",
	"contacts":{
		"mobile":"images/mobile.jpg",
		"github":"images/github.jpg",
		"twitter":"images/twitter.jpg",
		"location":"images/location.jpg",
		"email":"images/email.jpg",
		"linkedin":"images/linkedin.jpg",
		"blog":"images/blog.jpg"
	},
	"skills":["Python","Java","Javascript","HTML5"],
	"welcomeMessage":"Great Front-End Ninja",
	"biopic":"images/profile.jpg"
};

//education information
var education={
	"schools":[
	{
		"name":"Harare Polytechnic",
		"location":"Roodepoort,Johannesburg",
		"degree":"ND",
		"major":"Computer Science",
		"dates":"1999-2001",
		"url":"http://www.hararepoly.com"
	},
	{
		"name":"Masvingo Polytechnic",
		"location":"Rivonia,Johannesburg",
		"degree":"HND",
		"major":"Computer Science",
		"dates":"2001-2003",
		"url":"http://www.masvingopoly.com"
	}
	],
	"onlineCourses":[
		{
		"name":"Udacity",
		"onlinecourse":"Front-End Web Developer Nanodegree",
		"dates":"10/2014-01/2015",
		"url":"https://www.udacity.com/course/nd001"
	},
	{
		"name":"Coursera",
		"onlinecourse":"Mobile Cloud Computing with Android",
		"dates":"03/2014-12/2014",
		"url":"https://www.coursera.org/specialization/mobilecloudcomputing/2?utm_medium=listingPage"
	}
	]
};

// employment history information
var work={
	"jobs":[
	{
		"employer":"Mula Systems Plc",
		"location":"Parktown,Johannesburg",
		"title":"Systems Engineer",
		"dates":"2010-Current",
		"url":"http://www.mula.com",
		"description":"who moved my cheese and puit in my congo.who moved my cheese and puit in my congo"
	},
	{
		"employer":"ABC Holdings",
		"location":"Sandton,Johannesburg",
		"title":"Systems Administrator",
		"dates":"2004-2009",
		"url":"http://www.mazanda.com",
		"description":"who moved my cheese and puit in my congo.who moved my cheese and puit in my congo."
	},
	{
		"employer":"Donbas Mobile",
		"location":"Randburg,Johannesburg",
		"title":"Linux Administrator",
		"dates":"2000-2003",
		"url":"http://www.mundawangu.com",
		"description":"who moved my cheese and puit in my congo.who moved my cheese and puit in my congo"
	}
	]
};

//projects completed or participated in
var projectsDone={
	"workProjects":[
	{
		"title":"Zenda Job Portal",
		"dates":"2005-2009",
		"url":"http://www.zenda.com",
		"description":"Front-End project - a job portal for Linux System Engineers",
		"images":"images/project1.png"
	},
	{
		"title":"Mandu Job Portal",
		"dates":"2000-2004",
		"url":"http://www.mundawangu.com",
		"description":"Front-End project - a job portal for Microsoft System Engineers",
		"images":"images/project2.png"
	}
	]
};

//function to append bio infomation to #header
function bioInfo(){
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedJob = HTMLheaderRole.replace('%data%', bio.role);
 	var formattedPic = HTMLbioPic.replace('%data%', 'images/profile.jpg');
	var formattedMessage = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
	var formattedNumber = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
	var formattedLinkedin = HTMLlinkedin.replace('%data%',bio.contacts.linkedin);
	var formattedBlog = HTMLblog.replace('%data%',bio.contacts.blog);
	$('#header').prepend(formattedName,formattedPic, formattedJob);
	$('#header').append(formattedMessage, HTMLskillsStart);
	$('#topContacts').append(formattedNumber, formattedEmail, formattedGithub, formattedLinkedin, formattedTwitter, formattedBlog, formattedLocation);
	$('#footerContacts').append(formattedNumber, formattedEmail, formattedGithub, formattedLinkedin, formattedTwitter, formattedBlog, formattedLocation);
	if(bio.skills.length>0){
		for (skill in bio.skills){
			var formattedSkill=HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}

}

//function to append work to #workExperience
function displayWork(){
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedEmployer=formattedEmployer.replace("%mylink%",work.jobs[job].url);
		var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle=formattedEmployer+formattedTitle;
		var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedCity=HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployerTitle,formattedDates,formattedCity,formattedDescription);
	}
}

//function to append work to #projects
function workProject(){
	for (project in projectsDone.workProjects) {
		$("#projects").append(HTMLprojectStart);
		var projectFormattedTitle=HTMLprojectTitle.replace("%data%",projectsDone.workProjects[project].title);
		var projectFormattedTitle=projectFormattedTitle.replace("%mylink%",projectsDone.workProjects[project].url);
		var projectFormattedDates=HTMLprojectDates.replace("%data%",projectsDone.workProjects[project].dates);
		var projectFormattedDescription=HTMLworkDescription.replace("%data%",projectsDone.workProjects[project].description);
		var projectFormattedImage=HTMLprojectImage.replace("%data%",projectsDone.workProjects[project].images);
		$('.project-entry:last').append(projectFormattedTitle, projectFormattedDates, projectFormattedDescription, projectFormattedImage);
	}
}


//function to append education to #education
function educationInfo(){
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var schoolFormattedTitle=HTMLschoolName.replace("%data%",education.schools[school].name);
		var schoolFormattedTitle=schoolFormattedTitle.replace("%mylink%",education.schools[school].url);
		var schoolFormattedDegree=HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var schoolFormattedName= schoolFormattedTitle+schoolFormattedDegree;
		var schoolFormattedDates=HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var schoolFormattedLocation=HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var schoolFormattedMajor=HTMLschoolMajor.replace("%data%",education.schools[school].major);
		$('.education-entry:last').append(schoolFormattedName, schoolFormattedDates, schoolFormattedLocation, schoolFormattedMajor);
	}
	
	$('#education').append(HTMLonlineClasses,HTMLschoolStart)
 
	for (course in education.onlineCourses) {
		var onlineFormattedTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[course].onlinecourse);
		var onlineFormattedCourse=HTMLonlineSchool.replace("%data%",education.onlineCourses[course].name);
		var onlineFormattedTitle=onlineFormattedTitle.replace("%mylink%",education.onlineCourses[course].url);

		var onlineFormattedCourseName=  onlineFormattedTitle+onlineFormattedCourse;
		var onlineFormattedDates=HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
		var onlineFormattedUrl=HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
		var onlineFormattedUrl=onlineFormattedUrl.replace("%mylink%",education.onlineCourses[course].url);
		$('.education-entry:last').append(onlineFormattedCourseName, onlineFormattedDates, onlineFormattedUrl);
	}
}

//Call functions
(function makeSite(){
	$('#mapDiv').append(googleMap);	
	bioInfo();
	displayWork();
	workProject();
	educationInfo();
	initializeMap();
}());



//create button to internationalize Name in bio
function inName(name){
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

