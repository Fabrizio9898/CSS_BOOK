document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-reading");
    const book = document.querySelector(".book");
    const cover = document.querySelector(".cover");
    const pages = document.querySelectorAll(".pages");
  
    let isOpen = false;
  
    // Asegurar el orden de z-index correcto al cargar
    pages.forEach((page, i) => {
      page.style.zIndex = `${pages.length - i}`; // Página más cercana al frente tiene mayor z-index
    });
  
    startBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (!isOpen) {
        openBook();
        isOpen = true;
      } else {
        closeBook();
        isOpen = false;
      }
    });
  
    function openBook() {
      cover.classList.add("flipped");
  
      pages.forEach((page, index) => {
        setTimeout(() => {
          page.classList.add("flipped");
        }, 500 * (index + 1));
      });
    }
  
    function closeBook() {
      cover.classList.remove("flipped");
  
      [...pages]
        .reverse()
        .forEach((page, index) => {
          setTimeout(() => {
            page.classList.remove("flipped");
          }, 300 * (index + 1));
        });
    }
  });
  