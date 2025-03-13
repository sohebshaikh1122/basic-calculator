const add_Element=document.querySelector("#add");
add_Element.addEventListener("click" , ()=>{
    const numOne = +document.querySelector("#input_one").value;
    const numTwo = +document.querySelector("#input_two").value;
    // const numValue=prompt("Enter the nuumber:" ,0);
    alert(numOne+numTwo);
})

const sub_Element = document.querySelector("#sub");
sub_Element.addEventListener("click",()=>{
    const subOne = +document.querySelector("#input_one").value;
    const subTwo = +document.querySelector("#input_two").value;
    confirm("are you sure ? subtract the number:")
    alert(subOne-subTwo);
})

const multi_element = document.querySelector("#multi");
multi_element.addEventListener("click", ()=>{
    const multi_one = +document.querySelector("#input_one").value;
    const multi_two = +document.querySelector("#input_two").value;
    alert(multi_one*multi_two);
})

const div_Element = document.querySelector("#div");
div_Element.addEventListener("click" , ()=> {
    const div_one= +document.querySelector("#input_one").value;
    const div_two= +document.querySelector("#input_two").value;
    alert(div_one / div_two);
})


