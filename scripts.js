console.log("olá JS!");
//console.error("Esse é um erro!");
//console.warn("Esse é um aviso!");
// Variáveis
var x = 10;
// melhor 
let y = 15;
// const não muda o valor
const z = 20;

console.log(x);
console.log(y);
console.log(z);

//tipos de dados
const name = "Otto"; 
console.log(name);
console.log(typeof name);

const qtd = 4;
console.log(qtd);
console.log(typeof qtd);

const languages = ['JS', 'PHP', 'PYTHON'];
console.log(languages);
console.log(typeof languages);   

const user = {email:'clecio.ferreira@gmail.com',password:'12345#', age: 44};
console.log(user);
console.log(typeof user);   

//métodos de string
const fullName = 'Clécio Alves Ferreira Júnior';
console.log(fullName.length); 

const arrayName = fullName.split(" ");
console.log(arrayName);
console.log(fullName.toLowerCase())
console.log(fullName.toUpperCase())
console.log(fullName.indexOf("Alves"))
console.log(fullName.slice(0,7))

//métodos de array
const list = ['a', 'b', 'c', 'd', 'e', 'f']

console.log(list.length); 
console.log(list[2]); 

list[6] = 'g'

console.log(list)
//pega o último elemento da lista
console.log(list[list.length - 1])

//adicionou o H no final da lista
list.push('h')
console.log(list)

//remove o ultimo elemento da lista
list.pop()
console.log(list)

//retira o primeiro ele mento da lista
list.shift();
console.log(list)

//adicionou A no início da lista
list.unshift('a')
console.log(list)

//OBJETOS
const product = { 
    name: 'Camisa', 
    price: 15.99, 
    instock: true, 
    sizes:['P','M','G'] 
};

//ambas fazem a mesma coisa a de baixo é + abrangente, mas é pouco usada (1 é usada +) 
console.log(product.name)     
console.log(product['name'])

// DESTRUCTURING
const { price, instock} = product
console.log(price)
console.log(instock)         

const[p1,p2] = list
console.log(p1)
console.log(p2)  

//JSON - Java Script Object Notation
const dog = {
    name: 'Mel', 
    age: 8,
    color: 'Bege',     
} 

const json = JSON.stringify(dog)
console.log(json)

const obj = JSON.parse(json)
console.log(obj)

const jscomString = '{"name":"Mel", "age":8, "color":"Bege"}'
const obj2 = JSON.parse(jscomString)
console.log(obj2)

//ESTRUTURAS CONDICIONAIS
if (p1 != '' ) 
{
    console.log('P1 -> ' + p1)
}

const b = 'Clécio'

if(b === 'João'){
    console.log('É João')
}
else{
    console.log(b)
}
//IF TERNÁRIO
const numb = 14

let testN = numb > 20 ? 'YES' : 'NO'

console.log(testN)

//ESTRUTURA DE REPETIÇÃO - LOOP
const myList = [1, 2, 3, 4, 5]
let count = 0

while(count < myList.length)
{
    console.log('Imprimindo -> ' + myList[count])
    count++
}

const myList2 = ['a', 'b', 'c', 'd', 'e']

for(let count = 0; count < myList2.length; count++)
{
    console.log(`Imprimindo -> ${myList2[count]}`)
}

// MÉTODO DE ARRAY - REPETIÇÃO

const names = ['Fabiana','Clécio','Otto', 'Mel']
//não precisa de condição
names.forEach(function(name){
    console.log(`Imprimindo -> ${name}`)    
})

const modifiedName = names.map(function(name){

    if(name === 'Otto'){
        return(name = 'Meu Filho')
    } else {
        return(name)
    }
})

console.log(modifiedName)

const numbersFilter = [1, 2, 3, 4, 5, 10, 20, 30, 100].filter(function(number){
    return(number > 5)
})

console.log(numbersFilter)

const sumAll = [10, 20, 33, 44, 55, 41].reduce(function(total, number){
    return(total + number)
}) 

console.log(sumAll)

//FUNÇÃO 
function myFunction()
{
    return('Olá Função')
}

console.log(myFunction())

//arrow function
const myArrowFunc = (a, b) => {
    return(a + b) 
}

console.log(myArrowFunc(2 , 6))

const myArroFuncS = (a, b) => a + b

console.log(myArroFuncS(2 , 5))

//CLASSES

class Product{

    constructor(name, price, color){
        this.name = name
        this.price = price
        this.color = color
    }

    productDetails(){
        return ('Nome do Produto é ' + this.name + ', cor é ' + this.color + ' e o preço é R$('+ this.price + ')')
    }
}

const prod1 = new Product('Camiseta', 25.99, 'Branca')
const prod2 = new Product('Meias', 15.99, 'Preta')

console.log(prod1.name)
console.log(prod1.price)
console.log(prod1.color)

console.log(prod2.name)
console.log(prod2.price)
console.log(prod2.color)

console.log(prod2.productDetails())

//herança 
class ProductFilho extends Product {

    constructor(name, price, color, size){
        super(name, price, color)
        this.size = size
    }

    showComents(adjetivo)
    {
        return ('O ' + this.name + ' é muito ' + adjetivo + '!')
    }

    static sayTeste()
    {
        return ('Olá sayTeste')
    }   
}

const tenis = new ProductFilho('Tênis Nike', 254.99, 'Branco', 39)
console.log(tenis.name)
console.log(tenis.size)
console.log(tenis.showComents('leve'))

console.log(ProductFilho.sayTeste())

//DOM - DOCUMENT OBJECT MODEL

const title = document.getElementById('title')
console.log(title)
//query selector 
const sameTitle = document.querySelector('#title')
console.log(sameTitle)

const texts = document.querySelectorAll('.text') 
console.log(texts)

texts.forEach((text) => {
    console.log(text.textContent.toUpperCase())
})

//manipulação do html
title.textContent = 'Mudei o Texto'  

texts[0].innerHTML = '<span>Alterando o HTML deste Elemento</span>'

texts[1].style.backgroundColor = 'red'

texts[2].classList.add('my-class')

texts[2].classList.remove('text')

texts[3].remove()

//eventos
const btn = document.querySelector("#btn")

btn.addEventListener('click', function(){
    texts[2].style.color = 'blue'
})











