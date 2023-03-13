let carro = {
    fabricante: 'Jepp',
    modelo: 'Compass',
    cv: 150,
    cor: 'Preto',
    ano: 2023,
    estaLigado: false,
    velocidade: 0,

    ligar: function(){
        if(this.estaLigado){
            return 'Veiculo ja está ligado'
        }
        this.estaLigado = true
        return 'ligado'
    },

    desligar: function(){
        if (!this.estaLigado){
            return 'Veiculo ja esta desligado'
        }
        this.estaLigado = false
        return 'Desligado'
    },

    acelerar: function(){
        this.velocidade += 10;
        return 'Velocidade aumentada'
    },

    frear: function(){
        this.velocidade -= 5;
        return 'Velocidade reduzida'
    }
}












