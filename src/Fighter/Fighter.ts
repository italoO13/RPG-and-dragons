import Energy from '../Energy';

interface Fighter {
  lifePoints: number;
  readonly strength: number;
  readonly defense: number;
  energy?: Energy

  attack(enemy: Fighter): void;
  special?(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(amount: number): number
}

export default Fighter;