var request = new XMLHttpRequest();

request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);

request.send();

request.onload = function(){

    var data = JSON.parse(request.response);
    console.log(data);
    
 
    for(let i of data) {
        console.log(i['flag']);
    }

    for(let i in data) {
        console.log(data[i]['name'], data[i]['region'], data[i]['subregion'],data[i]['population']);
    }
}


const object1 = {
    name: 'ABC',
    address: 'India'
  };
      
  const object2 = {
    address: 'India',
    name: 'ABC'
  };
      
  JSON.stringify(object1) === JSON.stringify(object2)
  // false
      
  _.isEqual(object1, object2)
  // true