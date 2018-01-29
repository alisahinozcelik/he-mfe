var xhr = new XMLHttpRequest();
xhr.open("GET", "https://loremflickr.com/384/141/0");
xhr.responseType = "blob";
xhr.onload = response;
xhr.send();

function response(e) {
console.log(e, this);
}
