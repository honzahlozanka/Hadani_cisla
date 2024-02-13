class Cisla {
    constructor() {
        this.num = Math.floor(Math.random() * 40) + 1;              
          
    this._vypis();
    this._zacitHru();
    }
   
    _vypis() {
             
        const start_text = document.getElementById("welcome_text");
        start_text.textContent = 'Hru hrají dva hráči- "skrývající" a "hádající". Skrývající hráč si myslí přirozené číslo z dohodnutého intervalu a hádající hráč se snaži číslo uhádnout. Hádající hráč vždy tipne číslo a dostane od skrývajícího hráče informaci, zda je tajné číslo větší nebo menší.';  
      
    }
    _zacitHru() {
        const zacni = document.getElementById("zacni");

        zacni.addEventListener("click", () => {           
            const hra_vypis = document.getElementById("game");
            hra_vypis.textContent = "Myslím si číslo od 1 do 40, jaké tipuješ?";
            zacni.disabled = true;
            zacni.textContent = "Ve hře";

            // Vytvoření formuláře
            const formElement = document.createElement("form");
            formElement.id = "form_hadej";

            // Vytvoření vstupního pole pro číslo
            const inputElement = document.createElement("input");
            inputElement.type = "text";
            inputElement.placeholder = "Number";
            inputElement.id = "hadaneCislo";

            // Vytvoření tlačítka pro odeslání formuláře
            const buttonElement = document.createElement("button");
            buttonElement.id = "hadej";
            buttonElement.type = "submit";
            buttonElement.textContent = "Hádám toto číslo";

            // Přidání vytvořených prvků do formuláře
            formElement.appendChild(inputElement);
            formElement.appendChild(buttonElement);

            // Přidání formuláře do existujícího elementu na stránce       
            hra_vypis.appendChild(formElement);

            buttonElement.addEventListener("click", () => { 
               zacni.textContent = "Pokračuj";
               zacni.disabled = false;

               const hadaneCislo = inputElement.value;
               if (this.num > hadaneCislo) {
                hra_vypis.textContent = "Moje číslo je větší";
                }
                if (this.num < hadaneCislo) {
                    hra_vypis.textContent = "Moje číslo je menší";
                    }
               if (hadaneCislo > 40 || hadaneCislo < 1) {
                hra_vypis.textContent = "Hádal jsi mimo rozsah";
                 } 
                if (this.num == hadaneCislo ) {
                    hra_vypis.textContent = "Ano, správně";
                }                            
    
            });
     

        });
    }




}


