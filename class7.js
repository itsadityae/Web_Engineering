//class 7 (maam also sent some files on mail)  : 
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <script src="jquery-3.7.1.js"></script>
    </head>
    <body>
        <p>Para</p>
        <button id="hide">Hide button</button>
        <button id="show">Show button</button>
        <script>
            $.noConflict();
            jQuery(document).ready(function ($) {
                $("#hide").click(function () {
                    $("p").css("color", "red").slideUp(2000).slideDown(2000);
                });
            });
        </script>
    </body>
</html>