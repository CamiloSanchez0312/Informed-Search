const bfs = require("./bfs");
const dfs = require("./dfs");
var simpleHashtable = require('simple-hashtable');

// Constantes del problema
/*const map = [[1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 0, 1, 0, 1, 1, 1],
            [1, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1]];*/
const map = [[0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 1]]
let contador = 0;
const start = 'lk';
const solution = new simpleHashtable();
solution
    .put('AAACCC', 'asynchronous, event-driven io for server side javascript')
    .put('ABBCC', 'noSQL database')
    .put('BABAB', 'noSQL database')
    .put('BCABACB', 'noSQL database')
    .put('CBAC', 'noSQL database')
    .put('CBACB', 'noSQL database')
const actions = ['A', 'B', 'C'];
const costs = [1, 1, 1, 1];

//let nodo = {value: {x: 2, y: 6}, actions: 'RU', level: 2};

function isSolution(nodo, constantes) {
    let solution = constantes.solution;
    /* for (let index = 0; index < solution.length; index++) {
        if(nodo.actions == solution[index]){
            return true
        }else{
            return false
        }
    } */
    if(solution.containsKey(nodo.actions)){
        return true
    }else{
        return false
    }
}

function getChildren(nodo, constantes) {
    let map = constantes.map;
    let children = []
    
    //A
    if (contador == 0) {
        children.push({value: 'A',
                        actions: nodo.actions + 'A',
                        level: nodo.level + 1
        });
        contador++;
    } 
    //B
    if (contador == 1) {
        children.push({value: 'B',
                        actions: nodo.actions + 'B',
                        level: nodo.level + 1
        });
        contador++;
    } 
    //C
    if (contador == 2) {
        children.push({value: 'C',
                        actions: nodo.actions + 'C',
                        level: nodo.level + 1
        });
        contador = 0;
    } 
    //C
    return children;
}



let constantes = {map, solution, start, actions, costs}
let root = {value: constantes.start, actions: '', level: 0};

let children = getChildren(root, constantes);

//console.log(children)

/* console.log(children.length == 2);
console.log(children[0].actions == 'R');
console.log(children[0].value.x == root.value.x + 1);
console.log(children[0].value.y == root.value.y);
console.log(children[0].level == 1);
console.log(children[1].actions == 'D');
console.log(children[1].value.x == root.value.x);
console.log(children[1].value.y == root.value.y + 1);
console.log(children[1].level == 1); */
//console.log(children)
//console.log(isSolution({actions:'AAACCC'}, constantes) == false);

let problem = {constantes, isSolution, getChildren}

let solution1 = dfs(problem);

console.log(solution1); // "RUUUUU"