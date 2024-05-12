(function(){

    interact('.draggable')
    .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
        interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
        })
    ],
    // enable autoScroll
    autoScroll: true,

    listeners: {
        // call this function on every dragmove event
        move: dragMoveListener,

    }
    })

    function dragMoveListener (event) {
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
    }

    // this function is used later in the resizing and gesture demos
    window.dragMoveListener = dragMoveListener

    
    //my stuff
    const info = document.querySelector('#drag-1');
    const info1 = document.querySelector('#drag-2');
    const info2 = document.querySelector('#drag-3');


    info.addEventListener('click', function(e){
        e.preventDefault();
        Swal.fire({
            title: "Black Vinegar",
            text: "Strong and fermented, often used as dipping sauces (ie. dumplings)",
            icon: "info",
            confirmButtonColor: "black"
          });
    });

    info1.addEventListener('click', function(e){        e.  preventDefault();
        Swal.fire({
            title: "Rice Wine",
            text: "Used when marinating meat, helps get rid of the strong 'meat' smell, used mainly for pork, fish, and occassionally chicken",
            icon: "info",
            confirmButtonColor: "blue"
          });
    });

    info2.addEventListener('click', function(e){
        e.preventDefault();
        Swal.fire({
            title: "Soy Sauce",
            text: "Seperated into pourable container for convenience, used in almost all my meals",
            icon: "info",
            confirmButtonColor: "black"
          });
    });
      
})();


