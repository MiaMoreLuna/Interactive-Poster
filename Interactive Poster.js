
$ (document).ready (function() {

$ (".answer") .hide ();
$ ("#question") .click (function(){
    $ ("#answer") .show ();
})
    }

$  ("#a1").hide ();
$ ("#q1") .click (function() {
    $ ("#a1") .show ();
} );

$ ("#a2") .hide ();
$("#q2").click (function() {
    $("#a2") .show ();
    $("#a2") .toggle () ;
});

		
});