import Race from './Race';

class Orc extends Race {
  static _createdRacesInstances = 0;
  public _maxLifePoints:number;
  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._createdRacesInstances += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._createdRacesInstances;
  }
}

export default Orc;