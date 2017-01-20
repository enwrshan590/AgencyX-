(function (){
	console.log('fired');
	//set up variables for all the images, headline, subtext, main content, and and empty variable called appliedClass

	var images = document.querySelectorAll(".image-holder");
	var	headline = document.querySelector(".heading");
	var subtext = document.querySelector(".main-copy h2");
	var mainContent = document.querySelector(".main-copy p");
	var appliedClass;

		function changeElements() {
			
			//changes colour of the text
			subtext.classList.add(this.id);
			headline.classList.add(this.id);

			subtext.classList.remove(appliedClass);
			headline.classList.remove(appliedClass);

			appliedClass = this.id;

			subtext.firstChild.nodeValue = dynamicContent[this.id].headline;
			mainContent.firstChild.nodeValue = dynamicContent[this.id].text;

		};

		//forEach take one of the images and passes one through the function
		[].forEach.call(images, function(image) {
			image.addEventListener('click', changeElements, false);
		});

		//load the content when the page loads
		subtext.firstChild.nodeValue = dynamicContent['spring'].headline;
		mainContent.firstChild.nodeValue = dynamicContent['spring'].text;
		headline.classList.add("spring");
})();