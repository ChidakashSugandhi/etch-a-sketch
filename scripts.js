let gridSize = 0;

const container = document.querySelector(".container");
const button = document.querySelector("button");

button.addEventListener("click", () => {
     gridSize = prompt("Please Enter the Number of Squares per side.");
     for (i = 0; i<gridSize*gridSize; i++){
          // Creating and setting the default grid properties.
          const pixelDiv = document.createElement("div");
          pixelDiv.setAttribute(`style`, `height: ${960/gridSize}px;
                                             width: ${960/gridSize}px;   
                                             background-color: red;
                                             border: none;
                                             /* border: solid 1px black;  */
                                             flex: 0 0 auto;`);
          pixelDiv.addEventListener("mouseover", (event) => {
                    // hovering changes the color to blue.
                    pixelDiv.setAttribute(`style`, `height: ${960/gridSize}px;
                                                       width: ${960/gridSize}px;   
                                                       background-color: blue;
                                                       border: none;
                                                       /* border: solid 1px black;  */
                                                       flex: 0 0 auto;`);
               });
          container.appendChild(pixelDiv);
     }
});
