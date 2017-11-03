const SERVER_URL = `https://es.dump.academy/guess-melody`;
const UNKNOWN_USERNAME = `unknown-racсoon`;

class Loader {
  static loadData() {
    return fetch(`${SERVER_URL}/questions`).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Что-то пошло не так (${response.status}) ${response.statusText}`);
      }
    });
  }

  static loadResults(username = UNKNOWN_USERNAME) {
    return fetch(`${SERVER_URL}/stats/${username}`).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Что-то пошло не так (${response.status}) ${response.statusText}`);
      }
    });
  }

  static saveResults(data, username = UNKNOWN_USERNAME) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };

    return fetch(`${SERVER_URL}/stats/${username}`, requestSettings);
  }

  static onError(message) {
    const errorLogWrapper = document.createElement(`div`);
    const errorLogTextContent = document.createElement(`span`);

    errorLogWrapper.appendChild(errorLogTextContent);

    errorLogWrapper.classList.add(`request-error`);
    errorLogTextContent.classList.add(`request-error__text`);
    errorLogTextContent.textContent = message;

    document.body.insertAdjacentElement(`afterbegin`, errorLogWrapper);

    setTimeout(() => {
      errorLogWrapper.remove();
    }, 5000);
  }
}

export default Loader;
