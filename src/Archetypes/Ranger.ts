import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _createdRanger = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._createdRanger += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger._createdRanger;
  }
}

export default Ranger;