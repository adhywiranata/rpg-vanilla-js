var wyvernHp    = document.getElementById('wyvern-hp');
var wyvernMaxHp = document.getElementById('wyvern-max-hp');
var wyvernHpBar = document.getElementById('wyvern-hp-bar');

var wyvernObj = {
  hp: gameConfig.wyvernMaxHp,
  maxHp: gameConfig.wyvernMaxHp,
  defense: gameConfig.wyvernDefense,
  speed: gameConfig.wyvernSpeed,
  hpBar: 250,
  fullHpBar: 250,
  damageModifier: {
    darkClaw: damageConfig.wyvern.darkClaw,
    wingFlap: damageConfig.wyvern.wingFlap,
    blackMiasma: damageConfig.wyvern.blackMiasma,
    ancientHellfire: damageConfig.wyvern.ancientHellfire,
  },
  actionMove: {
    darkClaw: 'Dark Claw',
    wingFlap: 'Wing Flap',
    blackMiasma: 'Black Miasma',
    ancientHellfire: 'Ancient Hellfire',
  },
  dealDamage: function(damage) {
    // amount of damage inflicted

    damage = damage / this.defense;
    this.hp = this.hp - damage;
    if(this.hp <= 0) {
      this.hp = 0;
      setTimeout(function() {
        document.getElementById('battle-bgm').pause();
        document.getElementById('win-bgm').play();
        document.getElementById('tutorial-screen').style.display = 'block';
        document.getElementById('win-screen').style.display = 'block';
      }, 2000);
    }
    // TRANSFORM
    if(this.hp < (this.maxHp / 2)) {
      document.getElementById('notification-window').innerHTML = 'Wyvern\'s is now on rage mode. Wyvern now has bigger defense and damage!';
      document.getElementById('wyvern-char').style.zoom = 1;
      this.speed = 2;
      this.defense = 2;
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
var kazumaThumb = document.getElementById('kazuma-thumb');

var kazumaObj = {
  hp: gameConfig.kazumaMaxHp,
  maxHp: gameConfig.kazumaMaxHp,
  hpBar: 150,
  fullHpBar: 150,
  isDead: false,
  dealDamage: function(damage) {
    if(this.hp <= 0) {
      if(damage !== -99999) // IF damage is not -99999 = is not used by Salvation!
      return false;
    }
    this.hp = this.hp - damage;
    if(this.hp >= gameConfig.kazumaMaxHp) {
      this.hp = gameConfig.kazumaMaxHp;
    }
    if(this.hp <= 0) {
      this.hp = 0;
      kazumaHp.style.color = '#D91E18';

      // Is Dead
      this.isDead = true;
      document.getElementById('action-stab').disabled = true;
      document.getElementById('action-steal').disabled = true;
      document.getElementById('action-dakunes-shield').disabled = true;

      // Lose if all team is dead
      if(kazumaObj.hp <= 0 && meguminObj.hp <= 0 && aquaObj.hp <= 0) {
        setTimeout(function() {
          document.getElementById('battle-bgm').pause();
          document.getElementById('lose-bgm').play();
          document.getElementById('tutorial-screen').style.display = 'block';
          document.getElementById('lose-screen').style.display = 'block';
        }, 100);
      }
    }
    else {
      kazumaHp.style.color = '#FFFFFF';
    }

    // Is Dead but Healed!
    if(this.isDead === true && this.hp > 0) {
      document.getElementById('action-stab').disabled = false;
      document.getElementById('action-steal').disabled = false;
      document.getElementById('action-dakunes-shield').disabled = false;
      this.isDead = false;
    }

    kazumaHp.innerHTML = this.hp;

    var damagePercentage = damage / this.maxHp;
    this.hpBar = this.hpBar - (damagePercentage * this.fullHpBar);

    if(this.hpBar >= this.fullHpBar) {
      this.hpBar = this.fullHpBar;
    }
    if(this.hpBar < (this.fullHpBar / 2)) {
      kazumaHpBar.style.background = '#F7CA18';
    }
    else if(this.hpBar < (this.fullHpBar / 3)) {
      kazumaHpBar.style.background = '#D91E18';
    }
    else {
      kazumaHpBar.style.background = '#3FC380';
    }

    kazumaHpBar.style.width = this.hpBar + 'px';
  }
}

kazumaMaxHp.innerHTML = gameConfig.kazumaMaxHp;
kazumaObj.dealDamage(0);

var aquaHp    = document.getElementById('aqua-hp');
var aquaMaxHp = document.getElementById('aqua-max-hp');
var aquaHpBar = document.getElementById('aqua-hp-bar');
var aquaThumb = document.getElementById('aqua-thumb');

var aquaObj = {
  hp: gameConfig.aquaMaxHp,
  maxHp: gameConfig.aquaMaxHp,
  hpBar: 150,
  fullHpBar: 150,
  isDead: false,
  dealDamage: function(damage) {
    this.hp = this.hp - damage;
    if(this.hp >= gameConfig.aquaMaxHp) {
      this.hp = gameConfig.aquaMaxHp;
    }
    if(this.hp <= 0) {
      this.hp = 0;
      aquaHp.style.color = '#D91E18';

      // Is Dead
      this.isDead = true;
      document.getElementById('action-heal').disabled = true;
      document.getElementById('action-salvation').disabled = true;
      document.getElementById('action-smack').disabled = true;

      if(kazumaObj.hp <= 0 && meguminObj.hp <= 0 && aquaObj.hp <= 0) {
        setTimeout(function() {
          document.getElementById('battle-bgm').pause();
          document.getElementById('lose-bgm').play();
          document.getElementById('tutorial-screen').style.display = 'block';
          document.getElementById('lose-screen').style.display = 'block';
        }, 100);
      }
    }
    else {
      aquaHp.style.color = '#FFFFFF';
    }
    aquaHp.innerHTML = this.hp;

    var damagePercentage = damage / this.maxHp;
    this.hpBar = this.hpBar - (damagePercentage * this.fullHpBar);

    if(this.hpBar >= this.fullHpBar) {
      this.hpBar = this.fullHpBar;
    }
    if(this.hpBar < (this.fullHpBar / 2)) {
      aquaHpBar.style.background = '#F7CA18';
    }
    else if(this.hpBar < (this.fullHpBar / 3)) {
      aquaHpBar.style.background = '#D91E18';
    }
    else {
      aquaHpBar.style.background = '#3FC380';
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
  isDead: false,
  dealDamage: function(damage) {
    if(this.hp <= 0) {
      if(damage !== -99999) // IF damage is not -99999 = is not used by Salvation!
      return false;
    }
    this.hp = this.hp - damage;
    if(this.hp >= gameConfig.meguminMaxHp) {
      this.hp = gameConfig.meguminMaxHp;
    }
    if(this.hp <= 0) {
      this.hp = 0;
      meguminHp.style.color = '#D91E18';

      // Is Dead
      this.isDead = true;
      document.getElementById('action-explosion').disabled = true;
      document.getElementById('action-mega-blast').disabled = true;
      document.getElementById('action-mana-recharge').disabled = true;

      if(kazumaObj.hp <= 0 && meguminObj.hp <= 0 && aquaObj.hp <= 0) {
        setTimeout(function() {
          document.getElementById('battle-bgm').pause();
          document.getElementById('lose-bgm').play();
          document.getElementById('tutorial-screen').style.display = 'block';
          document.getElementById('lose-screen').style.display = 'block';
        }, 100);
      }
    }
    else {
      meguminHp.style.color = '#FFFFFF';
    }

    // Is Dead but Healed!
    if(this.isDead === true && this.hp > 0) {
      document.getElementById('action-explosion').disabled = false;
      document.getElementById('action-mega-blast').disabled = false;
      document.getElementById('action-mana-recharge').disabled = false;
      this.isDead = false;
    }

    meguminHp.innerHTML = this.hp;

    var damagePercentage = damage / this.maxHp;
    this.hpBar = this.hpBar - (damagePercentage * this.fullHpBar);

    if(this.hpBar >= this.fullHpBar) {
      this.hpBar = this.fullHpBar;
    }
    if(this.hpBar < (this.fullHpBar / 2)) {
      meguminHpBar.style.background = '#F7CA18';
    }
    else if(this.hpBar < (this.fullHpBar / 3)) {
      meguminHpBar.style.background = '#D91E18';
    }
    else {
      meguminHpBar.style.background = '#3FC380';
    }
    meguminHpBar.style.width = this.hpBar + 'px';
  }
}

meguminMaxHp.innerHTML = gameConfig.meguminMaxHp;
meguminObj.dealDamage(0);
