document.addEventListener("DOMContentLoaded", () => {
    const collapsibles = document.querySelectorAll(".collapsible");
  
    collapsibles.forEach(button => {
      button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        const question = button.parentElement;
  
        // Toggle open/close state
        if (question.classList.contains("open")) {
          question.classList.remove("open");
          content.style.display = "none";
        } else {
          // Close other questions
          document.querySelectorAll(".question").forEach(q => {
            q.classList.remove("open");
            q.querySelector(".content").style.display = "none";
          });
  
          // Open the clicked question
          question.classList.add("open");
          content.style.display = "block";
        }
      });
    });
  });