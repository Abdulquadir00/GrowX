function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }
  
  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for contacting us!");
  });
  