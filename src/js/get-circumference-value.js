const getCircumferenceSetValue = (strokeDasharrayValue, maxGameTime, seconds) =>
  (strokeDasharrayValue * (maxGameTime - seconds)) / maxGameTime;

export default getCircumferenceSetValue;
