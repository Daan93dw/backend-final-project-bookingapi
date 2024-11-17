// Wrapper that catches any async errors and pushes those to the errorHandler middleware
const asyncWrapper = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

export default asyncWrapper;
