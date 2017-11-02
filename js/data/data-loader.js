const SERVER_URL = `https://es.dump.academy/guess-melody`;

class Loader {
  static loadData() {
    return fetch(`${SERVER_URL}/questions`).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Неизвестный статус (${response.status}) ${response.statusText}`);
      }
    });
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
