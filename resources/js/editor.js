function triggerClick(){
    document.querySelector('#image').click();
}

function displayimage(e) {
    if (e.files[0]){
        var reader = new FileReader();
        reader.onload = function(e) {
            document.querySelector('#display').setAttribute('src', e.target.result);
        }
        reader.readAsDataURL(e.files[0])
    }
}