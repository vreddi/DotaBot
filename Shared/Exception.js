const Exception = {
    NullReferenceException: (message) => {
        return new Exp('NullReferenceException', message)
    }
}

function Exp(name, message) {
    this.name = name;
    this.message = `${ this.name }: ${ message }`
}
