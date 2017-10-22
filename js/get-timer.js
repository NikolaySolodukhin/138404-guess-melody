const getTimer = (seconds) => {
  if (seconds === 0) {
    return `time expired`;
  }
  return {
    value: seconds,
    tick() {
      return this.value - 1;
    }
  };
};

export default getTimer;
