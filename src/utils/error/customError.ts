class CustomError extends Error {
  code: string;

  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

export default CustomError;
