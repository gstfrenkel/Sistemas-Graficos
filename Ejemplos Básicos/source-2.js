var APP = APP || {}:        //Si APP nunca es definiada, APP queda igualado a NULL

(function(){
    var temp = 1;
    var a = 2;

    function calcularPI(){
        return Math.PI;
    }

    APP.calcularPI = caluclarPI;
}());