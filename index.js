function palindrome(str) {
  const regex = /[ _=,.()\-]/g

  let replaced = str.toLowerCase().replace(regex, "")

  let reversed = replaced.split("").reverse().join("")

  if (reversed === replaced) {
    return true
  } else {
    return false
  }
}

palindrome("raceCar");
