(() => {
    console.log('fired');

    var button = document.querySelector("#button");
	var burgerCon = document.querySelector("#burgerCon");
	var bioButton = document.querySelectorAll(".bio-button");
	var bio = document.querySelector("#member-bio");
	var bioExit = document.querySelector(".bio-exit");    

    // variables
    const memberImage = document.querySelector('.u-image'),
        memberName = document.querySelector('.u-name'),
        memberRole = document.querySelector('.u-role'),
        memberNameD = document.querySelector('.u-nameD'),
        memberRoleD = document.querySelector('.u-roleD'),
        memberDesc = document.querySelector('.u-bio');


    // adding team info using arrays
    const teamInfo = [
        ['Epiphany', 'They are a group of power rangers: red, yellow, blue and white. Helping each other help fulling cutsomers vision is what we do best with a splash of sparkles (and donut sprinkles).']

        ['Jiaxu', 'She is a visual and animation designer. His strength lies in his ability to use his multidisciniplinary skills in interaction design, 3D animation and user interface to create purposeful and aesthetically pleasing designs/experiences to help local companies create their brands.']
        
        ['Kanak', 'Kanak is an interactive designer. She brings out her idea into creative manner. She has done plethora of graogic designing projects and had succeeded by getting applauding remarks and feedback.']
        
        ['Ashwin', 'Ashwin is an front-end developer and does a bit of designing as well. He developed a liking towards html, css and js as he loves coding. He took some interest towards designing as it intrigued him too. Being a generalist, he works to bring a balance to the design and code workflow of the team']
        
        ['Evica', 'Evica strives to become a versatile designer capable of various styles and art mediums. Whether it is creating websites, indie games or animation, she loves creating a product exuding her style while stayimg authentic to the message and goal of the task. In fact, she is ready to take on anything with her pink pastel attitude']
    ];

	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	bioButton.forEach(bioBut => {
		bioBut.addEventListener("click", function() {
			console.log("Show bio!");
			bio.classList.toggle("slideToggle");
			
			let multiplier = this.dataset.offset; //this is the data-offset custom data attribute
			//on each of the sigils
			console.log(this.dataset.offset);

			memberImage.src = `images/about-photos/${multiplier}_thumb_04.jpg`;
			memberName.textContent = `${bioData[multiplier][0]}`;
			memberRole.textContent = bioData[multiplier][1];
			memberNameD.textContent = `${bioData[multiplier][0]}`;
			memberRoleD.textContent = bioData[multiplier][1];
			memberDesc.textContent = bioData[multiplier][2];
		});
	});

	function hideBio() {
		console.log("Exit bio!");
		bio.classList.toggle("slideToggle");
	}

    button.addEventListener("click", hamburgerMenu, false);
	bioExit.addEventListener("click", hideBio);

})();