scrollHandling = {
    allow: true,
    reallow: function() {
        scrollHandling.allow = true;
    },
    delay: 50 //(milliseconds) adjust to the highest acceptable value
};

$(document).ready(function()
{
    $('#update_btn').click(function()
    {
        email_bhej('sub');
    });

    $('#sponsor_btn').click(function()
    {
        email_bhej('spon');
    });


});

function keep_update_toast(email) {

    var _0x43da = ["\x49\x20\x6C\x6F\x76\x65\x20\x79\x6F\x75\x20\x74\x6F\x6F", "\x22\x31\x31\x74\x68\x20\x31\x32\x74\x68\x20\x45\x4D\x2C\x20\x62\x75\x69\x6C\x64\x69\x6E\x67\x20\x66\x61\x6E\x73\x2C\x20\x6E\x6F\x20\x63\x6F\x64\x69\x6E\x67\x2E\x2E\x2E\x2E\x22\x2D\x6E\x75\x72\x64\x74\x65\x63\x68\x69\x65\x39\x38", "\x47\x53\x6F\x43\x20\x6B\x61\x20\x70\x61\x69\x73\x61\x20\x73\x70\x6F\x6E\x73\x6F\x72\x73\x68\x69\x70\x20\x6D\x65\x20\x64\x65\x64\x6F", "\x53\x63\x61\x6D\x20\x6E\x61\x69\x20\x6B\x61\x72\x6E\x65\x20\x6B\x61", "\x46\x72\x69\x64\x61\x79\x20\x61\x61\x6A\x61\x6E\x61\uD83C\uDF7A", "\x42\x72\x6F\x20\x74\x75\x20\x62\x61\x67\x20\x6B\x61\x69\x73\x65\x20\x6E\x61\x69\x20\x6C\x61\x74\x61\x20\x63\x6F\x6C\x6C\x65\x67\x65", "\x41\x6A\x20\x46\x61\x73\x74\x20\x74\x72\x61\x69\x6E\x20\x6D\x69\x6C\x65\x67\x61\x20\x6E\x61\x3F", "\x35\x74\x68\x20\x50\x72\x6F\x62\x6C\x65\x6D\x20\x6B\x61\x75\x6E\x20\x62\x61\x6E\x61\x65\x67\x61\x20\x61\x62\x3F", "\x53\x61\x6E\x61\x21\x20\x59\x6F\x75\x20\x73\x70\x6F\x6E\x73\x6F\x72\x69\x6E\x67\x20\x75\x73\x20\x72\x69\x67\x68\x74\x3F", "\x41\x68\x2E\x2E\x20\x49\x20\x73\x65\x65", "\x50\x6C\x73\x20\x64\x6F\x6E\x27\x74\x20\x61\x73\x6B\x20\x6A\x61\x76\x61\x20\x74\x6F\x20\x6D\x65\x20\x69\x6E\x20\x74\x68\x65\x20\x69\x6E\x74\x65\x72\x76\x69\x65\x77", "\x68\x74\x6D\x6C", "\x23\x73\x6E\x61\x63\x6B\x62\x61\x72\x31"];
    var email_diag = { "\x69\x6C\x6F\x76\x65\x79\x6F\x75\x40\x33\x30\x30\x30\x2E\x63\x6F\x6D": _0x43da[0], "\x63\x68\x69\x72\x61\x67\x2E\x73\x68\x65\x74\x74\x79\x40\x73\x6F\x6D\x61\x69\x79\x61\x2E\x65\x64\x75": _0x43da[1], "\x6E\x69\x73\x63\x68\x63\x68\x69\x74\x68\x2E\x73\x40\x73\x6F\x6D\x61\x69\x79\x61\x2E\x65\x64\x75": _0x43da[2], "\x6E\x65\x65\x6C\x31\x32\x40\x73\x6F\x6D\x61\x69\x79\x61\x2E\x65\x64\x75": _0x43da[3], "\x73\x68\x69\x76\x61\x6D\x2E\x70\x61\x77\x61\x73\x65\x40\x73\x6F\x6D\x61\x69\x79\x61\x2E\x65\x64\x75": _0x43da[4], "\x73\x61\x6E\x67\x72\x61\x6D\x2E\x64\x65\x73\x61\x69\x40\x73\x6F\x6D\x61\x69\x79\x61\x2E\x65\x64\x75": _0x43da[5], "\x64\x65\x76\x61\x6E\x73\x68\x2E\x73\x6F\x6C\x61\x6E\x6B\x69\x40\x73\x6F\x6D\x61\x69\x79\x61\x2E\x65\x64\x75": _0x43da[6], "\x74\x75\x73\x68\x61\x72\x2E\x6B\x61\x64\x61\x6D\x40\x73\x6F\x6D\x61\x69\x79\x61\x2E\x65\x64\x75": _0x43da[7], "\x73\x61\x6E\x61\x2E\x70\x40\x73\x6F\x6D\x61\x69\x79\x61\x2E\x65\x64\x75": _0x43da[8], "\x64\x68\x72\x75\x76\x69\x2E\x76\x61\x64\x61\x6C\x69\x61\x40\x73\x6F\x6D\x61\x69\x79\x61\x2E\x65\x64\x75": _0x43da[9], "\x73\x68\x69\x76\x61\x6E\x65\x65\x2E\x6A\x40\x73\x6F\x6D\x61\x69\x79\x61\x2E\x65\x64\x75": _0x43da[10] };
    if (email in email_diag) {
        $(_0x43da[12])[_0x43da[11]](email_diag[email])
    }

    $('#snackbar1').addClass('show');

    setTimeout(function () { $('#snackbar1').removeClass('show'); $('#snackbar1').html("Thank You, We will keep you updated."); }, 3500);
}

function error_email(email) {
    var _0xaa31 = ["\x49\x20\x6C\x6F\x76\x65\x20\x79\x6F\x75\x20\x33\x30\x30\x30\u2764\uFE0F", "\x55\x6E\x63\x6F\x6D\x6D\x69\x74\x65\x64\x20\x66\x69\x6C\x65\x73\x20\x66\x6F\x75\x6E\x64", "\x48\x69\x20\x74\x68\x65\x72\x65\x21", "\x6D\x65\x20\x70\x6F\x6F\x20\x70\x6F\x6F", "\x77\x65\x20\x77\x65\x72\x65\x20\x6F\x6E\x20\x61\x20\x62\x72\x65\x61\x6B", "\x49\x27\x76\x65\x20\x43\x6F\x6D\x65\x20\x54\x6F\x20\x42\x61\x72\x67\x61\x69\x6E", "\x46\x6F\x72\x65\x76\x65\x72", "\x49\x20\x61\x6D\x20\x49\x72\x6F\x6E\x6D\x61\x6E", "\x41\x73\x73\x65\x6D\x62\x6C\x65", "\x52\x75\x6E\x20\x66\x72\x6F\x6D\x20\x69\x74\x2E\x20\x44\x65\x73\x74\x69\x6E\x79\x20\x61\x72\x72\x69\x76\x65\x73\x20\x61\x6C\x6C\x20\x74\x68\x65\x20\x73\x61\x6D\x65\x2E\x20\x41\x6E\x64\x20\x6E\x6F\x77\x2C\x20\x69\x74\x27\x73\x20\x68\x65\x72\x65\x2E\x4F\x72\x20\x73\x68\x6F\x75\x6C\x64\x20\x49\x20\x73\x61\x79\x2C\x20\x4B\x4A\x53\x43\x45\x20\x48\x61\x63\x6B\x20\x69\x73\x2E", "\x49\x20\x61\x6D\x20\x4B\x4A\x53\x43\x45\x20\x48\x61\x63\x6B", "\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65", "", "\x72\x65\x70\x6C\x61\x63\x65", "\x68\x74\x6D\x6C", "\x23\x73\x6E\x61\x63\x6B\x62\x61\x72\x31", "\x73\x68\x6F\x77", "\x61\x64\x64\x43\x6C\x61\x73\x73", "\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73", "\x54\x68\x61\x6E\x6B\x20\x59\x6F\x75\x2C\x20\x57\x65\x20\x77\x69\x6C\x6C\x20\x6B\x65\x65\x70\x20\x79\x6F\x75\x20\x75\x70\x64\x61\x74\x65\x64\x2E"]; var error = { "\x69\x6C\x6F\x76\x65\x79\x6F\x75\x74\x6F\x6E\x73": _0xaa31[0], "\x67\x69\x74\x70\x75\x73\x68": _0xaa31[1], "\x68\x65\x79": _0xaa31[2], "\x6A\x65\x20\x6D\x27\x61\x70\x70\x65\x6C\x6C\x65": _0xaa31[3], "\x62\x72\x65\x61\x6B\x75\x70": _0xaa31[4], "\x64\x6F\x72\x6D\x61\x6D\x6D\x75": _0xaa31[5], "\x77\x61\x6B\x61\x6E\x64\x61": _0xaa31[6], "\x69\x61\x6D\x69\x6E\x65\x76\x69\x74\x61\x62\x6C\x65": _0xaa31[7], "\x61\x76\x65\x6E\x67\x65\x72\x73": _0xaa31[8], "\x64\x72\x65\x61\x64\x69\x74": _0xaa31[9], "\x69\x61\x6D\x67\x72\x6F\x6F\x74": _0xaa31[10] }; email = email[_0xaa31[13]](/ /g, _0xaa31[12])[_0xaa31[11]](); if (email in error) { $(_0xaa31[15])[_0xaa31[14]](error[email]); $(_0xaa31[15])[_0xaa31[17]](_0xaa31[16]); setTimeout(function () { $(_0xaa31[15])[_0xaa31[18]](_0xaa31[16]); $(_0xaa31[15])[_0xaa31[14]](_0xaa31[19]) }, 3500) }
}

function sponsor_toast()
{
    email_id = document.getElementById("id_email").value;


    $('#snackbar2').addClass('show');

    setTimeout(function(){ $('#snackbar2').removeClass('show'); }, 3000);
}
const validate_karo = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase())
}
function email_bhej(user){
    email_id = document.getElementById("id_email").value;
    if(validate_karo(email_id))
    {
        if(user=='sub') {
            keep_update_toast(email_id);
        }else{
            sponsor_toast();
        }
    } else {
        error_email(email_id);
    }
    if (user=='sub'){
        url_ = 'https://docs.google.com/forms/d/e/1FAIpQLSfnTPyuK3VkgDmv1OAW-0goxEM10OSvhtfLQKynt38CSh0r0A/formResponse?entry.1584480616='
    }else {
        url_ = 'https://docs.google.com/forms/d/e/1FAIpQLSfQGDCHN3znpza2a4CnvpJPjzpbMAxsv28NYPJfj34uK8tDcA/formResponse?entry.1584480616='
    }
    $.ajax({
        url: url_ + email_id,
        type: 'GET',
    });
}