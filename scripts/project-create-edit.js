window.onload = function() {
    // Type: 'create' | 'edit'
    const screenType = 'create';

    if(screenType == 'create'){
        document.querySelector('#main_title').innerText = 'Vamos cadastrar seu novo projeto!';
        document.querySelector('#df_button').innerText = 'Cadastrar';
    }else
    {
        document.querySelector('#main_title').innerText = 'Editar projeto';
        document.querySelector('#df_button').innerText = 'Salvar';
    }

}