//onclick="showModalXp(`pro-cv`)"
const modalsk = document.getElementById("modalsk");
const skillsModal = document.getElementsByClassName("modal__skill");

const modalxp  = document.getElementById("modalxp")
const proyectosModal = document.getElementsByClassName("modal__xp");

const btnMas = document.getElementsByClassName("experience__mas");
for(i = 0; i < btnMas.length; i++){
    let id = btnMas[i].id
    btnMas[i].addEventListener("click", function(){showModalXp(id)});
}
const skillBoxes = document.getElementsByClassName("skill__box");
for(i = 0; i < skillBoxes.length; i++){
    let id = skillBoxes[i].id
    skillBoxes[i].addEventListener("click", function(){showModalSk(id)});
}

function showModalSk(id){
    for(i = 0; i < skillsModal.length; i++){
        if(skillsModal[i].id == id){
            skillsModal[i].style.display = "block";
        }else{
            skillsModal[i].style.display = "none";
        }
    }
    modalsk.style.display = "block";
}

function showModalXp(id){
    for(i = 0; i < proyectosModal.length; i++){
        if(proyectosModal[i].id == id){
            proyectosModal[i].style.display = "block";
        }else{
            proyectosModal[i].style.display = "none";
        }
    }
    modalxp.style.display = "block";
}

function closeModal(){
    modalsk.style.display = "none";
    modalxp.style.display = "none";
}
