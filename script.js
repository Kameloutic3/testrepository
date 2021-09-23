let button = document.querySelector('button');

button.addEventListener('click', function(){
    let input_valor = document.querySelector('.flex > input').value;
    let paragrafo = document.querySelector('.p');
    let sexo = document.getElementsByName('sexo');
    let date = new Date();
    let ano = date.getFullYear() - input_valor;
    let genero = '';
    let img = document.querySelector('img');


    sexo[0] = '';
    sexo[1] = '';

   let verificar = input_valor;

    if(input_valor.length == 0 ||  date.getFullYear() < Number(verificar)){
        alert('"ERROR" - Campo vazio ou ano de nascimento inválido.');
    }else{
        if(sexo[0].checked == true){
            genero = 'Masculino';
        }else if(sexo[1].checked == true){
            genero = 'Feminino';
        }else{
            if(sexo[2].checked == true){
                genero = 'Não identificado';
            }
        }
    }
    if(ano >= 2 && ano < 10 && genero == 'Masculino'){
        paragrafo.innerHTML = `Você possui ${ano} anos e seu gênero  é ${genero}`;
        img.setAttribute('src', 'images/bebe.webp');
        img.style.display = "block";
    }else if(ano >= 10 && ano <= 21 && genero == 'Masculino'){
        paragrafo.innerHTML = `Você possui ${ano} anos e seu gênero  é ${genero}`;
        img.setAttribute('src', 'images/jovem.jpeg');
        img.style.display = "block";
    }else if(ano >= 22 && ano <= 35 && genero == 'Masculino'){
        paragrafo.innerHTML = `Você possui ${ano} anos e seu gênero é ${genero}`;
        img.setAttribute('src', 'images/adulto.jpg');
        img.style.display = "block";
    }else if(ano >= 36 && ano <= 45 && genero == 'Masculino'){
        paragrafo.innerHTML = `Você possui ${ano} anos e seu gênero é ${genero}`;
        img.setAttribute('src', 'images/adulto2.jpeg');
        img.style.display = "block";
    }else if(ano >= 46 && ano <= 60 && genero == 'Masculino'){
        paragrafo.innerHTML = `Você possui ${ano} anos e seu gênero é ${genero}`;
        img.setAttribute('src', 'images/pai.jpeg');
        img.style.display = "block";
        img.style.width = "350px";
        img.style.borderRadius = '15';
    }else if(ano >= 61 && ano <= 80 && genero == 'Masculino'){
        paragrafo.innerHTML = `Você possui ${ano} anos e seu gênero é ${genero}`;
        img.setAttribute('src', 'images/meme.jpeg');
        img.style.display = "block";
        img.style.width = "350px";
        img.style.borderRadius = '15';
    }else if(ano >= 81 && ano <= 100 && genero == 'Masculino'){
        paragrafo.innerHTML = `Você possui ${ano} anos e seu gênero é ${genero}`;
        img.setAttribute('src', 'images/idoso.jpeg');
        img.style.display = "block";
        img.style.width = "350px";
        img.style.borderRadius = '15';
    }else if(ano >= 101 && ano <= 120 && genero == 'Masculino'){
        paragrafo.innerHTML = `Você possui ${ano} anos e seu gênero é ${genero}`;
        img.setAttribute('src', 'images/idoso2.jpg');
        img.style.display = "block";
        img.style.width = "350px";
        img.style.borderRadius = '15';
    }else if(genero == 'Não identificado'){
        paragrafo.innerHTML = `Você possui ${ano} anos e seu gênero é ${genero}`;
        img.setAttribute('src', 'images/tu.jpg');
        img.style.display = "block";
        img.style.width = "350px";
        img.style.borderRadius = '15';
    }else if(ano >= 2 && ano < 10 && genero == 'Feminino'){
        paragrafo.innerHTML = `Você possui ${ano} anos e seu gênero  é ${genero}`;
        img.setAttribute('src', 'images/mina.jpg');
        img.style.display = "block";
    }else if(ano >= 10 && ano <= 21 && genero == 'Feminino'){
        paragrafo.innerHTML = `Você possui ${ano} anos e seu gênero  é ${genero}`;
        img.setAttribute('src', 'images/zueira.jpeg');
        img.style.display = "block";
    }else if(ano >= 22 && ano <= 35 && genero == 'Feminino'){
        paragrafo.innerHTML = `Você possui ${ano} anos e seu gênero é ${genero}`;
        img.setAttribute('src', 'images/m.jpeg');
        img.style.display = "block";
    }else if(ano >= 36 && ano <= 45 && genero == 'Feminino'){
        paragrafo.innerHTML = `Você possui ${ano} anos e seu gênero é ${genero}`;
        img.setAttribute('src', 'images/m2.jpeg');
        img.style.display = "block";
    }else if(ano >= 46 && ano <= 60 && genero == 'Feminino'){
        paragrafo.innerHTML = `Você possui ${ano} anos e seu gênero é ${genero}`;
        img.setAttribute('src', 'images/m3.jpg');
        img.style.display = "block";
        img.style.width = "350px";
        img.style.borderRadius = '15';
    }else if(ano >= 61 && ano <= 80 && genero == 'Feminino'){
        paragrafo.innerHTML = `Você possui ${ano} anos e seu gênero é ${genero}`;
        img.setAttribute('src', 'images/m4.jpg');
        img.style.display = "block";
        img.style.width = "350px";
        img.style.borderRadius = '15';
    }else if(ano >= 81 && ano <= 100 && genero == 'Feminino'){
        paragrafo.innerHTML = `Você possui ${ano} anos e seu gênero é ${genero}`;
        img.setAttribute('src', 'images/m5.jpg');
        img.style.display = "block";
        img.style.width = "350px";
        img.style.borderRadius = '15';
    }else{
        if(ano == 0 || ano == 1 && genero == 'Masculino' || genero == 'Feminino'){
            paragrafo.innerHTML = `Você possui ${ano} anos e seu gênero é ${genero}`;
            img.setAttribute('src', 'images/beb1.jpg');
            img.style.display = "block";
            img.style.width = "350px";
            img.style.borderRadius = '15';
        }
    }
});


