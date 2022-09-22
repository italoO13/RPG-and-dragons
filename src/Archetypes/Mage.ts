import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static _createdArchetypeInstances = 0;
  private _energyType: EnergyType;
  constructor(name:string) {
    super(name);
    this._energyType = 'mana';
    Mage._createdArchetypeInstances += 1;
  }

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return Mage._createdArchetypeInstances;
  }
}

export default Mage;