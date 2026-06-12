<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script async src="https://www.googletagmanager.com/gtag/js?id=G-BCN2J5P9Z2"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-BCN2J5P9Z2');
    </script>

    <title><?php echo $pageTitle ?? 'Fizjoterapia Wrocław – Fizjo Focus | Paweł Kozyra'; ?></title>
    <meta name="description" content="<?php echo $pageDesc ?? 'Profesjonalna fizjoterapia we Wrocławiu: P-DTR, NeuroSeminars, DNS, MTG i PNF.'; ?>">
    <link rel="canonical" href="<?php echo $pageCanonical ?? 'https://www.fizjofocus.com/'; ?>">

    <meta name="robots" content="index, follow, max-image-preview:large">
    <link rel="icon" type="image/png" sizes="16x16" href="./img/favicon-16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./img/favicon-32.png">
    <link rel="icon" type="image/png" sizes="64x64" href="./img/favicon-64.png">
    <link rel="icon" type="image/png" sizes="192x192" href="./img/android-chrome-192x192.png">
    <link rel="apple-touch-icon" sizes="180x180" href="./img/apple-touch-icon.png">
    <meta name="theme-color" content="#1691d7">

    <meta property="og:title" content="<?php echo $pageTitle ?? 'Fizjoterapia Wrocław – Fizjo Focus'; ?>">
    <meta property="og:description" content="<?php echo $pageDesc ?? 'Profesjonalna fizjoterapia we Wrocławiu...'; ?>">
    <meta property="og:image" content="https://www.fizjofocus.com/img/og/og-image.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:url" content="<?php echo $pageCanonical ?? 'https://www.fizjofocus.com/'; ?>">
    <meta property="og:type" content="website">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo $pageTitle ?? 'Fizjoterapia Wrocław – Fizjo Focus'; ?>">
    <meta name="twitter:description" content="<?php echo $pageDesc ?? 'Profesjonalna fizjoterapia...'; ?>">
    <meta name="twitter:image" content="https://www.fizjofocus.com/img/og/og-image.png">

    <link rel="preload" as="image" href="./img/LOGO_header.svg" fetchpriority="high">
    <link rel="preload" href="./fonts/roboto_woff2/Roboto-Regular.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="./fonts/roboto_woff2/Roboto-Medium.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="./fonts/roboto_woff2/Roboto-Bold.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="./css/style.css" as="style">
    <link rel="preload" href="./js/script.js" as="script">

    <link rel="stylesheet" href="./css/style.css">

    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Fizjo Focus Fizjoterapia – Paweł Kozyra",
      "url": "https://www.fizjofocus.com/",
      "logo": "https://www.fizjofocus.com/img/LOGO_header.svg",
      "image": [
        "https://www.fizjofocus.com/img/og/og-image.png"
      ],
      "telephone": "+48661228200",
      "priceRange": "PLN 200",
      "sameAs": [
        "https://www.facebook.com/profile.php?id=100085838256435"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ul. Zygmunta Wróblewskiego 25",
        "addressLocality": "Wrocław",
        "postalCode": "51-657",
        "addressCountry": "PL"
      },
      "areaServed": {
        "@type": "City",
        "name": "Wrocław"
      },
      "medicalSpecialty": [
        "Physiotherapy",
        "Neurology"
      ],
      "availableService": [
        { "@type": "MedicalTherapy", "name": "Fizjoterapia" },
        { "@type": "MedicalTherapy", "name": "P-DTR" },
        { "@type": "MedicalTherapy", "name": "Neurologia funkcjonalna" },
        { "@type": "MedicalTherapy", "name": "Terapia manualna" },
        { "@type": "MedicalTherapy", "name": "Ból kręgosłupa" },
        { "@type": "MedicalTherapy", "name": "Zaburzenia czucia" }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "07:00",
        "closes": "21:00"
      }
    }
    </script>
</head>
<body>

  <nav class="navbar">
    <div class="navbar_small-nav">
        <div class="navbar_small-nav-home">
            <a id='home-img' href="index.php">
                <img src="./img/LOGO_nav.svg" alt="Logo firmy Fizjo Focus" fetchpriority="high">
            </a>
        </div>
        <div class="navbar_small-nav-media">
            <a href="tel:+48661228200"><img class="icon" src="./icons/square-phone-solid-full.svg" alt="Ikona telefonu"></a>
            <a href="https://www.facebook.com/profile.php?id=100085838256435" target="_blank"><img class="icon" src="./icons/square-facebook-brands-solid-full.svg" alt="Ikona Faceboook"></a>
            <a href="mailto:fizjo.focus@gmail.com"><img class="icon" src="./icons/square-envelope-solid-full.svg" alt="Ikona e-mail"></a>
        </div>
        <button class="navbar_small-nav-button navbar_small-nav-burger" id="nav-icon2" aria-label="Otwórz menu">
            <span></span><span></span><span></span><span></span><span></span><span></span>
        </button>
    </div>

    <div class="navbar_nav-container">
        <ul class="navbar_nav">
            <li><a href="index.php#why" class="navbar_nav-link">pomoc</a></li>
            <li><a href="index.php#about-me" class="navbar_nav-link">o&nbsp;mnie</a></li>

            <li class="navbar_dropdown">
                <a href="index.php#services" class="navbar_dropdown-btn">
                    metody
                    <img class="arrow-next" src="./icons/circle-down-solid-full-white.svg" alt="Strzałka">
                </a>

                <ul class="navbar_dropdown-menu">
                    <li class="navbar_dropdown-back">
                        <button class="navbar_dropdown-back-btn" type="button">
                            <img class="arrow-back" src="./icons/circle-down-solid-full.svg" alt="Strzałka">
                            Wróć
                        </button>
                    </li>
                    <li><a href="pdtr.php" class="navbar_dropdown-link">P-DTR</a></li>
                    <li><a href="neuroseminars.php" class="navbar_dropdown-link">NeuroSeminars</a></li>
                    <li><a href="dns.php" class="navbar_dropdown-link">DNS</a></li>
                    <li><a href="pnf.php" class="navbar_dropdown-link">PNF</a></li>
                    <li><a href="mtg.php" class="navbar_dropdown-link">MTG</a></li>
                    <li><a href="inne.php" class="navbar_dropdown-link">Inne</a></li>
                </ul>
            </li>
            <li><a href="index.php#courses" class="navbar_nav-link">kursy</a></li>
            <li><a href="index.php#reviews" class="navbar_nav-link">opinie</a></li>
            <li><a href="index.php#prices" class="navbar_nav-link">cennik</a></li>
            <li><a href="index.php#contact" class="navbar_nav-link">kontakt</a></li>
        </ul>
    </div>
    <div class="navbar_nav-big-media"></div>
</nav>