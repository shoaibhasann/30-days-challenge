function getTop(stack) {
  return stack[stack.length - 1];
}

// function to check valid parenthesis
function isValid(s) {
  if (s.length == 1) return false;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      stack.push(s[i]);
    } else if (s[i] == ")") {
      let top = getTop(stack);
      if (top != "(") {
        return false;
      } else {
        stack.pop();
      }
    } else if (s[i] == "]") {
      let top = getTop(stack);
      if (top != "[") {
        return false;
      } else {
        stack.pop();
      }
    } else if (s[i] == "}") {
      let top = getTop(stack);
      if (top != "{") {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  if (stack.length !== 0) return false;

  return true;
};

console.log(isValid("()[]{}")); // Output: true
console.log(isValid("{{")); // Output: false


