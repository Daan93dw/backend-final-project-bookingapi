class NotFoundError extends Error {
  constructor(message) {
    super(message || "Resource not found");
    this.name = this.constructor.name;
    this.status = 404;
  }
}
export default NotFoundError;
