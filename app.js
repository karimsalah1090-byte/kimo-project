// modules

// import {game, showGame} from "./games.js"
// console.log(game)
// showGame()

// import favoriteGame from "./games.js"
// favoriteGame()

// import {game, showGame} from "./games.js"
// console.log(game)
// showGame()

// import niceGame from "./games.js"
// niceGame()

// import niceGame, {game,showGame} from "./games.js"
// console.log(game)
// niceGame()
// showGame()

// import Game from "./game.js"
// let Game1 = new Game("hollow knight" , 9) 
// let Game2 = new Game("call of duty", 10)
// let Game3 = new Game("god of war", 8)
// Game1.changeRating(10)
// Game1.showRating()
// Game2.showRating()
// Game3.showRating()

// import onlineGame from "./onlineGame.js"
// let game = new onlineGame ("call of duty", 9 , 5000)
// console.log(game.name)
// console.log(game.Rating)
// console.log(game.players)
// game.showRating()
// game.showPlayers()

// let result = fetch("http://example.com")
// console.log(result)

// let result = fetch("https://jsonplaceholder.typicode.com/posts/1")
// console.log(result)

// let result = fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(response => {
//     console.log(response)
// })

// fetch APIS

// let result = fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then (response => {
//     return response.json()
// })
// .then(data => {
//     console.log(data.body)
// })
// .catch(error => {
//     console.log("something went wrong")
// })

// let result = fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(response => {
//     if (!response.ok) {
//         throw new Error ("game data not be loaded")
//     }
//     return response.json()
// })
// .then(data => {
//     console.log(data)
// })
// .catch(error => {
//     console.log(error.message)
// })

// async , await 

// async function getGame() {
//     return "hollow knight"
// }
// let result = getGame()
// console.log(result)

// async function getGame() {
//     return "god of war"
// }
// async function showGame() {
//     let result = await getGame()
//     console.log(result)
// }
// showGame()

// async , await with fetch

// async function getGame() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     let data = await response.json()
//     console.log(data)
// }
// getGame()

// async function getGame() {
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         if (!response.ok) {
//             throw new Error ("failed to load game data")
//         }
//         let data = await response.json()
//         console.log(data.id)
//     } catch(error) {
//         console.log(error.message)
//     }
// }
// getGame()

// project 1 

// let searchInput = document.getElementById("searchInput");
// let searchBtn = document.getElementById("searchBtn");
// let gamesContainer = document.getElementById("gamesContainer");

// async function searchGames() {

//     try {

//         let query = searchInput.value;
//         if(query.trim() === "") {
//             gamesContainer.textContent = "Please enter a search term"
//             return
//         }
//         gamesContainer.textContent = "searching..."

//         let response = await fetch(
//             `https://dummyjson.com/products/search?q=${query}`
//         );
//         if(!response.ok) {
//             throw new Error ("failed to load products")
//         }

//         let data = await response.json();

//         gamesContainer.innerHTML = "";

//         if (data.products.length === 0) {
//             gamesContainer.textContent = "No products found";
//             return;
//         }

//         data.products.forEach(product => {
//             console.log(product)

//             let productElement = document.createElement("div");
//             productElement.classList.add("product");

//             let image = document.createElement("img");
//             image.classList.add("product-image");
//             image.src = product.thumbnail;
//             productElement.appendChild(image);

//             let title = document.createElement("h3");
//             title.textContent = product.title;
//             productElement.appendChild(title);

//             let price = document.createElement("p");
//             price.textContent = `$${product.price}`;
//             productElement.appendChild(price);
//             gamesContainer.appendChild(productElement);

            

//             let button = document.createElement("button")
//             button.textContent = "view details"
           
//             productElement.appendChild(button)
//             button.addEventListener("click",() => {
//                 if(!productElement.querySelector(".details")) {
                    
//                     let details = document.createElement("p")
//                     details.classList.add("details")
//                     details.textContent = product.description
//                     productElement.appendChild(details)

//                     let productid = document.createElement("p")
//                     productid.textContent = `ID ${product.id}`
//                     productid.classList.add("product-id")
//                     productElement.appendChild(productid)
//                     button.textContent = "hide details"

//                     let rating = document.createElement("p")
//                     rating.textContent = `rating: ${product.rating}`
//                     rating.classList.add("rating")
//                     productElement.appendChild(rating)  

//                     let category = document.createElement("p")
//                     category.textContent = `category: ${product.category}`
//                     category.classList.add("category")
//                     productElement.appendChild(category)
//                 } else {
//                     let details = productElement.querySelector(".details")
//                     details.remove()

//                     let productid = productElement.querySelector(".product-id")
//                     productid.remove()
//                     button.textContent = "view details"
//                     // console.log("details already exist")

//                     let rating = productElement.querySelector(".rating")
//                     rating.remove()

//                     let category = productElement.querySelector(".category")
//                     category.remove()
//                 }
//             })
//         });

//         let clearBtn = document.getElementById("clearBtn")
//         clearBtn.addEventListener("click", () => {
//             searchInput.value = ""
//             gamesContainer.innerHTML = ""
//         })
 

//     } catch (error) {
//         gamesContainer.textContent="Something went wrong!"
//     }
// }
// searchInput.addEventListener("keydown", (event) => {
//     if (event.key === "Enter")
//         searchGames()
// })
// searchBtn.addEventListener("click", searchGames);

// closest

// let testButton = document.getElementById("testButton")
// console.log(testButton)

// testButton.addEventListener("click" , (event) => {
//     let card = event.target.closest(".card")
//     console.log(card)
// })

// let cards = document.querySelectorAll(".card")

// cards.forEach(card => {
//     card.addEventListener("click" , (event) => {
//         if (event.target.tagName === "BUTTON") {
//             let currentCard = event.target.closest(".card")
//             currentCard.remove()
//         }
//     })
// })

// event.target example

// let card = document.querySelector(".card")
// card.addEventListener("click",(event) => {
//     if (event.target.tagName === "BUTTON") {
//         console.log("you clicked the button")
//          // let currentCard = event.target.closest(".card")
//     }
// })

// closest example

// let cards = document.querySelectorAll(".card")
// cards.forEach(card => {
//     card.addEventListener("click", (event) => {
//         if (event.target.tagName === "BUTTON") {
//             let currentCard = event.target.closest(".card")
//             currentCard.remove()
//         }
//     })
// })

// matches()

// let games = document.getElementById("games")
// games.addEventListener("click" , (event) => {
//     if (event.target.matches("button"))
//         console.log("you clicked a game")
// })

// let games = document.getElementById("games")
//  games.addEventListener("click", (event) => {
//     if(event.target.matches(".delete-btn")) {
//         console.log("delete clicked")
//     } else if (event.target.matches(".edit-btn")) {
//         console.log("edit clicked")
//     } else if ( event.target.matches(".favorite-btn")) {
//         console.log("favorite clicked")
//     }
//  })

// event.delegation

// let games = document.getElementById("games")
// let addGame = document.getElementById("addGame")

// let gameNumber = 1

// games.addEventListener("click", (event) => {
//     if (event.target.matches(".game-btn")) {
//         console.log(event.target.textContent)
//     }
// })

// addGame.addEventListener("click", () => {

//     let newButton = document.createElement("button");

//     newButton.classList.add("game-btn")
//     newButton.textContent =` Game ${gameNumber}`
//     gameNumber++

//     games.appendChild(newButton)
// })

// insert before 

// let newButton = document.createElement("button")
// newButton.textContent = "New game"

// let firstGame = games.querySelector(".game-btn")
// games.insertBefore(newButton, firstGame)


// let newButton = document.createElement("button")
// newButton.textContent="favorite game"

// let favoriteButton = games.querySelector(".game-Btn")
// games.insertBefore(newButton , favoriteButton)

// prepend

// let newButton = document.createElement("button")
// newButton.textContent = "game 0"
// games.prepend(newButton)

// project 2

let gameName = document.getElementById("gameName")
let gameRating = document.getElementById("gameRating")
let addGame = document.getElementById("addGame")
let gamesContainer =  document.getElementById("gamesContainer")
let searchInput = document.getElementById("searchInput")
let searchBtn = document.getElementById("searchBtn")
let editIndex = null
let clearBtn = document.getElementById("clearBtn")

// let games = []

searchBtn.addEventListener("click" , () => {
    let searchTerm = searchInput.value.trim().toLowerCase()
    let filterGames = games.filter(game => {
        return game.name.toLowerCase().includes(searchTerm)
        
    })
    displayGames(filterGames)
    // gamesContainer.textContent = filterGames[0].name

    })


addGame.addEventListener("click" , () => {
    if (gameName.value.trim() === "") {
        gamesContainer.textContent="game is empty"
        return
    } 
    if (gameRating.value.trim() === "") {
        gamesContainer.textContent = "Rating is empty"
        return
    }
    let rating = Number(gameRating.value)
    if (rating < 1 || rating > 10) {
        gamesContainer.textContent = "rating must be between 1 and 10"
        return
    }
  
    let game = {
        name: gameName.value,
        rating: rating
    }
    if (editIndex !== null) {
        games[editIndex] = game
        editIndex = null
        addGame.textContent = "add Game"
    } else {
        games.push(game)
    }
    displayGames(games)
    gameName.value=""
    gameRating.value=""
})

function displayGames(gamesToDisplay) {

    gamesContainer.innerHTML=""

    gamesToDisplay.forEach((game , index) => {

        let gameElement = document.createElement("div")
        gameElement.dataset.name = game.name
        gameElement.textContent = `${game.name} - rating: ${game.rating}`
        gameElement.classList.add("game")

        let deleteButton = document.createElement("button")
        deleteButton.textContent = "delete"
        deleteButton.style.display = "block"

        let editButton = document.createElement("button")
        editButton.textContent = "edit"

        gameElement.appendChild(editButton)
        gamesContainer.appendChild(gameElement)
        gameElement.appendChild(deleteButton)

        deleteButton.addEventListener("click" , () => {
            let currentCard = deleteButton.closest(".game")
            let gameNameToDelete = currentCard.dataset.name
            // currentCard.remove()
            games = games.filter(game => {
                return game.name !== gameNameToDelete 
            })
            displayGames(games)
        })
        editButton.addEventListener("click" , () => {
            let currentCard = editButton.closest(".game")
            let gameNameToEdit = currentCard.dataset.name
            gameName.value = gameNameToEdit
            gameRating.value = game.rating
            editIndex =  games.findIndex(game => {
                return game.name === gameNameToEdit
            })
            addGame.textContent = "update game"
        })
        clearBtn.addEventListener("click", () => {
            searchInput.value=""
            displayGames(games)
        })
    })
    }
    
// let price = 100
// let discount = 20

// let discountAmount = price * discount / 100
// let finalPrice = discount - discountAmount 

// let age = 20 
// if (age >=18) {
//     console.log("adult")
// } else {
//     console.log("minor")
// }

// for (let i=1; i>game.length ; i++ )
//     console.log([i])
 
// let title = document.getElementById("title")
// title.textContent = "welcome karim"

// let btn = document.getElementById("btn")
// let message = document.getElementById("message")
// btn.addEventListener("click", () => {
//     btn.textContent = "button clicked!"
// }
// )

// let form = document.getElementById("myform")

// form.addEventListener("submit",(event) => {
//     submit.preventDefault()
//     console.log(form.value)
// })

// let game = games.find(function(game) {
//     return game.name === "resident evil"
// })

// let gameNames = games.map(click, () => {
//     return game.name
// })

// let Result = games.every(game => {
//     return rating >= 7 
// })  



// let double = number => number * 2 
//     console.log(double[5])

// spread
// let allGames[...games1 , ...games2]

// let games = [
//     { name: "God of War", rating: 9 },
//     { name: "Hollow Knight", rating: 10 },
//     { name: "Resident Evil", rating: 7 },
//     { name: "FIFA", rating: 8 }
// ]

// let highRatedGames = games.filter(game => {
//     return games.rating >= 8
//     console.log(games)
// })

// let total = prices.reduce((sum , price) => {
//     return sum + price
// },0)

// let result = games.some((game) => {
//     return game.rating <= 8
// }) 

// let result = games.every((game) => {
//     return game.rating >= 6
// })

// let game = games.find((game) => {
//     return game.name === "fifa"
// })

// numbers.sort((a , b) => {
//     return a > b
// })

// games.sort((a , b) => {
//     return b.rating - a.rating
// })

// let gameInfo = games.reverse(() => {
// })

// let title = document.getElementById("title")
// let changeBtn = document.getElementById("changeBtn")

// changeBtn.addEventListener("click" , () => {
//     title.textContent = "welcome karim"
// })

// let nameInput = document.getElementById("nameInput")
// let showBtn = document.getElementById("showBtn")
// let message = document.getElementById("message")

// showBtn.addEventListener("click" , () => {
//     message.textContent = nameInput.value
// })

// gameCard = classList.add("gameCard")

// let box = document.getElementById("box")
// let themeBtn = document.getElementById("themeBtn")

// themeBtn.addEventListener("click", () => {
//     box.classList.toggle("dark")
// })

{/* <form id="myForm">
    <input id="nameInput" type="text">
    <button type="submit">Submit</button>
</form>

<p id="message"></p> */}

// let myForm = document.getElementById("myForm")
// let nameInput = document.getElementById("nameInput")
// let message = document.getElementById("message")
// myForm.addEventListener("submit" ,(event) => {
//     message.textContent = "nameInput"
//     event.preventDefault()
// })

// async function getProduct() {
//     let response = await fetch ("https://dummyjson.com/products/1")
//     let data = await response.json()
//     console.log(data)
// }


// async function getProduct() {
//     try {
//         let response = await fetch ("http://dumyjson.com/products/1")
//         if(!response.ok) {
//             throw new Error ("Something went wrong")
//         }
//         let data = await response.json()
//         console.log(data)
//      }
//      catch(error) {
//         console.log(error.message)
//      }
// }

// JSON.stringify , parse , localStorage

// let game = {
//     name: "God of War",
//     rating: 9
// }

// localStorage.setItem("game", JSON.stringify(game))
// let savedGame = JSON.parse(localStorage.getItem("game"))
// console.log(savedGame)


// class Game {
//     constructor(name,rating) {
//         this.name = name
//         this.rating = rating
//     }
// }
// let game1 = new Game ("god of war" , 9)

// let highRatedGames = games.filter((game) => {
//     return game.rating >= 8
// })
// .map((game) => {
//     return game.name
// })

// function getExpensiveProducts() {
//     return products.filter((products) => {
//         return products.price > 1000
//     })
//     .map((products) => { 
//         return products.name
//     })
// }

// function getAverageHighRated() {
//     return games.filter((game) => {
//         return game.rating >= 8 
//     })
//     .map ((game) => {
//         return game.rating
//     })
//     .reduce ((sum , rating) => {
//         return sum + rating 
//     },0)
//     let average = total / ratings.length
// }

// function getTotalExpensiveProducts() {
//     return products.filter((product) => {
//         return product.price > 1000
//     })
//     .reduce ((sum , price) => {
//         return sum + product.price
//     }, 0 )
// }

// function calculateDiscount(price , discount) {
//     let discountAmount = price * discount /100
//     return price - discountAmount
// }
// console.log(calculateDiscount(100 , 20))

// let game = {
//     name: "God of War",
//     rating: 9,

//     showInfo() {
//         return `${this.name} - Rating: ${this.rating}`
//     }
// }
// console.log(game.showInfo())

// destructring

// let game = {
//     name: "God of War",
//     rating: 9,
//     genre: "Action"
// }

// let {name , genre} = game
// console.log(name , genre)

// let games1 = ["God of War", "FIFA"]
// let games2 = ["Hollow Knight", "Resident Evil"]

// let allGames = [...games1 ,...games2]

// console.log(allGames)


// tutorial

// let games = [
//     { name: "God of War", rating: 9 },
//     { name: "FIFA", rating: 6 },
//     { name: "Hollow Knight", rating: 10 }
// ]
// let games = [
//     { name: "A", rating: 7 },
//     { name: "B", rating: 10 },
//     { name: "C", rating: 8 }
// ]

// function sortGamesByRating() {
//     return games.sort((b , a) => {
//         return a.rating - b.rating
//     })
// } console.log(sortGamesByRating())
// function areAllGamesGood() {
//     return games.every((game) => {
//         return game.rating >= 7
//     })
// } console.log(areAllGamesGood())

// function hasPerfectGame() {
//     return games.some((game) => {
//         return game.rating < 10
//     })
// } console.log(hasPerfectGame())

// function getGame(name) {
//     return games.find((game) => {
//         return game.name === name
//     })
// } console.log(getGame("FIFA"))

// function highRatedGames() {
//    return games.filter((game) => {
//         return game.rating >= 8
//     })
// }   console.log(highRatedGames())

// function getGamesNames() {
//     return games.map((game) => {
//         return game.name
//     })
// }   
// console.log(getGamesNames())

// function getHighRatedGames() {
//     return games.filter((game) => {
//         return game.rating >= 8
//     })
//     .map ((game) => {
//         return game.name
//     })
// }
// console.log(getHighRatedGames())

// let prices = [100 , 250 , 50 , 300]

// function getTotal() {
//     return prices.reduce((sum , price) => {
//         return sum + price
//     },0)
// } console.log(getTotal())

// let gameName = document.getElementById("gameName")
// let showGame = document.getElementById("showGame")
// let message = document.getElementById("message")

// showGame.addEventListener("click", () => {
//     message.textContent = gameName.value
// })

// let box = document.getElementById("box")
// let toggleBtn = document.getElementById("toggleBtn")

// toggleBtn.addEventListener("click", () => {
//     box.classList.toggle("active")
// })

// let gameName = document.getElementById("gameName")
// let showGame = document.getElementById("showGame")
// let message = document.getElementById("message")

// showGame.addEventListener("click", () => {
//     message.textContent = gameName.value
// })

// let gameName = document.getElementById("gameName")
// let showBtn = document.getElementById("gameForm")
// let message = document.getElementById("message")
// showBtn.addEventListener("submit" , (event) => {
//     if (gameName.value.length === 0) {
//         message.textContent = "name is required"
//     } else if (gameName.value.length < 3) {
//         message.textContent = "name is too short"
//     } else {
//         message.textContent = "game added :" + gameName.value
//     }
//     event.preventDefault()
// })
   
// showBtn.addEventListener("submit" , (event) => {

//     if (gameName.value === "") {
//         message.textContent="name is required"
//     }
//     else {
//         message.textContent = "game added: " + gameName.value
//     }
//     event.preventDefault()
// })

// let email = document.getElementById("email")
// let checkBtn = document.getElementById("checkBtn")
// let message = document.getElementById("message")
// let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// checkBtn.addEventListener("click",(event) => {
//     if (email.value === "" || !emailPattern.test(email.value)) {
//         message.textContent = " mail invalid"
//     } else {
//         message.textContent = " mail valid "
//     }
//     event.preventDefault()
// })

// async function getGame() {
//     try {
//         let response = await fetch ("https://dummyjson.com/products/2")
//         if (!response.ok) {
//             throw new Error ("failed to load game")
//         }
//         let data = await response.json()
//         console.log(data.price)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// getGame()

// let promise1 = Promise.resolve("God of War")
// let promise2 = Promise.resolve("Hollow Knight")  

// Promise.all([promise1 , promise2])
// let results = await Promise.all([promise1 , promise2])
// console.log(results)

// async function getproducts() {
//     let [response1 , response2 , response3] = await Promise.all ([
//         fetch("https://dummyjson.com/products/1"),
//         fetch("https://dummyjson.com/products/2"),
//         fetch("https://dummyjson.com/products/3")
//     ])
//     let [data1 , data2 , data3] = await Promise.all ([
//         response1.json(),
//         response2.json(),
//         response3.json()
//     ])
//     console.log(data1.title)
//     console.log(data2.title)
//     console.log(data3.title)
// }
// getproducts()

// let promise1 = new Promise(resolve => {
//     setTimeout(() => resolve("A"),3000)
// })

// let promise2 = new Promise(resolve => {
//     setTimeout(() => resolve("B"),500)
// })

// let promise3 = new Promise(resolve => {
//     setTimeout(() => resolve("C"),1000)
// })

// let result = await Promise.race([promise1,promise2,promise3])
// console.log(result)

// let game = {
//     name: "God of War",
//     rating: 9
// }
// localStorage.setItem("game",JSON.stringify(game))
// let savedGame = JSON.parse(localStorage.getItem("game"))
// console.log(savedGame)

// let games = [
//     { name: "God of War", rating: 9 },
//     { name: "FIFA", rating: 8 }
// ]
// localStorage.setItem("games",JSON.stringify(games))
// let savedGames = JSON.parse(localStorage.getItem("games"))
// console.log(savedGames)

// class Game {
//     constructor(name,rating) {
//         this.name = name
//         this.rating = rating
//     }
// }
//     let game1 = new Game("god of war" , 9)
//     console.log(game1)


// class Game {
//     constructor(name,rating) {
//         this.name = name
//         this.rating = rating
//     }
//     showInfo() {
//         return `${this.name} - rating: ${this.rating}`
//     }
// }
// let game1 = new Game ("hollow knight",9)
// console.log(game1.showInfo())

// import {game} from "./game.js"
// console.log(game)

// let games = [
//     { name: "God of War", rating: 9 },
//     { name: "Hollow Knight", rating: 10 },
//     { name: "FIFA", rating: 7 }
// ]

// function highRatedGames() {
//     return games.filter((game) => {
//         return game.rating >= 8
//     })
//     .map ((game) => {
//         return game.name
//     })
// }
// console.log(highRatedGames())

// function getTotalRating() {
//     return games.reduce((sum,game) => {
//         return sum + game.rating
//     },0)
// }
// console.log(getTotalRating())

// function getGame(name) {
//     return games.find((game) => {
//         return game.name === name
//     })
// } console.log(getGame("FIFA"))

// function hasPerfectGame() {
//     return games.some((game) => {
//         return game.rating === 10
//     })
// } console.log(hasPerfectGame())

// function areAllGamesGood () {
//     return games.every((game) => {
//         return game.rating >= 7
//     })
// }console.log(areAllGamesGood())

// function sortGamesByRating() {
//     return games.sort((a , b) => {
//         return b.rating - a.rating
//     })
// } console.log(sortGamesByRating())

// let gameName = document.getElementById("gameName")
// let showBtn = document.getElementById("showBtn")
// let message = document.getElementById("message")

// showBtn.addEventListener(("click") ,() => {
//     message.textContent = gameName.value
// })

// let gameCard = document.getElementById("gameCard")
// let toggleBtn = document.getElementById("toggleBtn")

// toggleBtn.addEventListener(("click"), () => {
//     gameCard.classList.toggle("active")
// })

// let game = {
//     name: "Resident Evil",
//     rating: 8
// }

// localStorage.setItem("game",JSON.stringify(game))
// let savedGame = JSON.parse(localStorage.getItem("game"))
// console.log(savedGame)

// async function getGame() { 
//     try {
//         let response = await fetch ("https://dummyjson.com/products/1")
//         if(!response.ok) {
//             throw new Error ("failed to load game")
//         }
//         let data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// getGame()

// let games = [
//     { name: "God of War", rating: 9 },
//     { name: "Hollow Knight", rating: 10 },
//     { name: "FIFA", rating: 7 },
//     { name: "Resident Evil", rating: 8 }
// ]

// function getBestGames() {
//     return games.filter((game) => {
//         return game.rating >= 8
//     })
//     .sort ((a , b ) => {
//         return b.rating - a.rating
//     })
//     .map ((game) => {
//         return game.name
//     })
// } console.log(getBestGames())

// let game = "god of war"

// console.log(game.toLowerCase().includes("war"))