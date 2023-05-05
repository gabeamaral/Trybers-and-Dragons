import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _createdNecromancer = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._createdNecromancer += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._createdNecromancer;
  }
}

export default Necromancer;
