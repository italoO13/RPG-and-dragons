import Race from './Race';

class Halfling extends Race {
  static _createdRacesInstances = 0;
  public _maxLifePoinsts = 0;
  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoinsts = 60;
    Halfling._createdRacesInstances += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoinsts;
  }

  static createdRacesInstances(): number {
    return Halfling._createdRacesInstances;
  }
}

export default Halfling;