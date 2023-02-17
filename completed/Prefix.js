var Arr = ["c", "acc", "ccc"];
var Common = function (strs) {
    var ShortestString = function (Prefixes) {
        var short = Prefixes.map(function (x) { return x.length; });
        var s = short.sort();
        return s[0];
    };
    var short = ShortestString(strs);
    var numberInstances = [];
    var _loop_1 = function (i) {
        var J = strs.map(function (x) { return x.charAt(i) === strs[0][i] ? true : false; });
        J.includes(false) === true ? i = short : numberInstances.push(strs[0][i]);
        out_i_1 = i;
    };
    var out_i_1;
    for (var i = 0; i < short; i++) {
        _loop_1(i);
        i = out_i_1;
    }
    return numberInstances.join('');
};
// console.log(CommonPrefix(Prefixes))
console.log("Cout", Common(Arr), "Expected: ");
