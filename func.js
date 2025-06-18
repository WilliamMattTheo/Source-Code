function handleSearch(event) {
        event.preventDefault();
        
        const query = document.getElementById('searchInput').value.toLowerCase();
        
        const recipes = {
            'chickpea': 'chickpea-curry.html', 
            'zucchini': 'zucchini.html',   
            'sweet potato': 'spq.html', 
        };
        
        if (recipes[query]) {
            window.location.href = recipes[query]; 
        } else {
            alert('Recipe not found!'); 
        }
    }