var loader = document.getElementById("loader");

window.addEventListener("load", () => {
	setTimeout(hideLoader, 3000);
});
function hideLoader() {
	loader.style.opacity = 0;
}

var animation = bodymovin.loadAnimation({
	container: document.getElementById("bm"),
	renderer: "svg",
	loop: false,
	autoplay: true,
	path: "data2.json",
});

var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
	visitCount = Number(visitCount) + 1;
	localStorage.setItem("page_view", visitCount);
} else {
	visitCount = 1;
	localStorage.setItem("page_view", 1);
}
console.log(visitCount);
