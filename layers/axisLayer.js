import {Layer} from '../animation';

class AxisLayer extends Layer {
  render(ctx) {
    ctx.moveTo(400, 0);
    ctx.lineTo(400, 600);
    ctx.stroke();
    ctx.moveTo(0, 300);
    ctx.lineTo(800, 300);
    ctx.stroke();
  }
}

export default AxisLayer;