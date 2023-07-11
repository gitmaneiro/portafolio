$(document).ready(function(){
	
	
	console.log('funcionando con jquery 2023......');
	
	const sectionAll = document.querySelectorAll('section[id]');
	
	///console.log(sectionAll);
	
	window.addEventListener('scroll', () => {
		const scrollY = window.pageYOffset;
		sectionAll.forEach((current) => {
			
			const sectionHeight = current.offsetHeight;
			const sectionTop = current.offsetTop - 90;
			const sectionId = current.getAttribute('id');

			if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
				document.querySelector('nav a[href*=' + sectionId + ']').classList.add('active');
			}
			else {
				document.querySelector('nav a[href*=' + sectionId + ']').classList.remove('active');
			}
		});
	});
	
	
	
})