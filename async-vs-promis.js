async function someFunc(val) {
    return val*2;
};

(async function () {
    console.log('async start');

    const res = await someFunc(2);
    console.log('async result is:', res);

    console.log('async finish');
})();


(function() {
    console.log('promise start');

    someFunc(3).then(res => {
        console.log('promise result is:', res);
    });

    console.log('promise finish');
})();
