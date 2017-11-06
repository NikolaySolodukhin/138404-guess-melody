import 'babel-polyfill';
import 'whatwg-fetch';

import {GameSettings} from './data/game-play.js';
import State from './data/state.js';
import Application from './screens/application.js';

Application.init(new State(GameSettings.MAX_GAME_TIME));
