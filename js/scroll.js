const sections = document.querySelectorAll('.hidden');

const observerOptions = {
  root: null, // relative to the viewport
  rootMargin: '0px',
  threshold: 0.4 // trigger when 50% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      // If you want the animation to only happen once, uncomment the line below:
      //observer.unobserve(entry.target);
    } else {
      // If you want the animation to reverse when scrolling back up:
      entry.target.classList.remove('show');
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});

//window.addEventListener('scroll', () => {
  // If at the bottom, jump to the top
  //if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    //setTimeout(() => {
  //window.scrollTo({ top: 0, behavior: 'auto' });
//}, 1889); //  adjust as needed
//  }
//});

// newlax 

const parallax = document.getElementById("parallax");

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});
