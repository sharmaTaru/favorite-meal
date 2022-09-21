

window.addEventListener('load',function(){

// This is form for taking input meal
const form = document.getElementById('mealForm');

// This is the entered meal
const input = document.getElementById('inputMeal');

// It is an array which will store the output
let favMeal;

// This function helps in adding the array filled with output into the localstorage for later use
function addToFavorites(items){

favMeal = JSON.parse(localStorage.getItem('favMealList')) || [];
favMeal.push(items);
localStorage.setItem('favMealList',JSON.stringify(favMeal));

}

// This function helps in reaching the meal detail page when asked for details about meal
function Details(items){

    sessionStorage.setItem('detailedMealList', JSON.stringify(items))
    window.open('../Html Content/mealDetail.html')

}

// This is all what happens when form is submitted
form.addEventListener('submit', function(e){

    e.preventDefault();

    // mealName takes the value that is entered in the input
    const mealName = input.value;

    if(mealName != ''){

        // here I am fetching the meal according to its name
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`).then((response)=>{
            return response.json();
        }).then((allData)=>{
            let meal = '';

            // here I am using map tecnique to use every element of the data
                allData.meals.map((items)=>{

                    // this is how it looks on the web page
                    meal = `<img src=${items.strMealThumb} class="img-thumbnail mealImage mb-3" alt="Your Meal Is Delicious">
                    <div class="d-grid col-3 addToFavorites">
                    <h2 class="mealHeading">${items.strMeal}</h2>
                      <button class="btn btn-warning favBtn" type="button">Add To Favorites</button>
                      <button class="btn btn-danger detailBtn" ty
                      
                      pe="button">Meal Details</button>
                    </div>`;
                    document.getElementById('meal').innerHTML = meal;
                    
                    // using the favBtn for taking the favorite items
                    let favBtn = document.querySelector('.favBtn');
                    favBtn.addEventListener('click', function(){
                        addToFavorites(items);
                    });

                    // using the favBtn for taking the favorite items
                    let detailBtn = document.querySelector('.detailBtn');
                    detailBtn.addEventListener('click', function(){
                        Details(items);
                    });
      
            })
    // catching the error if any
    }).catch((err)=>{
        console.log(err);
        })
}
    // if the input is empty then it will show an alert
    else{
        alert('Please Enter A Valid Meal');
        document.getElementById('meal').innerHTML = '';
    }   
    // and finally reset the form so the value doesn't remain in the input box
    form.reset();

});

})
