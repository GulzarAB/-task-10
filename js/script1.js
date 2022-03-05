class Res {
    name;
    type;
    isOpen;
    served = 0;
    constructor(name,type,) {
        this.name = name;
        this.type = type;
    }

    sayNameAndType() {
        document.write(`Restaurant Name: ${this.name} <br>
        Cusine Type: ${this.type} <br>`)
    }

    setStatus(WorkTime){
        this.isOpen = WorkTime;
    }

    showWorkTime() {
        if(this.isOpen) {
            document.write(`Open <br>`);
        } else {
            document.write(`Closed <br>`);
        }
    }

    serve() {
        return this.served ++;
    }

    setServed(numberOfServed) {
        this.served += numberOfServed;
    }

    showTotalServed() {
        document.write(`Total served: ${this.served}! <br>`);
    }
}

const res = new Res("Seoul", "Korean");

res.sayNameAndType();
res.setStatus(true);
res.serve();
res.serve();
res.setServed(30);
res.showTotalServed();