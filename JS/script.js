document.addEventListener('DOMContentLoaded', (event) => {
    const inputTexto = document.getElementById('texto');
    const outputTexto = document.getElementById('output-texto');
    const mensagemTitulo = document.getElementById('mensagem-titulo');
    const paragrafoTitulo = document.getElementById('paragrafo-titulo');
    const copiarBotao = document.getElementById('copiar-texto');
    const divResultado = document.getElementById('div-resultado');
    const botaoCriptografar = document.getElementById('criptografar');
    const botaoDescriptografar = document.getElementById('descriptografar');
    const imagemProcurando = document.getElementById('imagem-procurando');

    const chavesCriptografia = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    const criptografarTexto = (texto) => {
        return texto.replace(/[eioua]/g, (letra) => chavesCriptografia[letra]);
    };

    const descriptografarTexto = (texto) => {
        let textoDescriptografado = texto;
        for (let chave in chavesCriptografia) {
            let regex = new RegExp(chavesCriptografia[chave], 'g');
            textoDescriptografado = textoDescriptografado.replace(regex, chave);
        }
        return textoDescriptografado;
    };

    const exibirResultado = (texto) => {
        outputTexto.textContent = texto;
        outputTexto.style.display = 'block';
        divResultado.style.display = 'block';
        mensagemTitulo.style.display = 'none';
        paragrafoTitulo.style.display = 'none';
        imagemProcurando.style.display = 'none';
    };

    const validarEntrada = () => {
        let texto = inputTexto.value.toLowerCase();
        texto = texto.replace(/[^a-z\s]/g, ''); // Remove caracteres que não sejam letras minúsculas e espaços
        inputTexto.value = texto;
    };

    botaoCriptografar.addEventListener('click', () => {
        const texto = inputTexto.value.toLowerCase();
        const textoCriptografado = criptografarTexto(texto);
        exibirResultado(textoCriptografado);
    });

    botaoDescriptografar.addEventListener('click', () => {
        const texto = inputTexto.value.toLowerCase();
        const textoDescriptografado = descriptografarTexto(texto);
        exibirResultado(textoDescriptografado);
    });

    copiarBotao.addEventListener('click', () => {
        navigator.clipboard.writeText(outputTexto.textContent)
            .then(() => {
                alert('Texto copiado para a área de transferência!');
            })
            .catch(err => {
                console.error('Erro ao copiar texto: ', err);
            });
    });
});
