// Select all filter buttons and filterable cards
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

// Function to filter cards based on the clicked button
const filterCards = (e) => {
    // Remove the active class from the previously active button
    document.querySelector(".active").classList.remove("active");
    
    // Add the active class to the currently clicked button
    e.target.classList.add("active");
    
    // Hide all cards initially
    filterableCards.forEach(card => {
        card.classList.add("hide");
        
        // Show the cards that match the filter criteria or all if "all" is selected
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide");
        }
    });
};

// Add click event listeners to all filter buttons
filterButtons.forEach(button => button.addEventListener("click", filterCards));
