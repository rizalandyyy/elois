<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    <title>Website Elois Under Construction</title>

    <!--CSS-->
    <link rel="stylesheet" href="<?php echo base_url().'assets/c/'; ?>css/style.css">
    <link rel="stylesheet" href="<?php echo base_url().'assets/c/'; ?>css/bootstrap-light.css">
    <link href='http://fonts.googleapis.com/css?family=Oswald:400,300,700' rel='stylesheet' type='text/css'>
    <!--/CSS-->

    <!--JS-->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="<?php echo base_url().'assets/c/'; ?>js/jquery.plugin.js"></script>
    <script src="<?php echo base_url().'assets/c/'; ?>js/jquery.countdown.js"></script>
    <script>
        $(function() {
            $('#defaultCountdown').countdown({
                until: new Date(2016, 3 - 1, 25)
            });
            //Replace above date with your own, to find out more visit http://keith-wood.name/countdown.html
        });
    </script>
    <!--/JS-->

</head>

<body>

    <!--DARK OVERLAY-->
    <div class="overlay"></div>
    <!--/DARK OVERLAY-->

    <!--WRAP-->
    <div id="wrap">
        <!--CONTAINER-->
        <div class="container">
            <img src="<?php echo base_url().'assets/c/'; ?>images/logo_.png" style="width: 70px;" alt="Paper Plane" class="image-align" />
            <h1>
                <span>We are</span><br/> <span class="yellow">Elois</span> Wedding & Event Planner
            </h1>
            <p>Our site is currently <strong>under construction</strong> but we are working hard<br/> to bring it soon again.</p>


        </div>
        <!--/CONTAINER-->
    </div>
    <!--/WRAP-->

</body>

</html>