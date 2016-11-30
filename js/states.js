var wyvernHp    = document.getElementById('wyvern-hp');
var wyvernMaxHp = document.getElementById('wyvern-max-hp');
var wyvernHpBar = document.getElementById('wyvern-hp-bar');

var wyvernObj = {
  hp: gameConfig.wyvernMaxHp,
  maxHp: gameConfig.wyvernMaxHp,
  hpBar: 250,
  fullHpBar: 250,
  damageModifier: {
    darkClaw: 100,
  },
  dealDamage: function(damage) {
    this.hp = this.hp - damage;
    if(this.hp <= 0) {
      this.hp = 0;
    }
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

wyvernMaxHp.innerHTML = gameConfig.wyvernMaxHp;
wyvernObj.dealDamage(0);

var kazumaHp    = document.getElementById('kazuma-hp');
var kazumaMaxHp = document.getElementById('kazuma-max-hp');
var kazumaHpBar = document.getElementById('kazuma-hp-bar');

var kazumaObj = {
  hp: gameConfig.kazumaMaxHp,
  maxHp: gameConfig.kazumaMaxHp,
  hpBar: 150,
  fullHpBar: 150,
  dealDamage: function(damage) {
    this.hp = this.hp - damage;
    if(this.hp <= 0) {
      this.hp = 0;
      kazumaHp.style.color = '#D91E18';
    }
    else {
      kazumaHp.style.color = '#FFFFFF';
    }
    kazumaHp.innerHTML = this.hp;

    var damagePercentage = damage / this.maxHp;
    this.hpBar = this.hpBar - (damagePercentage * this.fullHpBar);
    if(this.hpBar < (this.fullHpBar / 2)) {
      kazumaHpBar.style.background = '#F7CA18';
    }
    if(this.hpBar < (this.fullHpBar / 3)) {
      kazumaHpBar.style.background = '#D91E18';
    }
    kazumaHpBar.style.width = this.hpBar + 'px';
  }
}

kazumaMaxHp.innerHTML = gameConfig.kazumaMaxHp;
kazumaObj.dealDamage(0);

var aquaHp    = document.getElementById('aqua-hp');
var aquaMaxHp = document.getElementById('aqua-max-hp');
var aquaHpBar = document.getElementById('aqua-hp-bar');

var aquaObj = {
  hp: gameConfig.aquaMaxHp,
  maxHp: gameConfig.aquaMaxHp,
  hpBar: 150,
  fullHpBar: 150,
  dealDamage: function(damage) {
    this.hp = this.hp - damage;
    if(this.hp <= 0) {
      this.hp = 0;
      aquaHp.style.color = '#D91E18';
    }
    else {
      aquaHp.style.color = '#FFFFFF';
    }
    aquaHp.innerHTML = this.hp;

    var damagePercentage = damage / this.maxHp;
    this.hpBar = this.hpBar - (damagePercentage * this.fullHpBar);
    if(this.hpBar < (this.fullHpBar / 2)) {
      aquaHpBar.style.background = '#F7CA18';
    }
    if(this.hpBar < (this.fullHpBar / 3)) {
      aquaHpBar.style.background = '#D91E18';
    }
    aquaHpBar.style.width = this.hpBar + 'px';
  }
}

aquaMaxHp.innerHTML = gameConfig.aquaMaxHp;
aquaObj.dealDamage(0);


var meguminHp    = document.getElementById('megumin-hp');
var meguminMaxHp = document.getElementById('megumin-max-hp');
var meguminHpBar = document.getElementById('megumin-hp-bar');

var meguminObj = {
  hp: gameConfig.meguminMaxHp,
  maxHp: gameConfig.meguminMaxHp,
  hpBar: 150,
  fullHpBar: 150,
  dealDamage: function(damage) {
    this.hp = this.hp - damage;
    if(this.hp <= 0) {
      this.hp = 0;
      meguminHp.style.color = '#D91E18';
    }
    else {
      meguminHp.style.color = '#FFFFFF';
    }
    meguminHp.innerHTML = this.hp;

    var damagePercentage = damage / this.maxHp;
    this.hpBar = this.hpBar - (damagePercentage * this.fullHpBar);
    if(this.hpBar < (this.fullHpBar / 2)) {
      meguminHpBar.style.background = '#F7CA18';
    }
    if(this.hpBar < (this.fullHpBar / 3)) {
      meguminHpBar.style.background = '#D91E18';
    }
    meguminHpBar.style.width = this.hpBar + 'px';
  }
}

meguminMaxHp.innerHTML = gameConfig.meguminMaxHp;
meguminObj.dealDamage(0);
