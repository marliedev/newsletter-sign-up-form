var shareButton = document.querySelector('.article-preview__share-button');
var shareMenu = document.querySelector('.article-preview__share-menu');

shareButton.addEventListener('click', (evt) => {
	shareButton.classList.toggle('active');
	shareMenu.classList.toggle('visible');
});
