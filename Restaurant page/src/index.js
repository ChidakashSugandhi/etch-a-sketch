// alert("hello");
import { loadAboutPage, loadMenuPage, loadHomePage } from './page-load';


loadHomePage();

document.querySelector('#home-button').addEventListener('click', loadHomePage);
document.querySelector('#menu-button').addEventListener('click', loadMenuPage);
document.querySelector('#about-button').addEventListener('click', loadAboutPage);



                
