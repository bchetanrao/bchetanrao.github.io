var loader = document.getElementById("loader");
// only hide loader after the Lottie animation completes

function hideLoader() {
	loader.style.opacity = 0;
}

// Add visit count logic and conditional animation
var visitCount = localStorage.getItem("page_view");
if (visitCount) {
	visitCount = Number(visitCount) + 1;
} else {
	visitCount = 1;
}
localStorage.setItem("page_view", visitCount);
if (visitCount === 1) {
	// First visit: run loader animation
	var animation = bodymovin.loadAnimation({
		container: document.getElementById("bm"),
		renderer: "svg",
		loop: false,
		autoplay: true,
		path: "data2.json",
	});
	animation.addEventListener("complete", hideLoader);
} else {
	// Subsequent visits: hide loader immediately
	hideLoader();
}
console.log(visitCount);
