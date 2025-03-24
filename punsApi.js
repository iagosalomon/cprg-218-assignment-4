async function fetchJoke(category) {
    const url = `https://v2.jokeapi.dev/joke/${category}?safe-mode`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        let jokeText = data.type === "twopart" 
            ? `${data.setup}...<br> ${data.delivery}` 
            : data.joke;
        
        document.getElementById("joke").innerHTML = jokeText;
        
        if (category === "Any") {
            document.getElementById("joke-title").textContent = "Joke Of The Day";
        } else if (category === "Pun") {
            document.getElementById("joke-title").textContent = "A Random Pun";
        } else {
            document.getElementById("joke-title").textContent = `A Random ${category} Joke`;
        }
    } catch (error) {
        console.error("Error fetching joke:", error);
    }
}

// load the first joke
document.addEventListener("DOMContentLoaded", () => {
    fetchJoke('Any');
});
