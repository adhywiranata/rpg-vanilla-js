// Select Characters DOM
var meguminCharImg  = document.getElementById('megumin-char');
var aquaCharImg     = document.getElementById('aqua-char');
var kazumaCharImg   = document.getElementById('kazuma-char');
var wyvernCharImg   = document.getElementById('wyvern-char');

// SFX DOM
var powSfxImg   = document.getElementById('pow-sfx');
var powSfx2Img  = document.getElementById('pow-sfx-2');
var powSfx3Img  = document.getElementById('pow-sfx-3');

// Helper Function on Action
var meguminDoActionEffect = function() {
  meguminCharImg.style.bottom = '30px';
  meguminCharImg.style.left   = '10%';

  wyvernCharImg.style.bottom    = '60px';
  wyvernCharImg.style.transform = 'rotate(-10deg)';

  powSfxImg.style.display       = 'block';

  setTimeout(function(){
    meguminCharImg.style.bottom = '0px';
    meguminCharImg.style.left   = '5%';

    wyvernCharImg.style.bottom    = '100px';
    wyvernCharImg.style.transform = 'rotate(0deg)';

    powSfxImg.style.display       = 'none';
  }, 500);
};

var aquaDoActionEffect = function() {
  aquaCharImg.style.bottom  = '30px';
  aquaCharImg.style.left    = '27%';

  wyvernCharImg.style.bottom    = '60px';
  wyvernCharImg.style.transform = 'rotate(10deg)';

  powSfx2Img.style.display = 'block';

  setTimeout(function(){
    aquaCharImg.style.bottom  = '0px';
    aquaCharImg.style.left    = '22%';

    wyvernCharImg.style.bottom    = '100px';
    wyvernCharImg.style.transform = 'rotate(0deg)';

    powSfx2Img.style.display       = 'none';
  }, 500);
};

var kazumaDoActionEffect = function() {
  kazumaCharImg.style.bottom  = '-10px';
  kazumaCharImg.style.left    = '50%';

  wyvernCharImg.style.bottom    = '50px';
  wyvernCharImg.style.transform = 'rotate(-15deg)';

  powSfx3Img.style.display = 'block';

  setTimeout(function(){
    kazumaCharImg.style.bottom  = '0px';
    kazumaCharImg.style.left    = '45%';

    wyvernCharImg.style.bottom    = '100px';
    wyvernCharImg.style.transform = 'rotate(0deg)';

    powSfx3Img.style.display       = 'none';
  }, 500);
};

// Megumin - Hit
var actionHitBtn = document.getElementById('action-hit');
actionHitBtn.addEventListener('click', function() {
  meguminDoActionEffect();
});

// Megumin - Mega Blast
var actionMegaBlastBtn  = document.getElementById('action-mega-blast');
var megaBlastImage      = document.getElementById('final-move');

actionMegaBlastBtn.addEventListener('click', function() {
  megaBlastImage.style.display  = 'block';
  meguminDoActionEffect();
  setTimeout(function(){
    megaBlastImage.style.display  = 'none';
  }, 1000);
});

// Aqua - Smack
var actionSmackBtn = document.getElementById('action-smack');
actionSmackBtn.addEventListener('click', function() {
  aquaDoActionEffect();
});

// Kazuma - Stab
var actionStabBtn = document.getElementById('action-stab');
actionStabBtn.addEventListener('click', function() {
  kazumaDoActionEffect();
});
