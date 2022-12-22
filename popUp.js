const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('close');
const modalNFT = document.getElementById('modal');

// abrir modal 

openModal.onClick = function() {
    modalNFT.style.visibility = 'visible';
}

// cerrar modal

closeModal.onClick = function() {
    modalNFT.style.visibility = 'hidden';
}

// cerrar en ventana

modalNFT.onClick = function(){
    modalNFT.style.visibility = 'hidden';
}