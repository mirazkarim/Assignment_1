function showAge() {
    let inputValue = document.getElementById("input").value;
    


    if(inputValue < 18){
        let result = document.getElementById("label").innerHTML= '<img src="images/chield.jpg">';
    }
    else{
        let result = document.getElementById("label").innerHTML= '<img src="images/adult.jpg">';
    }
}
