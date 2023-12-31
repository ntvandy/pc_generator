// From Player's Handbook 5e //
// --Races-- //
const raceArr = ['Dragonborn', 'Dwarf', 'Elf', 
                 'Gnome', 'Half-Elf', 'Halfling', 
                 'Half-Orc', 'Human', 'Tiefling'];
// --Classes-- //
const classArr = ['Barbarian', 'Bard', 'Cleric', 
                  'Druid', 'Fighter', 'Monk', 
                  'Paladin', 'Ranger', 'Rouge', 
                  'Sorcerer', 'Warlock', 'Wizard'];
// Decides Playable Character's Race //
const setRace = () => {
    var rand = Math.floor(Math.random() * 8);
    return raceArr[rand];
}
// Decides Playable Character's Class //
function setClass() {
    let pcClass = undefined;
    var rand = Math.floor(Math.random() * 11);
    return pcClass = classArr[rand];
}
// Decides Playable Character's Full Name //
let pcRace = setRace();
function setName() {
    let wholeName = '';
    let first = '';
    let last = '';

    var mOrF = Math.floor(Math.random() * 2);
    var rFirst = Math.floor(Math.random() * 14);
    var rLast = Math.floor(Math.random() * 17)

    switch (pcRace) {
        case 'Dragonborn': {
            const mascNames = ['Arjhan', 'Balasar', 'Bharash', 'Donaar', 'Ghesh', 
                               'Heskan', 'Kriv', 'Medrash', 'Mehen', 'Nadarr', 
                               'Pandjed', 'Patrin', 'Rhogar', 'Shamash', 'Shedinn']; 
            const femNames = ['Akra', 'Biri', 'Daar', 'Farideh', 'Harann', 
                              'Havilar', 'Jheri', 'Kava', 'Korinn', 'Mishann', 
                              'Nala', 'Perra', 'Raiann', 'Sora', 'Surina']; 
            const clanNames = ['Clethtinthiallor', 'Daardendrian', 'Delmirev', 'Drachedandion', 'Fenkenkabradon', 'Kepeshkmolik', 
                               'Kerrhylon', 'Kimbatuul', 'Linxakasendalor', 'Myastan', 'Nemmonis', 'Norixius', 
                               'Ophinshtalajiir', 'Prexijandilin', 'Shestendeliath', 'Turnuroth', 'Verthisathurgiesh', 'Yarjerit'];  
            
            if (mOrF === 0) { //Masculine
                first = mascNames[rFirst];
            } else if (mOrF === 1) { //Feminine
                first = femNames[rFirst];
            }

            last = clanNames[rLast];
            wholeName = `${first} of clan ${last}`;
            break;
        }
        case 'Dwarf': {
            const mascNames = ['Adrik', 'Alberich', 'Baern', 'Barendd', 'Brottor', 
                               'Bruenor', 'Dain', 'Darrak', 'Delg', 'Eberk', 
                               'Einkil', 'Fargrim', 'Flint', 'Gardain', 'Harbek']; 
            const femNames = ['Amber', 'Artin', 'Audhild', 'Bardryn', 'Dagnal', 
                              'Diesa', 'Eldeth', 'Falkrunn', 'Finellen', 'Gunnloda', 
                              'Gurdis', 'Helja', 'Hlin', 'Kathra', 'Kristryd']; 
            const clanNames = ['Balderk', 'Battlehammer', 'Brawnanvil', 'Dankil', 'Fireforge', 'Frostbeard', 
                               'Gorunn', 'Goldtooth', 'Holderhek', 'Ironfist', 'Iridus', 'Loderr', 
                               'Lutgehr', 'Rumnaheim', 'Strakeln', 'Torunn', 'Ungart', 'Zygart'];  
            
            if (mOrF === 0) { //Masculine
                first = mascNames[rFirst];
            } else if (mOrF === 1) { //Feminine
                first = femNames[rFirst];
            }

            last = clanNames[rLast];
            wholeName = `${first} of clan ${last}`;
            break;
        }
        case 'Elf': {
            const mascNames = ['Adran', 'Aelar', 'Aramil', 'Arannis', 'Aust', 
                               'Beiro', 'Berrian', 'Carric', 'Enialis', 'Erdan', 
                               'Erevan', 'Galinndan', 'Hadarai', 'Heian', 'Himo']; 
            const femNames = ['Adrie', 'Althaea', 'Anastrianna', 'Andraste', 'Antinua', 
                              'Bethrynna', 'Birel', 'Caelynn', 'Drusilia', 'Enna', 
                              'Felosial', 'Ielenia', 'Jelenneth', 'Keyleth', 'Leshanna']; 
            const lastNames = ['Amakiir', 'Amastacia', 'Galanodel', 'Holimion', 'Ilphelkiir', 'Liadon', 
                               'Meliamne', 'Naïlo', 'Siannodel', 'Xiloscient', 'Inawraek', 'Carlen', 
                               'Norgolor', 'Xyrrona', 'Genjeon', 'Zumjyre', 'Patumal' ,'Quicaryn'];  
            
            if (mOrF === 0) { //Masculine
                first = mascNames[rFirst];
            } else if (mOrF === 1) { //Feminine
                first = femNames[rFirst];
            }

            last = lastNames[rLast];
            wholeName = `${first} ${last}`;
            break;
        }
        case 'Gnome': {
            const mascNames = ['Alston', 'Alvyn', 'Boddynock', 'Brocc', 'Burgell', 
                               'Dimble', 'Eldon', 'Erky', 'Fonkin', 'Frug', 
                               'Gerbo', 'Gimble', 'Glim', 'Jebeddo', 'Kellen']; 
            const femNames = ['Bimpnottin', 'Breena', 'Caramip', 'Carlin', 'Donella', 
                              'Duvamil', 'Ella', 'Ellyjobell', 'Ellywick', 'Lilli', 
                              'Loopmottin', 'Lorilla', 'Mardnab', 'Nissa', 'Nyx']; 
            const clanNames = ['Beren', 'Daergel', 'Folkor', 'Garrick', 'Nackle', 'Murnig', 
                               'Ningel', 'Raulnor', 'Scheppen', 'Timbers', 'Turen', 'Faskit', 
                               'Feldrin', 'Bildre', 'Scruffle', 'Riffni', 'Tarin', 'Fandee'];  
            
            if (mOrF === 0) { //Masculine
                first = mascNames[rFirst];
            } else if (mOrF === 1) { //Feminine
                first = femNames[rFirst];
            }

            last = clanNames[rLast];
            wholeName = `${first} of clan ${last}`;
            break;
        }
        case 'Half-Elf': {
            const mascNames = ['Adran', 'Bhedeir', 'Aramil', 'Babrar', 'Aust', 
                               'Gibren', 'Berrian', 'Onverth', 'Enialis', 'Tihke', 
                               'Erevan', 'Fu', 'Hadarai', 'Khasan', 'Himo']; 
            const femNames = ['Adrie', 'Neihmusmoh', 'Anastrianna', 'Rithe', 'Antinua', 
                              'Cetha', 'Birel', 'Nethre', 'Drusilia', 'Caznurvi', 
                              'Felosial', 'Cih', 'Jelenneth', 'Alra', 'Leshanna']; 
            const lastNames = ['Amakiir', 'Nister', 'Galanodel', 'Khunni', 'Ilphelkiir', 'Clanless', 
                               'Meliamne', 'Suknuv', 'Siannodel', 'Edruldo', 'Inawraek', 'Sesk', 
                               'Norgolor', 'Vipvuud', 'Genjeon', 'Alpenwoods', 'Patumal' ,'Snakebough'];
            
            if (mOrF === 0) { //Masculine
                first = mascNames[rFirst];
            } else if (mOrF === 1) { //Feminine
                first = femNames[rFirst];
            }

            last = lastNames[rLast];
            wholeName = `${first} ${last}`;
            break;
        }
        case 'Halfling': {
            const mascNames = ['Alton', 'Ander', 'Cade', 'Corrin', 'Eldon', 
                               'Errich', 'Finnan', 'Garret', 'Lindal', 'Lyle', 
                               'Merric', 'Milo', 'Osborn', 'Perrin', 'Reed'];
            const femNames = ['Andry', 'Bree', 'Callie', 'Cora', 'Euphemia', 
                              'Jillian', 'Kithri', 'Lavinia', 'Lidda', 'Merla', 
                              'Nedda', 'Paela', 'Portia', 'Seraphina', 'Shaena'];
            const lastNames = ['Brushgather', 'Goodbarrel', 'Greenbottle', 'High-hill', 'Hilltopple', 'Leagallow', 
                               'Tealeaf', 'Thorngage', 'Tosscobble', 'Underbough', 'Riverwillow', 'Ravenkettle', 
                               'Fogtopple', 'Stillbottle', 'Mosscobble', 'Thistlestride', 'Quickpot', 'Softlade'];
            
            if (mOrF === 0) { //Masculine
                first = mascNames[rFirst];
            } else if (mOrF === 1) { //Feminine
                first = femNames[rFirst];
            }

            last = lastNames[rLast];
            wholeName = `${first} ${last}`;
            break;
        }
        case 'Half-Orc': {
            const mascNames = ['Dench', 'Feng', 'Gell', 'Henk', 'Holg', 
                               'Imsh', 'Keth', 'Krusk', 'Mhurren', 'Ront', 
                               'Shump', 'Thokk', 'Krukz', 'Gulmig', 'Krig'];
            const femNames = ['Baggi', 'Emen', 'Engong', 'Kansif', 'Myev', 
                              'Neega', 'Ovak', 'Ownka', 'Shautha', 'Sutha', 
                              'Vola', 'Volen', 'Yevelda', 'Arone', 'Rohami'];
            
            if (mOrF === 0) { //Masculine
                first = mascNames[rFirst];
            } else if (mOrF === 1) { //Feminine
                first = femNames[rFirst];
            }

            wholeName = first;
            break;
        }
        case 'Human': {
            const mascNames = ['Huhnad', 'Bhedeir', 'Tii', 'Babrar', 'Gibren', 
                               'Bral', 'Onverth', 'Zath', 'Barhuhvon', 'Tihke', 
                               'Zavik', 'Fu', 'Hostuz', 'Mienchirvos', 'Khasan'];
            const femNames = ['Neihmusmoh', 'Feihlel', 'Caznurvi', 'Alra', 'Nethre', 
                              'Cih', 'Zeflerha', 'Cetha', 'Rithe', 'Aittf', 
                              'Ads', 'Dimvife', 'Eril', 'Voza', 'Milre'];
            const lastNames = ['Khunni', 'Nister', 'Heartforce', 'Chan', 'Wai', 'Clanless', 
                               'Calolu', 'Vichum', 'Trelbuvyabo', 'Nilmirna', 'Suknuv', 'Alpenwoods', 
                               'Snakebough', 'Edruldo', 'Vipvuud', 'Etvaryedzo', 'Sesk' ,'Voidriver'];
            
            if (mOrF === 0) { //Masculine
                first = mascNames[rFirst];
            } else if (mOrF === 1) { //Feminine
                first = femNames[rFirst];
            }

            last = lastNames[rLast];
            wholeName = `${first} ${last}`;
            break;
        }
        case 'Tiefling': {
            const mascNames = ['Akmenos', 'Amnon', 'Barakas', 'Damakos', 'Ekemon', 
                               'Iados', 'Kairon', 'Leucis', 'Melech', 'Mordai', 
                               'Morthos', 'Pelaios', 'Skamos', 'Therai', 'Zherilius'];
            const femNames = ['Akta', 'Anakis', 'Bryseis', 'Criella', 'Damaia', 
                              'Ea', 'Kallista', 'Lerissa', 'Makaria', 'Nemeia', 
                              'Orianna', 'Phelaia', 'Rieta', 'Zeborys', 'Yugoria'];
            
            if (mOrF === 0) { //Masculine
                first = mascNames[rFirst];
            } else if (mOrF === 1) { //Feminine
                first = femNames[rFirst];
            }

            wholeName = first;
            break;
        }
    }
    return wholeName;
}

console.log(`Your DnD playable character, ${setName()}, is a ${pcRace} ${setClass()}`);