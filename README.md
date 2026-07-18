<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Syed Suhail & Taskeen Fathima – Wedding Invitation</title>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Great+Vibes&family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Cormorant Garamond', serif;
            background: #FDF8F0;
            color: #3E2C1B;
            overflow-x: hidden;
            -webkit-tap-highlight-color: transparent;
        }

        /* Floating particles */
        .particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
        }
        .particle {
            position: absolute;
            background: rgba(201,169,110,0.4);
            border-radius: 50%;
            animation: floatUp linear infinite;
        }
        @keyframes floatUp {
            0% { transform: translateY(100vh) scale(0); opacity: 0; }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { transform: translateY(-10vh) scale(1.5); opacity: 0; }
        }

        /* Door overlay */
        .door-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 100;
            display: flex;
            opacity: 1;
            pointer-events: all;
            transition: opacity 0.8s ease;
        }
        .door-overlay.hidden {
            opacity: 0;
            pointer-events: none;
        }
        .door-left, .door-right {
            width: 50%;
            height: 100%;
            background: linear-gradient(135deg, #F5E6D3 0%, #E8D5B7 100%);
            box-shadow: inset 0 0 50px rgba(0,0,0,0.08);
            border: 2px solid #C9A96E;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
        .door-left {
            transform-origin: left;
            border-right: none;
        }
        .door-right {
            transform-origin: right;
            border-left: none;
        }
        .door-left.open {
            transform: perspective(1500px) rotateY(-110deg);
        }
        .door-right.open {
            transform: perspective(1500px) rotateY(110deg);
        }
        .door-content {
            text-align: center;
            padding: 20px;
            z-index: 2;
        }
        .door-bismillah {
            font-size: 2.5rem;
            color: #B8944F;
            margin-bottom: 10px;
        }
        .door-assalamu {
            font-family: 'Montserrat', sans-serif;
            font-size: 0.9rem;
            letter-spacing: 2px;
            color: #6B5D4F;
            margin-bottom: 20px;
        }
        .door-invite-text {
            font-family: 'Great Vibes', cursive;
            font-size: 2.2rem;
            color: #8B7355;
            margin-bottom: 25px;
        }
        .open-btn {
            background: #C9A96E;
            color: #FDF8F0;
            border: none;
            padding: 12px 35px;
            border-radius: 50px;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.9rem;
            letter-spacing: 3px;
            text-transform: uppercase;
            cursor: pointer;
            box-shadow: 0 8px 20px rgba(184,148,79,0.3);
            transition: transform 0.3s, background 0.3s;
            animation: pulse 2s infinite;
        }
        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(184,148,79,0.4); }
            70% { box-shadow: 0 0 0 15px rgba(184,148,79,0); }
            100% { box-shadow: 0 0 0 0 rgba(184,148,79,0); }
        }

        /* Invitation container */
        .invitation-container {
            position: relative;
            z-index: 1;
            width: 100%;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.8s ease;
            padding: 20px;
        }
        .invitation-container.visible {
            opacity: 1;
            pointer-events: all;
        }

        /* Pages */
        .pages-wrapper {
            width: 100%;
            max-width: 600px;
        }
        .page {
            display: none;
            background: rgba(255, 252, 245, 0.92);
            backdrop-filter: blur(10px);
            border: 2px solid #D4C9A8;
            border-radius: 24px;
            padding: 40px 25px;
            text-align: center;
            box-shadow: 0 20px 50px rgba(150,130,100,0.2);
            animation: fadeSlide 0.6s ease;
        }
        .page.active {
            display: block;
        }
        @keyframes fadeSlide {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Navigation */
        .nav-buttons {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            gap: 10px;
        }
        .nav-btn {
            background: rgba(201,169,110,0.15);
            border: 1px solid #C9A96E;
            color: #3E2C1B;
            padding: 10px 20px;
            border-radius: 30px;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.8rem;
            letter-spacing: 2px;
            cursor: pointer;
            transition: 0.3s;
            flex: 1;
        }
        .nav-btn:disabled {
            opacity: 0.4;
            cursor: default;
        }
        .page-indicator {
            display: flex;
            justify-content: center;
            gap: 8px;
            margin-top: 15px;
        }
        .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #D4C9A8;
            transition: 0.3s;
        }
        .dot.active {
            background: #B8944F;
            width: 20px;
            border-radius: 10px;
        }

        /* Music toggle */
        .music-toggle {
            position: fixed;
            bottom: 25px;
            right: 25px;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background: rgba(201,169,110,0.85);
            border: 2px solid #D4C9A8;
            color: white;
            font-size: 1.3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 200;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        /* Countdown */
        .countdown {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin: 20px 0;
            flex-wrap: wrap;
        }
        .countdown-item {
            background: rgba(201,169,110,0.15);
            border-radius: 12px;
            padding: 10px 15px;
            min-width: 65px;
        }
        .countdown-number {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.8rem;
            font-weight: 600;
            color: #B8944F;
        }
        .countdown-label {
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #6B5D4F;
        }

        /* Action buttons */
        .action-btn {
            display: inline-block;
            background: #C9A96E;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 30px;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.8rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            cursor: pointer;
            margin: 5px;
            transition: 0.3s;
            text-decoration: none;
        }
        .outline-btn {
            background: transparent;
            border: 1px solid #C9A96E;
            color: #3E2C1B;
        }

        .heart {
            color: #C9A96E;
            font-size: 1.5rem;
            margin: 10px 0;
        }

        @media (max-width: 480px) {
            .door-bismillah { font-size: 1.8rem; }
            .page { padding: 25px 15px; }
        }
    </style>
</head>
<body>
    <!-- Floating particles -->
    <div class="particles" id="particles"></div>

    <!-- Door overlay -->
    <div class="door-overlay" id="doorOverlay">
        <div class="door-left" id="doorLeft">
            <div class="door-content">
                <div class="door-bismillah">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
                <div class="door-assalamu">Assalamu Alaikum Wa Rahmatullahi Wa Barakatuh</div>
                <div class="door-invite-text">Reception Invitation</div>
                <button class="open-btn" id="openBtn">Open</button>
            </div>
        </div>
        <div class="door-right" id="doorRight">
            <div class="door-content" style="visibility:hidden;"></div>
        </div>
    </div>

    <!-- Music toggle -->
    <div class="music-toggle" id="musicToggle">🎵</div>

    <!-- Invitation content -->
    <div class="invitation-container" id="invitationContainer">
        <div class="pages-wrapper">
            <!-- Page 1: Introduction -->
            <div class="page active" id="page1">
                <div style="font-size:2rem; color:#B8944F;">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
                <div class="heart">♥</div>
                <p style="font-style:italic; margin:10px 0;">"And We Created You In Pairs"<br>~Quran 78:8</p>
                <p style="font-weight:600; letter-spacing:2px; margin:15px 0;">WITH THE BLESSINGS OF ALLAH<br>AND OUR BELOVED PARENTS</p>
                <div style="font-size:1.5rem; color:#C9A96E;">✦</div>
                <p style="margin:15px 0;">We joyfully invite you to celebrate<br>the Nikah & Reception of</p>
                <h1 style="font-family:'Great Vibes',cursive; font-size:2.8rem; color:#3E2C1B;">Syed Suhail</h1>
                <p style="font-family:'Great Vibes',cursive; font-size:2rem; color:#C9A96E;">&</p>
                <h1 style="font-family:'Great Vibes',cursive; font-size:2.8rem; color:#3E2C1B;">Taskeen Fathima</h1>
                <div class="heart">♥</div>
                <p style="font-style:italic;">Two Souls. One Journey.<br>A Lifetime Of Love & Faith.</p>
            </div>

            <!-- Page 2: Countdown -->
            <div class="page" id="page2">
                <h2 style="font-family:'Great Vibes',cursive; font-size:2.2rem; color:#B8944F;">Counting Down</h2>
                <div class="countdown" id="countdown">
                    <div class="countdown-item"><div class="countdown-number" id="days">00</div><div class="countdown-label">Days</div></div>
                    <div class="countdown-item"><div class="countdown-number" id="hours">00</div><div class="countdown-label">Hours</div></div>
                    <div class="countdown-item"><div class="countdown-number" id="minutes">00</div><div class="countdown-label">Minutes</div></div>
                    <div class="countdown-item"><div class="countdown-number" id="seconds">00</div><div class="countdown-label">Seconds</div></div>
                </div>
                <p style="margin-top:20px;">Until the blessed day</p>
            </div>

            <!-- Page 3: Reception details -->
            <div class="page" id="page3">
                <h2 style="font-family:'Great Vibes',cursive; font-size:2.5rem; color:#B8944F;">Reception</h2>
                <p style="font-weight:600;">SATURDAY</p>
                <p style="font-size:1.3rem;">08:00 PM Onwards</p>
                <p style="font-size:1.5rem; font-weight:500;">05 SEP 2026</p>
                <div style="margin:20px 0;">
                    <p style="font-weight:600;">Classic Banquet Hall</p>
                    <p>No.831, 4th Block,<br>HBR Layout<br>Bangalore 560043</p>
                </div>
                <div style="display:flex; flex-direction:column; gap:10px; align-items:center;">
                    <button class="action-btn outline-btn" id="copyAddressBtn">📋 Copy Address</button>
                    <a href="https://www.google.com/maps/search/?api=1&query=Classic+Banquet+Hall+No.831+4th+Block+HBR+Layout+Bangalore+560043" target="_blank" class="action-btn">📍 Open Google Maps</a>
                </div>
            </div>

            <!-- Page 4: Closing -->
            <div class="page" id="page4">
                <p style="font-style:italic; font-size:1.1rem;">Two Souls. One Journey.<br>A Lifetime Of Love & Faith.</p>
                <p style="margin:15px 0;">Your Presence Will Be<br>Our Greatest Blessing</p>
                <div style="margin:20px 0;">
                    <p style="font-weight:600;">Best Regards</p>
                    <p><strong>Groom Side</strong><br>Syed Saqib</p>
                    <p><strong>Bride Side</strong><br>To Be Added</p>
                </div>
                <p style="font-size:1.2rem; font-weight:500;">JazakAllahu Khair</p>
                <p>Thank You For Celebrating With Us</p>
            </div>

            <!-- Navigation -->
            <div class="nav-buttons">
                <button class="nav-btn" id="prevBtn" disabled>← Previous</button>
                <button class="nav-btn" id="nextBtn">Next →</button>
            </div>
            <div class="page-indicator" id="pageIndicator">
                <span class="dot active" data-page="1"></span>
                <span class="dot" data-page="2"></span>
                <span class="dot" data-page="3"></span>
                <span class="dot" data-page="4"></span>
            </div>
        </div>
    </div>

    <!-- Audio element -->
    <audio id="bgMusic" loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
    </audio>

    <script>
        (function() {
            // ------------------- Particles -------------------
            const particlesContainer = document.getElementById('particles');
            for (let i = 0; i < 35; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                const size = Math.random() * 6 + 2;
                particle.style.width = particle.style.height = size + 'px';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDuration = (Math.random() * 8 + 8) + 's';
                particle.style.animationDelay = Math.random() * 8 + 's';
                particlesContainer.appendChild(particle);
            }

            // ------------------- Door & Music -------------------
            const doorOverlay = document.getElementById('doorOverlay');
            const doorLeft = document.getElementById('doorLeft');
            const doorRight = document.getElementById('doorRight');
            const openBtn = document.getElementById('openBtn');
            const invitationContainer = document.getElementById('invitationContainer');
            const bgMusic = document.getElementById('bgMusic');
            const musicToggle = document.getElementById('musicToggle');
            let musicPlaying = false;

            openBtn.addEventListener('click', function() {
                doorLeft.classList.add('open');
                doorRight.classList.add('open');
                // Try to play music
                bgMusic.play().then(function() {
                    musicPlaying = true;
                    musicToggle.textContent = '🔊';
                }).catch(function() {
                    // Autoplay prevented, user can tap toggle
                });
                setTimeout(function() {
                    doorOverlay.classList.add('hidden');
                    invitationContainer.classList.add('visible');
                }, 1000);
            });

            musicToggle.addEventListener('click', function() {
                if (musicPlaying) {
                    bgMusic.pause();
                    musicToggle.textContent = '🎵';
                } else {
                    bgMusic.play().then(function() {
                        musicToggle.textContent = '🔊';
                    }).catch(function() {
                        // Handle play error
                    });
                    musicToggle.textContent = '🔊';
                }
                musicPlaying = !musicPlaying;
            });

            // ------------------- Page Navigation -------------------
            const pages = document.querySelectorAll('.page');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const dots = document.querySelectorAll('.dot');
            let currentPage = 0;

            function showPage(index) {
                pages.forEach(p => p.classList.remove('active'));
                pages[index].classList.add('active');
                dots.forEach(d => d.classList.remove('active'));
                dots[index].classList.add('active');
                prevBtn.disabled = (index === 0);
                nextBtn.textContent = (index === pages.length - 1) ? 'Finish' : 'Next →';
                currentPage = index;
            }

            prevBtn.addEventListener('click', function() {
                if (currentPage > 0) showPage(currentPage - 1);
            });

            nextBtn.addEventListener('click', function() {
                if (currentPage < pages.length - 1) {
                    showPage(currentPage + 1);
                } else {
                    alert('JazakAllahu Khair! Thank you for viewing our invitation.');
                }
            });

            dots.forEach(function(dot) {
                dot.addEventListener('click', function() {
                    const pageNum = parseInt(dot.getAttribute('data-page')) - 1;
                    showPage(pageNum);
                });
            });

            // ------------------- Countdown Timer -------------------
            const weddingDate = new Date('2026-09-05T20:00:00+05:30').getTime();
            function updateCountdown() {
                const now = new Date().getTime();
                const distance = weddingDate - now;
                if (distance < 0) {
                    document.getElementById('days').textContent = '00';
                    document.getElementById('hours').textContent = '00';
                    document.getElementById('minutes').textContent = '00';
                    document.getElementById('seconds').textContent = '00';
                    return;
                }
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                document.getElementById('days').textContent = String(days).padStart(2, '0');
                document.getElementById('hours').textContent = String(hours).padStart(2, '0');
                document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
                document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
            }
            setInterval(updateCountdown, 1000);
            updateCountdown();

            // ------------------- Copy Address -------------------
            document.getElementById('copyAddressBtn').addEventListener('click', function() {
                const address = "Classic Banquet Hall, No.831, 4th Block, HBR Layout, Bangalore 560043";
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(address).then(function() {
                        const btn = document.getElementById('copyAddressBtn');
                        btn.textContent = '✅ Copied!';
                        setTimeout(function() { btn.textContent = '📋 Copy Address'; }, 2000);
                    }).catch(function() {
                        fallbackCopy(address);
                    });
                } else {
                    fallbackCopy(address);
                }
            });

            function fallbackCopy(text) {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                try {
                    document.execCommand('copy');
                    const btn = document.getElementById('copyAddressBtn');
                    btn.textContent = '✅ Copied!';
                    setTimeout(function() { btn.textContent = '📋 Copy Address'; }, 2000);
                } catch (e) {
                    alert('Copy failed. Please manually copy the address.');
                }
                document.body.removeChild(textarea);
            }

            // Initialize first page
            showPage(0);
        })();
    </script>
</body>
</html>
