const constdate = ["Sunday,","Monday,","Tuesday,","Wednesday,","Thusday,","Friday,","Saturday,"]
const constmonth = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const timezone = [
	{
		gmt:0,
		flag: "vn.jpg"
	},
	{
		gmt:-6,
		flag: "uk.png"
	},
	{
		gmt:-12,
		flag: "us.png"
	}
]
var countdown = 0;
var selectionTimezone = 0;
var time = 60
setTime();
setTimeUS();
setTimeUK();
setInterval(function(){
	var date = new Date();
	setTime();
	setTimeUS();
	setTimeUK();
	if (countdown == 59) {
		countdown = 0;
	} else {
		countdown++
	}
	if (countdown == 0) {
		document.getElementById("block_img0").className = 'rotate1'
		document.getElementById("block_img1").className = 'rotate1'
		document.getElementById("block_img2").className = 'rotate1'
		document.getElementById("block_img3").className = 'rotate1'
		document.getElementById("block_img4").className = 'rotate1'
		document.getElementById("block_img5").className = 'rotate1'
	} else if(countdown == time*0.25) {
		document.getElementById("block_img0").className = 'rotate2'
		document.getElementById("block_img1").className = 'rotate2'
		document.getElementById("block_img2").className = 'rotate2'
		document.getElementById("block_img3").className = 'rotate2'
		document.getElementById("block_img4").className = 'rotate2'
		document.getElementById("block_img5").className = 'rotate2'
	} else if(countdown == time*0.5) {
		document.getElementById("block_img0").className = 'rotate3'
		document.getElementById("block_img1").className = 'rotate3'
		document.getElementById("block_img2").className = 'rotate3'
		document.getElementById("block_img3").className = 'rotate3'
		document.getElementById("block_img4").className = 'rotate3'
		document.getElementById("block_img5").className = 'rotate3'
	} else if(countdown == time*0.75) {
		document.getElementById("block_img0").className = 'rotate4'
		document.getElementById("block_img1").className = 'rotate4'
		document.getElementById("block_img2").className = 'rotate4'
		document.getElementById("block_img3").className = 'rotate4'
		document.getElementById("block_img4").className = 'rotate4'
		document.getElementById("block_img5").className = 'rotate4'
	}
},1000)
function setTime(){
	var date = new Date();
	document.getElementById("day").innerHTML = constdate[date.getDay()]
	document.getElementById("date").innerHTML = date.getDate()
	document.getElementById("month").innerHTML = constmonth[date.getMonth()]
	document.getElementById("year").innerHTML = date.getYear() + 1900
	document.getElementById("hour").innerHTML = (date.getHours() + timezone[selectionTimezone].gmt) < 10 ? "0" + (date.getHours() + timezone[selectionTimezone].gmt) : (date.getHours() + timezone[selectionTimezone].gmt)
	document.getElementById("minute").innerHTML = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
	document.getElementById("second").innerHTML = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
}
function setTimeUS(){
	var date = new Date();
	date = new Date(date - 43200000)
	document.getElementById("dayus").innerHTML = constdate[date.getDay()]
	document.getElementById("dateus").innerHTML = date.getDate()
	document.getElementById("monthus").innerHTML = constmonth[date.getMonth()]
	document.getElementById("yearus").innerHTML = date.getYear() + 1900
	document.getElementById("hourus").innerHTML = (date.getHours() + timezone[selectionTimezone].gmt) < 10 ? "0" + (date.getHours() + timezone[selectionTimezone].gmt) : (date.getHours() + timezone[selectionTimezone].gmt)
	document.getElementById("minuteus").innerHTML = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
	document.getElementById("secondus").innerHTML = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
}
function setTimeUK(){
	var date = new Date();
	date = new Date(date - 21600000)
	document.getElementById("dayuk").innerHTML = constdate[date.getDay()]
	document.getElementById("dateuk").innerHTML = date.getDate()
	document.getElementById("monthuk").innerHTML = constmonth[date.getMonth()]
	document.getElementById("yearuk").innerHTML = date.getYear() + 1900
	document.getElementById("houruk").innerHTML = (date.getHours() + timezone[selectionTimezone].gmt) < 10 ? "0" + (date.getHours() + timezone[selectionTimezone].gmt) : (date.getHours() + timezone[selectionTimezone].gmt)
	document.getElementById("minuteuk").innerHTML = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
	document.getElementById("seconduk").innerHTML = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
}