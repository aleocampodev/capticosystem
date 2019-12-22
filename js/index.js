console.log("Hello webpack 4!");
require('../sass/style.scss');

/*alert( window.outerHeight + " " + window.outerWidth);*/


//Particulas
const Particles = require ('./particles.min');

var icones=['fas fa-network-wired', 'fas fa-desktop', 'fas fa-cogs' ,'fas fa-bolt' ,'fab fa-paypal','fas fa-globe-americas','fas fa-wrench','fas fa-award','fas fa-address-book'];

var paragraph=['twitter bootstrap','Gulp Authomatic System','Full RTL Mode Support','speed','Easy payment','Expansion to all America','the best tools','Guaranteeing quality ','Contacts']

window.onload= function(){
	Particles.init({
		selector: '.background',
		maxParticles: 150,
		color: '#ffffff',  
		connectParticles: true,
		
		
		responsive:[
			{
				breakpoint:900,
				options:{
					maxParticles:50
				}
			},{
				breakpoint:600,
				options: {
					maxParticles: 0
				}
			}
		
		]

	});

	myFunction()

};

//Slider

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
});



//Cambio de Fondo
var w= window.outerWidth;
console.log(w);
var box= document.getElementById("box-main");
console.log(box);

function myFunction() {
	if(w <= 900){
		box.style.background ="#F2835C";
		console.log("Hi");
	}
	else{
		console.log(box.style.backgroundImage = "linear-gradient(to right, rgba(242,130,91,1) 0%,rgba(229,91,43,1) 20%,rgba(255,94,124,1) 99%)");
		 console.log("box");
	}
}

window.onresize = myFunction;




//Crear slider desde el dom
var indice=0;

function createSlider(max){
	/*const divElm = document.createElement('div');
	divElm.setAttribute('class','sliderfather');
	movie.appendChild(divElm);*/
	

	const div1Elm = document.createElement("div");
	div1Elm.setAttribute('class','sliderfather1');
	movie.appendChild(div1Elm);
	
 

	for(i=1;  i<=max; i++){
		const sllider= document.createElement('div');
		sllider.setAttribute('class','sliderwrapper');
		div1Elm.appendChild(sllider);

	
		for(j=1 ; j<=max; j++){
			indice++
			const item= document.createElement('div');
			item.setAttribute('class','sliderwrapper__item');
			sllider.appendChild(item);
			console.log("bu")
			
			console.log("bu",icones,i,icones[i]);
			console.log("bus",paragraph,i,paragraph[i])
			console.log("bos",icones,j, icones[j]);
			const items = document.createElement('i');
			item.appendChild(items);
			items.setAttribute('class',icones[indice - 1]);
		
			
			const paragraphs=document.createElement('p');
			const h= document.createTextNode(paragraph[indice - 1]);
			paragraphs.appendChild(h);
			item.appendChild(paragraphs);
			console.log(h);
			
		}
	

	
	
	

		console.log('green');

	}

	
}

createSlider(3);


//slider dom
var sliderfather1 = movie.querySelector(".sliderfather1");
console.log('sas',sliderfather1)
var sliderwrapper = movie.querySelectorAll(".sliderwrapper")
console.log("lol", sliderwrapper);


//punto de inicio
var index= 0;
var sliderTop= 0;
var leng= sliderwrapper.length;

sliderfather1.style.height = `${boxHeight * leng}px`;

sliderfather1.style.top = `${sliderTop}px`;


function vertical(index){
	sliderBottom = index * boxHeight * - 1;
	sliderfather1.style.top= `${sliderTop}px`;
	console.log(index);
}

buttonTop.addEventListener("click", function(e){
	index = index + 1 > leng - 1 ? 0 : index + 1 ;
	vertical(index);  
})

buttonBottom.addEventListener("click",function(e){
	index = index - 1 < 0 ? leng - 1 : index - 1 ;
	vertical(index);
});









/*import $ from 'jquery';*/

/*$(document).ready(function() {
	$("#particles-js").css({
		"height": $(window).height() + "pix"
	});
	console.log('prueba');
})*/
