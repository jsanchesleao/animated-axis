// Import stylesheets
import './style.css';

import {Animation, Layer} from './animation';
import AxisLayer from './layers/axisLayer';


const animation = new Animation("board");
animation.addLayer(new AxisLayer());

animation.run(60);