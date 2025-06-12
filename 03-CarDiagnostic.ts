
let carBody = { material: 'aluminum', state: 'scratched'};
let tires = {airPressure: 30, condition: 'needs change'};
let engine = {horsepower: 300, oilDensity: 780};

type carBodyType =  { material: string, state: string};
type tiresType = {airPressure: number, condition: string};
type engineType = {horsepower: number, oilDensity: number};
type diagnostic = {partName: string, runDiagnostics: () => string};
type speedometer = {speed : number};

//Intersection types & -> комбиниране на множество типове в един
//Притежава всички свойства на комбинираните типове

function carDiagnostic(carBody: carBodyType & diagnostic,
    tires: tiresType & diagnostic,
    engine: engineType & diagnostic
){
}

console.log(carDiagnostic({ material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics() { return this.partName;} },

{ airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics() { return this.partName;} },

{ horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics() { return this.partName;}  }) )

