

const fn1 = async (req, res, next) => {
    res.send('fn1');
}
const fn2 = async (req, res, next) => {
    res.send('fn2');
}
const fn3 = async (req, res, next) => {
    res.send('fn3');
}
const fn4 = async (req, res, next) => {
    res.send('fn4');
}
module.exports={
    fn3,fn4
};
exports={
    fn1,fn2
};