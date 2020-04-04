(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    document.getElementById('go').addEventListener('click', start);
    
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise
        .then(() => engine.toText('亲爱的'))
        .then(() => engine.shake())
        .then(() => engine.toText('辰辰'))
        .then(() => engine.shake())
        .then(() => engine.toText('请让我'))
        .then(() => engine.shake())
        .then(() => engine.toText('每天'))
        .then(() => engine.shake())
        .then(() => engine.toText('给你做饭'))
        .then(() => engine.shake())
        .then(() => engine.toText('然后'))
        .then(() => engine.shake())
        .then(() => engine.toText('趁没人注意'))
        .then(() => engine.shake())
        .then(() => engine.toText('偷偷'))
        .then(() => engine.shake())
        .then(() => engine.toText('亲你一下'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
