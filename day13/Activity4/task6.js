import lodash from "lodash";

const example = "foo Bar";

// convert string into snake case
const result = lodash.snakeCase(example);

console.log(result); // output: foo_bar