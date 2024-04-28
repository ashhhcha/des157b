let globalData;
async function getData(){
    const meows = await fetch('data.json');
    const data = await meows.json();
    console.log(data);
    globalData = data;
    document.querySelector('#meowCount').innerHTML = outputHTML1(data);
    document.querySelector('#picker').innerHTML = createSelectList(data);
}

function outputHTML1(data){
    let html = '<p>';
    html += `Keeping count of how many times I meow`;
    html += '</p>';
    return html;
}

function createSelectList(data){
    let html = '<option>---</option>';
    const dataPoints = Object.keys(data);
    console.log(dataPoints);
    dataPoints.forEach(function(eachPoint){
        html += `<option value = "${eachPoint}">${data[eachPoint].day}</option>`
    });
    return html;
}

document.querySelector('#picker').addEventListener('change', function(){
    const newValue = this.value;
    updateInterface(newValue, globalData);
});

function updateInterface(value, jsonData){
    let html = '<p>';
    html += `On ${jsonData[value].day}, I meowed <br><b>${jsonData[value].meows}</b> times.`;
    html += '</p>';
    document.querySelector('#result').innerHTML = html;
}

getData();