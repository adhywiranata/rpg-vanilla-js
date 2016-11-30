// Select Characters DOM
var meguminCharImg  = document.getElementById('megumin-char');
var aquaCharImg     = document.getElementById('aqua-char');
var kazumaCharImg   = document.getElementById('kazuma-char');
var wyvernCharImg   = document.getElementById('wyvern-char');

// SFX DOM
var powSfxImg   = document.getElementById('pow-sfx');
var powSfx2Img  = document.getElementById('pow-sfx-2');
var powSfx3Img  = document.getElementById('pow-sfx-3');

// Audio DOM
var hitSoundAudio       = document.getElementById('hit-sound');
var bombSoundAudio      = document.getElementById('bomb-sound');
var explodeSoundAudio   = document.getElementById('explode-sound');
var explosionSoundAudio = document.getElementById('explosion-sound');
var healSoundAudio      = document.getElementById('heal-sound');
var roarSoundAudio      = document.getElementById('roar-sound');
var stabSoundAudio      = document.getElementById('stab-sound');

roarSoundAudio.volume = 0.5;

// Damage DOM
var meguminToWyvernDamageH5 = document.getElementById('megumin-to-wyvern-damage');
var aquaToWyvernDamageH5    = document.getElementById('aqua-to-wyvern-damage');
var kazumaToWyvernDamageH5  = document.getElementById('kazuma-to-wyvern-damage');

// Helper Function on Action
var meguminDoActionEffect = function() {
  meguminToWyvernDamageH5.style.display = 'block';
  meguminCharImg.style.bottom  = '30px';

  wyvernCharImg.style.bottom    = '60px';
  wyvernCharImg.style.transform = 'rotate(-10deg)';

  wyvernCharImg.style.opacity    = 0.8;
  //powSfxImg.style.display       = 'block';

  setTimeout(function(){
    meguminToWyvernDamageH5.style.display = 'none';

    meguminCharImg.style.bottom  = '0px';

    wyvernCharImg.style.bottom    = '100px';
    wyvernCharImg.style.transform = 'rotate(0deg)';
    wyvernCharImg.style.opacity    = 1;

    powSfxImg.style.display       = 'none';
  }, 500);
};

var aquaDoActionEffect = function() {
  aquaToWyvernDamageH5.style.display = 'block';

  aquaCharImg.style.bottom  = '30px';
  aquaCharImg.style.left    = '27%';

  wyvernCharImg.style.bottom    = '60px';
  wyvernCharImg.style.transform = 'rotate(10deg)';

  wyvernCharImg.style.opacity    = 0.8;
  //powSfx2Img.style.display = 'block';

  setTimeout(function(){
    aquaToWyvernDamageH5.style.display = 'none';

    aquaCharImg.style.bottom  = '0px';
    aquaCharImg.style.left    = '22%';

    wyvernCharImg.style.bottom    = '100px';
    wyvernCharImg.style.transform = 'rotate(0deg)';
    wyvernCharImg.style.opacity    = 1;

    powSfx2Img.style.display       = 'none';
  }, 500);
};

var kazumaDoActionEffect = function() {
  kazumaToWyvernDamageH5.style.display = 'block';

  kazumaCharImg.style.bottom  = '-10px';
  kazumaCharImg.style.left    = '50%';

  wyvernCharImg.style.bottom    = '50px';
  wyvernCharImg.style.transform = 'rotate(-15deg)';

  wyvernCharImg.style.opacity    = 0.8;

  //powSfx3Img.style.display = 'block';

  setTimeout(function(){
    kazumaToWyvernDamageH5.style.display = 'none';

    kazumaCharImg.style.bottom  = '0px';
    kazumaCharImg.style.left    = '45%';

    wyvernCharImg.style.bottom    = '100px';
    wyvernCharImg.style.transform = 'rotate(0deg)';

    wyvernCharImg.style.opacity    = 1;

    powSfx3Img.style.display       = 'none';
  }, 500);
};

// Megumin - Explosion
var actionExplosionBtn = document.getElementById('action-explosion');
actionExplosionBtn.addEventListener('click', function() {
  wyvernObj.dealDamage(1000);
  explosionSoundAudio.play();
  meguminDoActionEffect();

  actionExplosionBtn.disabled = true;

  setTimeout(function(){
    actionExplosionBtn.disabled = false;
  }, 5000);
});

// Megumin - Mega Blast
var actionMegaBlastBtn  = document.getElementById('action-mega-blast');
var megaBlastImage      = document.getElementById('final-move');

actionMegaBlastBtn.addEventListener('click', function() {
  wyvernObj.dealDamage(5000);
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
  wyvernObj.dealDamage(500);
  hitSoundAudio.play();
  aquaDoActionEffect();

  actionSmackBtn.disabled = true;

  setTimeout(function(){
    actionSmackBtn.disabled = false;
  }, 3000);
});

// Kazuma - Stab
var actionStabBtn = document.getElementById('action-stab');
actionStabBtn.addEventListener('click', function() {
  wyvernObj.dealDamage(500);
  stabSoundAudio.play();
  kazumaDoActionEffect();

  actionStabBtn.disabled = true;

  setTimeout(function(){
    actionStabBtn.disabled = false;
  }, 3000);
});

var wyvernActionCommand = document.getElementById('wyvern-action');
wyvernActionCommand.style.display = 'none';

// Wyvern - Dark Claw
function wyvernDarkClaw() {
  setTimeout(function() {
    roarSoundAudio.play();
    wyvernActionCommand.style.display = 'block';
    var randomTarget = Math.floor((Math.random() * 3) + 1);
    var targetCharImg = '';
    switch( randomTarget) {
      case 1:
        targetCharImg = kazumaCharImg;
        kazumaObj.dealDamage(wyvernObj.damageModifier.darkClaw);
        break;
      case 2:
        targetCharImg = aquaCharImg;
        aquaObj.dealDamage(wyvernObj.damageModifier.darkClaw);
        break;
      case 3:
        targetCharImg = meguminCharImg;
        meguminObj.dealDamage(wyvernObj.damageModifier.darkClaw); 
        break;
    }

    targetCharImg.style.opacity = 0.5;

    setTimeout(function() {
      wyvernActionCommand.style.display = 'none';
      targetCharImg.style.opacity = 1;
      wyvernDarkClaw();
    }, 2000);
  }, 2000);
};

wyvernDarkClaw();
