const tabContent = [
  "Content for Tab 1",
  "Content for Tab 2",
  "Content for Tab 3"
];

function showTab(index) {
  const contentContainer = document.getElementById("content-container");
  contentContainer.textContent = tabContent[index];
}
