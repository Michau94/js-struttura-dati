// struttura dati carta Magic

const card =
{
    name: 'Bloodfire Colossus',
    lauchCost: ['6', 'R', 'R'],
    totalCost: 10,
    TypeRow: {
        cardType: 'Creature',
        subType: 'Giant',
    },
    expansion: {
        id: 9,
        name: 'Espansione Miao',
        number: 12,
        totalNumber: 43,

    },
    textSection: {
        abilities: [
            {
                description: 'blablabla 1 damage blabla',
                lauchCost: ['R', 'T'],
            },
            {
                description: 'blablabla 7 damage ',
                lauchCost: ['R', 'R', 'T'],

            }
        ],
        flavourText: {
            quote: 'Lorem lorem lorem',
            author: 'John Smith'
        }
    },

    illustration: {
        author: {
            id: 1,
            name: 'Van Gogh',
        },
        source: 'link qui'
    },

    constitution: 13,
    strength: 13,

    background: {
        color: 'blue',
        source: 'link a sfondo qui',
    },

    borderColor: '#FFF',

}


console.table(card);

// elemento per stampa

const cardDisplay = document.getElementById('card');

// stampa su html


cardDisplay.innerHTML = generateCard(card);


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





    return cardTemplate;
}



