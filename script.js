<script>
  // Grab all hero slides
  const slides = document.querySelectorAll('.hero-inner');
  let current = 0;

  // Function to show a specific slide
  function showSlide(index) {
    slides.forEach((s, i) => {
      s.style.display = i === index ? 'block' : 'none';
    });
  }

  // Function to move to the next slide
  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  // Initialize first slide
  showSlide(current);

  // Auto-rotate every 5 seconds
  setInterval(nextSlide, 5000);
</script>
