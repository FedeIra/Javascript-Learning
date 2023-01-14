function FindWordStartingWith(book, query) {
  // Your code here:
  let words = book.split(' ');
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(query)) {
      result.push(words[i]);
    }
  }
  return result;
}

module.exports = FindWordStartingWith;
