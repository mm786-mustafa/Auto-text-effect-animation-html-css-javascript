const containerEl = document.querySelector(".container");

const careers = ["YouTuber", "Web Developer", "Freelancer", "App Developer"];
let careerIndex = 0;
let characterIndex = 0;

updateHeading();

function updateHeading() {
    characterIndex++;
    containerEl.innerHTML = `
        <h1>I am ${careers[careerIndex].slice(0,1) === "A" ? "an" : "a"} ${careers[careerIndex].slice(0,characterIndex)}</h1>
    `;
    
    if(characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }
    if(careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateHeading, 300);
}
