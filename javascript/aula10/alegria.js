let login 
let loginCerto = "kethleeng06@gmail.com"
let senhaCerta = "2234"
let senha 

//enquanto a senha que o usuário inserir for diferentr da senha certa continuaremos pedindon para que ele insira a senha novamente.

// Do = faça, e while= enquanto. O que dá nome a estrutura  dowhile, ou seja faça enquanto.

// Dowhile executa o código uma vez antes da comparação

do { login = prompt ("Insire seu e-mail")
    senha = prompt("Insira sua senha: ") 
} while (login != loginCerto && senha != senhaCerta);


// senha != diferente de senha certa
// A senha deve ser diferente da senha certa
// Repete quando a senha fpr diferente da senha certs
// Repete quando a senha que o usuário colocou for diferente da senha certa

//peça a senha somente uma vez, caso o usuário n coloque a senha certa, repita o pedido.