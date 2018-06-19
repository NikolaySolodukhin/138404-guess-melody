import showError from '../templates/show-error.js';

const SERVER_URL = `https://es.dump.academy/guess-melody`;
const UNKNOWN_USERNAME = `unknown-racсoon`;

class Loader {
  static async loadData() {
    const response = await fetch(`${PUBLIC_URL}data/data.json`);

    return response.json();
  }

  static async loadResults(username = UNKNOWN_USERNAME) {
    const response = await fetch(`${SERVER_URL}/stats/${username}`);

    return response.json();
  }

  static async saveResults(data, username = UNKNOWN_USERNAME) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`,
      },
      method: `POST`,
    };

    return fetch(`${SERVER_URL}/stats/${username}`, requestSettings);
  }

  static onError(message) {
    showError(message);
  }
}

export default Loader;
