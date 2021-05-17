var buttonSchoonmaker = document.getElementById('button_schoonmaker');
var buttonBoef = document.getElementById('button_boef');
var buttonHond = document.getElementById('button_hond');
var video = document.getElementById('video');


buttonSchoonmaker.addEventListener('click', speelSchoonmaker);
buttonBoef.addEventListener('click', speelBoef);
buttonHond.addEventListener('click', speelHond);

function speelSchoonmaker() {
    // video.src = "img/video/schoonmaker.mov";

    // document.getElementById("body").classList.add('body1');
    // document.getElementById("body").classList.remove('body2' && 'body3');

    setTimeout(function(){  
        video.src = "img/video/schoonmaker.mov";   
        document.getElementById("body").classList.add('body1');
        document.getElementById("body").classList.remove('body2' && 'body3');
    }, 750);

    document.getElementById("transistion").classList.add('animated');
    setTimeout(function() {
    document.getElementById("transistion").classList.remove('animated');
    }, 1500);

    console.log('run schoonmaker');
}

function speelBoef() {
    // video.src = "img/video/boef.mov";

    // document.getElementById("body").classList.add('body2');
    // document.getElementById("body").classList.remove('body1' && 'body3');

    setTimeout(function(){    
        video.src = "img/video/boef.mov"; 
        document.getElementById("body").classList.add('body2');
        document.getElementById("body").classList.remove('body1' && 'body3');
    }, 750);

    document.getElementById("transistion").classList.add('animated');
    setTimeout(function() {
    document.getElementById("transistion").classList.remove('animated');
    }, 1500);

    console.log('run boef');
}

function speelHond() {
    // video.src = "img/video/hond.mov";

    // document.getElementById("body").classList.add('body3');
    // document.getElementById("body").classList.remove('body1' && 'body2');

    setTimeout(function(){     
        video.src = "img/video/hond.mov";
        document.getElementById("body").classList.add('body3');
        document.getElementById("body").classList.remove('body1' && 'body2'); 
    }, 750);

    document.getElementById("transistion").classList.add('animated');
    setTimeout(function() {
    document.getElementById("transistion").classList.remove('animated');
    }, 1500);

    console.log('run hond');
}

// setTimeout(function(){     
//     document.getElementById("body").classList.add('body3');
//     document.getElementById("body").classList.remove('body1' && 'body2'); 
// }, 3000);