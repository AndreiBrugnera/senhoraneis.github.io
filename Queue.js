//IMPLEMENTAÇÃO DE FILA ATRÁVES DE UM ARRAY
function Queue() {

    let items = [];
    //ENFILEIRAR RECEBENDO ALGUME ELEMENTO COMO PARAMETRO
    this.enqueue = function (element) {
        items.push(element);
    }

    //DESINFILEIRAR
    this.dequeue = function () {
        return items.shift();
    }
    //RETORNAR O VALOR DO PRIMEIRO ELEMENTO
    this.front = function () {
        return items[0];
    }
    //RETORNAR O TAMANHO DA LISTA
    this.size = function () {
        return items.length;
    }

}