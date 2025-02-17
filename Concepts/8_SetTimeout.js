function x(){

    for(var i = 1; i <= 5; i++){

        function close(i) {
            setTimeout(function(){
                console.log(i)
            }, i * 1000 )
        }
    close(i)
    }

    console.log("Here we go");
}

function y(){
    for(let j = 1; j <= 5; j++){
        setTimeout(function(){
            console.log(j)
        }, j * 1000 )
    }
}

x();

y();