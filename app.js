//listen to the click event on the get-jokes button

//select the button, add the event listener
//valime html elemendi, valisime selle nupukese klassi
//addevent- nüüd see element ootab et hakataks midagi tegema
//see event ongi see click sündmus
//tavaliselt pannakse eventi asemele üksnes e täht
document.querySelector('.get-jokes').addEventListener('click', getJokes);
function getJokes(event) {

    const userNumber = document.querySelector('input[type="number"]').value;
    //get request
    //kutsume need andmed ja siis saame andmed
    fetch(`http://api.icndb.com/jokes/random/${userNumber}`)
    .then(function(responce){ //see function ei ole sama mis ülemine
        console.log(responce);
        return responce.json();
    })
    
    .then(function(data){
        //tahan neid kuvada lehel
        //igakord kui saan väärtuse kätte, sis tahan seda lisada html-na
        //loon nendele ühe mutuja kuhu ma hakkan neid salvestama

        let output='';//see on tühi muutuja
        console.log(data.value);
        //saan andmed massiivist kätte
        //for each joke in data.value array
        data.value.forEach(joke => {
            output += `<li>${joke.joke}</li>`;

            console.log(joke.joke);
        });
        document.querySelector('.jokes').innerHTML = output;
    });
    //console.log(typeof(userNumber));
    //console.log("button clicked");
    //kui avan oma html faili ja valin inspect, siis console all
    //vajutades get jokes nuppu, vilgub korra console all button clicked
    //selleks et see button clicked enam ei vilguks, vaid oleks kuvatud seal kasutame alljärgnevat
    event.preventDefault(); 
    
}