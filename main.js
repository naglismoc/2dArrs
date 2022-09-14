let body = document.getElementsByTagName("body")[0];

let items = [
    [1, 2],
    [3, 4, 4, 20, 6],
    [5, 6]
];

items = [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
];

let HTML = "";
HTML += '<div class="container">';

for (let i = 0; i < items.length; i++) {
    HTML += '<div>';
    for (let a = 0; a < items[i].length; a++) {
        HTML += '<span class="borders">' + items[i][a] + '</span>';
    }
    HTML += '</div>';

}

HTML += '</div>';
body.innerHTML += HTML;

let spans = document.getElementsByTagName("span");
for (let i = 0; i < spans.length; i+=2) {
     spans[i].classList.add("color");
    
}







//   console.log(items)
console.log(items[1][1]);
//   console.log(items[0][0]); // 1
//   console.log(items[0][1]); // 2
//   console.log(items[1][0]); // 3
//   console.log(items[1][1]); // 4