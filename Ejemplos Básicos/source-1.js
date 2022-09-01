var APP = APP || {}:        //Si APP nunca es definiada, APP queda igualado a NULL

(function(){
    var temp = 1;
    var a = 2;

    function Classificador(){
        console.log("Se construyó un clasificador");

        this.metodo1 = function(){
            return 0;
        }

        this.metodo2 = function(){
            return 1;
        }
    }

    APP.clasificador = new Classificador();
}());