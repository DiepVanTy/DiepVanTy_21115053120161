const page_load = document.querySelector('.page_loader');
setTimeout(()=> {
    page_load.style.transform = 'translateX(300%)'
}, 11000)

const modal_image = document.querySelector(".modal_image");
const img_area = document.querySelector(".modal_image img");

let imgs = document.getElementsByTagName('img');
for(let img of imgs) {
    img.addEventListener('click', (e) => {
        img_area.src = e.currentTarget.src;
        modal_image.style.display = 'flex';
        
    })
}

const close_btn = document.querySelector(".button_close");
close_btn.addEventListener("click", () => {
  modal_image.style.display = "none";
});



/**-------------- scroll slide------------*/

function slideJs() {
    const elements_up = document.getElementsByClassName('js_up');
    const elements_right = document.getElementsByClassName('js_right');
    const elements_left = document.getElementsByClassName('js_left');
    /** slide up */
    for( let i = 0 ; i < elements_up.length; i++) {
         elements_up[i].style.opacity = 0;
    }
    for( let i = 0 ; i < elements_up.length ; i++ ) {
        if(window.scrollY  > elements_up[i].offsetTop - 600) {
            elements_up[i].classList.add('slide_up');
        } else if ( window.scrollY  < elements_up[i].offsetTop) {
            elements_up[i].classList.remove('slide_up');
        }
            
    }
    /** slie right */
     for( let i = 0 ; i < elements_right.length; i++) {
         elements_right[i].style.opacity = 0;
    }
    for( let i = 0 ; i < elements_right.length ; i++ ) {
        if(window.scrollY  > elements_right[i].offsetTop - 600) {
            elements_right[i].classList.add('slide_right');
        } else if ( window.scrollY  < elements_right[i].offsetTop) {
            elements_right[i].classList.remove('slide_right');
        }
            
    }
    /** slie left */
     for( let i = 0 ; i < elements_left.length; i++) {
         elements_left[i].style.opacity = 0;
    }
    for( let i = 0 ; i < elements_left.length ; i++ ) {
        if(window.scrollY  > elements_left[i].offsetTop - 600) {
            elements_left[i].classList.add('slide_left');
        } else if ( window.scrollY  < elements_left[i].offsetTop) {
            elements_left[i].classList.remove('slide_left');
        }
            
    }
}



(function () {
    const menu_icon = document.querySelector(".menu_icon");
    let display = "none";
    menu_icon.addEventListener("click", () => {
      menu_icon.classList.toggle("active");
      display == "none" ? (display = "flex") : (display = "none");
      document.querySelector(".nav-link").style.display = display;
    });
})();