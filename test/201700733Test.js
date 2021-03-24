const assert= require('chai').assert;
const app= require('../201700733');

describe('201700733', () => {
    describe('Gritar()', ()=>{
        it('Deberia gritar en string', ()=>{
            let grito= app.Gritar("estoy gritando");
            assert.typeOf(grito, 'string');
        })
        it('Deberia estar en mayusculas',()=>{
            let mayus= app.Gritar("Estoy gritando");
            assert.strictEqual(mayus,mayus.toUpperCase());
        })
    })


    describe('Susurrar()', ()=>{
        it('Deberia susurrar en string', ()=>{
            let grito= app.Susurrar("estoy susurrando");
            assert.typeOf(grito, 'string');
        })
        it('Deberia estar en minusculas',()=>{
            let mayus= app.Susurrar("Estoy GRITANDO");
            assert.strictEqual(mayus,mayus.toLowerCase());
        })
    })

    describe('Chemmsficador()', ()=>{
        it('Deberia hablar en chemms en string', ()=>{
            let grito= app.Cheemsficador("estoy hablando");
            assert.typeOf(grito, 'string');
        })
    })

    describe('contarLetras()', ()=>{
        it('Deberia ser numero en string', ()=>{
            let grito= app.contarLetras("estoy gritando");
            assert.typeOf(grito, 'string');
        })
    })

    describe('charlieCharlie()', ()=>{
        it('Deberia asustar en string', ()=>{
            let grito= app.charlieCharlie("estoy gritando?");
            assert.typeOf(grito, 'string');
        })
        it('Deberia decir si', ()=>{
            let grito= app.charlieCharlie("estoy gritando?");
            assert.equal(grito,"Si");
        })
        it('Deberia decir No', ()=>{
            let grito= app.charlieCharlie("estoy gritando?");
            assert.equal(grito,"No");
        })
    })
})
