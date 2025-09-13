// Love messages array
const loveMessages = [
    "You make my heart skip a beat every day 💓",
    "Life is beautiful because you're in it 🌺",
    "You're my favorite notification 📱💕",
    "I love you to the moon and back 🌙⭐",
    "You're my person, my everything 💖",
    "Every day with you is Valentine's Day 💕",
    "You're the reason I believe in fairy tales ✨",
    "My heart chose you before my mind could 💗",
    "You're the best part of every day 🌅",
    "Forever isn't long enough with you 💍"
];

// Demo wishes array for automatic display
const demoWishes = [
    "Mãi mãi hạnh phúc bên nhau",
    "Tình yêu của chúng ta bền vững như kim cương", 
    "Mỗi ngày bên em đều là Valentine",
    "Yêu em từ trái tim đến tận cùng vũ trụ",
    "Chúng ta sẽ già đi cùng nhau",
    "Em là món quà đẹp nhất đời anh",
    "Cùng nhau xây dựng tổ ấm hạnh phúc",
    "Tình yêu này sẽ mãi mãi không phai"
];

let currentWishIndex = 0;
let autoWishInterval;

// Initialize particles
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particlesContainer.appendChild(particle);
        
        setTimeout(() => particle.remove(), 8000);
    }, 300);
}

// Countdown timer
function updateCountdown() {
    const birthday = new Date('2025-09-14T09:00:00'); // Change this date!
    const now = new Date();
    
    const diff = birthday - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    
    // Check if countdown has ended
    if (diff <= 0) {
        const bgAudio = document.getElementById('bg-music');
        if (bgAudio) bgAudio.remove();
        console.log('Countdown ended! Triggering birthday surprise...');
        triggerBirthdaySurprise();
    }
}

// Navigation
function scrollToSection(index) {
    document.getElementById(`section${index}`).scrollIntoView({ behavior: 'smooth' });
}

// Hero section effects
function createExplosion(event) {
    for (let i = 0; i < 25; i++) {
        const explosion = document.createElement('div');
        explosion.innerHTML = ['💖', '💕', '💗', '💝', '🌟', '✨'][Math.floor(Math.random() * 6)];
        explosion.style.position = 'fixed';
        explosion.style.left = event.clientX + 'px';
        explosion.style.top = event.clientY + 'px';
        explosion.style.fontSize = Math.random() * 25 + 15 + 'px';
        explosion.style.pointerEvents = 'none';
        explosion.style.zIndex = '1000';
        
        const angle = (Math.PI * 2 * i) / 25;
        const velocity = Math.random() * 150 + 100;
        
        document.body.appendChild(explosion);
        
        explosion.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity}px) scale(0)`, opacity: 0 }
        ], { duration: 1500, easing: 'ease-out' }).onfinish = () => explosion.remove();
    }
}


// Elegant shimmer glow countdown animation
function animateCountdown(item) {
    // Create floating sparkles around the item
    for (let i = 0; i < 6; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = ['✨', '💫', '⭐', '🌟'][Math.floor(Math.random() * 4)];
        sparkle.style.position = 'absolute';
        sparkle.style.fontSize = '1.2rem';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '10';
        
        const angle = (i * 60) * (Math.PI / 180); // 60 degrees apart
        const radius = 80;
        const startX = Math.cos(angle) * radius;
        const startY = Math.sin(angle) * radius;
        
        sparkle.style.left = '50%';
        sparkle.style.top = '50%';
        sparkle.style.transform = `translate(-50%, -50%) translate(${startX}px, ${startY}px)`;
        
        item.style.position = 'relative';
        item.appendChild(sparkle);
        
        // Animate sparkles floating around
        sparkle.animate([
            { 
                transform: `translate(-50%, -50%) translate(${startX}px, ${startY}px) scale(0) rotate(0deg)`,
                opacity: 0 
            },
            { 
                transform: `translate(-50%, -50%) translate(${startX * 1.3}px, ${startY * 1.3}px) scale(1) rotate(180deg)`,
                opacity: 1 
            },
            { 
                transform: `translate(-50%, -50%) translate(${startX * 1.6}px, ${startY * 1.6}px) scale(0) rotate(360deg)`,
                opacity: 0 
            }
        ], {
            duration: 1200,
            delay: i * 100,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => sparkle.remove();
    }
    
    // Create a beautiful shimmer sweep
    const shimmer = document.createElement('div');
    shimmer.style.position = 'absolute';
    shimmer.style.top = '0';
    shimmer.style.left = '-100%';
    shimmer.style.width = '100%';
    shimmer.style.height = '100%';
    shimmer.style.background = 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)';
    shimmer.style.pointerEvents = 'none';
    shimmer.style.zIndex = '2';
    shimmer.style.borderRadius = '20px';
    
    item.appendChild(shimmer);
    
    // Animate shimmer sweep
    shimmer.animate([
        { left: '-100%' },
        { left: '100%' }
    ], {
        duration: 800,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }).onfinish = () => shimmer.remove();
    
    // Main glow animation
    item.style.transition = 'all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    item.style.transform = 'scale(1.05)';
    item.style.background = 'linear-gradient(45deg, rgba(255,255,255,0.2), rgba(254,202,87,0.1), rgba(255,107,149,0.1), rgba(255,255,255,0.2))';
    item.style.backgroundSize = '300% 300%';
    item.style.animation = 'gradientFlow 1s ease-in-out';
    item.style.boxShadow = `
        0 0 40px rgba(255,255,255,0.3),
        0 0 60px rgba(254,202,87,0.2),
        0 8px 32px rgba(255,107,149,0.15),
        inset 0 1px 0 rgba(255,255,255,0.4)
    `;
    item.style.border = '1px solid rgba(255,255,255,0.5)';
    
    // Animate the number with a gentle float
    const number = item.querySelector('.countdown-number');
    const label = item.querySelector('.countdown-label');
    
    if (number) {
        number.style.transition = 'all 0.7s ease';
        number.style.transform = 'translateY(-3px)';
        number.style.textShadow = '0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(254,202,87,0.4)';
        number.style.color = '#fff';
    }
    
    if (label) {
        label.style.transition = 'all 0.7s ease';
        label.style.transform = 'translateY(-2px)';
        label.style.textShadow = '0 0 20px rgba(255,255,255,0.6)';
    }
    
    // Return to normal state
    setTimeout(() => {
        item.style.transform = 'scale(1)';
        item.style.background = '';
        item.style.backgroundSize = '';
        item.style.animation = '';
        item.style.boxShadow = '';
        item.style.border = '';
        
        if (number) {
            number.style.transform = 'translateY(0px)';
            number.style.textShadow = '';
            number.style.color = '';
        }
        
        if (label) {
            label.style.transform = 'translateY(0px)';
            label.style.textShadow = '';
        }
    }, 700);
    
    // Reset transition
    setTimeout(() => {
        item.style.transition = '';
        if (number) number.style.transition = '';
        if (label) label.style.transition = '';
    }, 750);
}

// Automatic sequential countdown animation system
let countdownAnimationIndex = 0;
let countdownAnimationInterval;

function startAutomaticCountdownAnimation() {
    const countdownItems = document.querySelectorAll('.countdown-item');
    
    if (countdownItems.length === 0) return;
    
    // Function to animate the next countdown item
    function animateNextCountdownItem() {
        const currentItem = countdownItems[countdownAnimationIndex];
        
        // Animate the current item
        animateCountdown(currentItem);
        
        // Move to next item (cycle back to 0 after the last item)
        countdownAnimationIndex = (countdownAnimationIndex + 1) % countdownItems.length;
    }
    
    // Start immediately with the first item
    animateNextCountdownItem();
    
    // Set interval for automatic animation (every 1.4 seconds for graceful flow)
    countdownAnimationInterval = setInterval(animateNextCountdownItem, 1400);
}

function stopAutomaticCountdownAnimation() {
    if (countdownAnimationInterval) {
        clearInterval(countdownAnimationInterval);
        countdownAnimationInterval = null;
    }
}

// Messages section
function showRandomMessage() {
    const messageElement = document.getElementById('currentMessage');
    const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    
    messageElement.style.transform = 'scale(0.8)';
    messageElement.style.opacity = '0';
    
    setTimeout(() => {
        messageElement.innerHTML = randomMessage;
        messageElement.style.transform = 'scale(1)';
        messageElement.style.opacity = '1';
    }, 300);
}

function createFloatingHearts() {
    for (let i = 0; i < 12; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = ['💖', '💕', '💗', '💝', '🌹'][Math.floor(Math.random() * 5)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px';
        heart.style.animationDuration = Math.random() * 2 + 4 + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 7000);
    }
}

// Memory section effects
function memoryEffect(card) {
    const originalTransform = card.style.transform;
    card.style.transform = 'scale(1.1) rotateY(15deg)';
    card.style.boxShadow = '0 30px 60px rgba(255,107,149,0.6)';
    
    // Create sparkle effect
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.fontSize = '1.5rem';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.animation = 'sparkle 1s ease-out';
        
        card.style.position = 'relative';
        card.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    }
    
    setTimeout(() => {
        card.style.transform = originalTransform;
        card.style.boxShadow = '';
    }, 2000);
}

function animateAllMemories() {
    const cards = document.querySelectorAll('.memory-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            memoryEffect(card);
        }, index * 400);
    });
}

// Wish section effects
function makeWish() {
    const wishInput = document.getElementById('wishInput');
    const wish = wishInput.value.trim();
    
    if (wish) {
        // Create main wish display
        const wishElement = document.createElement('div');
        wishElement.className = 'wish-display';
        wishElement.innerHTML = `✨ "Điều ước của con sẽ được thực hiện HÔ HÔ HÔ!" ✨`;
        
        document.body.appendChild(wishElement);
        
        // Create sparkle burst effect around the wish
        createWishSparkles();
        
        // Create enhanced shooting stars
        for (let i = 0; i < 5; i++) {
            setTimeout(() => createEnhancedShootingStar(), i * 300);
        }
        
        // Create floating wish particles
        createWishParticles(wish);
        
        // Add button click effect
        const magicBtn = document.querySelector('.magic-btn');
        magicBtn.style.transform = 'scale(0.95)';
        magicBtn.style.background = 'linear-gradient(45deg, #54a0ff, #ff9ff3)';
        
        setTimeout(() => {
            magicBtn.style.transform = 'scale(1)';
            magicBtn.style.background = 'linear-gradient(45deg, #ff6b95, #feca57)';
        }, 200);
        
        // Remove wish display after animation
        setTimeout(() => {
            if (wishElement.parentNode) {
                wishElement.remove();
            }
        }, 10000);
        
        // Clear input with animation
        wishInput.style.transform = 'scale(0.95)';
        setTimeout(() => {
            wishInput.value = '';
            wishInput.style.transform = 'scale(1)';
            wishInput.placeholder = 'Điều ước đã được gửi đi! ⭐';
            setTimeout(() => {
                wishInput.placeholder = 'Nhập điều ước của ở đây...';
            }, 2000);
        }, 300);
    } else {
        // Shake animation for empty input
        const wishInput = document.getElementById('wishInput');
        wishInput.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            wishInput.style.animation = '';
        }, 500);
    }
}

function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.top = Math.random() * 60 + 10 + '%';
    star.style.left = '-50px';
    star.style.animationDuration = Math.random() * 2 + 2 + 's';
    star.style.boxShadow = '0 0 20px #fff, 0 0 30px #ffd700, 0 0 40px #ffd700';
    
    document.querySelector('.wish-section').appendChild(star);
    setTimeout(() => star.remove(), 4000);
}

function createEnhancedShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.top = Math.random() * 70 + 10 + '%';
    star.style.left = '-50px';
    star.style.animationDuration = Math.random() * 1.5 + 1.5 + 's';
    star.style.boxShadow = '0 0 25px #fff, 0 0 35px #ffd700, 0 0 45px #ff6b95';
    star.style.background = 'radial-gradient(circle, #fff, #ffd700, #ff6b95)';
    star.style.width = '5px';
    star.style.height = '5px';
    
    // Add trail effect
    star.style.filter = 'blur(0.5px)';
    
    document.querySelector('.wish-section').appendChild(star);
    setTimeout(() => star.remove(), 3000);
}

function createWishSparkles() {
    for (let i = 0; i < 12; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = ['✨', '⭐', '🌟', '💫'][Math.floor(Math.random() * 4)];
        sparkle.style.position = 'fixed';
        sparkle.style.left = (50 + (Math.random() - 0.5) * 40) + '%';
        sparkle.style.top = (30 + (Math.random() - 0.5) * 20) + '%';
        sparkle.style.fontSize = Math.random() * 20 + 15 + 'px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1001';
        sparkle.style.animation = 'wishSparkle ' + (Math.random() * 2 + 2) + 's ease-out';
        
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 4000);
    }
}

function createWishParticles(wish) {
    const particles = ['💖', '💫', '⭐', '✨', '🌟', '💝'];
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.innerHTML = particles[Math.floor(Math.random() * particles.length)];
        particle.style.position = 'fixed';
        particle.style.left = '50%';
        particle.style.top = '30%';
        particle.style.fontSize = Math.random() * 25 + 20 + 'px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '999';
        
        const angle = (Math.PI * 2 * i) / 8;
        const velocity = Math.random() * 200 + 150;
        
        particle.animate([
            { 
                transform: 'translate(-50%, -50%) scale(0) rotate(0deg)', 
                opacity: 0 
            },
            { 
                transform: 'translate(-50%, -50%) scale(1.2) rotate(180deg)', 
                opacity: 1 
            },
            { 
                transform: `translate(${Math.cos(angle) * velocity - 50}%, ${Math.sin(angle) * velocity - 50}%) scale(0) rotate(360deg)`, 
                opacity: 0 
            }
        ], { 
            duration: 3000, 
            easing: 'ease-out' 
        }).onfinish = () => particle.remove();
        
        document.body.appendChild(particle);
    }
}

// Finale section effects
function launchFireworks() {
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createFirework(
                Math.random() * window.innerWidth, 
                Math.random() * (window.innerHeight * 0.7) + window.innerHeight * 0.1
            );
        }, i * 400);
    }
}

function createFirework(x, y) {
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#ff6b95'];
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '6px';
        particle.style.height = '6px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1000';
        particle.style.boxShadow = `0 0 10px ${colors[Math.floor(Math.random() * colors.length)]}`;
        
        const angle = (Math.PI * 2 * i) / 15;
        const velocity = Math.random() * 100 + 80;
        
        document.body.appendChild(particle);
        
        particle.animate([
            { 
                transform: 'translate(0, 0) scale(1)', 
                opacity: 1 
            },
            { 
                transform: `translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity}px) scale(0)`, 
                opacity: 0 
            }
        ], { 
            duration: 2000, 
            easing: 'ease-out' 
        }).onfinish = () => particle.remove();
    }
}

function finalSurprise() {
    // Create massive heart explosion from center
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = ['💖', '💕', '💗', '💝', '🌹', '💋', '👑'][Math.floor(Math.random() * 7)];
            heart.style.position = 'fixed';
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.fontSize = Math.random() * 35 + 25 + 'px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1000';
            
            const angle = (Math.PI * 2 * i) / 50;
            const velocity = Math.random() * 400 + 200;
            
            heart.animate([
                { 
                    transform: 'translate(-50%, -50%) scale(0) rotate(0deg)', 
                    opacity: 0 
                },
                { 
                    transform: 'translate(-50%, -50%) scale(1.2) rotate(180deg)', 
                    opacity: 1 
                },
                { 
                    transform: `translate(${Math.cos(angle) * velocity - 50}%, ${Math.sin(angle) * velocity - 50}%) scale(0) rotate(360deg)`, 
                    opacity: 0 
                }
            ], { 
                duration: 4000, 
                easing: 'ease-out' 
            }).onfinish = () => heart.remove();
            
            document.body.appendChild(heart);
        }, i * 80);
    }
    
    // Show final birthday message
    setTimeout(() => {
        const message = document.createElement('div');
        message.innerHTML = '🎉 Happy Birthday My Beautiful Queen! 👑<br><br>You deserve all the love and happiness in the world!<br><br>I love you more than words can say! 💖';
        message.style.position = 'fixed';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.fontSize = '2.2rem';
        message.style.color = '#fff';
        message.style.textAlign = 'center';
        message.style.zIndex = '1001';
        message.style.background = 'linear-gradient(135deg, #ff6b95, #667eea)';
        message.style.padding = '3rem';
        message.style.borderRadius = '30px';
        message.style.border = '3px solid rgba(255,255,255,0.5)';
        message.style.backdropFilter = 'blur(20px)';
        message.style.boxShadow = '0 0 50px rgba(255,107,149,0.8)';
        message.style.animation = 'finalGlow 2s ease-in-out infinite';
        message.style.lineHeight = '1.4';
        
        document.body.appendChild(message);
        
        setTimeout(() => message.remove(), 6000);
    }, 4000);
}

// Mouse trail effect
function createMouseTrail(e) {
    const trail = document.createElement('div');
    trail.innerHTML = ['💖', '✨', '🌟', '💕'][Math.floor(Math.random() * 4)];
    trail.style.position = 'fixed';
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    trail.style.fontSize = '1.2rem';
    trail.style.pointerEvents = 'none';
    trail.style.zIndex = '999';
    trail.style.animation = 'trailFade 1.5s ease-out';
    
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 1500);
}

// CSS animations are now defined in the main CSS file

// Event listeners
document.addEventListener('mousemove', function(e) {
    // Only create trail occasionally to avoid performance issues
    if (Math.random() < 0.1) {
        createMouseTrail(e);
    }
});

// Click fireworks in finale section
document.addEventListener('click', function(e) {
    if (e.target.closest('.finale-section')) {
        createFirework(e.clientX, e.clientY);
    }
});

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Start automatic countdown animation after a short delay
    setTimeout(() => {
        startAutomaticCountdownAnimation();
    }, 2000); // Start after 2 seconds for quicker engagement
    
    // Create initial floating hearts
    setTimeout(() => {
        createFloatingHearts();
        setInterval(createFloatingHearts, 15000);
    }, 2000);

	// Unmute and play background music on first user interaction
	const bg = document.getElementById('bg-music');
	if (bg) {
		const cleanup = () => {
			window.removeEventListener('click', tryUnmuteAndPlay);
			window.removeEventListener('touchstart', tryUnmuteAndPlay, { passive: true });
			window.removeEventListener('keydown', tryUnmuteAndPlay);
		};

		const tryUnmuteAndPlay = async () => {
			// If already playing unmuted, do nothing and remove listeners
			if (!bg.paused && !bg.muted) {
				cleanup();
				return;
			}
			try {
				bg.muted = false;
				await bg.play();
			} catch (e) {
				return;
			}
			cleanup();
		};
		window.addEventListener('click', tryUnmuteAndPlay, { once: true });
		window.addEventListener('touchstart', tryUnmuteAndPlay, { once: true, passive: true });
		window.addEventListener('keydown', tryUnmuteAndPlay, { once: true });
	}

	// Video mute/unmute toggle for hero background
	const heroVideo = document.getElementById('displayVideo');
	const videoToggleBtn = document.getElementById('videoToggleMute');
	if (heroVideo && videoToggleBtn) {
		const setButtonIcon = () => {
			videoToggleBtn.textContent = heroVideo.muted ? '🔇' : '🔊';
			videoToggleBtn.title = heroVideo.muted ? 'Unmute video' : 'Mute video';
		};
		setButtonIcon();
		videoToggleBtn.addEventListener('click', () => {
			heroVideo.muted = !heroVideo.muted;
			setButtonIcon();
			// Try to play if paused (some browsers pause muted videos after tab switch)
			if (heroVideo.paused) {
				heroVideo.play().catch(() => {});
			}
		});
	}

	// About section reveal and stat counters (Sections 2 or 4 if present)
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('revealed');
				if (entry.target.classList.contains('stat')) {
					const numEl = entry.target.querySelector('.stat-number');
					if (numEl && !numEl.dataset.counted) {
						animateCounter(numEl, parseInt(numEl.dataset.target || '0', 10), 900);
						numEl.dataset.counted = 'true';
					}
				}
				observer.unobserve(entry.target);
			}
		});
	}, { threshold: 0.15 });

	// Observe about card, badges, and stats (handles any about-section instance)
	document.querySelectorAll('.about-card').forEach(card => observer.observe(card));
	document.querySelectorAll('.about-badges .badge').forEach(b => observer.observe(b));
	document.querySelectorAll('.about-stats .stat').forEach(s => observer.observe(s));

    animateAllMemories();
    // infinity 
    setInterval(() => {
        animateAllMemories();
    }, 4000);

});

function animateCounter(element, target, duration) {
    const start = 0;
    const startTime = performance.now();
    const formatter = new Intl.NumberFormat();
    function tick(now) {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(start + (target - start) * eased);
        element.textContent = formatter.format(value);
        if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

// Birthday Surprise System
let birthdaySurpriseTriggered = false;
let birthdayVideoPath = null; // Will be set when video is attached

// Trigger birthday surprise when countdown ends
function triggerBirthdaySurprise() {
    console.log('triggerBirthdaySurprise called, already triggered:', birthdaySurpriseTriggered);
    if (birthdaySurpriseTriggered) return;
    birthdaySurpriseTriggered = true;
    
    // Stop automatic countdown animations
    stopAutomaticCountdownAnimation();
    
    // Show birthday overlay with smooth transition
    const overlay = document.getElementById('birthdayOverlay');
    console.log('Birthday overlay element:', overlay);
    if (overlay) {
        overlay.classList.add('active');
        console.log('Added active class to overlay');
    } else {
        console.error('Birthday overlay not found!');
        return;
    }
    
    // Setup gift box click handler
    setupGiftBoxInteraction();
}

// Setup gift box click interaction
function setupGiftBoxInteraction() {
    const giftBox = document.getElementById('giftBox');
    let clickCount = 0;
    
    giftBox.addEventListener('click', function() {
        clickCount++;
        
        // Add click animation
        giftBox.classList.remove('clicked');
        setTimeout(() => giftBox.classList.add('clicked'), 10);
        
        // Create anticipation sparkles
        createGiftSparkles();
        
        // After 3 clicks, trigger the full surprise
        if (clickCount >= 3) {
            openGiftAndRevealSurprise();
        } else {
            // Show encouraging message
            updateGiftText(clickCount);
        }
    });
}

// Update gift text based on click count
function updateGiftText(clickCount) {
    const giftText = document.querySelector('.gift-text');
    const messages = [
        '🎁 Vừng ơi mở ra! 🎁',
        '✨ Á có bug rồi thử lại lần nữa đi! ✨',
        '🎉 Sắp tới rồi, cố lơn cố lơn 🎉',
        '🎊 SURPRISE! Chúc mừng sinh nhật bé mụp của anh! 🎊'
    ];
    
    giftText.textContent = messages[clickCount] || messages[3];
    
    // Add text glow effect
    giftText.style.animation = 'none';
    setTimeout(() => {
        giftText.style.animation = 'textGlow 2s ease-in-out infinite';
    }, 10);
}

// Create sparkles around gift box
function createGiftSparkles() {
    const sparkleEmojis = ['✨', '⭐', '🌟', '💫', '💖', '🎊'];
    const giftBox = document.getElementById('giftBox');
    const giftRect = giftBox.getBoundingClientRect();

    for (let i = 0; i < 8; i++) {
            const sparkle = document.createElement('div');
        sparkle.className = 'sparkle-particle';
        sparkle.textContent = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
        
        // Position around gift box
        const angle = (i * 45) * (Math.PI / 180);
        const radius = 80;
        const x = giftRect.left + giftRect.width / 2 + Math.cos(angle) * radius;
        const y = giftRect.top + giftRect.height / 2 + Math.sin(angle) * radius;
        
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 2000);
    }
}

// Open gift and reveal the full surprise
function openGiftAndRevealSurprise() {
    const giftBox = document.getElementById('giftBox');
    const giftContainer = document.getElementById('giftContainer');
    
    // Add opening animation
    giftBox.classList.add('opening');
    
    // Create massive fireworks display
        setTimeout(() => {
        launchBirthdayFireworks();
    }, 500);
    
    // Add success animation
    setTimeout(() => {
        giftBox.classList.add('success');
        updateGiftText(3);
    }, 800);
    
    // Hide gift container and show video player
    setTimeout(() => {
        giftContainer.style.transform = 'scale(0)';
        giftContainer.style.opacity = '0';
        
        // Show video player after gift disappears
        setTimeout(() => {
            showBirthdayVideo();
        }, 1000);
    }, 2000);
}

// Launch enhanced fireworks for birthday surprise
function launchBirthdayFireworks() {
    const colors = [
        '#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', 
        '#54a0ff', '#ff6b95', '#fd79a8', '#fdcb6e',
        '#6c5ce7', '#a29bfe', '#fd79a8', '#55a3ff'
    ];
    
    // Launch multiple waves of fireworks
    for (let wave = 0; wave < 5; wave++) {
    setTimeout(() => {
            // Launch multiple fireworks in this wave
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const x = Math.random() * window.innerWidth;
                    const y = Math.random() * (window.innerHeight * 0.6) + window.innerHeight * 0.1;
                    createEnhancedFirework(x, y, colors);
                }, i * 150);
            }
        }, wave * 800);
    }
}

// Create enhanced firework with more particles and effects
function createEnhancedFirework(x, y, colors) {
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework-particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = color;
        particle.style.color = color;
        
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = Math.random() * 150 + 100;
        const gravity = 0.5;
        const friction = 0.98;
        
        document.body.appendChild(particle);
        
        // Animate particle with physics
        let vx = Math.cos(angle) * velocity;
        let vy = Math.sin(angle) * velocity;
        let currentX = x;
        let currentY = y;
        let opacity = 1;
        
        const animateParticle = () => {
            vx *= friction;
            vy = vy * friction + gravity;
            currentX += vx * 0.016;
            currentY += vy * 0.016;
            opacity -= 0.015;
            
            particle.style.left = currentX + 'px';
            particle.style.top = currentY + 'px';
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animateParticle);
            } else {
                particle.remove();
            }
        };
        
        requestAnimationFrame(animateParticle);
    }
    
    // Add explosion sound effect (visual feedback)
    createExplosionEffect(x, y);
}

// Create explosion effect at firework position
function createExplosionEffect(x, y) {
    const explosion = document.createElement('div');
    explosion.style.position = 'fixed';
    explosion.style.left = x + 'px';
    explosion.style.top = y + 'px';
    explosion.style.width = '20px';
    explosion.style.height = '20px';
    explosion.style.background = 'radial-gradient(circle, #fff, transparent)';
    explosion.style.borderRadius = '50%';
    explosion.style.pointerEvents = 'none';
    explosion.style.zIndex = '10001';
    
    document.body.appendChild(explosion);
    
    explosion.animate([
        { transform: 'scale(0)', opacity: 1 },
        { transform: 'scale(3)', opacity: 0.8 },
        { transform: 'scale(0)', opacity: 0 }
    ], {
        duration: 600,
                easing: 'ease-out'
    }).onfinish = () => explosion.remove();
}

// Show birthday video player
function showBirthdayVideo() {
    const videoContainer = document.getElementById('birthdayVideoContainer');
    const video = document.getElementById('birthday-video');
    const closeBtn = document.getElementById('videoCloseBtn');
    
    // Show video container
    videoContainer.classList.add('show');
    
    // If video path is set, load and play the video
    video.play();

    
    // Setup close button (if it exists)
    if (closeBtn) {
        closeBtn.addEventListener('click', closeBirthdayVideo);
    }
}

// Show video placeholder when no video is attached yet
function showVideoPlaceholder() {
    const video = document.getElementById('birthdayVideo');
    const placeholder = document.createElement('div');
    placeholder.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        height: 300px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        border-radius: 20px;
        color: white;
        font-size: 1.5rem;
        text-align: center;
        padding: 2rem;
    `;
    placeholder.innerHTML = `
        🎥 Birthday Video Coming Soon! 🎥<br>
        <small style="font-size: 1rem; opacity: 0.8;">
            The special birthday video will be attached here
        </small>
    `;
    
    video.style.display = 'none';
    video.parentNode.insertBefore(placeholder, video);
}

// Show play button for manual video start
function showVideoPlayButton() {
    const video = document.getElementById('birthdayVideo');
    const playButton = document.createElement('div');
    playButton.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        cursor: pointer;
        transition: all 0.3s ease;
        z-index: 10002;
    `;
    playButton.innerHTML = '▶️';
    
    playButton.addEventListener('click', function() {
        video.muted = false;
        video.play();
        playButton.remove();
    });
    
    document.getElementById('birthdayVideoContainer').appendChild(playButton);
}

// Close birthday video and return to normal state
function closeBirthdayVideo() {
    const overlay = document.getElementById('birthdayOverlay');
    const videoContainer = document.getElementById('birthdayVideoContainer');
    const video = document.getElementById('birthdayVideo');
    
    // Hide video
    videoContainer.classList.remove('show');
    video.pause();
    video.currentTime = 0;
    
    // Hide overlay after animation
    setTimeout(() => {
        overlay.classList.remove('active');
        // Reset for potential future use
        resetBirthdaySurprise();
    }, 1000);
}

// Reset birthday surprise for testing or future use
function resetBirthdaySurprise() {
    birthdaySurpriseTriggered = false;
    const giftBox = document.getElementById('giftBox');
    const giftContainer = document.getElementById('giftContainer');
    
    // Reset gift box state
    giftBox.classList.remove('clicked', 'opening', 'success');
    giftContainer.style.transform = '';
    giftContainer.style.opacity = '';
    
    // Reset gift text
    document.querySelector('.gift-text').textContent = '🎁 Vừng ơi mở ra! 🎁';
    
    // Remove event listeners and re-setup
    const newGiftBox = giftBox.cloneNode(true);
    giftBox.parentNode.replaceChild(newGiftBox, giftBox);
}
// Manual trigger for testing (can be called from console)
function testBirthdaySurprise() {
    console.log('Manual test trigger called');
    birthdaySurpriseTriggered = false; // Reset first
    triggerBirthdaySurprise();
}

// Test countdown with short time (for testing purposes)
function setTestCountdown() {
    const testDate = new Date();
    testDate.setSeconds(testDate.getSeconds() + 5); // 5 seconds from now
    
    // Update the birthday variable temporarily
    const originalUpdate = updateCountdown;
    window.updateCountdown = function() {
        const now = new Date();
        const diff = testDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = Math.max(0, days).toString().padStart(2, '0');
        document.getElementById('hours').textContent = Math.max(0, hours).toString().padStart(2, '0');
        document.getElementById('minutes').textContent = Math.max(0, minutes).toString().padStart(2, '0');
        document.getElementById('seconds').textContent = Math.max(0, seconds).toString().padStart(2, '0');
        
        // Check if countdown has ended
        if (diff <= 0) {
            const bgAudio = document.getElementById('bg-music');
            if (bgAudio) bgAudio.remove();
            console.log('Test countdown ended! Triggering birthday surprise...');
            triggerBirthdaySurprise();
            // Restore original function
            window.updateCountdown = originalUpdate;
        }
    };
    
    console.log('Test countdown set for 5 seconds from now');
}

// Export functions for external use
window.testBirthdaySurprise = testBirthdaySurprise;
window.setTestCountdown = setTestCountdown;

// removed: spawnSeparatorHearts (replaced by CSS-based infinite heart wave)