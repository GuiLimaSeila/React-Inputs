class Carro{
    constructor(modelo, placa, cor, ano){
        this.modelo = modelo;
        this.placa = placa;
        this.cor = cor;
        this.ano = ano;
        this.id = this.getRandomId();
    }
    getInfo(){
        return `Modelo: ${this.modelo},Placa: ${this.placa},Cor: ${this.cor},Ano: ${this.ano}`;
    }
    getRandomId(){
        return Math.floor(Math.random() * 10000);
    }
}

export default Carro;