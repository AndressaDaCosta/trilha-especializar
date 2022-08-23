//Callback functions: podemos passar funções 
//como ARGUMENTO para outras funções

//Repare que só funciona quando a segunda função 
//é passada como argumento na primeira função

function imprimirDado(dado){
    console.log(dado())
}

// imprimirDado(1) 
// imprimirDado('texto') 
// imprimirDado(true)
// imprimirDado({ nome: 'João' })
// imprimirDado([1, 2, 3])

imprimirDado(function () {
    return 'Olá mundo'

}



/* })

// (((((((((((""))))))))))


// {

//     {
//         {

//             {
//                 {
//                     {
//                         {
//                             {
//                                 {}
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }