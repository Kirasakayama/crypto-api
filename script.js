let data = "https://api.coincap.io/v2/assets"
let divv = document.querySelector('div');
let jss = {}
let myChart = document.getElementById('myChart');
let dd = document.querySelector('.dd');
let vlm = [];
let time = 0; 
let xyValues = []


function coin(){
fetch(data)
    .then( data => data.json())
    .then( data => jss = {...data})
    .then( (data) => {

let currentPrice = jss.data[0].id
let volume = jss.data[0].volumeUsd24Hr
let price = jss.data[0].priceUsd 
vlm.push(Math.floor((volume % 1) * 100))


console.log(currentPrice)
console.log(price)
        

let obj = {
  x : time, y : price
}
xyValues.push(obj)
console.log(obj)
console.log(xyValues)
          
          new Chart("myChart", {
            type: "scatter",
            data: {
              datasets: [{
                pointRadius: vlm ,
                pointBackgroundColor: "royalBlue",
                data: xyValues 
              }]
            },
            options: {
              legend: {display: false},
              scales: {
                xAxes: [{ticks: {min: 0, max:1000}}],
                yAxes: [{ticks: {min: 4000, max:60000}}],
              }
            }
          });
    })

    time+= 50;
}

    // console.log(element.volume.h24)


setInterval(coin ,10000)
