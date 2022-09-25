import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

type EnemySimple = Monster | Fighter | SimpleFighter;

class PVE extends Battle {
  private _player: Fighter;
  private _enemy: EnemySimple[] = [];
  constructor(player:Fighter, enemy:EnemySimple[]) {
    super(player);
    this._player = player;
    this.enemy = enemy;
  }

  set enemy(enemy:EnemySimple[]) {
    if (enemy.length < 1) {
      throw new Error('É necessário pelo menos um monstro');
    }
    this._enemy = enemy;
  }

  fight(): number {
    this._enemy.forEach((ene: EnemySimple) => {
      while (ene.lifePoints > 0 && this._player.lifePoints > 0) {
        ene.attack(this._player);
        this._player.attack(ene);
      }
    });
    return super.fight();
  }
}

export default PVE;