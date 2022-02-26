const arr1 = [1];
const arr2 = [2];
const arr3 = [3];
const arr4 = [4];
const arr5 = [5];
const arr6 = [arr1,arr2,arr3,arr4,arr5];

console.log(`${[...arr6]}`)




const obj = {
    name: "Amir",
    surname: "Yuburov",
    age: 17,
    eye: "hazel",
    hair: "dark",
}

const newObj = {
    ...obj,
    height: 187,
    nation: "dungan",
    school: 67

}
console.log(newObj)









const btn = document.getElementById("btn");

const input = document.getElementById("input");
const pTag = document.getElementById("text");
btn.onclick = () => {
  input.addEventListener("change", (e) => {
    pTag.innerHTML = `Hello ${e.target.value}`;
  });
};