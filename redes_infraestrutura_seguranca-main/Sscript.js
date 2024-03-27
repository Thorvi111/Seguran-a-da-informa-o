//sscrip é responsavel pela criptografia simples com palavra chave - zettapolar

function cripto() {
//aquilo que for escrito no text em textarea, tudo que for digitado vai se transformar em valor no javascript



let text = document.getElementById('text').value


//para transformar em uma criptografia, precisa cortalo e tranforma-lo em outra coisa, quanto mais cortes na criptografia, mais densa ela será, a criptografia ela é sempre ligada, profewssor ivan fez a comparação sobre o onion rings porque ee também sempre está se conectando

let split = text.split("")

//depois de fatiar o texto, vamos contar quantas letras foi fatiado meu texto, agora sim depois de fatiado, contar quantas partes deu ao total, independente a quantidade que deu

let chars = split.length

const pre = ['Z','E','T','T','A','P','O','L','A','R','z','e','t','t','a','p','o','l','a','r']

//array tudo que voce precisa contruir na programção, para encontrar seu trabalho mais rapido e prático, array tem pre definido e pós definido,em sumo array tem pré e pós e quanto mais bagunçada mais densa ela é

const pos = ['P','O','L','A','R','E','N','T','p','o','l','a','r','e','n','i','t']
let rslt = document.getElementById('result')

//aqui estamos colocando o pos da criptografia, o result de toda a separação de letra por letra

for (i = 0; i < chars; i++) {
    let index = pre.indexOf(split[i])

    //Vai contar apartir de 0, todo numero que ele receber

    if(index === -1) {
//

    split[i] = split [i]
    } else {
        split[i] = pos[index]
    }

    const toString = split.join('')

   rslt.innerText = toString

   //ele faz um joy desses dois arrays e mostra o resultado

}

}




















































































