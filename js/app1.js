const brand = document.querySelector("#marca")
const year = document.querySelector("#year")
const min = document.querySelector("#minimo")
const max = document.querySelector("#maximo")
const doors = document.querySelector("#puertas")
const transmission = document.querySelector("#transmision")
const colour = document.querySelector("#color")

const resultsContainer = document.querySelector("#resultado")
const searchData = {
    brand: "",
    model: "",
    year: "",
    min: "",
    max: "",
    doors: "",
    colour: "",
    transmission: ""
}

const maxYear = new Date().getFullYear()
const minYear = maxYear - 10

for (let i = maxYear; i > minYear; i--){
    const yearOption = document.createElement("option")
    yearOption.value = i.toString()
    yearOption.textContent = i.toString()
    year.appendChild(yearOption)
}

brand.addEventListener("input", (e) => {
    searchData.brand = e.target.value
})

year.addEventListener("input", (e) => {
    searchData.year = parseInt(e.target.value)
})

min.addEventListener("input", (e) => {
    searchData.min = parseInt(e.target.value)
})

max.addEventListener("input", (e) => {
    searchData.max = parseInt(e.target.value)
})

doors.addEventListener("input", (e) => {
    searchData.doors = parseInt(e.target.value)
})

colour.addEventListener("input", (e) => {
    searchData.colour = e.target.value
})

transmission.addEventListener("input", (e) => {
    searchData.transmission = e.target.value
})

document.addEventListener("DOMContentLoaded", () => {
    showCars()
})

const showCars = () =>{
    // clearSearchResults()
    coches.forEach(car =>{
        const carDiv = document.createElement("div")
        carDiv.classList.add("carToDisplay")
        carDiv.innerHTML = `${car.marca} - ${car.modelo} - ${car.color} - ${car.transmision} - ${car.puertas} puertas - ${car.year} - ${car.precio} euros`
        resultsContainer.appendChild(carDiv)
    })
}
/*const clearSearchResults = () =>{
    while (resultsContainer.firstChild){
        resultsContainer.remove(resultsContainer.firstChild)
    }
}*/
const filterBrand = (car) =>{
    if (searchData.brand){
        return car.marca === searchData.brand
    }
    return car
}
const filterModel= (car) =>{
    if (searchData.model){
        return car.modelo === searchData.model
    }
    return car
}
const filterYear = (car) =>{
    if (searchData.year){
        return car.year === searchData.year
    }
    return car
}
const filterMinPrice = (car) =>{
    if (searchData.min){
        return car.precio >= searchData.min
    }
    return car
}
const filterMaxPrice = (car) =>{
    if (searchData.max){
        return car.precio <= searchData.max
    }
    return car
}
const filterDoors = (car) =>{
    if (searchData.doors){
        return car.puertas === searchData.doors
    }
    return car
}
const filterColour = (car) =>{
    if (searchData.colour){
        return car.color === searchData.colour
    }
    return car
}
const filterTransmission = (car) =>{
    if (searchData.transmission){
        return car.transmision === searchData.transmission
    }
    return car
}
const filterCars = () => {
    constFIlt
}