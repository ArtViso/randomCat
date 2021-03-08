const button = document.querySelector(".btn"),
  image = document.querySelector(".img"),
  url = "http://aws.random.cat//meow";

async function fetchHandler() {
  try {
    const respons = await fetch(url);
    const data = await respons.json();
    image.src = data.file;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", () => {
  let isLoaded = image.complete;
  if (isLoaded) {
    fetchHandler();
  }
});
