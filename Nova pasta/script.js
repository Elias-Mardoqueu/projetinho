let submit = document.getElementById('botao-calcular');
let add_content = document.getElementById('box2');


submit.addEventListener('click',()=>{
    event.preventDefault();
    let name_peploe = document.getElementById('nome').value;
    var salary = document.getElementById('salario').value;
    var solds = document.getElementById('vendas').value;
    var total_pay = parseFloat(salary) + (parseFloat(solds) * 15 / 100); 
    console.log(total_pay);
    add_content.innerHTML += `
        <h1>funcionario : `+name_peploe+`<h1>
        <h2>sálario : `+total_pay+`</h2>
    `;
})
