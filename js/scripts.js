//qua metto le funzioni -----------------------------------------------------

//per generare un numero random
function createRandomNum (min, max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

// per creare un array con un tot di numeri casuali che non si ripetono
function createBombArray (bombNum, cellNum) {
    //creo l'array
    const bombArray = [];
    //genero un numero casuale un tot di volte e se non è già presente lo metto nell'array
    for (let i = 1; i <= bombNum; i++){
        let ranNumber;
        do {
            ranNumber = createRandomNum (1, cellNum);
        } while (bombArray.includes(ranNumber));

        bombArray.push(ranNumber);
    }
    return bombArray;
}


//per generare una cella con un indice all'interno
function createCell(index, cellNumber, bombs) {
    //creo una cella
    const cell = document.createElement('div');
    //assegno allacella la classe cell
    cell.classList.add('cell');
    //assegno alla cella la larghezza, pari al 100% del contenitore fratto la radice quadrata del numero di celle
    cell.setAttribute("style","width: calc(100% / " + Math.sqrt(cellNumber));
    //creo uno span
    const span = document.createElement('span');
    //metto il numero dell'indice dentro all span
    span.innerHTML = index;
    //metto lo span nella cella
    cell.append(span);
    //aggiungo un event listener alla cella
    cell.addEventListener ('click',
        function() {
            //se non è già selezionata
            if (!(this.classList.contains('selected'))) {
                //la seleziono
                this.classList.add('selected');
                //se non contiene una bomba la coloro di verde
                if (!(bombs.includes(index))) {
                    this.classList.add('safe');
                }
                else {
                    //altrimenti la coloro di rosso
                    this.classList.add('bomb');
                }


            }
            else {

            }
        }
    )
    //metto la cella nella grid box
    gridBox.append(cell);
}

//----------------------------------------------------------------------------

//vado a prendere il bottone
const playButton = document.getElementById('play-button');

//vado a prendere la grid box
const gridBox = document.getElementById('grid-box');

//vado a prendere la select
const select = document.getElementById('diff');

//quando clicco sul bottone
playButton.addEventListener ('click',
    function () {
        //svuoto la grid-box
        gridBox.innerHTML = '';
        //vado a prendere il valore della select
        const selectInput = parseInt(select.value);
        //genero l'array con le bombe
        const bombArray = createBombArray (16, selectInput);
        //genero le celle
        for (let i = 1; i <= selectInput; i++) {
            createCell(i, selectInput, bombArray);
        }
        //rendo visibile la grid-box
        gridBox.classList.add('visible');

    }
)