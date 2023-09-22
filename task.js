var request = new XMLHttpRequest();
        
        request.open('GET','https://restcountries.com/v3.1/all');
        
        request.send();
        //page load
        request.onload = function(){
            // console.log("Page loaded")
        var data = JSON.parse(request.response)
        console.log(data);
        //Get all the countries from Asia continent /region using Filter function

         var res1=data.filter((index)=>{if(index.region==='Asia'){
            return index.name;
         }
        })
         console.log(res1);


         //Get all the countries with a population of less than 2 lakhs using Filter function
         var res2=data.filter((index)=>index.population<200000)
         console.log(res2);

         //Print the following details name, capital, flag using forEach function
         data.forEach((element) => {
            console.log(element.flag,element.name.common,element.capital);
        })

        //Print the total population of countries using reduce function
        var res3=data.reduce((acc,curr)=>acc+curr.population,0)
        console.log(res3);

        //Print the country which uses US Dollars as currency.
        var res4=data.filter((index)=>{ if(index.currencies==="USD"){
            return index.name;
        }
    })
        console.log(res4);
        }