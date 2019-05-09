var navItems = document.querySelectorAll('.navigation li');
var slider1Content = document.querySelectorAll('.slider-1 .content');
var slider2Content = document.querySelectorAll('.slider-2 .content');

let indexOfContentSelected;

navItems.forEach((el,i) => {
	el.addEventListener('click', event => {
		

		navItems.forEach((navItem,index) => {
			if(navItem.classList.contains('nav-item-selected')){
				navItem.classList.remove('nav-item-selected');
			}
			if(navItem == event.target){
				indexOfContentSelected = index;
			}
		});
		
		el.classList.add('nav-item-selected');

		console.log(indexOfContentSelected);

		slider1Content.forEach((slider1ContentElement) => {
			if(slider1ContentElement.classList.contains('content-in')){
				slider1ContentElement.classList.remove('content-in');
				slider1ContentElement.classList.add('content-out');
			}
		});

		slider2Content.forEach((slider1ContentElement) => {
			if(slider1ContentElement.classList.contains('content-in')){
				slider1ContentElement.classList.remove('content-in');
				slider1ContentElement.classList.add('content-out');
			}
		});
	});
});

function changeSlider1Content(index){
	slider1Content[index].classList.add('content-in');
}

function changeSlider2Content(index){
	slider2Content[index].classList.add('content-in');
}

slider1Content.forEach((contentElement) => {

	contentElement.addEventListener('animationend', animationEvent => {
		if(animationEvent.animationName == 'contentOut'){

			changeSlider1Content(indexOfContentSelected+1);

			slider1Content.forEach((slider1ContentElement) => {

				if(slider1ContentElement.classList.contains('content-out')){

					slider1ContentElement.classList.remove('content-out');

				}
			});

		} 
	});

});

slider1Content.forEach((contentElement) => {

	contentElement.addEventListener('animationend', animationEvent => {
		if(animationEvent.animationName == 'contentOut'){

			changeSlider2Content(indexOfContentSelected+1);

			slider2Content.forEach((slider2ContentElement) => {

				if(slider2ContentElement.classList.contains('content-out')){

					slider2ContentElement.classList.remove('content-out');

				}
			});
		} 
	});

});
