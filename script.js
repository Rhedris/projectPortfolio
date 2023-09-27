const the_animation = document.querySelectorAll('.hidden')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-hidden')
        }
            else {
                entry.target.classList.remove('scroll-hidden')
            }
        
    })
},
   { threshold: 0.8
   });

  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
} 

function myFunction() {
    var x = document.getElementById("Links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}



