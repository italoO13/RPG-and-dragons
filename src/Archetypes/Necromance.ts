import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static _createdArchetypeInstances = 0;
  private _energyType: EnergyType;
  constructor(name:string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._createdArchetypeInstances += 1;
  }

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return Necromancer._createdArchetypeInstances;
  }
}

export default Necromancer;