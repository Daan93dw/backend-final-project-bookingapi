class ForbiddenError extends Error {
  constructor(message) {
    super(message || "Forbidden access");
    this.name = this.constructor.name;
    this.status = 403;
  }
}
export default ForbiddenError;
