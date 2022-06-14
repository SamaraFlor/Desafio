"use strict";
// Como podemos melhorar o esse código usando TS? 
var profissao;
(function (profissao) {
    profissao[profissao["atriz"] = 0] = "atriz";
    profissao[profissao["padeiro"] = 1] = "padeiro";
})(profissao || (profissao = {}));
const Pessoa = {
    nome: 'maria',
    idade: 29,
    profissao: profissao.atriz
};
const pessoa1 = {
    nome: 'Roberto',
    idade: 19,
    profissao: profissao.padeiro
};
const Pessoa2 = {
    nome: 'Laura',
    idade: 32,
    profissao: profissao.atriz
};
const Pessoa3 = {
    nome: 'Carlos',
    idade: 19,
    profissao: profissao.padeiro
};
