// Select Characters DOM
var meguminCharImg  = document.getElementById('megumin-char');
var aquaCharImg     = document.getElementById('aqua-char');
var kazumaCharImg   = document.getElementById('kazuma-char');
var wyvernCharImg   = document.getElementById('wyvern-char');

// Character Stats Thumb DOM
var meguminThumbImg = document.getElementById('megumin-thumb');
var aquaThumbImg = document.getElementById('aqua-thumb');
var kazumaThumbImg = document.getElementById('kazuma-thumb');

// SFX DOM
var powSfxImg   = document.getElementById('pow-sfx');
var powSfx2Img  = document.getElementById('pow-sfx-2');
var powSfx3Img  = document.getElementById('pow-sfx-3');

// Audio DOM
var introBGMAudio       = document.getElementById('intro-bgm');
var battleBGMAudio      = document.getElementById('battle-bgm');
var hitSoundAudio       = document.getElementById('hit-sound');
var bombSoundAudio      = document.getElementById('bomb-sound');
var explodeSoundAudio   = document.getElementById('explode-sound');
var explosionSoundAudio = document.getElementById('explosion-sound');
var healSoundAudio      = document.getElementById('heal-sound');
var roarSoundAudio      = document.getElementById('roar-sound');
var stabSoundAudio      = document.getElementById('stab-sound');

var notificationWindow = document.getElementById('notification-window');
notificationWindow.innerHTML = '';

roarSoundAudio.volume = 0.5;

// Damage DOM
var meguminToWyvernDamageH5 = document.getElementById('megumin-to-wyvern-damage');
var aquaToWyvernDamageH5    = document.getElementById('aqua-to-wyvern-damage');
var kazumaToWyvernDamageH5  = document.getElementById('kazuma-to-wyvern-damage');
var toMeguminDamageH5       = document.getElementById('to-megumin-damage');
var toAquaDamageH5          = document.getElementById('to-aqua-damage');
var toKazumaDamageH5        = document.getElementById('to-kazuma-damage');

// Helper Function on Action
var meguminDoActionEffect = function() {
  meguminCharImg.style.bottom  = '30px';

  wyvernCharImg.style.bottom    = '60px';
  wyvernCharImg.style.transform = 'rotate(-10deg)';

  wyvernCharImg.style.opacity    = 0.8;
  //powSfxImg.style.display       = 'block';

  setTimeout(function(){
    meguminCharImg.style.bottom  = '0px';

    wyvernCharImg.style.bottom    = '100px';
    wyvernCharImg.style.transform = 'rotate(0deg)';
    wyvernCharImg.style.opacity    = 1;

    powSfxImg.style.display       = 'none';
  }, 500);
};

var aquaDoActionEffect = function() {
  aquaCharImg.style.bottom  = '30px';
  aquaCharImg.style.left    = '330px';

  wyvernCharImg.style.bottom    = '60px';
  wyvernCharImg.style.transform = 'rotate(10deg)';

  wyvernCharImg.style.opacity    = 0.8;
  //powSfx2Img.style.display = 'block';

  setTimeout(function(){
    aquaCharImg.style.bottom  = '0px';
    aquaCharImg.style.left    = '310px';

    wyvernCharImg.style.bottom    = '100px';
    wyvernCharImg.style.transform = 'rotate(0deg)';
    wyvernCharImg.style.opacity    = 1;

    powSfx2Img.style.display       = 'none';
  }, 500);
};

var kazumaDoActionEffect = function() {
  kazumaToWyvernDamageH5.style.display = 'block';

  kazumaCharImg.style.bottom  = '-10px';
  kazumaCharImg.style.left    = '600px';

  wyvernCharImg.style.bottom    = '50px';
  wyvernCharImg.style.transform = 'rotate(-15deg)';

  wyvernCharImg.style.opacity    = 0.8;

  //powSfx3Img.style.display = 'block';

  setTimeout(function(){
    kazumaToWyvernDamageH5.style.display = 'none';

    kazumaCharImg.style.bottom  = '0px';
    kazumaCharImg.style.left    = '570px';

    wyvernCharImg.style.bottom    = '100px';
    wyvernCharImg.style.transform = 'rotate(0deg)';

    wyvernCharImg.style.opacity    = 1;

    powSfx3Img.style.display       = 'none';
  }, 500);
};

// Megumin - Explosion
var actionExplosionBtn = document.getElementById('action-explosion');
actionExplosionBtn.addEventListener('click', function() {
  wyvernObj.dealDamage(damageConfig.megumin.explosion);
  explosionSoundAudio.play();
  meguminDoActionEffect();

  actionExplosionBtn.disabled = true;

  setTimeout(function() {
    actionExplosionBtn.disabled = false;
  }, 5000);

  // Damage Inflicted Display
  meguminToWyvernDamageH5.innerHTML = damageConfig.megumin.explosion;
  meguminToWyvernDamageH5.style.display = 'block';

  setTimeout(function() {
    meguminToWyvernDamageH5.innerHTML = 0;
    meguminToWyvernDamageH5.style.display = 'none';
  }, 500);
});

// Megumin - Mega Blast
var actionMegaBlastBtn  = document.getElementById('action-mega-blast');
var megaBlastImage      = document.getElementById('final-move');

actionMegaBlastBtn.addEventListener('click', function() {
  wyvernObj.dealDamage(damageConfig.megumin.megaBlast);
  bombSoundAudio.play();
  megaBlastImage.style.display  = 'block';
  meguminDoActionEffect();

  actionMegaBlastBtn.disabled = true;

  setTimeout(function(){
    megaBlastImage.style.display  = 'none';
  }, 1000);

  setTimeout(function(){
    actionMegaBlastBtn.disabled = false;
  }, 10000);

  // Damage Inflicted Display
  meguminToWyvernDamageH5.innerHTML = damageConfig.megumin.megaBlast;
  meguminToWyvernDamageH5.style.display = 'block';

  setTimeout(function() {
    meguminToWyvernDamageH5.innerHTML = 0;
    meguminToWyvernDamageH5.style.display = 'none';
  }, 500);
});

// Megumin - Mana Recharge
var actionManaRechargeBtn = document.getElementById('action-mana-recharge');
actionManaRechargeBtn.addEventListener('click', function() {
  healSoundAudio.play();
  meguminDoActionEffect();
  var allActionButtons = document.getElementsByTagName('button');
  for(var i = 0; i < allActionButtons.length; i++) {
    allActionButtons[i].disabled = false;
  }
  actionManaRechargeBtn.disabled = true;
});

// Aqua - Smack
var actionSmackBtn = document.getElementById('action-smack');
actionSmackBtn.addEventListener('click', function() {
  wyvernObj.dealDamage(damageConfig.aqua.smack);
  hitSoundAudio.play();
  aquaDoActionEffect();

  actionSmackBtn.disabled = true;

  setTimeout(function(){
    actionSmackBtn.disabled = false;
  }, 3000);

  // Damage Inflicted Display
  aquaToWyvernDamageH5.innerHTML = damageConfig.aqua.smack;
  aquaToWyvernDamageH5.style.display = 'block';

  setTimeout(function() {
    aquaToWyvernDamageH5.style.display = 0;
    aquaToWyvernDamageH5.style.display = 'none';
  }, 500);
});

// Aqua - Heal
var actionHealBtn = document.getElementById('action-heal');
actionHealBtn.addEventListener('click', function() {
  aquaObj.dealDamage(-1 * damageConfig.aqua.heal);
  toAquaDamageH5.style.display = 'block';
  toAquaDamageH5.style.color = '#26C281';
  toAquaDamageH5.innerHTML = damageConfig.aqua.heal;

  kazumaObj.dealDamage(-1 * damageConfig.aqua.heal);
  toKazumaDamageH5.style.display = 'block';
  toKazumaDamageH5.style.color = '#26C281';
  toKazumaDamageH5.innerHTML = damageConfig.aqua.heal;

  meguminObj.dealDamage(-1 * damageConfig.aqua.heal);
  toMeguminDamageH5.style.display = 'block';
  toMeguminDamageH5.style.color = '#26C281';
  toMeguminDamageH5.innerHTML = damageConfig.aqua.heal;

  healSoundAudio.play();

  actionHealBtn.disabled = true;

  setTimeout(function() {
    toAquaDamageH5.style.display = 'none';
    toAquaDamageH5.style.color = '#FFF';

    toKazumaDamageH5.style.display = 'none';
    toKazumaDamageH5.style.color = '#FFF';

    toMeguminDamageH5.style.display = 'none';
    toMeguminDamageH5.style.color = '#FFF';
  }, 500);

  setTimeout(function(){
    actionHealBtn.disabled = false;
  }, 10000);
});

// Aqua - Salvation
var actionSalvationBtn = document.getElementById('action-salvation');
actionSalvationBtn.addEventListener('click', function() {
  aquaObj.dealDamage(-1 * damageConfig.aqua.salvation);
  toAquaDamageH5.style.display = 'block';
  toAquaDamageH5.style.color = '#26C281';
  toAquaDamageH5.innerHTML = damageConfig.aqua.salvation;

  kazumaObj.dealDamage(-1 * damageConfig.aqua.salvation);
  toKazumaDamageH5.style.display = 'block';
  toKazumaDamageH5.style.color = '#26C281';
  toKazumaDamageH5.innerHTML = damageConfig.aqua.salvation;

  meguminObj.dealDamage(-1 * damageConfig.aqua.salvation);
  toMeguminDamageH5.style.display = 'block';
  toMeguminDamageH5.style.color = '#26C281';
  toMeguminDamageH5.innerHTML = damageConfig.aqua.salvation;

  healSoundAudio.play();

  actionSalvationBtn.disabled = true;

  setTimeout(function() {
    toAquaDamageH5.style.display = 'none';
    toAquaDamageH5.style.color = '#FFF';

    toKazumaDamageH5.style.display = 'none';
    toKazumaDamageH5.style.color = '#FFF';

    toMeguminDamageH5.style.display = 'none';
    toMeguminDamageH5.style.color = '#FFF';
  }, 500);
});

// Kazuma - Stab
var actionStabBtn = document.getElementById('action-stab');
actionStabBtn.addEventListener('click', function() {
  wyvernObj.dealDamage(damageConfig.kazuma.stab);
  stabSoundAudio.play();
  kazumaDoActionEffect();

  actionStabBtn.disabled = true;

  setTimeout(function(){
    actionStabBtn.disabled = false;
  }, 3000);

  // Damage Inflicted Display
  kazumaToWyvernDamageH5.innerHTML = damageConfig.kazuma.stab;
  kazumaToWyvernDamageH5.style.display = 'block';

  setTimeout(function() {
    kazumaToWyvernDamageH5.style.display = 0;
    kazumaToWyvernDamageH5.style.display = 'none';
  }, 500);
});

// Kazuma - Dakunes Shield
var actionDakunesShieldBtn = document.getElementById('action-dakunes-shield');
actionDakunesShieldBtn.addEventListener('click', function() {

  // Reduce all Damage to 0
  wyvernObj.damageModifier.darkClaw = 0;
  wyvernObj.damageModifier.wingFlap = 0;
  healSoundAudio.play();

  actionDakunesShieldBtn.disabled = true;
  notificationWindow.innerHTML = '<b>Dakunes\'s Shield</b> is Activated! You are now invincible for 10 seconds!';

  setTimeout(function(){
    // actionStabBtn.disabled = false;
    wyvernObj.damageModifier.darkClaw = damageConfig.wyvern.darkClaw;
    wyvernObj.damageModifier.wingFlap = damageConfig.wyvern.wingFlap;
    notificationWindow.innerHTML = '';
  }, 10000);
});

var wyvernActionCommand = document.getElementById('wyvern-action');
wyvernActionCommand.style.display = 'none';

var wyvernActionMove = document.getElementById('wyvern-action-move');

function wyvernMovesFunc() {
  setTimeout(function() {

    var randomMove = Math.floor((Math.random() * 3) + 1);
    var damageModifier = 0;
    var actionMove = '';

    switch(randomMove) {
      case 1:
        roarSoundAudio.play();
        damageModifier = wyvernObj.damageModifier.darkClaw;
        actionMove = wyvernObj.actionMove.darkClaw;
        break;
      case 2:
        roarSoundAudio.play();
        damageModifier = wyvernObj.damageModifier.wingFlap;
        actionMove = wyvernObj.actionMove.wingFlap;
        break;
      case 3:
        roarSoundAudio.play();
        damageModifier = wyvernObj.damageModifier.wingFlap;
        actionMove = wyvernObj.actionMove.wingFlap;
        break;
    }

    wyvernActionMove.innerHTML = actionMove;

    wyvernActionCommand.style.display = 'block';
    var randomTarget = Math.floor((Math.random() * 3) + 1);
    var targetCharImg = '';
    switch(randomTarget) {
      case 1:
        targetCharImg = kazumaCharImg;
        targetCharThumbImg = kazumaThumbImg;
        toKazumaDamageH5.style.display = 'block';
        toKazumaDamageH5.innerHTML = damageModifier;
        kazumaObj.dealDamage(damageModifier);
        break;
      case 2:
        targetCharImg = aquaCharImg;
        targetCharThumbImg = aquaThumbImg;
        toAquaDamageH5.style.display = 'block';
        toAquaDamageH5.innerHTML = damageModifier;
        aquaObj.dealDamage(damageModifier);
        break;
      case 3:
        targetCharImg = meguminCharImg;
        targetCharThumbImg = meguminThumbImg;
        toMeguminDamageH5.style.display = 'block';
        toMeguminDamageH5.innerHTML = damageModifier;
        meguminObj.dealDamage(damageModifier);
        break;
    }

    targetCharThumbImg.style.opacity = 0.5;
    targetCharThumbImg.style.zoom = 0.8;

    setTimeout(function() {
      targetCharThumbImg.style.opacity = 1;
      targetCharThumbImg.style.zoom = 1;
      toMeguminDamageH5.style.display = 'none';
      toAquaDamageH5.style.display = 'none';
      toKazumaDamageH5.style.display = 'none';
    }, 500);

    setTimeout(function() {
      wyvernActionCommand.style.display = 'none';
      targetCharImg.style.opacity = 1;
      wyvernMovesFunc();
    }, (2000 / wyvernObj.speed));
  }, (2000 / wyvernObj.speed));
}

var playGame = document.getElementById('play-game');
playGame.addEventListener('click', function() {
  document.getElementById('tutorial-screen').style.display = 'none';
  document.getElementById('tutorial-real-screen').style.display = 'none';
  introBGMAudio.pause();
  setTimeout(function() {
    battleBGMAudio.play();
  }, 1000);
  setTimeout(function() {
    wyvernMovesFunc()
  }, 5000);
});
