window.addEventListener('load',function(){

    // favoriteMeals contain ul tag that will be fill by li items
    const favoriteMeals = document.getElementById('favoriteMeals');

    // allMeals contain the localstorage elements
    const allMeals = JSON.parse(localStorage.getItem('favMealList'))

    // this for loop will take all the object from allMeal and make list items one by one
    for(let i = 0 ; i < allMeals.length; i++){
        
        // this is the list item
        const listItem = document.createElement('li');
        listItem.classList.add('favoriteMeal','d-flex','bd-highlight','mb-3')

        // this is favorite meal image
        const favoriteMealImage = document.createElement('img');
        favoriteMealImage.classList.add('img-fluid','favoriteImage','p-2','bd-highlight')
        favoriteMealImage.src = allMeals[i].strMealThumb;

        // this div we tell some little details about the meal
        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('p-2','bd-highlight');

        // detail 1 = meal name
        const mealName = document.createElement('h3');
        mealName.innerHTML = allMeals[i].strMeal;

        // detail 2 = meal's nationality
        const mealNationality = document.createElement('p');
        mealNationality.innerHTML = "Nationality : " + allMeals[i].strArea;

        // detail 3 = meal's category
        const mealCategory = document.createElement('p');
        mealCategory.innerHTML = "Category : " + allMeals[i].strCategory;

        // appended all the details to the detailsDiv
        detailsDiv.appendChild(mealName);
        detailsDiv.appendChild(mealNationality);
        detailsDiv.appendChild(mealCategory);

        // this is button used for removing the item form the favorite's list
        const removeFavorite = document.createElement('button');
        removeFavorite.classList.add('btn','btn-danger','btn-lg','ms-auto','p-2','bd-highlight','removeBtn');
        removeFavorite.innerHTML = 'Remove Favorite';

        // appended everything to listItem to complete one list element
        listItem.appendChild(favoriteMealImage);
        listItem.appendChild(detailsDiv);
        listItem.appendChild(removeFavorite);

        // appended list item to ul tag
        favoriteMeals.appendChild(listItem);

        // added an eventListner at remove btn to remove an list item form the ul tag and localstorage 
        removeFavorite.addEventListener('click',function(){
            remove(i);
            listItem.innerHTML = '';

        })
        

    }

    // this is the remove function
    function remove(mealId){
        
        // this function make a temporary array and store all the item in it except for the one we want to remove and then we set that temporary array into localstorage 
        var temp = [];
        for (let j = 0; j < allMeals.length; j++){
            if(allMeals[j].idMeal != allMeals[mealId].idMeal ){
                temp.push(allMeals[j]);
            }
        }
        localStorage.setItem('favMealList',JSON.stringify(temp));

    }
  

})