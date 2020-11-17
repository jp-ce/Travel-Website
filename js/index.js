

//Buttons
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn');


nextBtn.addEventListener('click', ()=>{
    if(document.getElementById("carousel-1").classList.contains("show")){
        document.getElementById("carousel-1").classList.remove("show")
        document.getElementById("carousel-2").classList.add("show")
    }

    else if(document.getElementById("carousel-2").classList.contains("show")){
        document.getElementById("carousel-2").classList.remove("show")
        document.getElementById("carousel-3").classList.add("show")
    }

    else if(document.getElementById("carousel-3").classList.contains("show")){
        document.getElementById("carousel-3").classList.remove("show")
        document.getElementById("carousel-4").classList.add("show")
    }

    else if(document.getElementById("carousel-4").classList.contains("show")){
        document.getElementById("carousel-4").classList.remove("show")
        document.getElementById("carousel-5").classList.add("show")
    }

    else if(document.getElementById("carousel-5").classList.contains("show")){
        document.getElementById("carousel-5").classList.remove("show")
        document.getElementById("carousel-6").classList.add("show")
    }

    else if(document.getElementById("carousel-6").classList.contains("show")){
        document.getElementById("carousel-6").classList.remove("show")
        document.getElementById("carousel-1").classList.add("show")
    }
})

prevBtn.addEventListener('click', ()=>{
    if(document.getElementById("carousel-6").classList.contains("show")){
        document.getElementById("carousel-6").classList.remove("show")
        document.getElementById("carousel-5").classList.add("show")
    }

    else if(document.getElementById("carousel-5").classList.contains("show")){
        document.getElementById("carousel-5").classList.remove("show")
        document.getElementById("carousel-4").classList.add("show")
    }

    else if(document.getElementById("carousel-4").classList.contains("show")){
        document.getElementById("carousel-4").classList.remove("show")
        document.getElementById("carousel-3").classList.add("show")
    }

    else if(document.getElementById("carousel-3").classList.contains("show")){
        document.getElementById("carousel-3").classList.remove("show")
        document.getElementById("carousel-2").classList.add("show")
    }

    else if(document.getElementById("carousel-2").classList.contains("show")){
        document.getElementById("carousel-2").classList.remove("show")
        document.getElementById("carousel-1").classList.add("show")
    }

    else if(document.getElementById("carousel-1").classList.contains("show")){
        document.getElementById("carousel-1").classList.remove("show")
        document.getElementById("carousel-6").classList.add("show")
    }
})


