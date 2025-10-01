let idade = 19
let temDinheiro = false
let temCadUnico = true

// > maior que
// >= maior ou igual a
// < menor que
// <= menor ou igual a

if (idade >= 18) {
    if (temDinheiro == true) {
        console.log("Vamos pagar o quebrar!");
    }
    else {
        if (temCadUnico == true) {
            console.log("CNH de graça 😎✌");
        }
        else {
            console.log("Pobre e sem cadastro😂");
        }
    }
}
else {
    console.log("Muito novo para pilotar");
}