// Write your JavaScript code here!

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
       let pilotName = document.querySelector("input[name=pilotName]");
       let copilotName = document.querySelector("input[name=copilotName]");
       let fuelLevel = document.querySelector("input[name=fuelLevel]");
       let cargoMass = document.querySelector("input[name=cargoMass]");
       
       event.preventDefault();

       // VALIDATE DATA
       if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
           alert("All fields are required."); 
        } else if ( isNaN (fuelLevel.value) || isNaN (cargoMass.value) || !isNaN (pilotName.value) || !isNaN (copilotName.value) ){ // validate data types
            alert("Make sure to enter valid information for each field!"); 
        } else { 
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
            
            fuelLevel= Number(fuelLevel.value);
            cargoMass = Number(cargoMass.value);

            if (fuelLevel < 10000 || cargoMass > 10000){
               document.getElementById("faultyItems").style.visibility = "visible";
               let launchStatus = document.getElementById("launchStatus");
                  launchStatus.innerHTML = "Shuttle not ready for launch";
                  launchStatus.style.color = "red";
                     if (fuelLevel < 10000) {
                        document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey.";
                     } 
                     if (cargoMass > 10000) {
                        document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off.";
                     } 
            } else if (fuelLevel >= 10000 || cargoMass <= 10000) {
               document.getElementById("faultyItems").style.visibility = "visible";
               launchStatus.style.color = "green";
               launchStatus.innerHTML = "Shuttle is ready for launch";
               document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
               document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
            };
        }
   });
   });

   window.addEventListener("load", function() {
      fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
         response.json().then( function(json) {
            const div = document.getElementById("missionTarget");
            let i = Math.floor(Math.random()*json.length); //random select
            div.innerHTML = ` 
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[i].name}</li>
                  <li>Diameter: ${json[i].diameter}</li>
                  <li>Star: ${json[i].star}</li>
                  <li>Distance from Earth: ${json[i].distance}</li>
                  <li>Number of Moons: ${json[i].moons}</li>
               </ol>
            <img src="${json[i].image}">
            `;
         });
      });
   });
