class Color{
    protected red : number;
    protected green: number;
    protected blue: number;
    constructor(){
        this.red = Color.random();
        this.blue = Color.random();
        this.green = Color.random();
    }
    protected static random = ():number => Math.floor(Math.random()*255);
    
    public algo ():Promise<any>{
        return Promise.resolve("Hola Mundo");
    }

    generate = ():void => console.log(`${this.red} ${this.green} ${this.blue}`);
}


const color:Color = new Color();
color.generate();

color.algo().then(dato=> console.log(dato));
