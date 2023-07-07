
const modal = document.getElementById("modal");

function showModal(id){
    displaySkillContent(id);
    modal.style.display = "block";
};
function closeModal(){
    modal.style.display = "none";
}

function displaySkillContent(id){
    const skillsModal = document.getElementsByClassName("modal__skill");
    for(i = 0; i < skillsModal.length; i++){
        if(skillsModal[i].id == id){
            skillsModal[i].style.display = "block";
        }
        else{
            skillsModal[i].style.display = "none";
            closeModal;
        }
    }
}
