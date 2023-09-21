var request = new XMLHttpRequest();
        
        request.open('GET','https://restcountries.com/v3.1/all');
        
        request.send();
        //page load
        request.onload = function(){
            // console.log("Page loaded")
        var data = JSON.parse(request.response)
        console.log(data);
         var res1=data.filter((index)=> (index.continents='asia') && (index.region='asia'))
         console.log(res1);
        }