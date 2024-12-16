function verificar(){
    let palavra = document.getElementById("palavra").ariaValueMax
    palavra = palavra.replaceALL("","");
    window.alert(palavra);
    let str = "";
    let ehpalidromo = true;

    for(let i=0; i < palavra.length/2; i++){
        let le = palavra.charAt(i);
        let ld = palavra.charAt(palavra.length-1-i)
        
        if(le == ld){
            //str = str + le + "==" + ld + "<br>"
        }else{
           // str = str + le + "!=" + ld + "<br>"
           ehpalidromo = false;
        }

        str = str + palavraaa.charAT(i) + '-'
}

//document.getElementById("resultado").innerHTML = palavra.str;
if(ehpalidromo){
    document.getElementById("resultado").innerHTML = "É palindromo";
}else{
    document.getElementById("resultado").innerHTML = "Não é palindromo";
}
}  