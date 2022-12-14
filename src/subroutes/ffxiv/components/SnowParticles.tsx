class SnowParticle {
  #posX: number;
  #posY: number;
  #depth: number;
  
  constructor(posX: number, posY: number, depth: number) {
    this.#posX = posX;
    this.#posY = posY;
    this.#depth = depth;
  }
  
  update() {
    this.#posX += Math.sin(this.#posY / 1000) * this.#depth / 4;
    this.#posY += this.#depth / 3;
  }

  get position() {
    return {
      x: this.#posX,
      y: this.#posY
    }
  }
}

class SnowParticles {
  static #snowSet = new Set<SnowParticle>();
  static #screenX = window.innerWidth;
  static #screenY = window.innerHeight;
  static get #maxParticles() { return 2000; }
  static get #particleSize() { return 2; }  

  static addParticle(posY: number, depth: number) {
    if(this.#snowSet.size < this.#maxParticles) {
      this.#snowSet.add(new SnowParticle(Math.random() * this.#screenX * 2 - this.#screenX, posY, depth));
    }
  }

  static addParticles(parameterFunction: Function, amount: number) {
    for(let i = 0; i < amount; i++) {
      const parameters = parameterFunction();
      this.addParticle(parameters[0], parameters[1]);
    }
  }

  static updateAndDrawParticles(context: CanvasRenderingContext2D) {
    this.#snowSet.forEach((particle: SnowParticle) => {
      particle.update();
      if(particle.position.y > this.#screenY) {
        this.#snowSet.delete(particle);
      } else {
        context.fillRect(particle.position.x, particle.position.y, this.#particleSize, this.#particleSize);
      }
    });
  }

  static updateScreenDimensions(screenX: number, screenY: number) {
    this.#screenX = screenX;
    this.#screenY = screenY;
  }

  constructor() {
    SnowParticles.addParticles(() => [Math.random() * SnowParticles.#screenY, Math.random() * 3 + 1], SnowParticles.#maxParticles);
  }
}
new SnowParticles();

export default SnowParticles;