const favoritesModal = document.getElementById("favoritesModal");
const settingsModal = document.getElementById("settingsModal");
const favoritesClose = document.querySelector(".favorites-close");
const settingsClose = document.querySelector(".settings-close");
document.querySelectorAll('.panel-item.add-favorites').forEach(button => {
  button.addEventListener('click', function(e) {
    e.stopPropagation();
    favoritesModal.style.display = "block";
  });
});

document.querySelectorAll('.panel-item.open-settings').forEach(button => {
  button.addEventListener('click', function(e) {
    e.stopPropagation();
    settingsModal.style.display = "block";
  });
});

favoritesClose.addEventListener('click', function() {
  favoritesModal.style.display = "none";
});
settingsClose.addEventListener('click', function() {
  settingsModal.style.display = "none";
});

window.addEventListener('click', function(e) {
  if (e.target === favoritesModal) {
    favoritesModal.style.display = "none";
  }
  if (e.target === settingsModal) {
    settingsModal.style.display = "none";
  }
});

document.querySelectorAll('.panel-item.visual-search').forEach(button => {
  button.addEventListener('click', function(e) {
    e.stopPropagation();
  });
});