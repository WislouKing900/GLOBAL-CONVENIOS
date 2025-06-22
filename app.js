function pesquisar(){
    const conveniosPesquisa = document.getElementById('convenio').value.toLowerCase();
    const resultadosDiv =document.getElementById('resultados-pesquisa');

    //essa linha limpa os resultado anteriores antes de um nova pesquisa
    resultadosDiv.innerHTML = '';

    //Verifica se o campo de pesquisa esta vazio
    if(conveniosPesquisa.trim() === ''){
        resultadosDiv.innerHTML = '<p>Por favor, digite um convenio valido</p>'
        return; // Sai da função se o campo estiver vazio
    }

    


    
}