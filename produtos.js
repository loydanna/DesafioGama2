const form = document.getElementById('form2')

 form.addEventListener( 'submit', (e) => { 
      e.preventDefault() 
    let produto = document.getElementById('produto').value
    let preço = document.getElementById('preço').value
    let quantidade = document.getElementById('quantidade').value
    let data = {
        produto,
        preço,
        quantidade,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)
    let content = document.getElementById('content')
    alert('Cadastrado com sucesso!')
    document.querySelector('form').reset();

})