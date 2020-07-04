/**
 * IntersectionObserver API为开发者提供了一种可以异步监听目标元素与其祖先或视窗(viewport)处于交叉状态的方式。
 * 祖先元素与视窗(viewport)被称为根(root)。
 */
const images = document.querySelectorAll("[data-src]");
const config = {
	rootMargin: "0px",
	threshold: 0,
};
let observer = new IntersectionObserver((entries, self) => {
	entries.forEach((entry) => {
		//对所有监听的DOM元素进行遍历，如果出现在视口，那么加载图像，并且取消这个DOM元素的监听
		if (entry.isIntersecting) {
			// 加载图像
			preloadImage(entry.target);
			// 解除观察
			self.unobserve(entry.target);
		}
	});
}, config);
//监听所有image的DOM元素
images.forEach((image) => {
	observer.observe(image);
});

function preloadImage(img) {
	const src = img.dataset.src;
	if (!src) {
		return;
	}
	img.src = src;
}
