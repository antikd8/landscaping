function myFunction() {
	let x = document.getElementById("myTopNav");
	if (x.className === "topNav") {
		x.className += " responsive";
	} else {
		x.className = "topNav";
	}
}
menu.onclick = myFunction;

//services
fetch("https://site-bc77b.firebaseio.com/mainServices.json")
	.then(function (jsonResponse) {
		return jsonResponse.json();
	})
	.then(function (mainServicesResponce) {
		const servicesText = mainServicesResponce.text;
		document.getElementById("servicesText").textContent = servicesText;
	});

// service1
fetch("https://site-bc77b.firebaseio.com/mainServices/service1.json")
	.then(function (jsonResponse) {
		return jsonResponse.json();
	})
	.then(function (mainServicesResponce) {
		const service1about = mainServicesResponce.about;
		const service1name = mainServicesResponce.name;
		const service1photo = mainServicesResponce.photo;
		document.getElementById("service1name").textContent = service1name;
		document.getElementById("service1about").textContent = service1about;
		document.getElementById("service1photo").src = service1photo;
	});

// service2
fetch("https://site-bc77b.firebaseio.com/mainServices/service2.json")
	.then(function (jsonResponse) {
		return jsonResponse.json();
	})
	.then(function (mainServicesResponce) {
		const service2about = mainServicesResponce.about;
		const service2name = mainServicesResponce.name;
		const service2photo = mainServicesResponce.photo;
		document.getElementById("service2name").textContent = service2name;
		document.getElementById("service2about").textContent = service2about;
		document.getElementById("service2photo").src = service2photo;
	});

// service3
fetch("https://site-bc77b.firebaseio.com/mainServices/service3.json")
	.then(function (jsonResponse) {
		return jsonResponse.json();
	})
	.then(function (mainServicesResponce) {
		const service3about = mainServicesResponce.about;
		const service3name = mainServicesResponce.name;
		const service3photo = mainServicesResponce.photo;
		document.getElementById("service3name").textContent = service3name;
		document.getElementById("service3about").textContent = service3about;
		document.getElementById("service3photo").src = service3photo;
	});

// service4
fetch("https://site-bc77b.firebaseio.com/mainServices/service4.json")
	.then(function (jsonResponse) {
		return jsonResponse.json();
	})
	.then(function (mainServicesResponce) {
		const service4about = mainServicesResponce.about;
		const service4name = mainServicesResponce.name;
		const service4photo = mainServicesResponce.photo;
		document.getElementById("service4name").textContent = service4name;
		document.getElementById("service4about").textContent = service4about;
		document.getElementById("service4photo").src = service4photo;
	});



fetch("https://site-bc77b.firebaseio.com/mainTeam.json")
	.then(function (jsonResponse) {
		return jsonResponse.json();
	})
	.then(function (mainTeamResponse) {});
//worker1
fetch("https://site-bc77b.firebaseio.com/mainTeam/worker1.json")
	.then(function (jsonResponse) {
		return jsonResponse.json();
	})
	.then(function (mainTeamResponse) {
		const worker1about = mainTeamResponse.about;
		const worker1name = mainTeamResponse.name;
		const worker1photo = mainTeamResponse.photo;
		const worker1position = mainTeamResponse.position;
		document.getElementById("worker1about").textContent = worker1about;
		document.getElementById("worker1name").textContent = worker1name;
		document.getElementById("worker1photo").src = worker1photo;
		document.getElementById("worker1position").textContent = worker1position;
	});

//worker2
fetch("https://site-bc77b.firebaseio.com/mainTeam/worker2.json")
	.then(function (jsonResponse) {
		return jsonResponse.json();
	})
	.then(function (mainTeamResponse) {
		const worker2about = mainTeamResponse.about;
		const worker2name = mainTeamResponse.name;
		const worker2photo = mainTeamResponse.photo;
		const worker2position = mainTeamResponse.position;
		document.getElementById("worker2about").textContent = worker2about;
		document.getElementById("worker2name").textContent = worker2name;
		document.getElementById("worker2photo").src = worker2photo;
		document.getElementById("worker2position").textContent = worker2position;
	});

//worker3
fetch("https://site-bc77b.firebaseio.com/mainTeam/worker3.json")
	.then(function (jsonResponse) {
		return jsonResponse.json();
	})
	.then(function (mainTeamResponse) {
		const worker3about = mainTeamResponse.about;
		const worker3name = mainTeamResponse.name;
		const worker3photo = mainTeamResponse.photo;
		const worker3position = mainTeamResponse.position;
		document.getElementById("worker3about").textContent = worker3about;
		document.getElementById("worker3name").textContent = worker3name;
		document.getElementById("worker3photo").src = worker3photo;
		document.getElementById("worker3position").textContent = worker3position;
	});

//worker4
fetch("https://site-bc77b.firebaseio.com/mainTeam/worker4.json")
	.then(function (jsonResponse) {
		return jsonResponse.json();
	})
	.then(function (mainTeamResponse) {
		const worker4about = mainTeamResponse.about;
		const worker4name = mainTeamResponse.name;
		const worker4photo = mainTeamResponse.photo;
		const worker4position = mainTeamResponse.position;
		document.getElementById("worker4about").textContent = worker4about;
		document.getElementById("worker4name").textContent = worker4name;
		document.getElementById("worker4photo").src = worker4photo;
		document.getElementById("worker4position").textContent = worker4position;
	});



//works
fetch("https://site-bc77b.firebaseio.com/mainWorks/works.json")
	.then(function (jsonResponse) {
		return jsonResponse.json();
	})
	.then(function (mainWorksResponce) {
		const worksText = mainWorksResponce.text;
		document.getElementById("worksText").textContent = worksText;
	});

//testimonials
fetch("https://site-bc77b.firebaseio.com/mainTestimonials/testimonials.json")
	.then(function (jsonResponse) {
		return jsonResponse.json();
	})
	.then(function (mainTestimonialsResponse) {
		const testimonialsText = mainTestimonialsResponse.text;
		const testimonialsAuthor = mainTestimonialsResponse.author;
		document.getElementById("testimonialsText").textContent = testimonialsText;
		document.getElementById(
			"testimonialsAuthor"
		).textContent = testimonialsAuthor;
	});

//Feedback
fetch("https://site-bc77b.firebaseio.com/mainFeedback/contacts.json")
	.then(function (jsonResponse) {
		return jsonResponse.json();
	})
	.then(function (mainFeedbackResponse) {
		const contactsText = mainFeedbackResponse.text;
		document.getElementById("contactsText").textContent = contactsText;
	});