//for navbar responsive
const nav = document.querySelector(".header-links nav");
const hamburge = document.querySelector(".hambIcon");
const navLinks = document.querySelector(".header-links .navbar");
const closeLink = document.querySelector(".header-links .close");

// on click hamburage 
hamburge.addEventListener('click' , () => {
    hamburge.classList.toggle('hidden');
    closeLink.classList.toggle('show');
    navLinks.classList.toggle('active');
    nav.classList.toggle('full');
    // nav.style.backgroundImage = 'linear-gradient(to bottom, rgba, yellow)';
});
// on click close btn
closeLink.addEventListener('click' , () => {
    closeLink.classList.toggle('show');
    hamburge.classList.toggle('hidden');
    navLinks.classList.toggle('active');
    nav.classList.toggle('full');
    // nav.style.backgroundImage = 'none'
});


                                                                                           // for plan page 

// for hidden the product by click arrow
let arrow = document.querySelectorAll('.demande  .question-kind p img');
let ourChose = document.querySelectorAll('.demande .question .choose-option');
let sideItems = document.querySelectorAll('.demande .demande-step .prefix-demande .prefix-data');
let sideChild = document.querySelectorAll('.demande .demande-step .prefix-demande .prefix-data p');

console.log(ourChose);
arrow.forEach(ele =>  {
    ele.addEventListener('click', function () {
        ourChose.forEach(item => {
            if (ele.dataset.show === item.dataset.show) {
                item.classList.toggle('show');
            }
            // sideItems.forEach(para => {
            //     console.log(para);
            //     if(ele.dataset.show === para.dataset.show) {
            //         sideChild.forEach(parag => {
            //             parag.style.color = "red";
            //         });
            //     }
            // });
        });
    });
});

// chose the type of coffe

