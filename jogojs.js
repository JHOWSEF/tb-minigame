var div1 = document.getElementById("div1");
var fundo = document.getElementById("fundo");
var rocks = document.getElementById("rocks");


let fundoHeight= parseInt(getComputedStyle(fundo).height);
let fundoWidth= parseInt(getComputedStyle(fundo).width);
//atirar e mover nas setas do teclado
window.addEventListener("keydown", (e) => {
	var left = parseInt(window.getComputedStyle(div1).getPropertyValue("left"));
	if (e.key == "ArrowLeft" && left > 0) {
	  div1.style.left = left - 10 + "px";
	}
	else if (e.key == "ArrowRight" && left <= 990) {
	  div1.style.left = left + 10 + "px";
	}
  
	if (e.key == "ArrowUp") {
	  var bullet = document.createElement("div");
	  bullet.classList.add("bullets");
	  fundo.appendChild(bullet);
  
	  var movebullet = setInterval(() => {
		var rocks = document.getElementsByClassName("rocks");
  
		for (var i = 0; i < rocks.length; i++) {
		  var rock = rocks[i];
		  if (rock != undefined) {
			var rockbound = rock.getBoundingClientRect();
			var bulletbound = bullet.getBoundingClientRect();
  
  
			if (
			  bulletbound.left >= rockbound.left &&
			  bulletbound.right <= rockbound.right &&
			  bulletbound.top <= rockbound.top &&
			  bulletbound.bottom <= rockbound.bottom
			) {
			  rock.parentElement.removeChild(rock); 
			  document.getElementById("points").innerHTML =
				parseInt(document.getElementById("points").innerHTML) + 1;
			}
		  }
		}
		var bulletbottom = parseInt(
		  window.getComputedStyle(bullet).getPropertyValue("bottom")
		);
  
		if (bulletbottom >= 600) {
		  clearInterval(movebullet);
		}
  
		bullet.style.left = left + "px"; 
		bullet.style.bottom = bulletbottom + 3 + "px";
	  });
	}
  });
  //atirar através do botão
  function tirobotao(atira){
	var left = parseInt(window.getComputedStyle(div1).getPropertyValue("left"));
	if(atira == "atirar"){
		var bullet = document.createElement("div");
		bullet.classList.add("bullets");
		fundo.appendChild(bullet);
	
		var movebullet = setInterval(() => {
		  var rocks = document.getElementsByClassName("rocks");
	
		  for (var i = 0; i < rocks.length; i++) {
			var rock = rocks[i];
			if (rock != undefined) {
			  var rockbound = rock.getBoundingClientRect();
			  var bulletbound = bullet.getBoundingClientRect();
	
	
			  if (
				bulletbound.left >= rockbound.left &&
				bulletbound.right <= rockbound.right &&
				bulletbound.top <= rockbound.top &&
				bulletbound.bottom <= rockbound.bottom
			  ) {
				rock.parentElement.removeChild(rock); 
				document.getElementById("points").innerHTML =
				  parseInt(document.getElementById("points").innerHTML) + 1;
			  }
			}
		  }
		  var bulletbottom = parseInt(
			window.getComputedStyle(bullet).getPropertyValue("bottom")
		  );
	
		  if (bulletbottom >= 600) {
			clearInterval(movebullet);
		  }
	
		  bullet.style.left = left + "px"; 
		  bullet.style.bottom = bulletbottom + 3 + "px";
		});

	}

  }

		   // Mover cursor 1  - através dos botões
			function move(Direcao) {
				if (contador != 0) {
					para();
				}
				if (Direcao == "direita") {
					timer = setInterval("direita()",15);
					contador ++;
				}

				if (Direcao == "esquerda") {
					timer = setInterval("esquerda()",15);
					contador ++;
				}

			
			}

            function direita() {
				let div1Left= parseInt(getComputedStyle(div1).left);
				let fundoWidth= parseInt(getComputedStyle(fundo).width);
				let div1Width= parseInt(getComputedStyle(div1).width);

				div1.style.left = div1Left+5;
				if ( div1Left >= fundoWidth  - div1Width){
					clearInterval(timer);
					timer = setInterval ("esquerda()",15);
				}
			}

			function esquerda() {
				let div1Left= parseInt(getComputedStyle(div1).left);
				
				div1.style.left = div1Left-5;
				if ( div1Left <= 0){
					clearInterval(timer);
					timer = setInterval ("direita()",15);
				}
			}

			
			
            // Parar cursores
			function para2(){
				clearInterval(m);
			}
			function para() {
				clearInterval(timer);
			}



			let contador = 0;
            let cont = 0;
            
            document.querySelector("#esquerda").addEventListener("click",()=>{ move('esquerda')});
            document.querySelector("#direita").addEventListener("click",()=>{ move('direita')});
			document.querySelector("#atirar").addEventListener("click",()=>{tirobotao('atirar')});
			
            
    //inimigos caindo
    var generaterocks = setInterval(() => {
	var rock = document.createElement("div");
	rock.classList.add("rocks");
	
	var rockleft = parseInt(
	  window.getComputedStyle(rock).getPropertyValue("left")
	);
	//generate value between 0 to 450 onde 450 => fundo width - rock width
	rock.style.left = Math.floor(Math.random() * fundoWidth) + "px";
  
	fundo.appendChild(rock);
  }, 1000);

  var moverocks = setInterval(() => {
	var rocks = document.getElementsByClassName("rocks");
  
	if (rocks != undefined) {
	  for (var i = 0; i < rocks.length; i++) {
		
		var rock = rocks[i]; 
		var rocktop = parseInt(
		  window.getComputedStyle(rock).getPropertyValue("top")
		);

		//475 => fundoheight - rockheight + 25
		if (rocktop >= fundoHeight) {
		  alert("JAKE : HMMM VOCE PERDEU CARA");
		  clearInterval(moverocks);
		  window.location.reload();
		}
  
		rock.style.top = rocktop + 25 + "px";
	  }
	}
  }, 450);


	