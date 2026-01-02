function calculatePrice() {
  const plainCount = Number(document.getElementById('plainCount').value);
  const photoCount = Number(document.getElementById('photoCount').value);
  const priceEl = document.getElementById('price');
  const photoEl = document.getElementById('photo');

  // Prices
  const plainPrice = 3.88;
  const photoPrice = 25;

  // Total
  const totalPrice = (plainCount * plainPrice) + (photoCount * photoPrice);

  // Show price
  priceEl.textContent = `Total Price: ₱${totalPrice.toFixed(2)}`;

  // Show customized photo if any
  if(photoCount > 0){
    photoEl.src = "customized.png"; // same image for preview
    photoEl.style.display = "block";
  } else {
    photoEl.style.display = "none";
  }
}
