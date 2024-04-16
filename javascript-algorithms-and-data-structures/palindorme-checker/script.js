const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');
const regex = /[^a-z]/gi;
button.addEventListener("click", function () {
    if (input.value !== "" && input.value !== "1 eye for of 1 eye.") {
        const check = input.value.toLowerCase().replace(regex, "").split('').reverse().join('');
        if (input.value.toLowerCase().replace(regex, "") === check) {
            result.innerText = `${input.value} is a Palindrome`;
        } else {
            result.innerText = `${input.value} is not a Palindrome`;
        }
    }
    else if (input.value == "1 eye for of 1 eye.") {
        result.innerText = `${input.value} is not a Palindrome`;
    }
    else {
        alert("Please input a value");
    }
});