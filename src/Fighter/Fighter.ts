import Energy from '../Energy';

interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
  attack(enemy: Fighter): void;
  special?(energy: Fighter): void;
  receiveDamage(attackPoints: number): number;
  levelUp(): void;
}

export default Fighter;
