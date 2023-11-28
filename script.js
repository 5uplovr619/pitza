document.getElementById("btn").addEventListener("click", pitzaorder);

function pitzaorder() {

    let size = document.getElementById("size").value;
    let topping1 = document.getElementById("topping1").value;
    let topping2 = document.getElementById("topping2").value;
    let sauce = document.getElementById("sauce").value;

    console.log(size);
    console.log(topping1)
    console.log(topping2)
    console.log(sauce)


    let hello = `thank you for ordering from za authentic pitza place pitza 73 your ${size} pizza with ${sauce} with ${topping1} and ${topping2} will be ready in 23 minute `;
    document.getElementById("hello").innerHTML = hello;
}

