// Side Navigation Scroll Tracking
document.addEventListener('DOMContentLoaded', function() {
	const navLinks = document.querySelectorAll('.nav-link');
	const sections = document.querySelectorAll('section[id]');
	const progressBar = document.getElementById('progress-bar');
	
	// Smooth scrolling for navigation links
	navLinks.forEach(link => {
		link.addEventListener('click', function(e) {
			e.preventDefault();
			const targetId = this.getAttribute('href').substring(1);
			const targetSection = document.getElementById(targetId);
			
			if (targetSection) {
				targetSection.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		});
	});
	
	// Scroll tracking for active states and progress
	function updateActiveSection() {
		const scrollY = window.pageYOffset;
		const windowHeight = window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight;
		
		// Update progress bar
		const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
		if (progressBar) {
			progressBar.style.width = Math.min(100, Math.max(0, scrollPercent)) + '%';
		}
		
		// Find current section
		let currentSection = '';
		sections.forEach(section => {
			const sectionTop = section.offsetTop - 100; // Offset for header
			const sectionHeight = section.offsetHeight;
			
			if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
				currentSection = section.getAttribute('id');
			}
		});
		
		// Update active nav link
		navLinks.forEach(link => {
			const isActive = link.getAttribute('data-section') === currentSection;
			
			if (isActive) {
				// Add active styles
				link.classList.remove('border-transparent');
				link.classList.add('border-black', 'font-bold');
				
				// Add color-specific active background based on hover color
				if (link.classList.contains('hover:bg-primary')) {
					link.classList.add('bg-primary', 'text-white');
				} else if (link.classList.contains('hover:bg-blue')) {
					link.classList.add('bg-blue', 'text-white');
				} else if (link.classList.contains('hover:bg-coral')) {
					link.classList.add('bg-coral', 'text-white');
				} else if (link.classList.contains('hover:bg-mint')) {
					link.classList.add('bg-mint', 'text-black');
				} else if (link.classList.contains('hover:bg-purple')) {
					link.classList.add('bg-purple', 'text-white');
				} else if (link.classList.contains('hover:bg-lime')) {
					link.classList.add('bg-lime', 'text-black');
				}
			} else {
				// Remove active styles
				link.classList.add('border-transparent');
				link.classList.remove('border-black', 'font-bold');
				link.classList.remove('bg-primary', 'bg-blue', 'bg-coral', 'bg-mint', 'bg-purple', 'bg-lime', 'text-white', 'text-black');
			}
		});
	}
	
	// Throttle scroll events for performance
	let ticking = false;
	function requestTick() {
		if (!ticking) {
			requestAnimationFrame(updateActiveSection);
			ticking = true;
		}
	}
	
	window.addEventListener('scroll', function() {
		requestTick();
		ticking = false;
	});
	
	// Initial call
	updateActiveSection();
});