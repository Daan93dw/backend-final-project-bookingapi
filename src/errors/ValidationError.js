class ValidationError extends Error {
  constructor(message) {
    super(message || "Invalid input");
    this.name = this.constructor.name;
    this.status = 400;
  }
}
export default ValidationError;
