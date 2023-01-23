
const movie = document.getElementById('myform');


const handlform = (e) => {

    e.preventDefault() //value not refresh 

    const year = document.forms["myform"]["year"].value; //use can inpute take and access
  
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4c43914c37mshf4aa34540da05afp1ea53ajsncce84a016d3b',
            'X-RapidAPI-Host': 'abir82-bollywood-recommendations.p.rapidapi.com'
        }
    };

    fetch(`https://abir82-bollywood-recommendations.p.rapidapi.com/?year=${year}&genre=Comedy`, options)
        .then(response => response.json())
        .then(response => {


            response.data.map((cval) => {


                document.getElementById("result").innerHTML += `
                
               
                <div class=" bottom col-md-4">
                <div class="card-body">
                <h2 class="card-title"> Title </h2><h3>${cval.Title}</h3>
                <p class="card-text">Movie-ID<br>${cval.Movie_ID}</p>
                <h4 class="text-danger">year<br>${cval.Year}</h4>
                </div>
                </div>
                
                
                
                `


            })
        })
        .catch(err => console.error(err));

        if((year==2004)||(year==2005)){

            document.getElementById("data").innerHTML=` ${year} data was not found !`
            return
        }
        
 }




movie.addEventListener('submit', handlform)