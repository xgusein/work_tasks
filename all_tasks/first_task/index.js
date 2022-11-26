var x = 0;
var array = [];

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("text1").value = "";
};
function display_array()
{
  const arrOfNum = array.map(str => +str);
   var e = "<hr/>";   
    
   for (var y=0; y<arrOfNum.length; y++)
   {
     e += arrOfNum[y];
     console.log(typeof(arrOfNum[y]));
   }
   document.getElementById("Result").innerHTML = e;
};

function sums(array, sum) {
  let pairs = [];
  let numList = [];

  for(let i = 0; i < array.length; i++) {
    let currNum = arr[i];
    let diff = sum - currNum;
    if(numList.includes(diff)) {
      pairs.push([currNum, diff]);
    }
    numList.push(currNum);
  }
  return pairs;
}

let num = 10;

console.log(sums(array, num))