const showError = errorMessage => {
  const errorTooltip = document.createElement(`div`);
  const errorTooltipText = document.createElement(`span`);
  const secondTimeoutAfterError = 5000;

  errorTooltip.appendChild(errorTooltipText);

  errorTooltip.classList.add(`request-error`);
  errorTooltipText.classList.add(`request-error__text`);
  errorTooltipText.textContent = errorMessage;

  document.body.insertAdjacentElement(`afterbegin`, errorTooltip);

  setTimeout(() => {
    errorTooltip.remove();
  }, secondTimeoutAfterError);
};

export default showError;
