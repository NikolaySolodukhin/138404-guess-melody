import {initialState} from './data/game-play.js';
import showScreen from './templates/show-screen.js';
import getScreenWelcome from './screens/welcome.js';

showScreen(getScreenWelcome(initialState));
