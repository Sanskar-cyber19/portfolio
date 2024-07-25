let interval = 5000;
let display = document.querySelectorAll(".num");

display.forEach((display) => {
	let start = 0;
	let end = parseInt(display.getAttribute("end"));
	let duration = Math.floor(interval/end);
	let counter = setInterval(function () {
		start +=1;
		display.textContent = start;
		if(start == end){
			clearInterval(counter);
		}
	},duration)
})

let toggle = document.querySelectorAll(".nav-button");
let target = parseInt(toggle.getAttribute);

//swiper slider

// import Swiper from "../components/swiper-bundle.min.js";
// new Swiper('.clients-slider', {
//     speed: 400,
//     loop: true,
//     autoplay: {
//       delay: 4000,
//       disableOnInteraction: false
//     },
//     slidesPerView: 'auto',
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//       clickable: true
//     },
//     breakpoints: {
//       320: {
//         slidesPerView: 2,
//         spaceBetween: 40
//       },
//       480: {
//         slidesPerView: 3,
//         spaceBetween: 60
//       },
//       640: {
//         slidesPerView: 4,
//         spaceBetween: 80
//       },
//       992: {
//         slidesPerView: 6,
//         spaceBetween: 120
//       }
//     }
//   });