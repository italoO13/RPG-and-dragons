import Race from './Race';

class Dwarf extends Race {
  static _createdRacesInstances = 0;
  public _maxLifePoinsts = 0;
  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoinsts = 80;
    Dwarf._createdRacesInstances += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoinsts;
  }

  static createdRacesInstances(): number {
    return Dwarf._createdRacesInstances;
  }
}

export default Dwarf;