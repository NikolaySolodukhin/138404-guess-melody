import '../postcss/style.css';
import './polyfill/polyfills.js';
import { GameSettings } from './data/game-play.js';
import State from './data/state.js';
import Application from './screens/application.js';

Application.init(new State(GameSettings.MAX_GAME_TIME));
