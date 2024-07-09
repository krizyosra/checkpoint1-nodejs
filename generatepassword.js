const generator = require("generate-password");
const password = generator.generate({
  length: 10,
  number: true,
  symbols: true,
});
console.log(password);
