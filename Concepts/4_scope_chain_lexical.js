function a() {
    var b = 2;

    c();
    function c() {
        console.log(b);  // debugger here
    }
    
}

a(); 