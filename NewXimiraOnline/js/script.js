function esconder(event){
    let aulas = document.getElementsByClassName("fullCard");
    for (let i = 0;i < aulas.length;i++){
        if (aulas[i].style.display == 'none'){
            aulas[i].style.display = 'block';
        } else {
            aulas[i].style.display = 'none';
        }
    }
}

function vincularEvento(){
    let link = document.getElementById('esconderCards');
    link.addEventListener('click',esconder);
}