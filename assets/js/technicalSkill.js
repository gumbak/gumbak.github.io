$(document).ready(function() {
	var htmlTechnicalSkill = "<h1>Technical Skills</h1>";
	TECHNICAL_SKILL_DETAILS.forEach(function(skill) {
		htmlTechnicalSkill += HTML_TECHNICAL_SKILL.replace("{0}", skill);
	}.bind(this));

	$("#tech").children(".center").append(htmlTechnicalSkill);
});