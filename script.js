window.addEventListener('DOMContentLoaded', () => {
            gsap.from("h1", { x: -40, opacity: 0, duration: 1.2, ease: "power4.out" });
            gsap.from(".character-glow", { scale: 0.95, opacity: 0, duration: 1.4, ease: "power3.out", delay: 0.2 });
            gsap.from(".hero-bg-text", { scale: 1.15, opacity: 0, duration: 1.6, ease: "power2.out" });
        });

        function moveSlide(btn, direction) {
            const container = btn.closest('.carousel-container');
            const track = container.querySelector('.carousel-track');
            const images = track.querySelectorAll('img');
            const totalImages = images.length;

            let currentIndex = parseInt(container.getAttribute('data-index')) || 0;

            currentIndex += direction;

            if (currentIndex < 0) currentIndex = totalImages - 1;
            if (currentIndex >= totalImages) currentIndex = 0;

            container.setAttribute('data-index', currentIndex);
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }