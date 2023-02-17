// function selectImage() {
//     const input = document.getElementById('imageInput');
//     const img = document.getElementById('selectedImage');
//     const file = input.files[0];
  
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function(event) {
//         img.src = event.target.result;
//         img.style.display = 'block';
//       }
//       reader.readAsDataURL(file);
//     }
//   }
  

$(document).ready(function(){
    $('#image').change(function(){
        var file = this.files[0];
        var reader = new FileReader();
        reader.onload = function(e){
            $('#image-preview').html('<img src="'+e.target.result+'" style="max-width: 100%; height: auto;">');
        };
        reader.readAsDataURL(file);
    });
});

const fileInput = document.getElementById('file-input');

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  const xhr = new XMLHttpRequest();

  xhr.open('POST', '/upload-image', true);
  xhr.setRequestHeader('Content-Type', 'multipart/form-data');

  const formData = new FormData();
  formData.append('image', file);

  xhr.send(formData);
});
