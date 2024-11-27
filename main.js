// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 50, // Increased space between slides
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 750,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      100: { // For screen widths of 100px and above
        slidesPerView: 1, // Show 1 slide at a time
      },
      500: { // For screen widths of 500px and above
        slidesPerView: 2, // Show 2 slides at a time
      },
      800: { // For screen widths of 800px and above
        slidesPerView: 3, // Show 3 slides at a time
      },
    },
  });
  
  // Define the text content for each slide
  const belowTextContent = [
    "&quot;We're constantly innovating, problem-solving, and making a real impact for our clients. <br> It's rewarding to be part of the team that turns challenges into opportunities with technology.&quot;",
    "&quot;Everyday is an oppurtunity to learn and grow. <br> I take up pride in being part of a team that transforms complex challenges into seamless solutions, <br> making technology work for our clients.&quot;",
    "&quot;It's thrilling to develop customized solutiond that enable <br> businesses to grow and stay competitive in the constantly changing digital landscape. &quot;",
    "&quot;I find fulfillment in understanding our clients' unique needs and delivering tailored technical expertise. <br> It's rewarding to empower them with solutions that enhance their operations and drive their success. &quot;",
    "&quot;Gerald A. Reonal is shaping corporate governance at Datalogix, ensuring legal and organizational compliance. &quot;"
  ];
  
  // Add event listener for slide change
  swiper.on('slideChange', function () {
    // Get the index of the current slide
    const currentIndex = swiper.realIndex;
  
    // Update the content of the belowtext div
    const belowTextDiv = document.getElementById('below-text');
    belowTextDiv.innerHTML = `<p>${belowTextContent[currentIndex]}</p>`;
  });
  