export const ROOT_URL = (() => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'http://52.69.76.248'
    case 'development':
    case 'test':
    case 'staging':
    default:
      return "http://localhost:3000"
  }
})();
