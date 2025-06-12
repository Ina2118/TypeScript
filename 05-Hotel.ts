
type gym = { number: 1, train: () => void } & ({ hallway: 'A', pass?: 'Guest' } | { hallway: 'C'});
type resturant = { number: 2, dine: () => void } & ({ hallway: 'A', pass?: 'Guest' } | { hallway: 'C'});
type hotel = { number: 3, sleep: () => void , hallway: 'A'|'C'}
type simplified = gym | resturant | hotel;

function visitFloor(floor: simplified) {

    switch (floor.number) {

        case 1: floor.train(); return;
        case 2: floor.dine(); return;
        case 3: floor.sleep(); return;

    }

}


// Working calls
visitFloor({ train() { }, number: 1, hallway: 'A', pass: 'Guest' });
visitFloor({ dine() { }, number: 2, hallway: 'A' });
visitFloor({ sleep() { }, number: 3, hallway: 'C' });
visitFloor({ train() { }, number: 1, hallway: 'C' });
visitFloor({ train() { }, number: 1, hallway: 'A' });
visitFloor({ dine() { }, number: 2, hallway: 'A', pass: 'Guest' });

// TS ERROR
// visitFloor({ train() { }, number: 4, hallway: 'A' });
// visitFloor({ train() { }, number: 1, hallway: 'C', pass: 'Guest' });
// visitFloor({ train() { }, number: 2, hallway: 'A' });
// visitFloor({ train() { }, number: 3, hallway: 'C' });
// visitFloor({ train() { }, number: 3, hallway: 'C', pass: 'Guest' });