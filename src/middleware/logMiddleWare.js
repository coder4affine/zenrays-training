const log = ({ getState, dispatch }) => next => action => {
  const matches = /(.*)_(SUCCESS)/.exec(action.type);
  if (matches) {
    const [, requestName, requestState] = matches;
    if (requestState === "SUCCESS") {
      console.log(action.payload);
    }
  }

  next(action);
};

export default log;
