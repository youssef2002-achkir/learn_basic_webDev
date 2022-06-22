// '=' BUTTON 
function calc() {
    var result = document.getElementById("cell");
    if (result.value == '') {
        result.value = 'ERROR'
    } else {
        result.value = result.value + '=' + eval(result.value);
    }
}
// 'DEL' BUTTON
var res = document.getElementById("cell");
function dele() {
    res.value = res.value.slice(0, -1);
}
var ans;
// 'C' BUTTON
function Res() {
    res.value = '';
}
// 'ANS' BUTTON
function prans() {
    res.value = res.value.slice(res.value.indexOf('=') + 1, res.value.lenght);

}







