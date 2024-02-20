function limparTexto(){
    document.querySelector('textarea').value = '';
};

function criptografar(){
    let textoASerCriptografado = document.querySelector('textarea').value. toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"");

    if(textoASerCriptografado){
        textoASerCriptografado = textoASerCriptografado.replaceAll('e','enter');
        textoASerCriptografado = textoASerCriptografado.replaceAll('i','imes');
        textoASerCriptografado = textoASerCriptografado.replaceAll('a','ai');
        textoASerCriptografado = textoASerCriptografado.replaceAll('o','ober');
        textoASerCriptografado = textoASerCriptografado.replaceAll('u','ufat');
        textoASerCriptografado = textoASerCriptografado.replaceAll('','');
        escreverResultado(textoASerCriptografado);
        document.getElementById('btn_copiar').removeAttribute('hidden');
        limparTexto();
    }

}

function decriptografar(){
    let textoASerDescriptografado = document.querySelector('textarea').value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"");

    if(textoASerDesCriptografado){
    textoASerDesCriptografado = textoASerDesCriptografado.replaceAll('enter','e');
    textoASerDesCriptografado = textoASerDesCriptografado.replaceAll('imes','i');
    textoASerCDesriptografado = textoASerDesCriptografado.replaceAll('ai','a');
    textoASerDesCriptografado = textoASerDesCriptografado.replaceAll('ober','o');
    textoASerDesCriptografado = textoASerDesCriptografado.replaceAll('ufat','u');
    textoASerDesCriptografado = textoASerDesCriptografado.replaceAll('','');
    escreverResultado(textoASerDesCriptografado);
    document.getElementById('btn_copiar').removeAttribute('hidden');
    limparTexto();
    }
}
function escreverResultado(texto){
    document.getElementById('result__img').setAttribute('hidden',"")
    document.getElementById('result__h2').setAttribute('hidden',"")
    document.getElementById("result__textarea").removeAttribute("hidden")
    document.getElementById("result__textarea").innerHTML = texto;
}

function copiar(){
    let textoCopia = document.getElementById('result__textarea').value;
    if(textoCopia) {
        navigator.clipboard.writeText(textoCopia)
        .then(()=> {
            alert("Texto Copiado para a área de transferência!");
            
            document.getElementById('result__h2').innerText = 'Nenhuma mensagem encontrada';
            document.getElementById ('result__h2').removeAttribute('hidden');
            document.getElementById('result__textarea').setAttribute ('hidden')
            document.getElementById ('result__img').removeAttribute ('hidden');
            document.getElementById('btn_copiar').setAttribute('hidden','');
        })
    }
}