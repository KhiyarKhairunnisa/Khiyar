function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
  }
  
  <div id="loader" style="position:fixed;width:100%;height:100%;background:#042698;color:white;display:flex;align-items:center;justify-content:center;font-size:24px;z-index:9999;">Anda akan dialihkan...</div>

window.onload = () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 1500); // Loader 1.5 detik
};
