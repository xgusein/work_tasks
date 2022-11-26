// const arr1 = [1, 2, [3, 4, [5, 6,[7, 8, [9, 10]]]]];

// function float (info) {
//     info.flat(Infinity);
// };

// console.log(float(arr1));

// const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// console.log(arr4.flat(Infinity));

// function Flat (arry) {
//     arry.flat(Infinity); // muellim bununlada yoxlamaqa caslisdim amma alinmadi funksiyada islemedi
// };

// console.log(Flat(arr4));

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

function flatten(ary) {
    var ret = [];
    for(var i = 0; i < ary.length; i++) {
        if(Array.isArray(ary[i])) {
            ret = ret.concat(flatten(ary[i]));
        } else {
            ret.push(ary[i]);
        }
    }
    return ret;
}

console.log(flatten(arr4)); 