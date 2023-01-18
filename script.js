

  planets.map((e) => {
    const options = document.createElement("option");
    options.innerText = e.planetName;
    options.value = e.gravity;
    options.setAttribute("name", e.image);

    // console.log(options);
    var select = document.getElementById("selectPlanet");
    select.appendChild(options);
  });

  function calcWeight() {
    var mass = +document.getElementById("inputValue").value;

    const selectedValue = document.getElementById("selectPlanet");
    var selectedIndex = selectedValue.selectedIndex;

    const selectedOption = selectedValue.options[selectedIndex];


    const gravity = +selectedOption.value;
    
    const weight = mass * gravity;
    
    var error = "please enter your mass";
    var result = document.getElementById('result');
    const img = document.getElementById("image");
    var imgsrc = selectedOption.getAttribute("name");
    if (mass == "") {
        result.innerText = error;
    } else {
        result.innerText = `Your weight on ${selectedOption.innerText} is ${weight}` ;
        img.src = imgsrc;
    }
}