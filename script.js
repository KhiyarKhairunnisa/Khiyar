function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
  }
window.onload = () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 1500); // Loader 1.5 detik
};
