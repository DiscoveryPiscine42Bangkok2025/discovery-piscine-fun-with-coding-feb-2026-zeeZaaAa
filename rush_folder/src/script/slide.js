        function nextSlide(btn) {
            const container = btn.closest('.relative');
            const slides = container.querySelectorAll('.slide-img');
            let index = [...slides].findIndex(s => s.classList.contains('opacity-100'));

            slides[index].classList.replace('opacity-100', 'opacity-0');
            index = (index + 1) % slides.length;
            slides[index].classList.replace('opacity-0', 'opacity-100');
        }

        function prevSlide(btn) {
            const container = btn.closest('.relative');
            const slides = container.querySelectorAll('.slide-img');
            let index = [...slides].findIndex(s => s.classList.contains('opacity-100'));

            slides[index].classList.replace('opacity-100', 'opacity-0');
            index = (index - 1 + slides.length) % slides.length;
            slides[index].classList.replace('opacity-0', 'opacity-100');
        }