import Race from './Race';

class Orc extends Race {
  static _createdRacesInstances = 0;
  public _maxLifePoinsts = 0;
  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoinsts = 74;
    Orc._createdRacesInstances += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoinsts;
  }

  static createdRacesInstances(): number {
    return Orc._createdRacesInstances;
  }
}

export default Orc;