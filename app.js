/* Select the toggle and the link container to check something  out */
let toggle = document.querySelector('.nav-toggle');
let linksContainer = document.querySelector('.links-container');

toggle.addEventListener("click", function(){
   linksContainer.classList.toggle("h-full")
})

let nav = document.getElementById("nav");
let back = document.getElementById("back");

window.addEventListener('scroll', function(){
 let scrollHeight = window.pageYOffset;
 let navHeight = nav.getBoundingClientRect().height;
 if(scrollHeight > navHeight){
   nav.classList.add("fix");
 }
 else {
   nav.classList.remove("fix");
 }
 if(scrollHeight>500){
  back.classList.remove('hidden');
 }else{
  back.classList.add("hidden");
 }
})

/* Remove the default behavior of the links */
let scrollLink = document.querySelectorAll(".scroll-link");

scrollLink.forEach(function(link){
  link.addEventListener("click", function(e){
    // Prevent Default
    e.preventDefault();

    // navigate to the specific spot.
    let id = e.currentTarget.getAttribute('href').slice(1);
    let element = document.getElementById(id);
    let containerHeight = linksContainer.getBoundingClientRect().height;
    let navHeight = nav.getBoundingClientRect().height;
    let position = element.offsetTop-navHeight;
    let fixed = nav.classList.contains('fixed');

    if(!fixed){
      position = position-navHeight;
    }
    // since when position fixed is applied then the nav is out of the flow of the document and the height is no-longer considered
    if(navHeight > 82){
      position =  position+containerHeight;
    }
    
    window.scrollTo({
      left:0,
      top:position,
    })
    console.log(position);
    // As an addition remove the mobile dropdown for better user experience  because it remains there and causes disruption.
    linksContainer.classList.remove("h-full");
  })
})
