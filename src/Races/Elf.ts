import Race from './Race';

class Elf extends Race {
  static _createdRacesInstances = 0;

  public _maxLifePoinsts = 0;
  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoinsts = 99;
    Elf._createdRacesInstances += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoinsts;
  }

  static createdRacesInstances(): number {
    return Elf._createdRacesInstances;
  }
}

export default Elf;