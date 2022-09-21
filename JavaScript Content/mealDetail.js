window.addEventListener('load', function () {

    // this div will contain all the details about the meal
    const mealDetailDiv = document.getElementById('mealDetailDiv');

    // mealSrc contain all the meal detail form the session storage
    const mealSrc = JSON.parse(sessionStorage.getItem("detailedMealList"));

    // this is the ingredients array 
    const ingredientsUnsorted = [mealSrc.strIngredient1,mealSrc.strIngredient2,mealSrc.strIngredient3,mealSrc.strIngredient4,mealSrc.strIngredient5,mealSrc.strIngredient6,mealSrc.strIngredient7,mealSrc.strIngredient8,mealSrc.strIngredient9,mealSrc.strIngredient10,mealSrc.strIngredient11,mealSrc.strIngredient12,mealSrc.strIngredient13,mealSrc.strIngredient14,mealSrc.strIngredient15,mealSrc.strIngredient16,mealSrc.strIngredient17,mealSrc.strIngredient18,mealSrc.strIngredient19,mealSrc.strIngredient20];

    // this is the measurement of ingredients array
    const measuresUnsorted = [mealSrc.strMeasure1,mealSrc.strMeasure2,mealSrc.strMeasure3,mealSrc.strMeasure4,mealSrc.strMeasure5,mealSrc.strMeasure6,mealSrc.strMeasure7,mealSrc.strMeasure8,mealSrc.strMeasure9,mealSrc.strMeasure10,mealSrc.strMeasure11,mealSrc.strMeasure12,mealSrc.strMeasure13,mealSrc.strMeasure14,mealSrc.strMeasure15,mealSrc.strMeasure16,mealSrc.strMeasure17,mealSrc.strMeasure18,mealSrc.strMeasure19,mealSrc.strMeasure20];


    //  *****************************************************************

    // this table consists ingredients and its measurements
    let table = document.createElement('table');
    table.classList.add('table');

    // head of the table
    let thead = document.createElement('thead');

    // body of the table
    let tbody = document.createElement('tbody');

    // appended head and body to the table
    table.appendChild(thead);
    table.appendChild(tbody);
    

    // this is first row of the table that consists all the headings
    let row_1 = document.createElement('tr');

    // heading 1 = serial number
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Sr.";

    // heading 2 = Ingredients' name
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Ingredient";

    // heading 3 = Measurements' name
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Measurement";

    // appended all the headings to row 1
    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);

    // appended row 1 to table head
    thead.appendChild(row_1);

    // this for loop will excrete the empty ingredients and measurement 
     for(let i = 0; i< 20; i++){

    // checking which ingredient and measurement is not empty 
    if(ingredientsUnsorted[i] !='' && measuresUnsorted[i] != ''){

    // this is table body's row
    let tr = document.createElement('tr');

    // ingredient's number
    let serialNumber= document.createElement('td');
    serialNumber.innerHTML = i+1;

    // ingredient's name
    let ingredient = document.createElement('td');
    ingredient.innerHTML = ingredientsUnsorted[i];

    // ingredient's measurement
    let measure = document.createElement('td');
    measure.innerHTML = measuresUnsorted[i];

    // appended all to the row
    tr.appendChild(serialNumber);
    tr.appendChild(ingredient);
    tr.appendChild(measure);

    // appended the row to table's body
    tbody.appendChild(tr);
    }
     }
// *******************************************************************************

    //  this is meal's heading
    const mealHeading = document.createElement('h1');
    mealHeading.innerHTML = mealSrc.strMeal;
    mealHeading.classList.add('centerClass', 'mt-4', 'mb-5');

    // this is the image and ingredient div of the the meal 
    const imgAndIngredients = document.createElement('div');
    imgAndIngredients.classList.add('mb-5','imgAndIngredients');

    //  this is image of the meal
    const mealImage = document.createElement('img');
    mealImage.classList.add('mealImage','img-fluid');
    mealImage.src = mealSrc.strMealThumb;

    // appended meal's image and ingredient's table to the the imgAndIngredients div
    imgAndIngredients.appendChild(mealImage);
    imgAndIngredients.appendChild(table);

    // this is meal's instruction div
    const mealInstructions = document.createElement('div');
    mealInstructions.classList.add('centerClass');

    // this is insturction's heading
    const instructionsHeading = document.createElement('h2');
    instructionsHeading.classList.add("mb-3");
    instructionsHeading.innerHTML = "Instructions";

    // this is meal' instruction
    const instructionsPara = document.createElement('p');
    instructionsPara.classList.add('lh-base');
    instructionsPara.innerText = mealSrc.strInstructions;

    // appended instructions and heading to mealInstructions div
    mealInstructions.appendChild(instructionsHeading);
    mealInstructions.appendChild(instructionsPara);

    // appended everything to the mealDetailDiv
    mealDetailDiv.appendChild(mealHeading);
    mealDetailDiv.appendChild(imgAndIngredients);
    mealDetailDiv.appendChild(mealInstructions);


})