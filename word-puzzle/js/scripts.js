$(document).ready(function() {
    $("#button").click(function(event){
        event.preventDefault();
        var userInput = $("#word").val();
        var letters = userInput.split("")
        console.log(letters)

        var vowels = ["a", "i" , "e" , "o" , "u"];

        vowels.forEach(function(vowel) {
            for(var i = 0; i < letters.length; i++) {
                if(vowel === letters[i]) {
                    letters[i] = "-"
                    console.log(letters.join(""))
                }
            }
        })
        $("#result").text(letters.join(""));
    })
})




