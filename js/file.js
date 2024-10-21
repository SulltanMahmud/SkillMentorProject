const fileInput = document.getElementById("upload");
const fileNameDisplay = document.getElementById("fileName");

fileInput.addEventListener("change", (e) => {
 console.log(e);
    const file = fileInput.files[0];
    console.log(file);
  if (file) {
    fileNameDisplay.textContent = `File selected: ${file.name}`;
  } else {
    fileNameDisplay.textContent = "No file selected";
  }
});
