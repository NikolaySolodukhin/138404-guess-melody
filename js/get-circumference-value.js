const getCircumferenceSetValue = (strokeDasharrayValue, maxGameTime, seconds) => {
  return strokeDasharrayValue * (maxGameTime - seconds) / maxGameTime;
};

export default getCircumferenceSetValue;
