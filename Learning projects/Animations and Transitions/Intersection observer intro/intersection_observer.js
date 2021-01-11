const sectionOne = document.querySelector('.section1');
const sections = document.querySelectorAll('section');

const options = {
  root: null, //It is considered as the viewport
  threshold: 1,
  rootMargin: "0px"
};

const observer = new IntersectionObserver(function (entries, observer) {
  // console.log("Entered observer...")
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    // console.log(entry.target);
    // console.log(entry);

    entry.target.childNodes[1].childNodes[1].childNodes[1].childNodes[1].classList.toggle("bg-primary");
    entry.target.childNodes[1].childNodes[1].childNodes[1].childNodes[1].classList.toggle("text-light");
    observer.unobserve(entry.target);

  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});
// observer.observe(sectionOne);
