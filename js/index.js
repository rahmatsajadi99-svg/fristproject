const screenZise = window.matchMedia("(min-width:768px)");
const shareL = document.getElementById('shareL');
 const midiaL =document.getElementById("midiaL");
const profil = document.getElementById("profil");
const socialM = document.getElementById("socialM");

function desktopHandler(){
  socialM.classList.remove('hidden');
  profil.classList.remove('hidden');
}
function mobileHandler(){
   profil.classList.add('hidden');
   midiaL.classList.remove("hidden");

}
function ventHandler(e){
      shareL.removeEventListener('click',desktopHandler);
      shareL.removeEventListener('click',mobileHandler);

    if(e.matches){
        shareL.addEventListener('click',desktopHandler);
       shareL.removeEventListener('click',mobileHandler)
       profil.classList.remove('hidden');
       socialM.classList.add('hidden');
      
       
    }
    else{
        shareL.removeEventListener('click',desktopHandler);
        shareL.addEventListener('click',mobileHandler);
        midiaL.classList.add('hidden');
      
        
    }
}
ventHandler(screenZise );
screenZise .addEventListener("change",ventHandler);


