const battleEngravings = [
    'Adrenaline', 'All-Out-Attack', 'Ambush Master', 'Awakening', 'Barricade',
    'Broken Bone', 'Contender', 'Crisis Evasion', 'Crushing Fist', 'Cursed Doll',
    'Disrespect', 'Divine Protection', 'Drops of Ether', 'Emergency Rescue', 'Enhanced Shield',
    'Ether Predator', 'Expert', 'Explosive Expert', 'Fortitude', 'Grudge',
    'Heavy Armor', 'Hit Master', 'Increases Mass', 'Keen Blunt Weapon', 'Lightning Fury',
    'MP Efficiency Increase', 'Magick Stream', 'Master Brawler', 'Master of Escape', 'Master\'s Tenacity',
    'Max MP Increase', 'Necromancy', 'Precise Dagger', 'Preemptive Strike', 'Propulsion',
    'Raid Captain', 'Shield Piercing', 'Sight Focus', 'Spirit Absorption', 'Stabilized Status',
    'Strong Will', 'Super Charge', 'Vital Point Hit'
];

const classEngravings = [
    {
        class: 'Berserker', engravings: ['Berserker\'s Technique', 'Mayhem']
    },
    {
        class: 'Paladin', engravings: ['Blessed Aura', 'Judgment']
    },
    {
        class: 'Gunlancer', engravings: ['Combat Readiness', 'Lone Knight']
    },
    {
        class: 'Striker', engravings: ['Deathblow', 'Esoteric Flurry']
    },
    {
        class: 'Wardancer', engravings: ['Esoteric Skill Enhancement', 'First Intention']
    },
    {
        class: 'Scrapper', engravings: ['Shock Training', 'Ultimate Skill: Taijutsu']
    },
    {
        class: 'Soulfist', engravings: ['Energy Overflow', 'Robust Spirit']
    },
    {
        class: 'Glaivier', engravings: ['Control', 'Pinnacle']
    },
    {
        class: 'Gunslinger', engravings: ['Peacemaker', 'Time to Hunt']
    },
    {
        class: 'Artillerist', engravings: ['Barrage Enhancement', 'Firepower Enhancement']
    },
    {
        class: 'Deadeye', engravings: ['Enhanced Weapon', 'Pistoleer']
    },
    {
        class: 'Sharpshooter', engravings: ['Death Strike', 'Loyal Companion']
    },
    {
        class: 'Bard', engravings: ['Desperate Salvation', 'True Courage']
    },
    {
        class: 'Sorceress', engravings: ['Igniter', 'Reflux']
    },
    {
        class: 'Shadowhunter', engravings: ['Demonic Impulse', 'Perfect Suppression']
    },
    {
        class: 'Deathblade', engravings: ['Surge', 'Remaining Energy']
    }
]


/*
    ELEMENTS
*/

//Engraving Display
const engravingDisplay = document.getElementsByClassName('engraving-display');

// Player Class Selector
const playerClass = document.getElementById('playerClass');

// Engraving 1
const engraving1 = document.getElementById('engraving1');
const engraving1_nodelevel = document.getElementById('engraving1-nodelevel');

// Engraving 2
const engraving2 = document.getElementById('engraving2');
const engraving2_nodelevel = document.getElementById('engraving2-nodelevel');

// Necklace
const necklace_engraving1 = document.getElementById('necklace-engraving1');
const necklace_engraving1_nodelevel = document.getElementById('necklace-engraving1-nodelevel');
const necklace_engraving2 = document.getElementById('necklace-engraving2');
const necklace_engraving2_nodelevel = document.getElementById('necklace-engraving2-nodelevel');
const necklace_negative = document.getElementById('necklace-negative');
const necklace_negative_nodelevel = document.getElementById('necklace-negative-nodelevel');

// Earring 1
const earring1_engraving1 = document.getElementById('earring1-engraving1');
const earring1_engraving1_nodelevel = document.getElementById('earring1-engraving1-nodelevel');
const earring1_engraving2 = document.getElementById('earring1-engraving2');
const earring1_engraving2_nodelevel = document.getElementById('earring1-engraving2-nodelevel');
const earring1_negative = document.getElementById('earring1-negative');
const earring1_negative_nodelevel = document.getElementById('earring1-negative-nodelevel');

// Earring 2
const earring2_engraving1 = document.getElementById('earring2-engraving1');
const earring2_engraving1_nodelevel = document.getElementById('earring2-engraving1-nodelevel');
const earring2_engraving2 = document.getElementById('earring2-engraving2');
const earring2_engraving2_nodelevel = document.getElementById('earring2-engraving2-nodelevel');
const earring2_negative = document.getElementById('earring2-negative');
const earring2_negative_nodelevel = document.getElementById('earring2-negative-nodelevel');

// Ring 1
const ring1_engraving1 = document.getElementById('ring1-engraving1');
const ring1_engraving1_nodelevel = document.getElementById('ring1-engraving1-nodelevel');
const ring1_engraving2 = document.getElementById('ring1-engraving2');
const ring1_engraving2_nodelevel = document.getElementById('ring1-engraving2-nodelevel');
const ring1_negative = document.getElementById('ring1-negative');
const ring1_negative_nodelevel = document.getElementById('ring1-negative-nodelevel');

// Ring 2
const ring2_engraving1 = document.getElementById('ring2-engraving1');
const ring2_engraving1_nodelevel = document.getElementById('ring2-engraving1-nodelevel');
const ring2_engraving2 = document.getElementById('ring2-engraving2');
const ring2_engraving2_nodelevel = document.getElementById('ring2-engraving2-nodelevel');
const ring2_negative = document.getElementById('ring2-negative');
const ring2_negative_nodelevel = document.getElementById('ring2-negative-nodelevel');

// Ability Stone
const abilitystone_engraving1 = document.getElementById('abilitystone-engraving1');
const abilitystone_engraving1_nodelevel = document.getElementById('abilitystone-engraving1-nodelevel');
const abilitystone_engraving2 = document.getElementById('abilitystone-engraving2');
const abilitystone_engraving2_nodelevel = document.getElementById('abilitystone-engraving2-nodelevel');
const abilitystone_negative = document.getElementById('abilitystone-negative');
const abilitystone_negative_nodelevel = document.getElementById('abilitystone-negative-nodelevel');

// Internal Engraving Arrays
const consolidatedEngravings = [];
const negativeEngravings = [];

/*
    FUNCTIONS
*/

const populateClassDropdown = function () {
    const classList = classEngravings.map(x => x.class);

    for (let i = 0; i < classList.length; i++) {
        let option = document.createElement('option');
        option.innerHTML = classList[i];
        option.value = classList[i];
        playerClass.appendChild(option)
    }
}

const populateClassEngravings = function () {
    const selectedClass = classEngravings.find(e => e.class === playerClass.value);
    const classAndBattleEngravings = selectedClass.engravings.concat(battleEngravings);

    populateSelect(engraving1, classAndBattleEngravings);
    populateSelect(engraving2, classAndBattleEngravings);

    populateSelect(necklace_engraving1, classAndBattleEngravings);
    populateSelect(necklace_engraving2, classAndBattleEngravings);

    populateSelect(earring1_engraving1, classAndBattleEngravings);
    populateSelect(earring1_engraving2, classAndBattleEngravings);

    populateSelect(earring2_engraving1, classAndBattleEngravings);
    populateSelect(earring2_engraving2, classAndBattleEngravings);

    populateSelect(ring1_engraving1, classAndBattleEngravings);
    populateSelect(ring1_engraving2, classAndBattleEngravings);

    populateSelect(ring2_engraving1, classAndBattleEngravings);
    populateSelect(ring2_engraving2, classAndBattleEngravings);

    populateSelect(abilitystone_engraving1, battleEngravings);
    populateSelect(abilitystone_engraving2, battleEngravings);

    engraving1_nodelevel.selectedIndex = 0;
    engraving2_nodelevel.selectedIndex = 0;
    necklace_engraving1_nodelevel.selectedIndex = 0;
    necklace_engraving2_nodelevel.selectedIndex = 0;
    necklace_negative_nodelevel.selectedIndex = 0;
    earring1_engraving1_nodelevel.selectedIndex = 0;
    earring1_engraving2_nodelevel.selectedIndex = 0;
    earring1_negative_nodelevel.selectedIndex = 0;
    earring2_engraving1_nodelevel.selectedIndex = 0;
    earring2_engraving2_nodelevel.selectedIndex = 0;
    earring2_negative_nodelevel.selectedIndex = 0;
    ring1_engraving1_nodelevel.selectedIndex = 0;
    ring1_engraving2_nodelevel.selectedIndex = 0;
    ring2_engraving1_nodelevel.selectedIndex = 0;
    ring2_engraving2_nodelevel.selectedIndex = 0;
    abilitystone_engraving1_nodelevel.selectedIndex = 0;
    abilitystone_engraving2_nodelevel.selectedIndex = 0;
    abilitystone_negative_nodelevel.selectedIndex = 0;
    resetEngravings();
    createEngravingDisplayRow();
}

const populateSelect = function (selector, array) {
    selector.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        let option = document.createElement('option');
        option.innerHTML = array[i];
        option.value = array[i];
        selector.appendChild(option);
    }
}

// Engraving Display Related Functions

const engravingsAndLevels = [];

const updateEngravingsAndLevel = function (event) {
    let engravingName = event.path[1].children[0].value
    let nodeLevel = parseInt(event.target.value);
    const id = event.path[1].childNodes[1].id;

    const equippableEngravingsSelector = ['engraving1', 'engraving2'];

    if (equippableEngravingsSelector.includes(event.target.id)) {
        engravingName = event.target.value
    }

    if (isNaN(nodeLevel)) {
        nodeLevel = parseInt(event.path[1].lastElementChild.value);
    }

    if (engravingsAndLevels.find(element => element.id === id) === undefined) {
        engravingsAndLevels.push({
            id: id,
            engravingName: engravingName,
            nodeLevel: nodeLevel
        })
    }
    else {
        const index = engravingsAndLevels.findIndex(element => element.id === id);
        engravingsAndLevels[index] = {
            id: id,
            engravingName: engravingName,
            nodeLevel: parseInt(nodeLevel)
        }
    }
    consolidateAndFilterEngravingsAndLevels();
}



const resetEngravings = function () {
    consolidatedEngravings.length = 0;
    negativeEngravings.length = 0;
}

const consolidateAndFilterEngravingsAndLevels = function () {
    resetEngravings();

    engravingsAndLevels.forEach(element => {
        if (consolidatedEngravings.find(x => x.engravingName === element.engravingName) === undefined) {
            consolidatedEngravings.push(
                {
                    engravingName: element.engravingName,
                    nodeLevel: parseInt(element.nodeLevel)
                }
            )
        }
        else {
            const index = consolidatedEngravings.findIndex(x => x.engravingName === element.engravingName)
            consolidatedEngravings[index].nodeLevel += parseInt(element.nodeLevel);
        }
    });

    //console.log(consolidatedEngravings);

    for (let i = consolidatedEngravings.length - 1; i >= 0; i--) {
        if (RegExp(/Reduction/).test(consolidatedEngravings[i].engravingName)) {
            //console.log(consolidatedEngravings[i].engravingName, 'contains \'Reduction\'');
            negativeEngravings.push(...consolidatedEngravings.splice(i, 1))
        }
    }

    //Sort Engravings
    consolidatedEngravings.sort((a, b) => {
        return b.nodeLevel - a.nodeLevel;
    });

    //Sort Negative Engravings
    negativeEngravings.sort((a, b) => {
        return b.nodeLevel - a.nodeLevel;
    });

    consolidatedEngravings.push(...negativeEngravings);
    //console.log('Concat\'d Engravings:\n', consolidatedEngravings);

    engravingDisplay[0].innerHTML = '';
    consolidatedEngravings.forEach(e => {
        if (e.nodeLevel > 0) {
            engravingDisplay[0].append(createEngravingDisplayRow(e.engravingName, e.nodeLevel));
        }
    });
}

const createEngravingDisplayRow = function (engravingName, nodeLevel) {
    const engraving_display_row = document.createElement('div');
    const h2 = document.createElement('h2');

    let engravingLevel = 0;
    let overlevelNodes = 0;

    if (nodeLevel / 5 > 3) {
        engravingLevel = 3;
    }
    else {
        engravingLevel = Math.floor(nodeLevel / 5);
    }

    const engraving_title = document.createElement('div');
    engraving_title.innerHTML = `Lv. ${engravingLevel} ${engravingName}`;
    engraving_title.classList.add('engraving-title');
    if (nodeLevel > 15) {
        overlevelNodes = nodeLevel - 15;
        const span = document.createElement('span');
        span.innerHTML = `+${overlevelNodes}`;
        span.classList.add('overlevel-node');
        engraving_title.append(span);
    }

    h2.append(engraving_title);

    engraving_display_row.append(h2);

    for (let i = 1; i <= 15; i++) {
        const span = document.createElement('span');
        span.classList.add('diamond-node');
        if (i <= nodeLevel) {
            if (RegExp(/Reduction/).test(engravingName)) {
                span.classList.add('negative');
            }
            else {
                span.classList.add('filled');
            }
            span.innerHTML = '&#11201;';
        }
        else {
            span.classList.add('unfilled');
            span.innerHTML = '&#9671;'
        }

        if (i === 6 || i === 11) {
            span.classList.add('ps-3');
            span.classList.add('pe-1');
        }
        else {
            span.classList.add('px-1');
        }
        engraving_display_row.append(span);
    }
    return engraving_display_row;

}

populateClassDropdown();
populateClassEngravings();
playerClass.addEventListener('change', populateClassEngravings);
playerClass.addEventListener('change', updateEngravingsAndLevel);

const nodeLevelEventListeners = function () {
    engraving1_nodelevel.addEventListener('change', updateEngravingsAndLevel);
    engraving2_nodelevel.addEventListener('change', updateEngravingsAndLevel);
    //necklace
    necklace_engraving1_nodelevel.addEventListener('change', updateEngravingsAndLevel);
    necklace_engraving2_nodelevel.addEventListener('change', updateEngravingsAndLevel);
    necklace_negative_nodelevel.addEventListener('change', updateEngravingsAndLevel);
    //earring
    earring1_engraving1_nodelevel.addEventListener('change', updateEngravingsAndLevel);
    earring1_engraving2_nodelevel.addEventListener('change', updateEngravingsAndLevel);
    earring1_negative_nodelevel.addEventListener('change', updateEngravingsAndLevel);
    //earring2
    earring2_engraving1_nodelevel.addEventListener('change', updateEngravingsAndLevel);
    earring2_engraving2_nodelevel.addEventListener('change', updateEngravingsAndLevel);
    earring2_negative_nodelevel.addEventListener('change', updateEngravingsAndLevel);
    //ring1
    ring1_engraving1_nodelevel.addEventListener('change', updateEngravingsAndLevel);
    ring1_engraving2_nodelevel.addEventListener('change', updateEngravingsAndLevel);
    ring1_negative_nodelevel.addEventListener('change', updateEngravingsAndLevel);
    //ring2
    ring2_engraving1_nodelevel.addEventListener('change', updateEngravingsAndLevel);
    ring2_engraving2_nodelevel.addEventListener('change', updateEngravingsAndLevel);
    ring2_negative_nodelevel.addEventListener('change', updateEngravingsAndLevel);
    //abilitystone
    abilitystone_engraving1_nodelevel.addEventListener('change', updateEngravingsAndLevel);
    abilitystone_engraving2_nodelevel.addEventListener('change', updateEngravingsAndLevel);
    abilitystone_negative_nodelevel.addEventListener('change', updateEngravingsAndLevel);

    //engraving selector
    engraving1.addEventListener('change', updateEngravingsAndLevel);
    engraving2.addEventListener('change', updateEngravingsAndLevel);
    //necklace
    necklace_engraving1.addEventListener('change', updateEngravingsAndLevel);
    necklace_engraving2.addEventListener('change', updateEngravingsAndLevel);
    necklace_negative.addEventListener('change', updateEngravingsAndLevel);
    //earring
    earring1_engraving1.addEventListener('change', updateEngravingsAndLevel);
    earring1_engraving2.addEventListener('change', updateEngravingsAndLevel);
    earring1_negative.addEventListener('change', updateEngravingsAndLevel);
    //earring2
    earring2_engraving1.addEventListener('change', updateEngravingsAndLevel);
    earring2_engraving2.addEventListener('change', updateEngravingsAndLevel);
    earring2_negative.addEventListener('change', updateEngravingsAndLevel);
    //ring1
    ring1_engraving1.addEventListener('change', updateEngravingsAndLevel);
    ring1_engraving2.addEventListener('change', updateEngravingsAndLevel);
    ring1_negative.addEventListener('change', updateEngravingsAndLevel);
    //ring2
    ring2_engraving1.addEventListener('change', updateEngravingsAndLevel);
    ring2_engraving2.addEventListener('change', updateEngravingsAndLevel);
    ring2_negative.addEventListener('change', updateEngravingsAndLevel);
    //abilitystone
    abilitystone_engraving1.addEventListener('change', updateEngravingsAndLevel);
    abilitystone_engraving2.addEventListener('change', updateEngravingsAndLevel);
    abilitystone_negative.addEventListener('change', updateEngravingsAndLevel);
}

nodeLevelEventListeners();

