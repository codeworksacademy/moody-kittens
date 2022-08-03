let kittens = []
loadKittens()
drawKittens()//NOTE here it prevents page refresh from not drawing the kittens to the page
/**
 * Called when submitting the new Kitten Form
 * This method will pull data from the form
 * use the provided function to give the data an id
 * then add that data to the kittens list.
 * Then reset the form
 */
function addKitten(event) {
  event.preventDefault()//NOTE stops page refresh
  let form= event.target
  let kitten= {
    id: generateId(),
    name: form.name.value,
    mood: 'Tolerant',
    affection: 5,

  }
  kittens.push(kitten)
  saveKittens()
  form.reset()
console.log(kitten);
}

/**
 * Converts the kittens array to a JSON string then
 * Saves the string to localstorage at the key kittens 
 */
function saveKittens() {
  window.localStorage.setItem(('kittens'),JSON.stringify(kittens))
  drawKittens()
}

/**
 * Attempts to retrieve the kittens string from localstorage
 * then parses the JSON string into an array. Finally sets
 * the kittens array to the retrieved array
 */
function loadKittens() {
 let storedKittens= JSON.parse(window.localStorage.getItem('kittens'))
 if (storedKittens) {
  kittens=storedKittens
 }
}


/**
 * Draw all of the kittens to the kittens element
 */
function drawKittens() {
  let kittenElement = document.getElementById("kittens")
  let kittensTemplate = ''
  kittens.forEach((kitten) => {
    kittensTemplate += `
    <div class=" mt-2 card align-items-center bg-dark text-light">

    <div class="col-4 mb-5">
    <img src="/moody-logo.png" class="img-fluid"  alt="">
    </div>

<h3>Kitten : ${kitten.name}</h3>

<h3>Mood : ${kitten.mood} </h3>

<h3>Affection :  ${kitten.affection}</h3>

<button type="button" onclick="clearKittens('${kitten.id}')">

<img src="/resources/x-square-fill.svg" alt="">

</button>
</div>
    `

    
  });
  kittenElement.innerHTML = kittensTemplate
}


/**
 * Find the kitten in the array by its id
 * @param {string} id 
 * @return {Kitten}
 */
function findKittenById(id) {
  //NOTE return when wanting the value of the function
return kittens.find((kitten) => (kitten.id=id))
}


/**
 * Find the kitten in the array of kittens
 * Generate a random Number
 * if the number is greater than .5 
 * increase the kittens affection
 * otherwise decrease the affection
 * @param {string} id 
 */
function pet(id) {
}

/**
 * Find the kitten in the array of kittens
 * Set the kitten's mood to tolerant
 * Set the kitten's affection to 5
 * @param {string} id
 */
function catnip(id) {
}

/**
 * Sets the kittens mood based on its affection
 * @param {Kitten} kitten 
 */
function setKittenMood(kitten) {
}

/**
 * Removes all of the kittens from the array
 * remember to save this change
 * NOTE had to place id within clearKittens() to find kitten by the id
 */
function clearKittens(id){
  // NOTE first finding the current kitten ID within the kittens[] then splicing it from the index
  // NOTE possibly just try deleting all kittens rather just one individual one
  let kittenIndex= kittens.findIndex((kitten) => (kitten.id ==id))
  kittens.splice(kittenIndex, 1)
  saveKittens()
}

/**
 * Removes the welcome content and should probably draw the 
 * list of kittens to the page. Good Luck
 */
function getStarted() {
  document.getElementById("welcome").remove();
  console.log('Good Luck, Take it away')
}


// --------------------------------------------- No Changes below this line are needed

/**
 * Defines the Properties of a Kitten
 * @typedef {{name: string, mood: string, affection: number}} Kitten
 */


/**
 * Used to generate a random string id for mocked
 * database generated Id
 * @returns {string}
 */
function generateId() {
  return Math.floor(Math.random() * 10000000) + "-" + Math.floor(Math.random() * 10000000)
}

loadKittens();
