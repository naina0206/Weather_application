// http://api.weatherapi.com/v1/current.json?key=45c6ae6b17b3486e81985928242010&q=Mumbai&aqi=no

let target='mathura'

const tempf=document.querySelector(".temperature");
const locationf=document.querySelector(".time_location p")
const dateandtimef=document.querySelector(".time_location span")
const conditionf=document.querySelector(".condition p")
const searchf=document.querySelector(".search_area")
const searchbutton=document.querySelector(".search_botton")
const form= document.querySelector('form')

form.addEventListener('submit', searchforlocation)

const fetchResults = async (targetLocation) =>{
    let url = `http://api.weatherapi.com/v1/current.json?key=45c6ae6b17b3486e81985928242010&q=${targetLocation}&aqi=no`
   
    const res = await fetch(url)

    const data = await res.json()

    console.log(data)

    let locationName= data.location.name

    let time= data.location.localtime

    let temp=data.current.temp_c

    let condition=data.current.condition.text
    
    updateDetails(temp, locationName, time , condition)
}

function updateDetails(temp, locationName, time , condition){
    let splitDate= time.split(" ")[0];
    let splitTime=time.split(" ")[1];
    let currentDay=getDayName(new Date(splitDate).getDay())

    tempf.innerText=temp;
    locationf.innerText=locationName;
    dateandtimef.innerText=`${splitDate} ${currentDay} ${splitTime}`
    conditionf.innerText=condition;
}

function searchforlocation(e){
    e.preventDefault()
    target = searchf.value
    fetchResults(target)
}

fetchResults(target)
function getDayName(number){
    switch(number){
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    }
}