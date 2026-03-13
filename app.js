const RecipeApp = (() => {


// Recipe data - Foundation for all 4 parts
const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        time: 25,
        difficulty: "easy",
        description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
        category: "pasta",
        // NEW: Add ingredients array
        ingredients: [
            "400g spaghetti",
            "200g pancetta or guanciale",
            "4 large eggs",
            "100g Pecorino Romano cheese",
            "Black pepper",
            "Salt"
        ],
        // NEW: Add steps array (can include nested steps)
        steps: [
            "Bring a large pot of salted water to boil",
            "Cook spaghetti according to package directions",
            {
                text: "Prepare the sauce",
                substeps: [
                    "Beat eggs in a bowl",
                    "Grate cheese and add to eggs",
                    "Add generous black pepper",
                    "Mix well"
                ]
            },
            "Cook pancetta in a large pan until crispy",
            "Drain pasta, reserve 1 cup pasta water",
            "Add hot pasta to pancetta pan (off heat)",
            "Quickly mix in egg mixture, adding pasta water to create creamy sauce",
            "Serve immediately with extra cheese"
        ]
    },
    {
        id: 2,
        title: "Chicken Tikka Masala",
        time: 45,
        difficulty: "medium",
        description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
        category: "curry",
        ingredients: [
            "500g boneless chicken",
            "1 cup yogurt",
            "2 tbsp tikka masala paste",
            "1 cup tomato puree",
            "1/2 cup cream",
            "1 onion (chopped)",
            "2 cloves garlic (minced)",
            "1 tsp ginger (grated)",
            "Salt",
            "Oil"
        ],

        steps: [
            "Marinate chicken with yogurt and tikka masala paste for 1 hour",
            "Heat oil in a pan and cook marinated chicken until browned",
            {
                text: "Prepare the sauce",
                substeps: [
                    "Saute onions until golden",
                    "Add garlic and ginger",
                    "Add tomato puree and cook for 5 minutes",
                    "Stir in cream and salt"
                ]
            },
            "Add cooked chicken to sauce",
            "Simmer for 10-15 minutes",
            "Serve hot with rice or naan"
        ]

    },
    // TODO: Add 6 more recipe objects following the same structure
    {
        id: 3,
        title: "Homemade Croissants",
        time: 180,
        difficulty: "hard",
        description: "Buttery, flaky French pastries that require patience but deliver amazing results.",
        category: "baking",
        ingredients: [
            "4 cups all-purpose flour",
            "1/4 cup sugar",
            "1 tbsp yeast",
            "1 1/2 cups milk",
            "250g cold butter",
            "1 tsp salt",
            "1 egg (for egg wash)"
        ],

        steps: [
            "Mix flour, sugar, yeast, and salt",
            "Add warm milk and knead into dough",
            "Let dough rise for 1 hour",
            {
                text: "Layer the butter",
                substeps: [
                    "Roll dough into rectangle",
                    "Place butter slab in center",
                    "Fold and roll dough",
                    "Repeat folding 3 times with chilling"
                ]
            },
            "Shape into triangles and roll into croissants",
            "Brush with egg wash",
            "Bake at 200°C for 15-20 minutes"
        ]

    },
    {
        id: 4,
        title: "Greek Salad",
        time: 15,
        difficulty: "easy",
        description: "Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.",
        category: "salad",
        ingredients: [
            "2 tomatoes (chopped)",
            "1 cucumber (sliced)",
            "1/2 red onion (sliced)",
            "1/2 cup olives",
            "100g feta cheese",
            "2 tbsp olive oil",
            "1 tbsp lemon juice",
            "Salt",
            "Oregano"
        ],

        steps: [
            "Combine tomatoes, cucumber, and onion in a bowl",
            "Add olives and feta cheese",
            {
                text: "Prepare dressing",
                substeps: [
                    "Mix olive oil and lemon juice",
                    "Add salt and oregano",
                    "Whisk well"
                ]
            },
            "Pour dressing over salad",
            "Toss gently and serve fresh"
        ]

    },
    {
        id: 5,
        title: "Beef Wellington",
        time: 120,
        difficulty: "hard",
        description: "Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.",
        category: "meat",
        ingredients: [
            "500g beef tenderloin",
            "250g mushrooms",
            "2 tbsp mustard",
            "6 slices prosciutto",
            "1 sheet puff pastry",
            "1 egg (beaten)",
            "Salt and pepper",
            "Olive oil"
        ],

        steps: [
            "Season beef with salt and pepper",
            "Sear beef in hot pan until browned",
            {
                text: "Prepare mushroom duxelles",
                substeps: [
                    "Finely chop mushrooms",
                    "Cook until moisture evaporates",
                    "Season and cool"
                ]
            },
            "Spread mustard over beef",
            "Wrap beef with prosciutto and mushroom mixture",
            "Cover with puff pastry",
            "Brush with egg wash",
            "Bake at 200°C for 25-30 minutes"
        ]

    },
    {
        id: 6,
        title: "Vegetable Stir Fry",
        time: 20,
        difficulty: "easy",
        description: "Colorful mixed vegetables cooked quickly in a savory sauce.",
        category: "vegetarian",
        ingredients: [
            "1 cup broccoli",
            "1 carrot (sliced)",
            "1 bell pepper (sliced)",
            "1 cup mushrooms",
            "2 tbsp soy sauce",
            "1 tbsp oil",
            "2 cloves garlic",
            "Salt and pepper"
        ],

        steps: [
            "Heat oil in a wok",
            "Add garlic and saute briefly",
            "Add vegetables and stir fry on high heat",
            {
                text: "Season the stir fry",
                substeps: [
                    "Add soy sauce",
                    "Add salt and pepper",
                    "Toss well"
                ]
            },
            "Cook for 5-7 minutes",
            "Serve hot"
        ]

    },
    {
        id: 7,
        title: "Pad Thai",
        time: 30,
        difficulty: "medium",
        description: "Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.",
        category: "noodles",
        ingredients: [
            "200g rice noodles",
            "200g shrimp or chicken",
            "2 eggs",
            "2 tbsp fish sauce",
            "1 tbsp tamarind paste",
            "1 tbsp sugar",
            "Bean sprouts",
            "Crushed peanuts",
            "2 tbsp oil"
        ],

        steps: [
            "Soak rice noodles in warm water",
            "Heat oil and cook shrimp or chicken",
            "Push to side and scramble eggs",
            {
                text: "Prepare sauce",
                substeps: [
                    "Mix fish sauce",
                    "Add tamarind paste",
                    "Add sugar and stir"
                ]
            },
            "Add noodles and sauce to pan",
            "Toss everything together",
            "Top with bean sprouts and peanuts",
            "Serve with lime wedges"
        ]

    },
    {
        id: 8,
        title: "Margherita Pizza",
        time: 60,
        difficulty: "medium",
        description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
        category: "pizza",
        ingredients: [
            "1 pizza dough base",
            "1/2 cup tomato sauce",
            "200g fresh mozzarella",
            "Fresh basil leaves",
            "2 tbsp olive oil",
            "Salt"
        ],

        steps: [
            "Preheat oven to 220°C",
            "Spread tomato sauce over dough",
            "Add sliced mozzarella evenly",
            {
                text: "Bake the pizza",
                substeps: [
                    "Place pizza in oven",
                    "Bake for 12-15 minutes",
                    "Remove when crust is golden"
                ]
            },
            "Add fresh basil leaves",
            "Drizzle olive oil before serving"
        ]

        
    }
];

// Track current filter and sort settings
let currentFilter = 'all';
let currentSort = 'none';
let searchQuery = '';
let favorites = JSON.parse(localStorage.getItem('recipeFavorites')) || [];
let debounceTimer;

const recipeContainer = document.querySelector('#recipe-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortButtons = document.querySelectorAll('.sort-btn');
console.log(recipeContainer);
const searchInput = document.querySelector('#search-input');
const clearSearchBtn = document.querySelector('#clear-search');
const recipeCountDisplay = document.querySelector('#recipe-count');

// Recursive function to render steps (handles nesting)
const renderSteps = (steps, level = 0) => {
    // Determine the CSS class based on nesting level
    const listClass = level === 0 ? 'steps-list' : 'substeps-list';
    
    let html = `<ol class="${listClass}">`;
    
    steps.forEach(step => {
        // TODO: Check if step is a string or object
        if (typeof step === 'string') {
            // Simple step - just add as list item
            html += `<li>${step}</li>`;
        } else {
            // Nested step - has text and substeps
            html += `<li>`;
            html += step.text;  // Main step text
            
            // TODO: Recursively call renderSteps for substeps
            if (step.substeps && step.substeps.length > 0) {
                // RECURSIVE CALL - this is the key!
                html += renderSteps(step.substeps, level + 1);
            }
            
            html += `</li>`;
        }
    });
    
    html += `</ol>`;
    return html;
};

// Create complete steps HTML for a recipe
const createStepsHTML = (steps) => {
    // TODO: Check if steps exist
    if (!steps || steps.length === 0) {
        return '<p>No steps available</p>';
    }
    
    // Call the recursive function to generate the nested list
    return renderSteps(steps);
};

// Handle toggle button clicks using event delegation
const handleToggleClick = (event) => {
    // Check if clicked element is a toggle button
    if (!event.target.classList.contains('toggle-btn')) {
        return;  // Not a toggle button, ignore
    }
    
    const button = event.target;
    const recipeId = button.dataset.recipeId;
    const toggleType = button.dataset.toggle;  // "steps" or "ingredients"
    
    // TODO: Find the corresponding container
    const containerClass = toggleType === 'steps' ? 'steps-container' : 'ingredients-container';
    const container = document.querySelector(`.${containerClass}[data-recipe-id="${recipeId}"]`);
    
    // TODO: Toggle visibility
    if (container) {
        container.classList.toggle('visible');
        
        // Update button text
        const isVisible = container.classList.contains('visible');
        if (toggleType === 'steps') {
            button.textContent = isVisible ? '📋 Hide Steps' : '📋 Show Steps';
        } else {
            button.textContent = isVisible ? '🥗 Hide Ingredients' : '🥗 Show Ingredients';
        }
    }
};

const createRecipeCard = (recipe) => {
    // Check if favorited
    const isFavorited = favorites.includes(recipe.id);
    const heartIcon = isFavorited ? '❤️' : '🤍';
    return `
        <div class="recipe-card" data-id="${recipe.id}">
            <!-- NEW: Favorite Button -->
            <button class="favorite-btn ${isFavorited ? 'favorited' : ''}" 
                    data-recipe-id="${recipe.id}">
                ${heartIcon}
            </button>
            <h3>${recipe.title}</h3>
            <div class="recipe-meta">
                <span>⏱️ ${recipe.time} min</span>
                <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
            </div>
            <p>${recipe.description}</p>
            <!-- NEW: Toggle Buttons -->
            <div class="card-actions">
                <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="steps">
                    📋 Show Steps
                </button>
                <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="ingredients">
                    🥗 Show Ingredients
                </button>
            </div>
            <!-- NEW: Ingredients Section (hidden by default) -->
            <div class="ingredients-container" data-recipe-id="${recipe.id}">
                <h4>Ingredients:</h4>
                <ul>
                    
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
            <!-- NEW: Steps Section (hidden by default) -->
            <div class="steps-container" data-recipe-id="${recipe.id}">
                <h4>Cooking Steps:</h4>
                
                ${createStepsHTML(recipe.steps)}
            </div>
        </div>
    `;
};

console.log(createRecipeCard(recipes[0]));

// Filter recipes by difficulty level
const filterByDifficulty = (recipes, difficulty) => {
    return recipes.filter(recipe => recipe.difficulty === difficulty);
};

// Filter recipes by maximum cooking time
const filterByTime = (recipes, maxTime) => {
    return recipes.filter(recipe => recipe.time <= maxTime);
};

// NEW: Search filter
const filterBySearch = (recipes, query) => {
    if (!query || query.trim() === '') {
        return recipes;
    }
    
    const lowerQuery = query.toLowerCase().trim();
    
    return recipes.filter(recipe => {
        // TODO: Search in title
        const titleMatch = recipe.title.toLowerCase().includes(lowerQuery);
        
        // TODO: Search in ingredients (use .some())
        const ingredientMatch = recipe.ingredients.some(ingredient => 
            // YOUR CODE HERE
            ingredient.toLowerCase().includes(lowerQuery)
        );
        
        // TODO: Search in description
        const descriptionMatch = recipe.description.toLowerCase().includes(lowerQuery);
        
        return titleMatch || ingredientMatch || descriptionMatch;
    });
};

const filterFavorites = (recipes) => {
    return recipes.filter(recipe => 
        favorites.includes(recipe.id)
    );
};

// Apply the current filter
const applyFilter = (recipes, filterType) => {
    switch(filterType) {
        case 'easy':
            return filterByDifficulty(recipes, 'easy');
        case 'medium':
            return filterByDifficulty(recipes, 'medium');
        case 'hard':
            return filterByDifficulty(recipes, 'hard');
        case 'quick':
            return filterByTime(recipes, 30);
        case 'favorites':              // ✅ ADD THIS
            return filterFavorites(recipes);
        case 'all':
        default:
            return recipes;  // Return all recipes (no filter)
    }
};

// For testing 
console.log('Easy recipes:', filterByDifficulty(recipes, 'easy'));
console.log('Quick recipes:', filterByTime(recipes, 30));

// Sort recipes by name (A-Z)
const sortByName = (recipes) => {
    // Create a copy with spread operator, then sort
    return [...recipes].sort((a, b) => a.title.localeCompare(b.title));
};

// Sort recipes by cooking time (fastest first)
const sortByTime = (recipes) => {
    // Create a copy with spread operator, then sort
    return [...recipes].sort((a, b) => a.time - b.time);
};

// Apply the current sort
const applySort = (recipes, sortType) => {
    switch(sortType) {
        case 'name':
            return sortByName(recipes);
        case 'time':
            return sortByTime(recipes);
        case 'none':
        default:
            return recipes;  // Return as-is (no sorting)
    }
};

const updateDisplay = () => {
    // Step 1: Start with all recipes
    let recipesToDisplay = recipes;

    // NEW: Apply search FIRST
    recipesToDisplay = filterBySearch(recipesToDisplay, searchQuery);
    
    // Step 2: Apply current filter
    recipesToDisplay = applyFilter(recipesToDisplay, currentFilter);
    
    // Step 3: Apply current sort
    recipesToDisplay = applySort(recipesToDisplay, currentSort);

    // NEW: Update counter
    updateRecipeCounter(recipesToDisplay.length, recipes.length);
    
    // Step 4: Render the filtered and sorted recipes
    renderRecipes(recipesToDisplay);

    updateActiveButtons();
    
    // Step 5: Log for debugging
    console.log(`Displaying ${recipesToDisplay.length} recipes (Filter: ${currentFilter}, Sort: ${currentSort})`);
};

// Save favorites to localStorage
const saveFavorites = () => {
    localStorage.setItem('recipeFavorites', JSON.stringify(favorites));
};

// Toggle favorite status
const toggleFavorite = (recipeId) => {
    const id = parseInt(recipeId);
    
    if (favorites.includes(id)) {
        // Remove from favorites
        favorites = favorites.filter(favId => favId !== id);
    } else {
        // Add to favorites
        favorites.push(id);
    }
    
    saveFavorites();
    updateDisplay();
};

// NEW: Search input handler
const handleSearchInput = (event) => {
    const query = event.target.value;

    if (clearSearchBtn) {
        clearSearchBtn.style.display = query ? 'block' : 'none';
    }

    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
        searchQuery = query.trim();
        updateDisplay();
    }, 300);
};

// NEW: Clear search handler
const handleClearSearch = () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.style.display = 'none';
    updateDisplay();
};

// NEW: Favorite button handler
const handleFavoriteClick = (event) => {
    if (!event.target.classList.contains('favorite-btn')) return;

    const recipeId = event.target.dataset.recipeId;
    toggleFavorite(recipeId);
};


// Update which button looks "active"
const updateActiveButtons = () => {
    // Update filter buttons
    filterButtons.forEach(btn => {
        const filterType = btn.dataset.filter;
        if (filterType === currentFilter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update sort buttons
    sortButtons.forEach(btn => {
        const sortType = btn.dataset.sort;
        if (sortType === currentSort) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
};

// NEW: Update recipe counter
const updateRecipeCounter = (showing, total) => {
    if (recipeCountDisplay) {
        recipeCountDisplay.textContent = 
            `Showing ${showing} of ${total} recipes`;
    }
};

// Handle filter button clicks
const handleFilterClick = (event) => {
    const filterType = event.target.dataset.filter;
    
    // Update state
    currentFilter = filterType;
    
    // Update UI
    updateActiveButtons();
    updateDisplay();
};

// Handle sort button clicks
const handleSortClick = (event) => {
    const sortType = event.target.dataset.sort;
    
    // Update state
    currentSort = sortType;
    
    // Update UI
    updateActiveButtons();
    updateDisplay();
};

const setupEventListeners = () => {
    // Attach click handlers to all filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilterClick);
    });
    
    // Attach click handlers to all sort buttons
    sortButtons.forEach(btn => {
        btn.addEventListener('click', handleSortClick);
    });

    // NEW: Event delegation for toggle buttons
    // One listener on parent handles all toggle buttons
    recipeContainer.addEventListener('click', handleToggleClick);
    
    console.log('Event listeners attached!');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilterClick);
    });
    
    sortButtons.forEach(btn => {
        btn.addEventListener('click', handleSortClick);
    });
    
    recipeContainer.addEventListener('click', handleToggleClick);
    
    // NEW: Search input listener
    if (searchInput) {
        searchInput.addEventListener('input', handleSearchInput);
    }
    
    // NEW: Clear search button listener
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', handleClearSearch);
    }
    
    // NEW: Favorite click listener (event delegation)
    recipeContainer.addEventListener('click', handleFavoriteClick);
    
    console.log('Event listeners attached!');
};

// Function to render recipes to the DOM
const renderRecipes = (recipesToRender) => {
    const recipeCardsHTML = recipesToRender
        .map(createRecipeCard)
        .join('');
    
    recipeContainer.innerHTML = recipeCardsHTML;
};

const init = () => {
    console.log('🍳 RecipeJS initializing...');
    setupEventListeners();
    updateDisplay();
    console.log('✅ RecipeJS ready!');
    console.log(`📊 ${recipes.length} recipes loaded`);
    console.log(`❤️  ${favorites.length} favorites saved`);
};

// Set up event listeners on page load
setupEventListeners();

// Initial render with default filter/sort
updateDisplay();

 return {
        init,
        updateDisplay
    };

})();

RecipeApp.init();