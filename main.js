$(document).ready(function () {
    const output = $("#output");
    const n = $("#n");
    const s = $("#s");
    const rollButton = $("#rollbutton");
    const form = $("#diceroller");

    form.submit(function (e) {
        e.preventDefault();
        let num = parseInt(n.val());
        let sides = parseInt(s.val());
        let total = 0;
        for(let i = 0; i < num; i++) {
            total += Math.floor(Math.random() * sides) + 1;
        }
        output.text(num + "d" + sides + " result: " + total).show();
        return false;
    });
});

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    const charCode = (evt.which) ? evt.which : evt.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));

}