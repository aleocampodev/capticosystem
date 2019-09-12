console.log("Hello webpack 4!");
require('../sass/style.scss');
require('./particles');
require('./app');

var movie = document.getElementById("container");
var buttonTop = document.getElementById("button-top");
var buttonBottom = document.getElementById("button-bottom");
var wrapper = movie.querySelector(".wrapper");
var sliderbox = movie.querySelectorAll(".wrappers");
console.log(sliderbox)

//Punto de inicio
var start = 0;
var sliderTop = 0;
var lengths = sliderbox.length;
console.log(lengths);
var boxHeight = movie.clientHeight;
console.log(boxHeight);


wrapper.style.height = `${boxHeight * lengths}px`;

wrapper.style.top = `${sliderTop}px`;


function update(start){
	sliderTop = start * boxHeight * - 1;
	wrapper.style.top = `${sliderTop}px`;
	console.log(start);
}


buttonTop.addEventListener("click", function(e){
	start = start + 1 > lengths - 1 ? 0  : start + 1;
	update(start);  
})

buttonBottom.addEventListener("click",function(e){
	start = start - 1 < 0 ? lengths - 1 : start - 1 ;
	update(start);
})





/*import $ from 'jquery';*/

/*$(document).ready(function() {
	$("#particles-js").css({
		"height": $(window).height() + "pix"
	});
	console.log('prueba');
})*/
