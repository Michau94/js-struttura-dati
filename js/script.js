// struttura dati carta Magic

const card =
{
    name: 'Bloodfire Colossus',
    lauchCost: ['6', 'R', 'R'],
    totalCost: 10,
    TypeRow: {
        cardType: 'Creature',
        subType: 'giant',
    },
    expansion: {
        Id: 9,
        name: 'Espansione Miao',
        number: 12,
        totalNumber: 43,

    },
    textSection: {
        abilities: [
            {
                description: 'blablabla 1 damege blabla',
                lauchCost: ['R', 'T'],
            },
            {
                description: 'blablabla 7 damege ',
                lauchCost: ['R', 'R', 'T'],

            }
        ],
        flavourText: {
            quote: 'Lorem lorem lorem',
            author: 'Pinco Pallo'
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


