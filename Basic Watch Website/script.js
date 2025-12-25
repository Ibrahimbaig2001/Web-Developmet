function changeImage(imgsrc){
    document.getElementById('main-image').src = imgsrc;
}

function decreaseQuantity(){
    const quantityInput = document.getElementById('quantity');
    if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}
function increaseQuantity(){
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
}