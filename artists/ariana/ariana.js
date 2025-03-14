let slideIndex = 0;

        function showSlide(index) {
            const slides = document.querySelectorAll('.slide');
            if (index >= slides.length) slideIndex = 0;
            if (index < 0) slideIndex = slides.length - 1;

            slides.forEach(slide => slide.style.display = 'none');
            slides[slideIndex].style.display = 'block';
        }

        function changeSlide(direction) {
            slideIndex += direction;
            showSlide(slideIndex);
        }

        function toggleSongs(id) {
            const list = document.getElementById(id);
            list.style.display = (list.style.display === 'none' || list.style.display === '') ? 'block' : 'none';
        }

    

        document.addEventListener("DOMContentLoaded", () => showSlide(slideIndex));