(function() {
    'use strict';

//introduction page animation
    new TypeIt("#multipleStrings", {
        strings: ["Og's Yere 3020,", "<span class='fontChange'>(It's Year 3020,)</span>", " Tcear'snt neb soch obi strav Earth.","<span class='fontChange'>(There's not much left of Earth.)</span>"],
        speed: 10,
        waitUntilVisible: true,
    }).go();

//set up
    const getStarted = document.querySelector(".start");
    const page = document.querySelector("body");
    const intro = document.querySelector("#intro");
    const wardrobe = document.querySelector("#wardrobe");
    const next = document.querySelector(".next");
    const body = document.querySelector("#tops");
    const end = document.querySelector(".end");
    const finish = document.querySelector("#finish");

    wardrobe.className = 'showing';
    body.className = 'hidden';
    finish.className = 'hidden';
    intro.className = 'hidden';
    finish.className = 'hidden';
    AOS.init();

//changing pages
    getStarted.addEventListener('click', function(){
        intro.className = 'hidden';
        wardrobe.className = 'showing';
        AOS.init();
        document.documentElement.scrollTop = 0;
    });

    next.addEventListener('click', function(){
        wardrobe.className = 'hidden';
        body.className = 'showing';
        AOS.init();
        document.documentElement.scrollTop = 0;
    });

    end.addEventListener('click', function(){
        body.className = 'hidden';
        finish.className = 'showing';
        AOS.init();
        document.documentElement.scrollTop = 0;
    });


//choosing articles of clothing
    let selectedImages = {};
    
    function setupClickEvent(selectID) {
        const optionsimg = document.querySelectorAll(`${selectID} img`);
    
        optionsimg.forEach(image => {
            image.addEventListener('click', function() {
                optionsimg.forEach(i => i.classList.remove('back'));
                this.classList.add('back');
                selectedImages[selectID.replace('.', '')] = this;
            });
        });
   }     

   function handleImg(e) {
        const displayDiv = document.querySelector('.completed');
        displayDiv.innerHTML = '';
        const selectedImg = document.createElement('img');
        selectedImg.src = e.target.src; // Use the clicked image's src
        selectedImg.alt = e.target.alt; // Use the clicked image's alt text
        displayDiv.appendChild(selectedImg); // Append the selected image to the displayDiv
    }   

    setupClickEvent('.masks');
    setupClickEvent('.hats');
    setupClickEvent('.tops');
    setupClickEvent('.bottoms');

//call selected images later
    document.body.addEventListener('click', function(e){
        if (e.target.matches('.masks img') || e.target.matches('.hats img') || e.target.matches('.tops img') || e.target.matches('.bottoms img')) {
            handleImg(e);
        }
    });
})()