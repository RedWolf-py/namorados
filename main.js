window.addEventListener('load', function () {

  var k = function (z) {
    return document.querySelector(z);
  }

  var canvas = k("#canvas");
  var ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let img1 = k("#img1")
  let img2 = k("#img2")
  let img4 = k("#img4")
  let img5 = k("#img5")
  let img6 = k("#img6")
  let img7 = k("#img7")
  let botao1 = k("#button1")
  let botao2 = k("#button2")
  //let parabens = k('.parabens')
  let carta = k('.carta')
  const musica = new Audio;
  musica.src = 'musica/songs.mp3'

  let tempo = 0;
  let coracao0 = [];
  let coracao = [];
  let coracao2 = [];
  let coracao3 = [];
  let coracao4 = [];
  let coracao5 = [];
  let aviaoinicio = [];
  let bande = [];



  class Foto0 {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.sw = 350;
      this.sh = 335;
      this.px = Math.random() * canvas.width;
      this.py = 600;
      this.width = 100;
      this.height = 100;
      this.frameinicio = 0;
      this.frameinterval = 300;
      this.frame = 0;
      this.maxframe = 1;
      this.markedForDeletion = false;
      this.ft0 = document.querySelector('#img0')
      this.direcaoX = Math.random() * 0.5 + 1;
      this.direcaoY = Math.random() * 0.5 - 1;

    }
    draw() {
      ctx.drawImage(this.ft0, this.frame * this.sw, this.y, this.sw, this.sh, this.px, this.py, this.width, this.height)

    }
    update(looptempo) {

      this.py += -1

      this.frameinicio += looptempo
      if (this.frameinicio > this.frameinterval) {
        if (this.frame >= this.maxframe) this.frame = 0;
        else this.frame++
        this.frameinicio = 0;
      }

      if (this.px < 0 || this.px + this.width > canvas.width) {
        this.direcaoX = this.direcaoX * -1

      }
      this.px -= this.direcaoX;

      if (this.y < 0 - this.height) {
        this.markedForDeletion = true;
      }

    }
  }

  class Foto {
    constructor() {
      this.x = 0
      this.y = 0
      this.sw = 522
      this.sh = 500
      this.px = Math.random() * canvas.width;
      this.py = 600;
      this.width = 100;
      this.height = 100;
      this.frameinicio = 0;
      this.frameinterval = 300;
      this.frame = 0;
      this.maxframe = 1;
      this.markedForDeletion = false;
      this.ft = document.querySelector('#img3')
      this.direcaoX = Math.random() * 0.5 + 1;
      this.direcaoY = Math.random() * 0.5 - 1;

    }
    draw() {
      ctx.drawImage(this.ft, this.frame * this.sw, this.y, this.sw, this.sh, this.px, this.py, this.width, this.height)

    }
    update(looptempo) {

      this.py += -1

      this.frameinicio += looptempo
      if (this.frameinicio > this.frameinterval) {
        if (this.frame >= this.maxframe) this.frame = 0;
        else this.frame++
        this.frameinicio = 0;
      }

      if (this.px < 0 || this.px + this.width > canvas.width) {
        this.direcaoX = this.direcaoX * -1

      }
      this.px += this.direcaoX;

      if (this.y < 0 - this.height) {
        this.markedForDeletion = true;
      }

    }
  }


  class Foto2 {
    constructor() {
      this.x = 0
      this.y = 0
      this.sw = 225
      this.sh = 250
      this.px = 0;
      this.py = 0;
      this.width = 100;
      this.height = 100;
      this.frameinicio = 0;
      this.frameinterval = 200;
      this.frame = 0;
      this.maxframe = 3;
      this.ft4 = document.querySelector('#img4')


    }
    draw() {
      ctx.drawImage(this.ft4, this.frame * this.sw, this.y, this.sw, this.sh, this.px, this.py, this.width, this.height)

    }
    update(looptempo) {
      this.frameinicio += looptempo
      if (this.frameinicio > this.frameinterval) {
        if (this.frame >= this.maxframe) this.frame = 0;
        else this.frame++
        this.frameinicio = 0;
      }

    }
  }
  class Foto3 {
    constructor() {
      this.x = 0
      this.y = 0
      this.sw = 225
      this.sh = 250
      this.px = 1210;
      this.py = 4;
      this.width = 100;
      this.height = 100;
      this.frameinicio = 0;
      this.frameinterval = 200;
      this.frame = 0;
      this.maxframe = 3;
      this.ft5 = document.querySelector('#img5')


    }
    draw() {
      ctx.drawImage(this.ft5, this.frame * this.sw, this.y, this.sw, this.sh, this.px, this.py, this.width, this.height)
      if (window.matchMedia("(max-width:800px)").matches) {
        this.px = 300;
       
      }
    }
    update(looptempo) {
      this.frameinicio += looptempo
      if (this.frameinicio > this.frameinterval) {
        if (this.frame >= this.maxframe) this.frame = 0;
        else this.frame++
        this.frameinicio = 0;
      }

    }
  }
  class Foto4 {
    constructor() {
      this.x = 0
      this.y = 0
      this.sw = 225
      this.sh = 250
      this.px = 5;
      this.py = 530;
      this.width = 100;
      this.height = 100;
      this.frameinicio = 0;
      this.frameinterval = 200;
      this.frame = 0;
      this.maxframe = 3;
      this.ft6 = document.querySelector('#img6')


    }
    draw() {
      ctx.drawImage(this.ft6, this.frame * this.sw, this.y, this.sw, this.sh, this.px, this.py, this.width, this.height)
   
    update(looptempo) {
      this.frameinicio += looptempo
      if (this.frameinicio > this.frameinterval) {
        if (this.frame >= this.maxframe) this.frame = 0;
        else this.frame++
        this.frameinicio = 0;
      }

    }
  }
  class Foto5 {
    constructor() {
      this.x = 0
      this.y = 0
      this.sw = 250
      this.sh = 250
      this.px = 1214;
      this.py = 530;
      this.width = 100;
      this.height = 100;
      this.frameinicio = 0;
      this.frameinterval = 200;
      this.frame = 0;
      this.maxframe = 3;
      this.ft7 = document.querySelector('#img7')

    }
    draw() {
      ctx.drawImage(this.ft7, this.frame * this.sw, this.y, this.sw, this.sh, this.px, this.py, this.width, this.height)
      if (window.matchMedia("(max-width:800px)").matches) {
        this.px = 300;
        this.py = 600;

      }

    }
    update(looptempo) {

      this.frameinicio += looptempo
      if (this.frameinicio > this.frameinterval) {
        if (this.frame >= this.maxframe) this.frame = 0;
        else this.frame++
        this.frameinicio = 0;
      }

    }

  }


  class Iniciaraviao {
    constructor() {

      this.xP = 0;
      this.yP = 0;
      this.sWP = 300;
      this.sHP = 200;
      this.posXP = 10;
      this.posYP = 10;
      this.widthP = 180;
      this.heightP = 100;
      this.direcaoX = 1;
      this.direcaoY = 1;

      this.image = document.getElementById('snoopano');

    }

    draw() {
      ctx.drawImage(this.image, this.xP, this.yP, this.sWP, this.sHP, this.posXP, this.posYP, this.widthP, this.heightP)
    }
    update() {


      if (this.posYP < 0 || this.posYP > canvas.height - this.heightP) {
        this.direcaoY = this.direcaoY * -1
      }
      if (this.posXP > canvas.width) this.posXP = 0
      this.posXP += this.direcaoX;

    }
  }

  class Bandeira {
    constructor() {
      this.xx = 0;
      this.yy = 0;
      this.sWW = 300;
      this.sHH = 200;
      this.posXX = aviao.posXP - 160
      this.posYY = aviao.posYP
      this.width = 200;
      this.height = 100;
      this.direcaoX = 1;
      this.direcaoY = 1;
      this.frame = 0;
      this.maxframe = 1;
      this.frameinicio = 0;
      this.frameinterval = 150;
      this.image = document.getElementById('bandeira')
    }


    draw() {

      ctx.drawImage(this.image, this.frame * this.sWW, this.yy, this.sWW, this.sHH, this.posXX, this.posYY, this.width, this.height)


    }
    update(looptempo) {


      this.frameinicio += looptempo;
      if (this.frameinicio > this.frameinterval) {

        if (this.frame >= this.maxframe)
          this.frame = 0;
        else this.frame++;
        this.frameinicio = 0
      }
      if (this.posYY < 0 || this.posYY > canvas.height - this.height) {
        this.direcaoY = this.direcaoY * -1
      }
      if (this.posXX > canvas.width) this.posXX = 0;
      this.posXX += this.direcaoX;


    }
  }

  coracao2.push(new Foto2())
  coracao3.push(new Foto3())
  coracao4.push(new Foto4())
  coracao5.push(new Foto5())

  const aviao = new Iniciaraviao();
  const badeiyra = new Bandeira();

  setInterval(() => {
    coracao.push(new Foto())
    coracao0.push(new Foto0())
  }, 5000)

  function Coracao() {
    coracao.forEach(c => {
      c.draw()
      c.update(looptempo)
    })

    coracao0.forEach(c => {
      c.draw()
      c.update(looptempo)
    })
    coracao = coracao.filter(c => !c.markedForDeletion);
    coracao0 = coracao0.filter(c => !c.markedForDeletion);

  }

  function Coracao2() {
    coracao2.forEach(c2 => {
      c2.draw()
      c2.update(looptempo)

    })
    coracao2 = coracao2.filter(c2 => !c2.markedForDeletion);

  }
  function Coracao3() {
    coracao3.forEach(c3 => {
      c3.draw()
      c3.update(looptempo)

    })
    coracao3 = coracao3.filter(c3 => !c3.markedForDeletion);

  }

  function Coracao4() {
    coracao4.forEach(c4 => {
      c4.draw()
      c4.update(looptempo)
    })
    coracao4 = coracao4.filter(c4 => !c4.markedForDeletion);

  }
  function Coracao5() {
    coracao5.forEach(c5 => {
      c5.draw()
      c5.update(looptempo)
    })
    coracao5 = coracao5.filter(c5 => !c5.markedForDeletion);

  }

  function escrever(x) {
    const text = x.innerHTML.split('');
    x.innerHTML = '';
    text.forEach(function (letras, n) {
      setTimeout(function () {
        x.innerHTML += letras;
      }, 250 * n);

    });
  }

  const textoDigitado = document.querySelector('.texto');
  setInterval(() => {
    escrever(textoDigitado);

  }, 9000)

  aviaoinicio.push(aviao)
  bande.push(badeiyra);

  img2.addEventListener('click', () => {
    img2.style.transform = 'rotateY(180deg)'
    img1.style.transform = 'translate(100%)'
    musica.play()

  })

  carta.addEventListener('click', () => {

    img2.style.transform = 'rotateY(0deg)'
    img1.style.transform = 'rotateY(0deg)'
    musica.pause();
  })


  botao1.addEventListener('click', () => {
    img2.style.transform = 'rotateY(180deg)'
    img1.style.transform = 'translate(100%)'
    botao1.style.display = 'none'
    botao2.style.display = 'block'
    musica.play()

  })

  botao2.addEventListener('click', () => {

    img2.style.transform = 'rotateY(0deg)'
    img1.style.transform = 'rotateY(0deg)'
    botao1.style.display = 'block'
    botao2.style.display = 'none'
    musica.pause();
  })

  function criandoAviao() {
    aviaoinicio.forEach(aviao => {
      aviao.draw();
      aviao.update();
    })
  }

  function iniaciarBamdeira(looptempo) {
    bande.forEach(badeiyra => {
      badeiyra.draw();
      badeiyra.update(looptempo);
    })
  }

  function loop(tempofuturo) {
    looptempo = tempofuturo - tempo
    tempo = tempofuturo;
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    Coracao();
    Coracao2();
    Coracao3();
    Coracao4();
    Coracao5();

    criandoAviao();
    iniaciarBamdeira(looptempo)

    requestAnimationFrame(loop)
  }
  loop(0);

});
