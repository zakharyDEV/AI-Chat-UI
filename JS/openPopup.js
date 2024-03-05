function openPopup() {
  const popup = document.querySelector(".popup");
  
  // Add the 'active' class to make the popup visible
  popup.classList.add("active");
  
  // Optionally, focus on the first input element inside the popup
  const firstInput = popup.querySelector("input");
  
  if (firstInput) {
      firstInput.focus();
  }
}

function closePopup() {
  const popup = document.querySelector(".popup");
  
   // Remove the 'active' class to hide the popup
   popup.classList.remove("active");
}
