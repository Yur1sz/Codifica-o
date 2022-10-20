const button = document.getElementById("buttonModal");
const popup = document.getElementById("diaCifra");
const fecharModal = document.getElementById("fecharModal");

button.onclick = function () {
    popup.showModal()
}

fecharModal.onclick = function(){
    popup.close()
}
