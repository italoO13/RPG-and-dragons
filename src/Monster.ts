import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor(lifePoints = 85, strength = 63) {
    this._lifePoints = lifePoints;
    this._strength = strength;
  }

  set lifePoints(life:number) {
    this._lifePoints = life;
  }

  get lifePoints():number {
    return this._lifePoints;
  }

  get strength():number {
    return this._strength;
  }

  private damagelifePoints(damage: number) {
    const life = this._lifePoints - damage;
    if (life <= 0) {
      this._lifePoints = -1;
    } else {
      this._lifePoints = life;
    }
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    this.damagelifePoints(attackPoints);
    return this._lifePoints;
  }
}

export default Monster;