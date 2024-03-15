let gridSize = 0;

const container = document.querySelector(".container");
const button = document.querySelector("button");

rgbArray = ["red", "green", "blue"];


// Both of the bellow methods work, in the first one we are completely resetting the style attribute in second one we are just changing backgroundColor style.

button.addEventListener("click", () => {
     container.innerHTML = "";
     gridSize = prompt("Please Enter the Number of Squares per side.");
     for (i = 0; i<gridSize*gridSize; i++){
          // Creating and setting the default grid properties.
          const pixelDiv = document.createElement("div");
          pixelDiv.setAttribute(`style`, `height: ${960/gridSize}px;
                                             width: ${960/gridSize}px;   
                                             background-color: black;
                                             border: none;
                                             /* border: solid 1px black;  */
                                             flex: 0 0 auto;`);
          pixelDiv.addEventListener("mouseover", (event) => {
                    // hovering changes the color to blue.
                    randomNumber = Math.floor(Math.random()*3);
                    pixelDiv.style.backgroundColor = rgbArray[randomNumber]
               });
          container.appendChild(pixelDiv);
     }
});


// button.addEventListener("click", () => {
//      container.innerHTML = "";
//      gridSize = prompt("Please Enter the Number of Squares per side.");
//      for (i = 0; i<gridSize*gridSize; i++){
//           // Creating and setting the default grid properties.
//           const pixelDiv = document.createElement("div");
//           pixelDiv.setAttribute(`style`, `height: ${960/gridSize}px;
//                                              width: ${960/gridSize}px;   
//                                              background-color: black;
//                                              border: none;
//                                              /* border: solid 1px black;  */
//                                              flex: 0 0 auto;`);
//           pixelDiv.addEventListener("mouseover", (event) => {
//                     // hovering changes the color to blue.
//                     randomNumber = Math.floor(Math.random()*3);
//                     pixelDiv.setAttribute(`style`, `height: ${960/gridSize}px;
//                                                        width: ${960/gridSize}px;   
//                                                        background-color: ${rgbArray[randomNumber]};
//                                                        border: none;
//                                                        /* border: solid 1px black;  */
//                                                        flex: 0 0 auto;`);
//                });
//           container.appendChild(pixelDiv);
//      }
// });