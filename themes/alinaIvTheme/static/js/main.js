let dropDown = document.getElementsByClassName("expand-icon");

for (var i = 0; i < dropDown.length; i++) {
    dropDown[i].addEventListener("click", function(e) {
        e.preventDefault();
        this.classList.toggle("visible");
        var content = this.nextElementSibling;
        if (content.classList.contains('expanded')) {
            content.classList.remove('expanded');
        } else {
            content.classList.add('expanded');
        }
    });
}

// Scroll to top button logic
var target = document.querySelector(".scroll-to-top--indicator");

var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

function callback(entries, observer) {  
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      
      scrollToTopBtn.classList.add("showBtn")
    } else {
      
      scrollToTopBtn.classList.remove("showBtn")
    }
  });
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });  
}

scrollToTopBtn.addEventListener("click", scrollToTop);
let observer = new IntersectionObserver(callback);
observer.observe(target);
