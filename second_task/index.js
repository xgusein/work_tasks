var isPalindrome = function (string) {
    if (string == string.split('').reverse().join('')) {
        alert("Yes");
    }
    else {
        alert("No");
    }
}

document.getElementById('text').onsubmit = function() {
   isPalindrome(document.getElementById('text1').value);
}