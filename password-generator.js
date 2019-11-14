// 1. User chooses one or more of these options:
// (((CREATE ARRAYS FOR EACH OF THESE)))
$(document).ready(function () {
    // specialChar = Special characters
    var specialChar = [
        "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "}",
        "{", "]", "[", "~", "-", "_", "."];
    // numChar = Numeric characters
    var numChar = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    // lowercaseChar = Lowercase characters
    var lowercaseChar = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // uppercaseChar = Uppercase characters
    var uppercaseChar = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    // (((CREATE AN EMPTY ARRAY)))

    // E = emptyArray


    // 2. User clicks a button
    // (((WRITE FUNCTION TO ADD CHECKED ARRAYS TO EMPTY ARRAY)))

    // let checkboxes = [].slice.call(document.querySelectorAll("input[type=checkbox]:checked")) 

    // // 2. Get array of values: 
    // let values = checkboxes.map(item => item.value)

    var checkboxes = document.querySelectorAll("input[type=checkbox]");
    var submit = document.getElementById("submit");
    var pwShow = document.getElementById("passwordShow");


    function getChecked() {
        var checked = [];
       for (var i = 0; i < checkboxes.length; i++) {
          var checkbox = checkboxes[i];
           if (checkbox.checked){
                checked.push(checkbox.value);
                // for(var j = 0; j < checked.length; j++){
                //     checked[i].split("", 0)
                //     console.log(checked)
                // }
           }
       }
       console.log(checked)
       return checked;
    }

    submit.addEventListener("click", function () {
        var checked = getChecked();
        console.log(checked);
        function makePassword(length) {
            var result = '';
            var characters = checked.toString();
            console.log(characters)
            // var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return result;
            
        }
       $(pwShow).text(makePassword(9));
    });
    // IF specialChar is checked....
    // IF numChar is checked....
    // IF lowercaseChar is checked....
    // IF uppercaseChar is checked....
    // WRITE MATH RANDOM FUNCTION TO GET PASSWORD FROM ARRAY


   
    // 3. Password displays on page
    // (((WRITE FUNCTION TO DISPLAY TEXT ON CLICK)))

    // Display items we need:

    // header
    // instructions
    // checkboxes next to items
    // button 
    // place to display password 


})