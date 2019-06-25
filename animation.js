export class Animation {
  constructor(canvasId) {
    this.progress = 0;
    this.canvas = document.getElementById(canvasId);
    this.layers = [];
  }
  
  addLayer(layer) {
    this.layers.push(layer)
  }
  
  update(progress) {
    this.progress += progress;
    this.layers.forEach(layer => layer.update(progress));
  }
  
  clear(ctx) {
    let fillStyle = ctx.fillStyle;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, 800, 600);
    ctx.fillStyle = fillStyle;
  }
  
  render() {
    let ctx = this.canvas.getContext("2d");
    this.clear(ctx);
    this.layers.forEach(layer => layer.render(ctx));
    ctx.font = "20px Arial";
    ctx.fillText(`progress[${this.progress}]`, 10, 50);
  }
  
  run(fps) {
    let lastRender = 0;
    const self = this;

    function loop(timestamp) {
      const progress = timestamp - lastRender;

      self.update(progress);
      if (progress >= 1000/fps) {
        lastRender = progress % 1000;
        self.render();
      }
      window.requestAnimationFrame(loop);
    }

    window.requestAnimationFrame(loop);
  }
  
}

export class Layer {
  update(timestamp) {
    
  }
  render() {
    
  }
}

export default Animation;