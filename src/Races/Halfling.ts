import Race from './Race';

class Halfling extends Race {
  static _createdRacesInstances = 0;
  public _maxLifePoints:number;
  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._createdRacesInstances += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._createdRacesInstances;
  }
}

export default Halfling;