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
        name: 'Grizzly Bear',
        lauchCost: ['8', 'R'],
        convertedManaCost: 9,
        TypeRow: {
            cardType: 'Creature',
            subType: 'Ninja',
        },
        expansion: {
            id: 10,
            name: 'Tenth Expansion',
            number: 150,
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
            quote: 'Miao bau frr',
            author: ''
        },


        illustration: {
            author: {
                id: 1,
                name: 'Greg Staples',
            },
            source: 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=129709&type=card'
        },

        constitution: 13,
        strength: 14,

        background: {
            color: 'black',
            source: 'link a sfondo qui',
        },

        borderColor: '#FFF',

    },
    {
        id: 3,
        name: 'Micio Miao',
        lauchCost: ['2', 'R', 'R'],
        convertedManaCost: 4,
        TypeRow: {
            cardType: 'Creature',
            subType: 'Gatto',
        },
        expansion: {
            id: 10,
            name: 'Tenth Expansion',
            number: 78,
            rarity: 'Rare',

        },

        abilities: [
            {
                description: 'Rantolo di morte',
                lauchCost: ['R', 'R', 'T'],

            }
        ],
        flavourText: {
            quote: 'Meow',
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

]


// stampa deck su pagina (funzione)

const renderDeck = (deck, targetElement) => {

    let deckRender = '';
    for (let i = 0; i < deck.length; i++) {
        let currentCard = deck[i];

        deckRender += '<div class="card">' + generateCard(fullDeck[i]) + '</div>';

    }

    //stampa deck su pagina
    targetElement.innerHTML = deckRender;

}

// elemento per stampa

const cardDisplay = document.getElementById('deck');

renderDeck(fullDeck, cardDisplay);









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





// funzione per generare carta passando obj card

function generateCard(card) {


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




