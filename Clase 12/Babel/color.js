class Color{
    #red;
    #green;
    #blue;
    constructor(){
        this.#red = Color.#random();
        this.#blue = Color.#random();
        this.#green = Color.#random();
    }
    static #random = ()=> Math.floor(Math.random()*255);
    generate = ()=>{
        console.log(`${this.#red} ${this.#green} ${this.#blue}`);
    }
}


const color = new Color();
color.generate();