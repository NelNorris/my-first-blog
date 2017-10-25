var doodleID = 1;
var c = 1;
function updateDoodle(doodleNumber) {
	$(".doodleThumbnail").removeClass("selected");
	$("#picture").attr("src", "../../../static/doodle/doodle" + doodleNumber + ".jpg");
	$("#doodle" + doodleNumber).addClass("selected");
}
function doDoodle(doodleNumber) {
	doodleID = doodleNumber;
	updateDoodle(doodleID);
}

function doNext() {
	doodleID += 1;
	if (doodleID == 366) {
		n = 1;
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"0px"});
		c = 1;
		calendar();
	}
	if (doodleID == 32) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-600px"});
		c = 2;
		calendar();
	}
	if (doodleID == 60) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-1200px"});
		c = 3;
		calendar();
	}
	if (doodleID == 91) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-1800px"});
		c = 4;
		calendar();
	}
	if (doodleID == 121) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-2400px"});
		c = 5;
		calendar();
	}
	if (doodleID == 152) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-3000px"});
		c = 6;
		calendar();
	}
	if (doodleID == 182) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-3600px"});
		c = 7;
		calendar();
	}
	if (doodleID == 213) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-4200px"});
		c = 8;
		calendar();
	}
	if (doodleID == 244) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-4800px"});
		c = 9;
		calendar();
	}
	if (doodleID == 274) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-5400px"});
		c = 10;
		calendar();
	}
	if (doodleID == 305) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-6000px"});
		c = 11;
		calendar();
	}
	if (doodleID == 335) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-6600px"});
		c = 12;
		calendar();
	}
	updateDoodle(doodleID);
}
function doPrev() {
	doodleID -= 1;
	if (doodleID == 0) {
		n = 365;
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-6600px"});
		$("#calendar-dec").addClass("active");
	}
	if (doodleID == 31) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"0px"});
		$("#calendar-jan").addClass("active");
	}
	if (doodleID == 59) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-600px"});
		$("#calendar-feb").addClass("active");
	}
	if (doodleID == 90) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-1200px"});
		$("#calendar-mar").addClass("active");
	}
	if (doodleID == 120) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-1800px"});
		$("#calendar-apr").addClass("active");
	}
	if (doodleID == 151) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-2400px"});
		$("#calendar-may").addClass("active");
	}
	if (doodleID == 181) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-3000px"});
		$("#calendar-jun").addClass("active");
	}
	if (doodleID == 212) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-3600px"});
		$("#calendar-jul").addClass("active");
	}
	if (doodleID == 243) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-4200px"});
		$("#calendar-aug").addClass("active");
	}
	if (doodleID == 273) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-4800px"});
		$("#calendar-sep").addClass("active");
	}
	if (doodleID == 304) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-5400px"});
		$("#calendar-oct").addClass("active");
	}
	if (doodleID == 334) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-6000px"});
		$("#calendar-nov").addClass("active");
	}
	updateDoodle(doodleID);
}

function calendar() {
	if (c==0) {
		c=1;
	}
	if (c==1) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"0px"});
		$("#calendar-jan").addClass("active");
	}
	if (c==2) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-600px"});
		$("#calendar-feb").addClass("active");
	}
	if (c==3) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-1200px"});
		$("#calendar-mar").addClass("active");
	}
	if (c==4) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-1800px"});
		$("#calendar-apr").addClass("active");
	}
	if (c==5) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-2400px"});
		$("#calendar-may").addClass("active");
	}
	if (c==6) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-3000px"});
		$("#calendar-jun").addClass("active");
	}
	if (c==7) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-3600px"});
		$("#calendar-jul").addClass("active");
	}
	if (c==8) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-4200px"});
		$("#calendar-aug").addClass("active");
	}
	if (c==9) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-4800px"});
		$("#calendar-sep").addClass("active");
	}
	if (c==10) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-5400px"});
		$("#calendar-oct").addClass("active");
	}
	if (c==11) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-6000px"});
		$("#calendar-nov").addClass("active");
	}
	if (c==12) {
		$(".calendar-button").removeClass("active");
		$(".calendar-scroll").animate({"left":"-6600px"});
		$("#calendar-dec").addClass("active");
	}
}
function calendarNav(monthId) {
	c = monthId;
	calendar();
}
function calendarPrev() {
	c -= 1;
	if (c==0) {
		c = 12;
	}
	calendar();
}
function calendarNext() {
	c += 1;
	if (c==13) {
		c = 1;
	}
	calendar();
}