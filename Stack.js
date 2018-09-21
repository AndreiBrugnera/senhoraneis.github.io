function Stack() {

    let items = [];

    this.push = function (element) {
        items.push(element);
    };

    this.pop = function () {
        items.pop(); // remove o último elemento
    };

    this.peek = function () { //devolve o topo
        return items[items.length - 1];
    };

    this.isEmpty = function () {
        return items.length = 0;
    }

    this.size = function () {
        return items.length;
    }

    this.clear = function () {
        items = [];
    }

    this.print = function () {
        console.log(items.toString());
    }

}