// struttura dati carta Magic

const card =
{
    name: 'Bloodfire Colossus',
    lauchCost: ['6', 'R', 'R'],
    convertedManaCost: 8,
    TypeRow: {
        cardType: 'Creature',
        subType: 'Giant',
    },
    expansion: {
        id: 10,
        name: 'Tenth Expansion',
        number: 191,
        rarity: 'Rare',

    },

    abilities: [
        {
            description: 'Sacrifice Bloodfire Colossus: It deals 6 damage to each creature and each player.',
            lauchCost: ['R'],
        },
        {
            description: 'Rantolo di morte',
            lauchCost: ['R', 'R', 'T'],

        }
    ],
    flavourText: {
        quote: 'It took all its strength to contain the fire within.',
        author: ''
    },


    illustration: {
        author: {
            id: 1,
            name: 'Greg Staples',
        },
        source: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129709&type=card'
    },

    constitution: 6,
    strength: 6,

    background: {
        color: 'red',
        source: 'link a sfondo qui',
    },

    borderColor: '#FFF',

}


// mazzo carte Magic ( 3 oggetti)
const fullDeck = [
    {
        id: 1,
        name: 'Bloodfire Colossus',
        lauchCost: ['6', 'R', 'R'],
        convertedManaCost: 8,
        TypeRow: {
            cardType: 'Creature',
            subType: 'Giant',
        },
        expansion: {
            id: 10,
            name: 'Tenth Expansion',
            number: 191,
            rarity: 'Rare',

        },

        abilities: [
            {
                description: 'Sacrifice Bloodfire Colossus: It deals 6 damage to each creature and each player.',
                lauchCost: ['R'],
            },
            {
                description: 'Rantolo di morte',
                lauchCost: ['R', 'R', 'T'],

            }
        ],
        flavourText: {
            quote: 'It took all its strength to contain the fire within.',
            author: ''
        },


        illustration: {
            author: {
                id: 1,
                name: 'Greg Staples',
            },
            source: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129709&type=card'
        },

        constitution: 6,
        strength: 6,

        background: {
            color: 'red',
            source: 'link a sfondo qui',
        },

        borderColor: '#FFF',

    },
    {
        id: 2,
        name: 'Abzan Battle Priest',
        lauchCost: ['3', 'W'],
        convertedManaCost: 4,
        TypeRow: {
            cardType: 'Creature',
            subType: 'Human Cleric',
        },
        expansion: {
            id: 45,
            name: 'Khans of Tarkir',
            number: 1,
            rarity: 'Uncommon',

        },

        abilities: [
            {
                description: "Outlast: Put a +1/+1 counter on this creature. Outlast only as a sorcery.Each creature you control with a + 1 / +1 counter on it has lifelink.",
                lauchCost: ['W', 'T'],
            }

        ],
        flavourText: {
            quote: 'Ovunque io vada, gli antenati sono con me.',
            author: 'Abzan'
        },


        illustration: {
            author: {
                id: 2,
                name: 'Chris Rahn',
            },
            source: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=387811&type=card'
        },

        constitution: 3,
        strength: 2,

        background: {
            color: 'black',
            source: 'link a sfondo qui',
        },

        borderColor: '#FFF',

    },
    {
        id: 3,
        name: 'Adder-Staff Boggart',
        lauchCost: ['1', 'R'],
        convertedManaCost: 2,
        TypeRow: {
            cardType: 'Creature',
            subType: 'Goblin Warrior',
        },
        expansion: {
            id: 10,
            name: 'Lowryn',
            number: 148,
            rarity: 'Common',

        },

        abilities: [
            {
                description: "When Adder-Staff Boggart enters the battlefield, clash with an opponent. If you win, put a +1/+1 counter on Adder-Staff Boggart. (Each clashing player reveals the top card of their library, then puts that card on the top or bottom. A player wins if their card had a higher mana value.)",
                lauchCost: [],

            }
        ],
        flavourText: {
            quote: '',
            author: ''
        },


        illustration: {
            author: {
                id: 1,
                name: 'Jeff Miracola',
            },
            source: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=155660&type=card'
        },

        constitution: 2,
        strength: 1,

        background: {
            color: 'red',
            source: 'link a sfondo qui',
        },

        borderColor: '#FFF',

    }

]

// funzione per generare carta singola passando obj card

let generateCard = (card) => {


    let abilitiesContent = 'Nessuna abilità';
    if (card.abilities.length) {
        abilitiesContent = '<ul>';
        for (i = 0; i < card.abilities.length; i++) {

            const currentAbility = card.abilities[i];
            abilitiesContent += `<li> Abilità: ${currentAbility.description} </li>`;
            abilitiesContent += `<li> Costo: ${currentAbility.lauchCost} </li>`

        }
        abilitiesContent += '</ul>'
    }


    console.log(abilitiesContent);


    //operatore ternario in alternativa a if else 
    const subType = card.TypeRow.subType ? ` - ${card.TypeRow.subType}` : ' ';
    const flavourTextQuote = card.flavourText.quote ? `${card.flavourText.quote}` : ' No quotes provided';
    const flavourTextAuthor = card.flavourText.author ? `${card.flavourText.author}` : ' ';


    const cardTemplate = `
<ul>

    
    <li><strong>Main Info:</strong></li>
    <li>ID: ${card.id}</li>
    <li>Nome: ${card.name}</li>
    <li>Costo lancio: ${card.lauchCost.join(', ')}</li>
    <li>Costo Mana convertito: ${card.convertedManaCost} </li>
    <li>Tipo carta: ${card.TypeRow.cardType} ${subType}</li>


    
    <li><strong>Espansione:</strong> 
        <ul>
            <li>Nome Espansione: ${card.expansion.name} (ID:${card.expansion.id})</li>
            <li>Carta n: ${card.expansion.number}</li>
            <li>Rarità: ${card.expansion.rarity}</li>
        </ul>
    </li>
    
    <li><strong>Abilities</strong>${abilitiesContent}
    </li>
          
    <li><strong>Testo di colore:</strong>
        <ul>
                <li>Citazione: ${flavourTextQuote}</li>
                <li>Autore: ${flavourTextAuthor}</li>
        </ul>
    </li>
   


    
    <li><strong>Illustrazione:</strong>
    <ul>
        <li>Autore: ${card.illustration.author.name} </li>
        <li>Link: <a href="${card.illustration.source}"> Clicca qui</a></li>

    </ul>
    </li>

   

    <li>Costituzione: ${card.constitution}</li>
    <li>Forza: ${card.strength}</li>

    <li><strong>Background:</strong>
        <ul>
            <li>Colore: ${card.background.color}</li>
            <li>Link: ${card.background.source}</li>

        </ul>

    </li>

    <li>Colore Bordo: ${card.borderColor}</li>

</ul>`;





    return cardTemplate;
}

// stampa deck su pagina (funzione)

const renderDeck = (deck, targetElement) => {

    let deckRender = '';
    for (let i = 0; i < deck.length; i++) {
        let currentCard = deck[i];

        deckRender += '<div class="card">' + generateCard(currentCard) + '</div>';

    }

    //stampa deck su pagina
    targetElement.innerHTML = deckRender;

}

// elemento per stampa

const cardDisplay = document.getElementById('deck');

renderDeck(fullDeck, cardDisplay);


// #  FILTER SECTION

// selezione elementi

const inputField = document.getElementById('input-search');
const selectField = document.getElementById('param');
const filterButton = document.getElementById('filter');




// scomparsa campo testo se tutte devono essere stampate
selectField.addEventListener('change', () => {

    const currentValue = selectField.value;

    if (currentValue !== 'all') {
        inputField.classList.remove('hidden');
    } else {
        inputField.classList.add('hidden');

    }

})

// filtro on click

filterButton.addEventListener('click', () => {

    const inputValue = inputField.value;
    const selectValue = selectField.value;

    if (selectValue === 'all') {

        renderDeck(fullDeck, cardDisplay)
    }





    // array di appoggio per risultato di ricerca
    const filteredDeck = [];

    // se nessun filtro selezionato stampo tutto
    for (let i = 0; i < fullDeck.length; i++) {
        let currentCard = fullDeck[i];

        // casistiche selezione filtri
        switch (selectValue) {
            case 'id':
            case 'constitution':
            case 'strength':
            case 'convertedManaCost':


                if (currentCard[selectValue] == inputValue) {

                    filteredDeck.push(currentCard);
                }

                break;





            case 'cardType':
                if (currentCard.TypeRow.cardType.includes(inputValue) || currentCard.TypeRow.subType.includes(inputValue)) {
                    filteredDeck.push(currentCard);
                }

                break;

            case 'background-color':
                if (currentCard.background.color.includes(inputValue)) {
                    filteredDeck.push(currentCard);
                }

                break;


            default:
                if (currentCard[selectValue].includes(inputValue)) {

                    filteredDeck.push(currentCard);
                }
                break;
        }
    }


    renderDeck(filteredDeck, cardDisplay);



})













//! Commentato perché fatta funzione 
/*
let abilitiesContent = 'Nessuna abilità';
if (card.textSection.abilities.length) {
    abilitiesContent = '<ul>';
    for (i = 0; i < card.textSection.abilities.length; i++) {
        const currentAbility = card.textSection.abilities[i];
        abilitiesContent += `<li> Abilità: ${card.textSection.abilities[i].description} </li>`;
        abilitiesContent += `<li> Costo: ${card.textSection.abilities[i].lauchCost} </li>`

    }
    abilitiesContent += '</ul>'
}


console.log(abilitiesContent);


//operatore ternario in alternativa a if else
const subType = card.TypeRow.subType ? ` - ${card.TypeRow.subType}` : ' ';


const cardTemplate = `
<ul>


    <li><strong>Main Info:</strong></li>
    <li>Nome: ${card.name}</li>
    <li>Costo lancio: ${card.lauchCost.join(', ')}</li>
    <li>Tipo carta: ${card.TypeRow.cardType} ${subType}</li>



    <li><strong>Espansione:</strong>
        <ul>
            <li>Nome Espansione: ${card.expansion.name} (ID:${card.expansion.id})</li>
            <li>Carta n: ${card.expansion.number} su ${card.expansion.totalNumber}</li>
        </ul>
    </li>


   <li> <strong>Text Section</strong>
      <ul>

          <li><strong>Abilities</strong>${abilitiesContent}
          </li>

          <li><strong>Testo di colore:</strong>
              <ul>
                  <li>Citazione: ${card.textSection.flavourText.quote}</li>
                  <li>Autore: ${card.textSection.flavourText.author}</li>
              </ul>
          </li>
      </ul>
   </li>



    <li><strong>Illustrazione:</strong>
    <ul>
        <li>Autore: ${card.illustration.author.name} </li>
        <li>Link: ${card.illustration.source}</li>

    </ul>
    </li>



    <li>Costituzione: ${card.constitution}</li>
    <li>Forza: ${card.strength}</li>

    <li><strong>Background:</strong>
        <ul>
            <li>Colore: ${card.background.color}</li>
            <li>Link: ${card.background.source}</li>

        </ul>

    </li>

    <li>Colore Bordo: ${card.borderColor}</li>

</ul>`;


*/









