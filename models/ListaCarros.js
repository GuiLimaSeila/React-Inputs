class ListaCarros{
    constructor(){
        this.carros = [];
    }
    addCarro(carro){
        this.carros.push(carro);
    }
    get(){
        return this.carros;
    }
}

export default ListaCarros;