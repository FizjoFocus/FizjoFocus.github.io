<?php
// 1. Ustawiasz unikalne zmienne dla tej konkretnej strony
$pageTitle = "Fizjoterapia Wrocław – Fizjo Focus | Paweł Kozyra";
$pageDesc = "Profesjonalna fizjoterapia we Wrocławiu: P-DTR, NeuroSeminars, DNS, MTG i PNF. Skuteczne leczenie bólu pleców, urazów sportowych, ograniczeń ruchu i problemów neurologicznych.";
$pageCanonical = "https://www.fizjofocus.com/";

// 2. Dołączasz nagłówek i menu
include('includes/header.php');
?>


<header class="header">
    <div class="header_triangle-top-left"></div>
    <div class="header_triangle-bottom-right"></div>
    <div class="header_bg"></div>
    <div class="header_shadow"></div>
    <div class="header_hero-text">
        <div class="header_hero-text-title">
            <h1>Fizjoterapia Wrocław&nbsp;i&nbsp;okolice <span>Fizjo Focus | Paweł Kozyra</span></h1>
        </div>
        <div class="header_hero-text-logo">
            <img src="img/LOGO_header.svg" width="320" height="180" fetchpriority="high" alt="Logo strony">
        </div>
        <div class="header_hero-text-motto">
            <p>Znajduję przyczynę Twojego problemu,
                zamiast&nbsp;pracować tylko na objawach.</p>
        </div>
        <div class="header_hero-text-btns">
            <a class="header_hero-text-btns-services" href="#prices">
                Zobacz cennik
            </a>
            <a class="header_hero-text-btns-contact" href="#contact">
                UMÓW SIĘ JUŻ TERAZ!
            </a>
        </div>
    </div>
    <div class="header_side header_side--left"></div>
    <div class="header_side header_side--right"></div>
</header>

<main>
    <section id="why" class="why">
        <div class="section-title">
            <h2>Jak mogę Ci pomóc</h2>
        </div>
        <p class="subheader">
            Jeśli masz wrażenie, że „próbowałeś już wszystkiego”, a&nbsp;problem nadal wraca – to miejsce może być
            dla
            Ciebie.
        </p>
        <div class="why_container" id="whyContainer">
            <div class="why_container-item">
                <h3>Z jakimi problemami pracuję?</h3>
                <button class="why_container-item-btn" aria-label="Przeczytaj o z jakimi problemami pracuję"><img
                        src="./icons/circle-down-solid-full.svg" alt="Ikona strzałki"></button>
            </div>
            <div class="why_container-item-text">
                <div class="scroll-container">
                    <p class="small-header"> Najczęstsze powody zgłoszeń:</p>
                    <ul>
                        <li>ból kręgosłupa, który nawraca mimo ćwiczeń lub zabiegów</li>
                        <li>ból barku, kolana, biodra „bez jasnej przyczyny”</li>
                        <li>napięcia, sztywność, uczucie niestabilności</li>
                        <li>drętwienia, mrowienia, uczucie „braku kontroli” nad ciałem</li>
                        <li>problemy z&nbsp;układem nerwowym (np. neuropatie)</li>
                        <li>urazy sportowe</li>
                        <li>zawroty głowy, zaburzenia równowagi</li>
                        <li>brak efektów po wcześniejszej rehabilitacji
                        </li>
                    </ul>
                </div>
            </div>
            <div class="why_container-item">
                <h3>Dlaczego ból często wraca?</h3>
                <button class="why_container-item-btn"
                    aria-label="Przeczytaj o dlaczego fizjoterapia często nie działa"><img
                        src="./icons/circle-down-solid-full.svg" alt="Ikona strzałki"></button>
            </div>
            <div class="why_container-item-text">
                <div class="scroll-container">
                    <p>Wiele terapii skupia się na miejscu, które boli.
                        Tymczasem bardzo często przyczyna problemu znajduje się gdzie indziej.</p>
                    <p>Ciało działa jako całość, a&nbsp;nadrzędną rolę pełni układ nerwowy.
                        Jeśli nieprawidłowo interpretuje on bodźce lub chroni ciało przed ruchem, ból może
                        utrzymywać
                        się mimo „rozluźniania” czy wzmacniania.</p>
                    <p class="small-header">Dlatego w mojej pracy:</p>
                    <ul>
                        <li>nie zaczynam od schematu,</li>
                        <li>nie pracuję „na ślepo”,</li>
                        <li>szukam przyczyny, a&nbsp;nie tylko miejsca objawu.</li>
                    </ul>
                </div>
            </div>
            <div class="why_container-item">
                <h3>Jak wygląda terapia?</h3>
                <button class="why_container-item-btn"
                    aria-label="Przeczytaj o Jak wygląda terapia - krok po kroku"><img
                        src="./icons/circle-down-solid-full.svg" alt="Ikona strzałki"></button>
            </div>
            <div class="why_container-item-text">
                <div class="scroll-container">
                    <p>Każda wizyta jest indywidualna, ale proces zawsze opiera się na kilku etapach: </p>
                    <ol>
                        <li>Dokładny wywiad i obserwacja ruchu</li>
                        <li>Testy funkcjonalne i neurologiczne – sprawdzające, jak ciało reaguje</li>
                        <li>Terapia dobrana do reakcji organizmu, nie do nazwy schorzenia</li>
                        <li>Weryfikacja efektu – sprawdzamy, co się zmieniło</li>
                        <li>Plan dalszego postępowania – terapia, ćwiczenia lub przerwa</li>
                    </ol>
                </div>
            </div>
            <div class="why_container-item">
                <h3>Metody, z których korzystam</h3>
                <button class="why_container-item-btn" aria-label="Przeczytaj o metody - jako narzędzia"><img
                        src="./icons/circle-down-solid-full.svg" alt="Ikona strzałki"></button>
            </div>
            <div class="why_container-item-text">
                <div class="scroll-container">
                    <p>W pracy wykorzystuję różne metody, m.in.:</p>
                    <ul>
                        <li>P-DTR</li>
                        <li>elementy neurologii funkcjonalnej</li>
                        <li>DNS</li>
                        <li>PNF</li>
                        <li>terapię tkanek miękkich</li>
                        <li>MTG</li>
                    </ul>
                    <p>Nie są one celem samym w sobie.
                        Są narzędziami, które dobieram w&nbsp;zależności od tego, jak reaguje Twój organizm.</p>
                    <a href="#services">Kliknij, aby przeczytać więcej o&nbsp;stosowanych przeze mnie metodach.</a>
                </div>
            </div>
            <div class="why_container-item">
                <h3>Dla kogo ta terapia nie jest</h3>
                <button class="why_container-item-btn" aria-label="Przeczytaj dla kogo ta terapia nie jest"><img
                        src="./icons/circle-down-solid-full.svg" alt="Ikona strzałki"></button>
            </div>
            <div class="why_container-item-text">
                <div class="scroll-container">
                    <p>Ta forma pracy nie będzie odpowiednia, jeśli:</p>
                    <ul>
                        <li>szukasz wyłącznie masażu „na rozluźnienie”</li>
                        <li>oczekujesz natychmiastowego efektu bez procesu</li>
                        <li>nie chcesz współpracować i&nbsp;obserwować reakcji swojego ciała</li>
                    </ul>
                    <p>Jeśli jednak chcesz zrozumieć swój problem i&nbsp;realnie nad nim pracować – jesteś
                        w&nbsp;dobrym
                        miejscu.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section id="about-me" class="about-me">
        <div class="section-title">
            <h2>Poznaj mnie</h2>
        </div>
        <p class="subheader">
            mgr Paweł Kozyra Fizjoterapeuta
        </p>
        <p class="about-me-description"> Jestem fizjoterapeutą z <span id="experience-years-mobile"></span> letnim
            doświadczeniem.
            Pomagam skutecznie wrócić do sprawności, pracując nad przyczyną problemu, nie tylko
            objawami.</p>
        <p class="hint">
            Kliknij zdjęcie, aby dowiedzieć się więcej →</p>
        <div class="about-me_container">
            <div class="about-me_card" id="aboutMeCard">
                <div class="about-me_container-photo">
                    <picture>
                        <img srcset="
							img/Zdjęcie_profilowe_small.webp 225w,
							img/Zdjęcie_profilowe_medium.webp 450w,
							img/Zdjęcie_profilowe_big.webp 488w" sizes="(min-width: 601px) 488px, 225px" width="450" height="384"
                            src="./img/Zdjęcie_profilowe_small.webp" alt="Zdjęcie Pawła Kozyry, fizjoterapeuty"
                            loading="lazy" decoding="async" />
                    </picture>
                </div>
                <div class="about-me_overlay">
                    <div class="about-me_overlay-content">
                        <div class="about-me_overlay-content_scroll-container">
                            <p class="about-lead">
                                Jestem fizjoterapeutą z <span id="experience-years-tablet"></span> letnim
                                doświadczeniem.
                                Pomagam skutecznie wrócić do sprawności, pracując nad przyczyną problemu, nie tylko
                                objawami.
                            </p>
                            <p class="about-list-title">Metody, którymi pracuję:</p>
                            <ul class="about-list">
                                <li>neurologia funkcjonalna (P-DTR, NeuroSeminars, DNS)</li>
                                <li>terapia powięziowa, MTG, PNF</li>
                                <li> masaż, trening medyczny </li>
                            </ul>
                            <p class="about-secondary">
                                Współpracuję m.in. z&nbsp;DCTM we Wrocławiu oraz Kliniką Neurorehabilitacji
                                dr&nbsp;Romana Olejniczaka.</p>
                            <p class="about-mission">
                                💡 Fizjoterapia to coś więcej niż zawód – to moja pasja i&nbsp;misja.
                                Najważniejsze jest dla mnie zrozumienie przyczyn problemu.
                                Dzięki indywidualnemu podejściu i&nbsp;połączeniu różnych metod pracujemy
                                u&nbsp;źródła,
                                a&nbsp;nie
                                tylko na skutkach dolegliwości.
                                Szczególną wagę przywiązuję do dokładnego wywiadu i&nbsp;badania, które pozwalają mi
                                w&nbsp;pełni
                                poznać Twój stan.
                            </p>
                            <button class="about-close">Zamknij ↑</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="services" class="services">
        <div class="section-title">
            <h2>metody</h2>
        </div>
        <p class="subheader"> Każdą metodę dobieram indywidualnie do Twojego problemu, aby przywrócić pełną
            sprawność.</p>
        <p class="hint">
            Kliknij nazwę, aby dowiedzieć się więcej →</p>

        <div class="services-container">
            <a href="pdtr.php" class="services-item" id="P-DTR">
                <div class="services-item-title">
                    <img src="./icons/pattern-key-svgrepo-com.svg" alt="" aria-hidden="true">
                    <h3 class="pdtr-header">P-DTR</h3>
                </div>
                <p class="services-item-description">Odblokuj układ nerwowy</p>
            </a>

            <a href="neuroseminars.php" class="services-item" id="neuro-seminars">
                <div class="services-item-title">
                    <img src="./icons/brain-engine-svgrepo-com.svg" alt="" aria-hidden="true">
                    <h3 class="neuroseminars-header">NeuroSeminars</h3>
                </div>
                <p class="services-item-description">Popraw funkcje mózgu</p>
            </a>

            <a href="dns.php" class="services-item" id="D-N-S">
                <div class="services-item-title">
                    <img src="./icons/DNS-picture.svg" alt="" aria-hidden="true">
                    <h3 class="dns-header">DNS</h3>
                </div>
                <p class="services-item-description">Odzyskaj kontrolę ruchu</p>
            </a>

            <a href="pnf.php" class="services-item" id="P-N-F">
                <div class="services-item-title">
                    <img src="./icons/i-physical-therapy-svgrepo-com.svg" alt="" aria-hidden="true">
                    <h3 class="pnf-header">PNF</h3>
                </div>
                <p class="services-item-description">Toruj prawidłowe wzorce</p>
            </a>

            <a href="mtg.php" class="services-item" id="M-T-G">
                <div class="services-item-title">
                    <img src="./icons/hand-holding-heart-solid-full.svg" alt="" aria-hidden="true">
                    <h3 class="mtg-header">MTG</h3>
                </div>
                <p class="services-item-description">Uwolnij głębokie napięcia</p>
            </a>

            <a href="inne.php" class="services-item" id="inne">
                <div class="services-item-title">
                    <img src="./icons/anatomy-svgrepo-com.svg" alt="" aria-hidden="true">
                    <h3 class="other-header">Inne</h3>
                </div>
                <p class="services-item-description">Wsparcie dla ciała</p>
            </a>
        </div>
    </section>

    <section class="courses" id="courses">
        <div class="section-title">
            <h2>kursy</h2>
        </div>
        <p class="courses subheader">
            Każde szkolenie potwierdza wiedzę i&nbsp;kompetencje, które wykorzystuję w&nbsp;pracy z&nbsp;pacjentami.

        </p>
        <p class="hint">
            Kliknij zdjęcie, aby powiększyć →</p>
        <div class="courses_gallery" id="gallery">
            <img class="thumb" src="./img/Kursy_w_WebP_miniatury/P-DTR_Podstawowy_page-0001.webp"
                data-full="./img/Kursy_w_WebP/P-DTR_Podstawowy_page-0001.webp" alt="Certyfiktat P-DTR Podstawowy">

            <img class="thumb" src="./img/Kursy_w_WebP_miniatury/P-DTR_Rozwijający_page-0001.webp"
                data-full="./img/Kursy_w_WebP/P-DTR_Rozwijający_page-0001.webp" alt="Certyfiktat P-DTR Podstawowy">

            <img class="thumb" src="./img/Kursy_w_WebP_miniatury/P-DTR_Zaawansowany_page-0001.webp"
                data-full="./img/Kursy_w_WebP/P-DTR_Zaawansowany_page-0001.webp" alt="Certyfikat P-DTR Rozwijający">

            <img class="thumb" src="./img/Kursy_w_WebP_miniatury/NeuroSeminars_page-0001.webp"
                data-full="./img/Kursy_w_WebP/NeuroSeminars_page-0001.webp" alt="Certyfikat NeuroSeminars">

            <img class="thumb" src="./img/Kursy_w_WebP_miniatury/PNF_Podstawowy_page-0001.webp"
                data-full="./img/Kursy_w_WebP/PNF_Podstawowy_page-0001.webp" alt="Certyfikat PNF Podstawowy">

            <img class="thumb" src="./img/Kursy_w_WebP_miniatury/Masaż_Tkanek_Głębokich_page-0001.webp"
                data-full="./img/Kursy_w_WebP/Masaż_Tkanek_Głębokich_page-0001.webp" loading="lazy"
                alt="Certyfikat Masaż Tkanek Głębokich">

            <img class="thumb"
                src="./img/Kursy_w_WebP_miniatury/Współczesne_metody_diagnostyki_i_leczenia_dysfunkcji_tkanej_miękkich,_Mięśniowo-powięziowe_rozluźnianie_page-0001.webp"
                data-full="./img/Kursy_w_WebP/Współczesne_metody_diagnostyki_i_leczenia_dysfunkcji_tkanej_miękkich,_Mięśniowo-powięziowe_rozluźnianie_page-0001.webp"
                alt="Współczesne metody diagnostyki i leczenia dysfunkcji tkanej miękkich, Mięśniowo-powięziowe rozluźnianie">

            <img class="thumb"
                src="./img/Kursy_w_WebP_miniatury/Współczesne_metody_diagnostyki_i_leczenia_dysfunkcji_tkanej_miękkich,_Techniki_Aktywnego_Rozluźniania_page-0001.webp"
                data-full="./img/Kursy_w_WebP/Współczesne_metody_diagnostyki_i_leczenia_dysfunkcji_tkanej_miękkich,_Techniki_Aktywnego_Rozluźniania_page-0001.webp"
                alt="Certyfikat Współczesne_metody_diagnostyki_i_leczenia_dysfunkcji_tkanej_miękkichWspółczesne metody diagnostyki i leczenia dysfunkcji tkanej miękkich, Techniki Aktywnego Rozluźniania">

            <img class="thumb"
                src="./img/Kursy_w_WebP_miniatury/Biomechaniczny_model_terapii_orofacjalnej_page-0001.webp"
                data-full="./img/Kursy_w_WebP/Biomechaniczny_model_terapii_orofacjalnej_page-0001.webp"
                alt="Biomechaniczny model terapii orofacjalnej">

            <img class="thumb"
                src="./img/Kursy_w_WebP_miniatury/Fizjoterapia_pacjentów_z_deficytem_centralnego_układu_nerwowego_page-0001.webp"
                data-full="./img/Kursy_w_WebP/Fizjoterapia_pacjentów_z_deficytem_centralnego_układu_nerwowego_page-0001.webp"
                loading="lazy" alt="Fizjoterapia pacjentów z deficytem centralnego układu nerwowego">

            <img class="thumb" src="./img/Kursy_w_WebP_miniatury/DNS_A_page-0001.webp"
                data-full="./img/Kursy_w_WebP/DNS_A_page-0001.webp" alt="DNS A">

            <img class="thumb" src="./img/Kursy_w_WebP_miniatury/DNS_B_page-0001.webp"
                data-full="./img/Kursy_w_WebP/DNS_B_page-0001.webp" alt="DNS B">

            <img class="thumb" src="./img/Kursy_w_WebP_miniatury/KIF_Zaświadczenie_page-0001.webp"
                data-full="./img/Kursy_w_WebP/KIF_Zaświadczenie_page-0001.webp" alt="KIF Zaświadczenie">
        </div>
    </section>

    <section id="reviews" class="reviews">
        <div class="section-title">
            <h2>opinie</h2>
        </div>
        <p class="subheader">Pomogłem wielu pacjentom — przeczytaj ich opinie i&nbsp;przekonaj się sam. </p>
        <p class="hint">Więcej recenzji znajdziesz na moim profilu na Facebooku.</p>
        <div class="carousel-container">
            <div class="carousel-track">
                <div class="carousel-slide">
                    <div class="review-stars">★★★★★</div>
                    <p>Polecam terapię u&nbsp;Pawła. Jest fizjoterapeutą z&nbsp;powołania. Ma dużą wiedzę, którą
                        wykorzystuje
                        w&nbsp;dostosowaniu najlepszej terapii u&nbsp;pacjenta. Zawsze wysłucha, szuka
                        rozwiązania
                        przyczyny a&nbsp;nie skutku bólu i&nbsp;stara się pomóc w&nbsp;całkowitym wyciszeniu
                        problemu.</p>
                    <p class="review-name">Kasia</p>
                </div>
                <div class="carousel-slide">
                    <div class="review-stars">★★★★★</div>
                    <p>Paweł pomógł mi z&nbsp;powracającymi bólami z&nbsp;którymi moi poprzedni fizjoterapeuci
                        nie
                        mogli sobie
                        poradzić-ból łokcia czy uciążliwy ból w&nbsp;udzie. Podczas spotkania opowiada co robi
                        i&nbsp;dlaczego, co pozwoliło mi zrozumieć skąd moje bóle mogły się wziąć. Bardzo
                        profesjonalne
                        podejście. Mega polecam.</p>
                    <p class="review-name">Agata</p>
                </div>
                <div class="carousel-slide">
                    <div class="review-stars">★★★★★</div>
                    <p>Paweł ogarnął mi poprzez terapię kilka problemów związanychz&nbsp;graniem w&nbsp;kosza -
                        łokieć,
                        kostkę, biodro. Bardzo dobrze całościowo podchodzi do pacjenta, szuka realnych
                        przyczyn i&nbsp;powiązań pomiędzy nimi. Mega polecam!
                    </p>
                    <p class="review-name">Bartek</p>
                </div>
            </div>


            <button class="prev" aria-label="Poprzednia opinia"><img src="./icons/chevron-left-solid-full.svg"
                    alt="Strzałka w lewo"></button>
            <button class="next" aria-label="Następna opinia"><img src="./icons/chevron-right-solid-full.svg"
                    alt="Strzałka w prawo"></button>
            <div class="carousel-dots"></div>
        </div>
    </section>

    <section id="prices" class="prices">
        <div class="section-title">
            <h2>cennik</h2>
        </div>
        <p class="subheader"> Jedna jakość terapii — wybierz wygodną formę wizyty. </p>
        <div class="prices-box">
            <div class="prices-box_gabinet">
                <div class="prices-box_gabinet-title">
                    <h3>W gabinecie</h3>
                </div>
                <img src="./icons/medical-clinic-care-svgrepo-com.svg" alt="Ikona szpitala">
                <div class="line"></div>
                <div class="prices-box_gabinet-text">
                    <p class="price">200zł <span>Dom Studencki T-22 ul.&nbsp;Wróblewskiego&nbsp;25,
                            51-657
                            Wrocław</span></p>
                    <div class="note">
                        <p>Otrzymujesz:</p>
                        <ul>
                            <li>🔍 Dokładną konsultację i&nbsp;analizę problemu</li>
                            <li>🎯 Indywidualnie dobraną terapię</li>
                            <li>🏠 Ćwiczenia do samodzielnej pracy w domu</li>
                            <li>🛡️ Porady, jak zapobiegać nawrotom bólu</li>
                            <li>💬 Jasne wyjaśnienie planu terapii</li>
                        </ul>
                    </div>
                </div>
                <a class="prices-box_gabinet-btn" href="#contact">
                    Sprawdź dostępność
                </a>
            </div>
            <div class="prices-box_drive">
                <div class="prices-box_drive-title">
                    <h3>W miejscu wezwania</h3>
                </div>
                <img src="./icons/medical-transportation-vehicle-svgrepo-com.svg" alt="Ikona ambulansu">
                <div class="line"></div>
                <div class="prices-box_drive-text">
                    <p class="price">200zł
                        <span>+ koszt dojazdu (ustalany indywidualnie)</span>
                    </p>
                    <div class="note">
                        <p>Otrzymujesz:</p>
                        <ul>
                            <li>🔍 Dokładną konsultację i analizę problemu</li>
                            <li>🎯 Indywidualnie dobraną terapię</li>
                            <li>🏠 Ćwiczenia do samodzielnej pracy w domu</li>
                            <li>🛡️ Porady, jak zapobiegać nawrotom bólu</li>
                            <li>💬 Jasne wyjaśnienie planu terapii</li>
                        </ul>
                    </div>
                </div>
                <a class="prices-box_drive-btn" href="#contact">Sprawdź dostępność</a>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="section-title">
            <h2>kontakt</h2>
        </div>
        <p class="subheader">Masz pytania? Napisz lub zadzwoń.</p>
        <div class="contact-box">
            <div class="contact-box_contact-links">

                <a href="tel:+48661228200" class="contact-item phone">
                    <div class="phone-text">
                        <img class="icon" src="./icons/square-phone-solid-full-blue.svg" alt="Ikona telefonu">
                        <span>+48 661 228 200</span>
                    </div>
                    <p class="contact-note">Najszybszy kontakt</p>
                </a>

                <a href="https://www.facebook.com/profile.php?id=100085838256435" target="_blank"
                    class="contact-item fb">
                    <img class="icon" src="./icons/square-facebook-brands-solid-full-blue.svg" alt="Ikona Facebook">
                    <span>Fizjo Focus</span>
                </a>

                <a href="mailto:fizjo.focus@gmail.com" class="contact-item e-mail">
                    <img class="icon" src="./icons/square-envelope-solid-full-blue.svg" alt="Ikona e-mail">
                    <span>fizjo.focus@gmail.com</span>
                </a>

            </div>

            <div class="contact-box_places">
                <div class="contact-box_places_drive">
                    <img src="./icons/car-solid-full.svg" alt="" aria-hidden="true">
                    <p>Dojeżdżam do&nbsp;domu&nbsp;pacjenta</p>
                </div>
                <hr>
                <div class="contact-box_places_gabinet">
                    <div class="contact-box_places_gabinet">
                        <img src="./icons/location-dot-solid-full.svg" alt="" aria-hidden="true">
                        <p>Przyjmuję w&nbsp;gabinecie</p>
                    </div>
                    <p class="contact-box_places_gabinet-adress">Dom Studencki T-22
                        ul.&nbsp;Wróblewskiego&nbsp;25,
                        51-657
                        Wrocław</p>
                </div>
            </div>
            <div class="contact-box_map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1252.6232707282034!2d17.085582347403662!3d51.10391126796463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe81e69800e5d%3A0xcea1f6da8fa469a4!2sDolno%C5%9Bl%C4%85skie%20Centrum%20Terapii%20Manualnej!5e0!3m2!1spl!2spl!4v1765046298949!5m2!1spl!2spl"
                    style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    title="Położenie DCTM Google Maps"></iframe>
            </div>
        </div>
    </section>
</main>

<?php
// 3. Dołączasz stopkę, widgety i skrypty
include('includes/mainfooter.php');
?>