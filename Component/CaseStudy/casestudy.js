function scrollToMiddle() {
    const target = document.getElementById("middle");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }