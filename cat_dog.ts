class Cat {
    name;
    
    constructor(cn)
    {
        this.name=cn;
        let cat_img=document.createElement("img");
        cat_img.src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
        cat_img.onclick=this.catOnClick();
        document.body.appendChild(cat_img);
    }

    catOnClick() {
        return() => {
            alert(this.name+" is clicked");
        }
    }
}

class dog {
    name;
    
    constructor(dn)
    {
        this.name=dn;
        let dog_img=document.createElement("img");
        dog_img.src="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg";
        dog_img.onclick=this.dogOnClick();
        document.body.appendChild(dog_img);
    }

    dogOnClick() {
        return() => {
            alert(this.name+" is clicked");
        }
    }
}

let do_cat = () => {
    let name=prompt("Cat name?");
    new Cat(name);
}

let do_dog = () => {
    let name=prompt("Dog name?");
    new Dog(name);
}
