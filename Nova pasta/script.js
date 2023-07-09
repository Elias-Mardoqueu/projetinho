let submit = document.getElementById('botao-calcular');
let add_content = document.querySelector('.funcionario');


submit.addEventListener('click',()=>{
    event.preventDefault();
    let name_peploe = document.getElementById('nome').value;
    var salary = document.getElementById('salario').value;
    var solds = document.getElementById('vendas').value;
    var total_pay = parseFloat(salary) + (parseFloat(solds) * 15 / 100); 
    console.log(total_pay);
    add_content.innerHTML += `
        <p>funcionario : `+name_peploe+`<p>
        <p>sálario : `+total_pay+`</p>
        <br/>
    `;
})
