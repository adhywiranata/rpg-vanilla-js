var wyvernHp = document.getElementById('wyvern-hp');
var wyvernHpBar = document.getElementById('wyvern-hp-bar');

var wyvernObj = {
  hp: gameConfig.wyvernMaxHp,
  maxHp: gameConfig.wyvernMaxHp,
  hpBar: 250,
  fullHpBar: 250,
  dealDamage: function(damage) {
    this.hp = this.hp - damage;
    wyvernHp.innerHTML = this.hp;

    var damagePercentage = damage / this.maxHp;
    this.hpBar = this.hpBar - (damagePercentage * this.fullHpBar);
    if(this.hpBar < 125) {
      wyvernHpBar.style.background = '#F7CA18';
    }
    if(this.hpBar < 50) {
      wyvernHpBar.style.background = '#D91E18';
    }
    wyvernHpBar.style.width = this.hpBar + 'px';
  }
}

wyvernObj.dealDamage(5000);
