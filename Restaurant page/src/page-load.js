
import restaurantImage from './jason-leung-poI7DelFiVA-unsplash.jpg';
import restaurantMenu from './restaurant-menu.jpg';

export function loadHomePage() {
    const content = document.querySelector("#content");
    
    // Creating the main page elements
    
    content.innerHTML = 
        (`
        <h1>"This is a fancy restaurant"</h1>
        <img src="${restaurantImage}" alt="Girl in a jacket" height="500">
         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Cras tempus sit amet quam vel condimentum. Curabitur sed fringilla tellus. 
            Aenean ac metus id nisl efficitur venenatis id quis arcu. Etiam vehicula, 
            dolor aliquam scelerisque sollicitudin, tellus est sodales ipsum, ac posuere eros metus malesuada urna. 
            Praesent aliquam arcu nulla, blandit elementum ipsum eleifend non. Curabitur sit amet viverra ante. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>               
        `);
};

export function loadMenuPage() {
    const content = document.querySelector("#content");
    
    // Creating the main page elements
    
    content.innerHTML = 
        (`
        <img src="${restaurantMenu}" alt="Girl in a jacket" height="500">
        `);
};

export function loadAboutPage() {
    const content = document.querySelector("#content");

    content.innerHTML = `<p>About</p>`;


}