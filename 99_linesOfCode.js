let lines;
for (count = 99; count >= 1; count = count - 1) 
{
    if (count == 1) {
        lines = 'line';
    } 
    else {
        lines = 'lines';
    }
    console.log(count+` ${lines} of code in my file.`);
    if (count < 99) {
        console.log("");        
        console.log(count+` ${lines} of code in my file,`);
    }
console.log(count+` ${lines} of cooode.`);
    console.log("Stand up and shout,");
    console.log('"Comment one out!"');
    if (count == 1) {
        console.log("No more lines of code in my file.");
    }
}