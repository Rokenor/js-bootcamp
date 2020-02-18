function isValidPassword(password, username) {
  if (password.length < 8) {
    return false;
  }
  if (password.indexOf(' ') !== -1 ) {
    return false;
  }
  if (password.indexOf(username) !== -1) {
    return false;
  }

  return true;
}

// shorter
function isValidPasswordShort(password, username) {
  if (password.length < 8 || password.indexOf(' ') !== -1 || password.indexOf(username) !== -1) {
    return false;
  }

  return true;
}

// another way
function isValidPasswordShort(password, username) {
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;
  if (tooShort || hasSpace || tooSimilar) return false;
  return true;
}

// one more
function isValidPasswordShort(password, username) {
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;
  return !tooShort && !hasSpace && !tooSimilar;
}