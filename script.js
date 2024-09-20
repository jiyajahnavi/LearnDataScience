let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 1.2 + 'px';
    leaf.style.top = value * -.5 + 'px';
    leaf.style.left = value * .5 + 'px';
    hill5.style.left = value * .5 + 'px';
    hill4.style.left = value * -.5 + 'px';
    hill1.style.top = value * .8 + 'px';
    
}
);

// Show the button when the user scrolls down 20px from the top
window.onscroll = function() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };
  
  // Scroll to the top when the button is clicked
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }