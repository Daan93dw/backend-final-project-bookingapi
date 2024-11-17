class UnauthorizedError extends Error {
  constructor(message) {
    super(message || "Unauthorized access");
    this.name = this.constructor.name;
    this.status = 401;
  }
}
export default UnauthorizedError;
