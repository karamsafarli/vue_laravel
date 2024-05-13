<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <!-- font awesome -->
        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.5.2/css/all.css">
        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.5.2/css/sharp-thin.css">
        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.5.2/css/sharp-solid.css">
        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.5.2/css/sharp-regular.css">
        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.5.2/css/sharp-light.css">
        <!-- lottie JS -->
        <!-- <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>  -->
        <!-- jquery -->
        <!-- <script src="https://code.jquery.com/jquery-3.7.1.js"></script> -->
        <!-- owl carousel -->
        <!-- <link rel="stylesheet" href="public/assets/css/style.css"> -->
        <link href="{{ asset('assets/css/style.css') }}" rel="stylesheet">
        <!-- <link href="{{ asset('assets/css/owl.carousel.css') }}" rel="stylesheet">
        <link href="{{ asset('assets/css/owl.theme.default.css') }}" rel="stylesheet">
        <link href="{{ asset('assets/css/owl.theme.green.css') }}" rel="stylesheet"> -->



        @vite(['resources/js/app.js'])
    </head>
    <body>
    <div id="app"></div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
