class InternalServerError extends Error {
  constructor(message) {
    super(message || "Internal Server Error");
    this.name = this.constructor.name;
    this.status = 500;
  }
}
export default InternalServerError;
