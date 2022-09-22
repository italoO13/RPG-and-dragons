import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static _createdArchetypeInstances = 0;
  private _energyType: EnergyType;
  constructor(name:string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._createdArchetypeInstances += 1; 
  }

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return Ranger._createdArchetypeInstances;
  }
}

export default Ranger;