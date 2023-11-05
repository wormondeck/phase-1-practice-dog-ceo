console.log('%c HI', 'color: firebrick')

function dogFetch() {
 const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
 fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => console.log(json))
}
dogFetch();

const container = document.querySelector("#dog-image-container");
const imageUrls = [
  "https://images.dog.ceo/breeds/rottweiler/n02106550_12073.jpg",
  "https://images.dog.ceo/breeds/tervuren/shadow_and_frisbee.jpg",
  "https://images.dog.ceo/breeds/hound-english/n02089973_2133.jpg",
  "https://images.dog.ceo/breeds/retriever-flatcoated/n02099267_2987.jpg"
];

imageUrls.forEach((url) => {
  const img = document.createElement("img");
  img.src = url;
  container.appendChild(img);
});

const dogNames = []
function breedFetch() {
const breedUrl = "https://dog.ceo/api/breeds/list/all"
fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => Object.keys(json.message).forEach(breed => {
const li = document.createElement("li");
const dogBreedCont = document.querySelector("#dog-breeds");
  li.textContent = breed;
  dogBreedCont.appendChild(li);
  li.addEventListener('click', () => {
  li.style.color = 'orange'
})
dogNames.push(breed) 
const firstLetterA = dogNames.filter((dogNames) => dogNames.startsWith("a"));


}))
}
breedFetch();

document.getElementById("breed-dropdown").addEventListener("change", (e) => {
    const firstLetterA = dogNames.filter((dogNames) => dogNames.startsWith(e.target.value));
    const dogBreedCont = document.querySelector("#dog-breeds");
        dogBreedCont.innerHTML = "";
        firstLetterA.forEach((breed) => {
            const li = document.createElement("li");
            li.textContent = breed;
            dogBreedCont.appendChild(li);

})
})















