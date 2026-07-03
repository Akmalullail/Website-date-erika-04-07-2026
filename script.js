const loveBtn = document.getElementById("loveBtn");
const responseText = document.getElementById("responseText");
const outfitInput = document.getElementById("outfitInput");
const outfitPreview = document.getElementById("outfitPreview");
const photoPlaceholderText = document.querySelector(".photo-placeholder span");

loveBtn.addEventListener("click", () => {
  responseText.textContent = "Yeyyy, ditunggu besok 💕";
  loveBtn.textContent = "Asek gasabar banget mau ketemu GUEH";
});

outfitInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    outfitPreview.src = reader.result;
    outfitPreview.hidden = false;
    if (photoPlaceholderText) {
      photoPlaceholderText.textContent = "Foto outfit berhasil dimuat";
    }
  };
  reader.readAsDataURL(file);
});