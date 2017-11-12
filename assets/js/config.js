/*
	HTML code to format and style work history
	@param {0} image path
	@param {1} company name
	@param {2} company name
	@param {3} job title
	@param {4} duration of work term
	@param {5} desription
*/
var HTML_WORK_HISTORY = 
	"<div class=\"row container-fluid\">\n \
		 <div class=\"col-md-5 col-sm-5  col-xs-5 text-right center-vertical\">\n \
			<img src=\"assets/img/{0}\" alt=\"{1}\" class=\"img-responsive\" align=\"right\">\n \
		</div> \
		<div class=\"col-md-5 col-sm-5 col-xs-5 text-left center-vertical\">\n \
			<b> {2} </b><br> \
			{3} <br> \
			<i> {4} </i> <br> \
			<p> {5} </p> \
		</div> \
	</div>";

var WORK_HISTORY_DETAILS = [
	{
		JOB_TITLE : "Software Development Engineer",
		COMPANY : "Amazon",
		DURATION : "June 2017 - Present",
		JOB_DESCRIPTION : "",
		IMAGE : "amazon_alexa.png"
	},
	{
		JOB_TITLE : "Software Developer",
		COMPANY : "SAP",
		DURATION : "September 2015 - May 2017",
		JOB_DESCRIPTION : "",
		IMAGE : "sap.png"
	},
	{
		JOB_TITLE : "Business Technology Analyst",
		COMPANY : "Deloitte",
		DURATION : "May 2014 - August 2015",
		JOB_DESCRIPTION : "Information management and analytic technologies",
		IMAGE : "deloitte.png"
	},
	{
		JOB_TITLE : "Financial Director",
		COMPANY : "University of Toronto Aeronautics Team",
		DURATION : "June 2012 - May 2014",
		JOB_DESCRIPTION : "Managed sponsorship initiatives and budget bookeeping",
		IMAGE : "utat.png"
	},
	{
		JOB_TITLE : "Research Assistant",
		COMPANY : "University of Toronto",
		DURATION : "May 2013 - Septeber 2013",
		JOB_DESCRIPTION : "Programmed an FPGA chip for closed loop detection of oncoming seizures through phase locking value calculations and treatment via electrode stimulation",
		IMAGE : "uoft.png"
	},
	{
		JOB_TITLE : "Electrical Student Designer",
		COMPANY : "MCW Group of Companies",
		DURATION : "May 2012 - May 2013",
		JOB_DESCRIPTION : "Drafted and designed building electrical systems, meeting LEED and ASHRAE code",
		IMAGE : "mcw.png"
	},
	{
		JOB_TITLE : "Research Assistant",
		COMPANY : "University of Toronto",
		DURATION : "May 2011 - August 2011",
		JOB_DESCRIPTION : "Determined functionalities of a robot, Pleo RB, coded in C-like language to be introduced into a 4th year mechanical/mechatronics engineering course curriculum",
		IMAGE : "uoft.png"
	},
	{
		JOB_TITLE : "Instructor's Assistant",
		COMPANY : "University of Toronto",
		DURATION : "July 2010 - July 2010",
		JOB_DESCRIPTION : "Supervised and taught highschool students engineering concepts for university preparation",
		IMAGE : "uoft.png"
	}
];

var HTML_TECHNICAL_SKILL = 
	" <button type=\"button\" class=\"btn btn-success\"> \
		{0} \
	</button>";

var TECHNICAL_SKILL_DETAILS = [ "Java", "JavaScript", "C", "C++", "Python", "SQL", "HTML", "CSS" ];
