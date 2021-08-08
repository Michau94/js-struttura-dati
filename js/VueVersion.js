console.log(Vue);
const root = new Vue({
    el: '#root',
    data: {
        filterParam: 'all',
        searchTab: '',
        filteredDeck: [],
        deck: [{
            id: 1,
            name: 'Bloodfire Colossus',
            launchCost: ['6', 'R', 'R'],
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
                    launchCost: ['R'],
                },
                {
                    description: 'Rantolo di morte',
                    launchCost: ['R', 'R', 'T'],

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
            launchCost: ['3', 'W'],
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
                    launchCost: ['W', 'T'],
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
            launchCost: ['1', 'R'],
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
                    launchCost: [],

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

        }]

    },
    methods: {

        showAll() {
            if (this.filterParam !== 'all') {
                return false;
            }
            return true;
        }


        // this.searchTab = capitalize(this.searchTab


    },
    computed: {
        filtered: function () {

            return this.deck.filter((card) => {

                switch (this.filterParam) {
                    case 'all':
                        return card;
                    case 'id':
                    case 'convertedManaCost':
                    case 'constitution':
                    case 'strength':

                        return card[this.filterParam] == this.searchTab;

                    case 'name':

                        return !this.searchTab ? null : card[this.filterParam].toLowerCase().includes(this.searchTab);

                    case 'launchCost':

                        return !this.searchTab ? null : card.launchCost.includes(this.searchTab.toUpperCase());

                    case 'cardType':

                        return !this.searchTab ? null : card.TypeRow.cardType.toLowerCase().includes(this.searchTab.toLowerCase()) + card.TypeRow.subType.toLowerCase().includes(this.searchTab.toLowerCase());

                    case 'rarity':

                        return !this.searchTab ? null : card.expansion.rarity.toLowerCase().includes(this.searchTab.toLowerCase());

                    case 'background-color':

                        return !this.searchTab ? null : card.background.color.toLowerCase().includes(this.searchTab.toLowerCase());

                    case 'illustration-author':

                        return !this.searchTab ? null : card.illustration.author.name.toLowerCase().includes(this.searchTab.toLowerCase());

                }
            })
        }
    }

})

