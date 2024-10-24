

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Insira o primeiro número (n1): ', (inputN1) => {
    let n1 = parseInt(inputN1);

    readline.question('Insira o segundo número (n2): ', (inputN2) => {
        let n2 = parseInt(inputN2);

        readline.question('Insira a quantidade de iterações: ', (inputQuant) => {
            let quant = parseInt(inputQuant);

            console.log(n1);
            console.log(n2);

            for (let i = 0; i < quant; i++) {
                let res = n1 + n2;
                console.log(res);
                
                n1 = n2;
                n2 = res;
            }

            // Aqui fechamos o readline para garantir que o processo encerre corretamente
            readline.close();
        });
    });
});
