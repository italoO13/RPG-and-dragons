import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  static _createdArchetypeInstances = 0;
  private _energyType: EnergyType;
  constructor(name:string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._createdArchetypeInstances += 1;
  }

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return Warrior._createdArchetypeInstances;
  }
}

export default Warrior;