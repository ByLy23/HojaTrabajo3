module.exports={
    Gritar: function(texto){
        //todo lo que se escriba se manda en mayusculas
        return("TE ESTOY GRITANDO QUE: "+texto.toUpperCase())
    },
    Susurrar: function(texto){
        //todo lo que se escriba se manda en minusculas
        return("te estoy susurrando que: "+texto.toLowerCase())
    },
    Cheemsficador: function(texto){
        //todo lo que se escriba se manda en lenguaje Cheems
        var tex= texto.toLowerCase();
        var res="";
        for(var i; i<tex.length;i++){
            var a=tex[i];
        switch(a){
            case "a":
                res+=a+"m";
                break;
            case "e":
                res+=a+"m";
                break;
            case "i":
                res+=a+"m";
                break;
            case "o":
                res+=a+"m";
                break;
            case "u":
                res+=a+"m";
                break;
            default:
                res+=a;
                break;
        }
    }
    return res;
    },
    contarLetras:function(texto){
        return ("Tu texto tiene: "+texto.length+" letras");
    },
    charlieCharlie:function(texto){
        var random=Math.floor(Math.random()*2);
        if(random==1){
            return ("Si");
        }else{
            return ("No");
        }
    }
}