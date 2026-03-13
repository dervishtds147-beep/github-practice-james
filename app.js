const RecipeApp = (() => {

const recipes = [
{
id:1,
title:"Classic Spaghetti Carbonara",
time:25,
difficulty:"easy",
description:"A creamy Italian pasta dish made with eggs and cheese.",
ingredients:["Spaghetti","Eggs","Cheese","Pancetta","Pepper","Salt"],
steps:[
"Boil salted water",
"Cook spaghetti",
{
text:"Prepare sauce",
substeps:[
"Beat eggs",
"Add cheese",
"Add pepper"
]
},
"Cook pancetta",
"Mix pasta with sauce",
"Serve hot"
]
},

{
id:2,
title:"Chicken Tikka Masala",
time:45,
difficulty:"medium",
description:"Chicken cooked in creamy tomato sauce.",
ingredients:["Chicken","Tomato","Cream","Spices","Garlic","Onion"],
steps:[
"Marinate chicken",
"Cook chicken pieces",
{
text:"Prepare sauce",
substeps:[
"Heat oil",
"Cook onions",
"Add spices",
"Add tomato puree"
]
},
"Add chicken",
"Simmer 20 minutes"
]
},

{
id:3,
title:"Greek Salad",
time:15,
difficulty:"easy",
description:"Fresh vegetables with feta cheese.",
ingredients:["Tomato","Cucumber","Feta","Olives","Olive oil"],
steps:[
"Chop vegetables",
"Add feta cheese",
"Add olives",
"Drizzle olive oil",
"Toss and serve"
]
}
];

let currentFilter="all";
let currentSort="none";

const recipeContainer=document.querySelector("#recipe-container");
const filterButtons=document.querySelectorAll(".filter-btn");
const sortButtons=document.querySelectorAll(".sort-btn");

const renderSteps=(steps,level=0)=>{

const listClass=level===0?"steps-list":"substeps-list";

let html=`<ol class="${listClass}">`;

steps.forEach(step=>{

if(typeof step==="string"){

html+=`<li>${step}</li>`;

}else{

html+=`<li>${step.text}`;

if(step.substeps){
html+=renderSteps(step.substeps,level+1);
}

html+=`</li>`;
}

});

html+=`</ol>`;
return html;
};

const createStepsHTML=(steps)=>{
if(!steps || steps.length===0){
return "<p>No steps available</p>";
}
return renderSteps(steps);
};

const createRecipeCard=(recipe)=>{

return `
<div class="recipe-card" data-id="${recipe.id}">

<h3>${recipe.title}</h3>

<div class="recipe-meta">
<span>⏱️ ${recipe.time} min</span>
<span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
</div>

<p>${recipe.description}</p>

<div class="card-actions">

<button class="toggle-btn"
data-recipe-id="${recipe.id}"
data-toggle="steps">
📋 Show Steps
</button>

<button class="toggle-btn"
data-recipe-id="${recipe.id}"
data-toggle="ingredients">
🥗 Show Ingredients
</button>

</div>

<div class="ingredients-container"
data-recipe-id="${recipe.id}">

<h4>Ingredients</h4>

<ul>
${recipe.ingredients.map(i=>`<li>${i}</li>`).join("")}
</ul>

</div>

<div class="steps-container"
data-recipe-id="${recipe.id}">

<h4>Cooking Steps</h4>

${createStepsHTML(recipe.steps)}

</div>

</div>
`;
};

const renderRecipes=(recipesToRender)=>{

const html=recipesToRender
.map(createRecipeCard)
.join("");

recipeContainer.innerHTML=html;

};

const filterByDifficulty=(recipes,difficulty)=>{
return recipes.filter(r=>r.difficulty===difficulty);
};

const filterByTime=(recipes,maxTime)=>{
return recipes.filter(r=>r.time<maxTime);
};

const applyFilter=(recipes,filter)=>{

switch(filter){

case "easy":
return filterByDifficulty(recipes,"easy");

case "medium":
return filterByDifficulty(recipes,"medium");

case "hard":
return filterByDifficulty(recipes,"hard");

case "quick":
return filterByTime(recipes,30);

default:
return recipes;
}

};

const sortByName=(recipes)=>{
return [...recipes].sort((a,b)=>a.title.localeCompare(b.title));
};

const sortByTime=(recipes)=>{
return [...recipes].sort((a,b)=>a.time-b.time);
};

const applySort=(recipes,sort)=>{

switch(sort){

case "name":
return sortByName(recipes);

case "time":
return sortByTime(recipes);

default:
return recipes;
}

};

const updateDisplay=()=>{

let result=recipes;

result=applyFilter(result,currentFilter);
result=applySort(result,currentSort);

renderRecipes(result);

};

const handleFilterClick=(event)=>{

currentFilter=event.target.dataset.filter;
updateDisplay();

};

const handleSortClick=(event)=>{

currentSort=event.target.dataset.sort;
updateDisplay();

};

const handleToggleClick=(event)=>{

if(!event.target.classList.contains("toggle-btn")){
return;
}

const button=event.target;
const id=button.dataset.recipeId;
const type=button.dataset.toggle;

const containerClass=type==="steps"
? "steps-container"
: "ingredients-container";

const container=document.querySelector(
`.${containerClass}[data-recipe-id="${id}"]`
);

if(container){

container.classList.toggle("visible");

const visible=container.classList.contains("visible");

if(type==="steps"){
button.textContent=visible
? "📋 Hide Steps"
: "📋 Show Steps";
}else{
button.textContent=visible
? "🥗 Hide Ingredients"
: "🥗 Show Ingredients";
}

}

};

const setupEventListeners=()=>{

filterButtons.forEach(btn=>{
btn.addEventListener("click",handleFilterClick);
});

sortButtons.forEach(btn=>{
btn.addEventListener("click",handleSortClick);
});

recipeContainer.addEventListener("click",handleToggleClick);

};

const init=()=>{

console.log("RecipeApp initializing...");
setupEventListeners();
updateDisplay();
console.log("RecipeApp ready!");

};

return{
init:init
};

})();

RecipeApp.init();