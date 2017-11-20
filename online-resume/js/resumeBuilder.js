/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*---------------------------------------------------------BIO ----------------------------------------------------*/
var bio = {
    "name": "Hyeonsuk Park",
    "role": "Web developer",

    "contacts": {
        "email": "phs6977@gmail.com",
        "mobile": "(+351)910111222",
        "github": "Hyeonsuk park",
        "linkedin": "Hyeonsuk park",
        "location": "Portugal"
    },

    "welcomeMessage": "Hi, I am a creative web developer!",
    "skills": ["html", "CSS", "Javascript", "Jquery"  ],
    "biopic": "images/fry.jpg"

};

/* -----------------------------------------------WORK--------------------------------------------------------------*/


var work = {
    "jobs": [
        {
            "employer": "Future",
            "title": "Web developer",
            "location": "Portugal",
            "dates": "Future",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue tellus, hendrerit vel velit in, finibus facilisis risus. Etiam non risus ut arcu mollis imperdiet. Phasellus ultricies consectetur iaculis. Aliquam hendrerit sed nunc eu mollis. Pellentesque cursus feugiat ornare. "

        },

        {
            "employer": "Cityhall",
            "title": "Administration",
            "location": "Korea",
            "dates": "2012-2013",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue tellus, hendrerit vel velit in, finibus facilisis risus. Etiam non risus ut arcu mollis imperdiet. Phasellus ultricies consectetur iaculis. Aliquam hendrerit sed nunc eu mollis. Pellentesque cursus feugiat ornare. "
        },

    ]

};


/*-------------------------------------------------------PROJECTS-------------------------------------------------------*/


var projects = {
    "projects": [
        {
            "title": "Portfolio",
            "dates": "2017",
            "description": "It's my first protfolio which is based on HTML and CSS",
            "images": ["http://lorempixel.com/197/148/animals/", "http://lorempixel.com/197/148/animals/"]
        },

    ]
};


/* ----------------------------------------------------EDUCATION---------------------------------------------------------*/


var education = {

    "schools": [
        {
            "name": "University",
            "degree": "Bachelar",
            "dates": "2007-2012",
            "location": "Korea",
            "majors": ["International business", "Politics"],
            "url": "http://www.yu.ac.kr"
        },


        {
            "name": "University",
            "degree": "Portuguese language course",
            "dates": "2014-2015",
            "location": "Portugal",
            "majors": ["Portugues"],
            "url": "http://www.letras.ulisboa.pt"
        },
    ],

    "onlineCourses": [
        {
            "title": "Frontend Nanodegree",
            "school": "Udacity",
            "dates": "2017",
            "url": "http://www.udacity.com"
        },

    ]


};


/* -------------------------------------------------------------------------------------------------------------*/
bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedRole);

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBiopic);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    /*-------------------------------------------------------------------------------------------------------------------*/

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);

    var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
    $("#topContacts").append(formattedLinkedin);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    /* ---------------------------------------------------------------------------------------------------------------------*/

    $("#header").append(HTMLskillsStart);

    for (i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
        
        break;
    };

    /* --------------------------------------------------------------------------------*/

    $("#footerContacts").prepend('<li><span class="zocial-call">Mobile<span>(+351)910111222</span></li>')
    .append('<li><span class="zocial-email">phs6977@gmail.com</span></li>')
    .append('<li><span class="zocial-github">Hyeonsuk park</span></li>')
    .append('<li><span class="zocial-linkedin"><span>Hyeonsuk park</span></li>')
    .append("<li>Location<span>Portugal</span></li>");


    var links = $("#footerContacts").children();
    links.addClass("listColor");


    var spans = links.children();
    spans.addClass("SpanColor");


};

bio.display();


/* -------------------------------------------------------------------------------------------------------------------*/

work.display = function() {

    work.jobs.forEach(function(job) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);

    });

};

work.display();


/*----------------------------------------------------------------------------------------------------------------------*/

projects.display = function() {

    projects.projects.forEach(function(project) {

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);

        if (project.images.length > 0) {
            project.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });
        };

    });

};

projects.display();

/*------------------------------------------------------------------------------------------------------------------*/

education.display = function() {

    education.schools.forEach(function(school) {

            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", school.name);

            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);

            var formattedNameDegree = formattedName + formattedDegree;

            $(".education-entry:last").append(formattedNameDegree);

            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedDates);

            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(formattedLocation);

            if (school.majors.length > 0) {
                school.majors.forEach(function(major) {
                    var formattedschoolMajor = HTMLschoolMajor.replace("%data%", major);
                    $(".education-entry:last").append(formattedschoolMajor);
                });
            };

            var formattedURL = HTMLschoolURL.replace("%data%", school.url);
            $(".education-entry:last").append(formattedURL);

        });


        education.onlineCourses.forEach(function(onlineCourse) {

            $(".education-entry:last").append(HTMLonlineClasses);

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);

            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);

            var formattedOnlineTitleOnlineSchool = formattedOnlineTitle + formattedOnlineSchool;

            $(".education-entry:last").append(formattedOnlineTitleOnlineSchool);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
            $(".education-entry:last").append(formattedOnlineDates);

            var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
            $(".education-entry:last").append(formattedOnlineURL);

        });

};

education.display();


/*--------------------------------------------------------------------------------------------------------*/


$("#mapDiv").append(googleMap);