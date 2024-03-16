const zikir = document.getElementById('zikir');
const number = document.getElementById('num');
const button = document.getElementById('btn');
const refresh = document.getElementById('refresh');
const image = document.getElementById('resim');

const zikir_subhannallah = "Subhanallah ";
const zikir_elhamdulillah = "Elhamdulillah ";
const zikir_allahuekber = "Allahu Ekber"

number_counter = 0;
number_text = 0;

zikir.innerText = zikir_subhannallah;


function changeZikir()
{   number_counter ++;    
    number_text ++;
    number.innerText = number_text;
    if(number_counter == 34)
    {
        zikir.innerText = zikir_elhamdulillah;
        image.src = "elhamdulillah.png";
        number_text = 1;
        number.innerText = number_text;



    } 

    if(number_counter == 67)
    {
        zikir.innerText = zikir_allahuekber;
        image.src = "allahuekber.jpg";
        number_text = 1;
        number.innerText = number_text;
    } 
    
    if(number_counter == 100)
    {
        zikir.innerText = "Tesbihatı bitirdin!";
        image.remove();
        number.remove();
        button.remove();
        
    } 
 
  

    

}

button.addEventListener('click', changeZikir);
refresh.addEventListener("click", () => {
    window.location.reload();
  });
