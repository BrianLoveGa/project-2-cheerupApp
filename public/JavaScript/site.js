console.log("TESTING CHECK CHECK");




function upVoteCheer () {

    let value = parseInt(document.getElementById('numb').value, 10);
    value = isNaN(value) ? 0 : value; 
    value ++;
    document.getElementById('numb').value= value;
};