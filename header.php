<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>
        <?php bloginfo('name'); ?> - <?php is_front_page() ? bloginfo('description') : wp_title(''); ?>
    </title>

    <?php wp_head(); ?>
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/style.css">

    <meta name="viewport" content="width=device-width">
</head>
<body <?php body_class(); ?>>
