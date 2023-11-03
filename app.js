let kittens = [

]

let newId = 0

function addKitten(event) {
  event.preventDefault();
  console.log(kittens, document.querySelector("input").value,  )

  for(i = 0; i < kittens.length; i++){ 
    if (kittens[i].name.includes(document.querySelector("input").value,) == true){
      document.querySelector("input").value = null
      document.querySelector("input").placeholder = "Kitten already Exists";
      return
    }
  }

  let Kitten = {
    id: generateId(),
    name: document.querySelector("input").value,
    mood: 'tolerant',
    affection: 5
  }

  kittens.push(Kitten);
  
  document.querySelector("input").placeholder = "Name"
  document.querySelector("input").value = null;
  drawKittens(Kitten);
  clearKittens()
  saveKittens()
}

function drawKittens(Kitten) {

    const newDiv = document.createElement("div")
    newDiv.setAttribute("class", `bed`);
    
    const kittenImg = document.createElement("Img");
    kittenImg.setAttribute('class', `p-1 kitten ${Kitten.mood}`)
    kittenImg.setAttribute('src', 'moody-logo.png','alt', 'Kitten')
    kittenImg.setAttribute("id", Kitten.id)

    const footer = document.createElement('footer');
      footer.setAttribute('class', 'smFooter bg-dark')

    const petButton = document.createElement("button");
      petButton.innerText ='Pet';
      petButton.setAttribute("onclick", `pet(kittens[${kittens.indexOf(Kitten)}].id)`)
      petButton.setAttribute('class', `petButton`)
    
    const catnipButton = document.createElement("button");
      catnipButton.innerText = 'Catnip';
      catnipButton.setAttribute("onclick", `catnip(kittens[${kittens.indexOf(Kitten)}].id)`)
      catnipButton.setAttribute('class', 'catnipButton')
    
      const deleteButton = document.createElement("button");
      deleteButton.innerText = 'Delete';
      deleteButton.setAttribute("onclick", `delKitten(kittens[${kittens.indexOf(Kitten)}].id)`)
      deleteButton.setAttribute('class', 'deleteButton')
    
    const kittenName = document.createElement('small');
      kittenName.innerText = Kitten.name
      kittenName.setAttribute('class', `text-center ${Kitten.mood} name`)

    const buttons = document.createElement('div')
      buttons.append(petButton, catnipButton, deleteButton)
      buttons.setAttribute('class', 'buttons')

      footer.append(kittenName, buttons)
      newDiv.append(kittenImg, footer);
      document.getElementById("kittens").append(newDiv);
      console.log(newDiv);
}

function saveKittens() {
  localStorage.setItem("Kittens", JSON.stringify(kittens))
}

function loadKittens() {
  let kittensJSON = localStorage.getItem("Kittens")

  if(kittensJSON != null){
    console.log('loading kittens', JSON.parse(kittensJSON))
    kittens = JSON.parse(kittensJSON)
    for(let i = 0; i < kittens.length; i++){
      drawKittens(kittens[i])}}
  else console.log('loading failed')
}




/**
 * Find the kitten in the array by its id
 * @param {string} id 
 * @return {Kitten}
 */
function findKittenById(id) {
  for(i=0; i < kittens.length; i++){
    if((kittens[i].id == id) == true){
      console.log('Match', kittens[i].id == id, kittens[i].id, id)
      return kittens[i]}
    if(kittens[i].id != id){
      console.log(kittens[i].id == id, `Found: ${kittens[i].id}`, `Needed: ${id}`)}
    }  
   console.log('Not Found') 
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
  Kitten = findKittenById(id)

  let num = Math.random()
  if(num > .5){
    Kitten.affection ++
  }
  else{
    Kitten.affection --
  }
  setKittenMood(Kitten)
  kittens[i] = Kitten
  console.log('Pet', num, Kitten);

  clearKittens()
  saveKittens()
}

/**
 * Find the kitten in the array of kittens
 * Set the kitten's mood to tolerant
 * Set the kitten's affection to 5
 * @param {string} id
 */
function catnip(id) {
  Kitten = findKittenById(id)

  Kitten.mood = 'tolerant';
  Kitten.affection = 5;

  kittens[id] = Kitten;
  console.log('Catnip', Kitten, kittens);

  clearKittens()
  saveKittens()
}

/**
 * Sets the kittens mood based on its affection
 * @param {Kitten} kitten 
 */
function setKittenMood(Kitten) {
  if(3 > Kitten.affection < 8){
    Kitten.mood = 'tolerant'
    kittens[Kitten.id] = Kitten}

  if(Kitten.affection > 7){
    Kitten.mood = 'happy'
    kittens[Kitten.id] = Kitten}

  if(Kitten.affection < 4){
    Kitten.mood = 'angry'
    kittens[Kitten.id] = Kitten}
 
  document.getElementById(Kitten.id).setAttribute('class',`p-1 kitten ${Kitten.mood}`)
}

function clearKittens(){
  localStorage.clear("Kittens");
}

// function getStarted() {
//   document.getElementById("welcome").remove();
//   console.log('Good Luck, Take it away')
// }

function delKitten(id){
  let Kitten = findKittenById(id)
  i = kittens.indexOf(Kitten)
  let Kitten2 = kittens[kittens.length - 1]
  kittens[i] = Kitten2
  console.log(Kitten2, kittens.indexOf(Kitten2))
  kittens.pop()
  clearKittens()
  console.log(`Deleting ${Kitten.name}, Index: ${i}`)
  saveKittens()
  const element = document.getElementsByClassName('bed');
  console.log(element, element.length,)
  for(i = (element.length - 1); i >= 0; i--){
    element[i].remove()
  }
  console.log(kittens)
  loadKittens()
}

// --------------------------------------------- No Changes below this line are needed

/**
 * Defines the Properties of a Kitten
 * @typedef {{id:string, name: string, mood: string, affection: number}} Kitten
 */


/**
 * Used to generate a random string id for mocked
 * database generated Id
 * @returns {string}
 */
function generateId() {
  return Math.floor(Math.random() * 10000000) + "-" + Math.floor(Math.random() * 10000000)
}


loadKittens()