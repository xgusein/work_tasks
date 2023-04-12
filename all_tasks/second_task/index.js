var isPalindrome = function (string) {
    string = string?.toLowerCase() || ' ';
    if (string == string.split('').reverse().join('')) {
        alert("Yes");
    }
    else {
        alert("No");
    }
}
let inStr = document.getElementById('text').onsubmit = function() {
    isPalindrome(document.getElementById('text1').value);
}
// const isPalindrome = (inStr) => {
//     inStr = inStr.toLowerCase();
//     for (let i=0; i<inStr.length; i+=1) {
//         if( inStr[i] !== inStr[inStr.length - 1 - i]){
//             return false
//         }
//     }
//     return true;
// }

