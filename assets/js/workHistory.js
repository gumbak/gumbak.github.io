$(document).ready(function() {
	var htmlWorkHistory = "<h1>Work History</h1>";
	WORK_HISTORY_DETAILS.forEach(function(workHistoryDetails) {
		htmlWorkHistory += HTML_WORK_HISTORY
			.replace("{0}", workHistoryDetails.IMAGE)
			.replace("{1}", workHistoryDetails.COMPANY)
			.replace("{2}", workHistoryDetails.COMPANY)
			.replace("{3}", workHistoryDetails.JOB_TITLE)
			.replace("{4}", workHistoryDetails.DURATION)
			.replace("{5}", workHistoryDetails.JOB_DESCRIPTION);
	}.bind(this));

	$("#work").append(htmlWorkHistory);
});