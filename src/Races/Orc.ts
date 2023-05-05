import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _createdOrc = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._createdOrc += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._createdOrc;
  }
}

export default Orc;
