import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

class Character implements Fighter {
  private _maxLifePoints: number;
  private _strength: number;
  private _defense: number ;
  private _dexterity: number;
  private _energy: Energy;
  private _lifePoints: number;
  constructor(
    name: string,
    private _race: Race = new Elf(name, Character.randomNumber()),
    private _archetype: Archetype = new Mage(name),
  ) {
    this._strength = Character.randomNumber();
    this._defense = Character.randomNumber();
    this._dexterity = this._race.dexterity;
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._energy = {
      type_: this._archetype.energyType,
      amount: Character.randomNumber(),
    };
  }
  
  get strength():number {
    return this._strength;
  }

  get defense():number {
    return this._defense;
  }
  
  get lifePoints():number {
    return this._lifePoints;
  }

  private damagelifePoints(damage: number) {
    const life = this.lifePoints - damage;
    if (life <= 0) {
      this._lifePoints = -1;
    } else {
      this._lifePoints = life;
    }
  }

  get race():Race {
    return this._race;
  }

  get energy(): Energy {
    return { ...this._energy };
  } 

  get dexterity():number {
    return this._dexterity;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  set maxLifePoints(newLifePoints: number) {
    if (newLifePoints < this.race.maxLifePoints) {
      this._maxLifePoints = newLifePoints;
    } else {
      this._maxLifePoints = this.race.maxLifePoints;
    }
  }

  get archetype():Archetype {
    return this._archetype;
  }

  static randomNumber():number {
    return Math.floor(Math.random() * (10) + 1);
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  special?(enemy: Fighter): void {
    // Especial tem uma chance de 50% de acontecer;
    const num = Character.randomNumber();
    if (num > 5) {
      enemy.receiveDamage(this._strength * 2);
    }
  }

  levelUp(): void {
    this.maxLifePoints += Character.randomNumber();
    this._lifePoints = this.maxLifePoints;
    this._energy.amount = 10;
    this._defense += Character.randomNumber();
    this._strength += Character.randomNumber();
    this._dexterity += Character.randomNumber();
  }

  receiveDamage(amount: number): number {
    const damage = amount - this._defense;
    if (damage > 0) {
      this.damagelifePoints(damage);
    }
    return this.lifePoints;
  }
}

export default Character;