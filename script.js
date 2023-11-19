function reverse(sentence) {
    // Split the sentence into words
    var words = sentence.split(' ');

    // Reverse each word
    for (var i = 0; i < words.length; i++) {
        words[i] = reverseString(words[i]);
    }

    // Join the reversed words back into a sentence
    var reversedSentence = words.join(' ');

    return reversedSentence;
}

function reverseString(str) {
    // Split the string into an array of characters, reverse it, and join it back into a string
    return str.split('').reverse().join('');
}

// Example usage
var inputSentence = "This is a sunny day";
var reversedResult = reverse(inputSentence);

console.log(reversedResult);
