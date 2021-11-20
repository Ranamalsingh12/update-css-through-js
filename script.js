//we need to select all three input so when they change we can update page
const inputs = document.querySelectorAll(".controlpanel input") ;

function handleUpdate(){
    const suffix = this.dataset.sizing || '';
    //console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)



    //dataset is the object that contain all the data attributes from that specific element//
    //'' is for thre color option because it doesn't contain the data attribute
    //we didn't use the root one by one in prop bcoz these are variable
}

inputs.forEach(input => input.addEventListener('change',handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));