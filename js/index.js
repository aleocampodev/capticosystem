console.log("Hello webpack 4!");
require( '../sass/style.scss');
require('./particles');




import Particles from 'particlesjs';

window.onload= function(){
	Particles.init({
		selector:'.background',
		color: ['#fff']
	});
};





