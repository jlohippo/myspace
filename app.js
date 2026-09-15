// Main JavaScript Application File for MySpace LOTR Profile

// Avatar SVG Generator helper for characters
function getCharacterAvatarSvg(characterKey, color = '#3b82f6') {
    const avatars = {
        sam: `<svg viewBox="0 0 60 60" class="top8-avatar"><rect width="60" height="60" fill="#2d5a27"/><circle cx="30" cy="22" r="16" fill="#8d5b4c"/><circle cx="30" cy="26" r="12" fill="#fde047"/><circle cx="25" cy="24" r="2" fill="#1e293b"/><circle cx="35" cy="24" r="2" fill="#1e293b"/><path d="M 24 30 Q 30 35 36 30" stroke="#b91c1c" stroke-width="1.5" fill="none"/><path d="M 10 60 L 30 38 L 50 60 Z" fill="#4d7c0f"/></svg>`,
        aragorn: `<svg viewBox="0 0 60 60" class="top8-avatar"><rect width="60" height="60" fill="#1e293b"/><circle cx="30" cy="22" r="18" fill="#334155"/><circle cx="30" cy="26" r="12" fill="#fed7aa"/><circle cx="24" cy="24" r="2" fill="#0f172a"/><circle cx="36" cy="24" r="2" fill="#0f172a"/><path d="M 22 28 C 22 35 38 35 38 28" fill="#475569"/><path d="M 10 60 L 30 38 L 50 60 Z" fill="#0284c7"/></svg>`,
        gandalf: `<svg viewBox="0 0 60 60" class="top8-avatar"><rect width="60" height="60" fill="#475569"/><circle cx="30" cy="28" r="12" fill="#ffedd5"/><polygon points="30,2 12,22 48,22" fill="#64748b"/><path d="M 20 28 C 20 48 40 48 40 28 Z" fill="#f8fafc"/><circle cx="25" cy="26" r="2" fill="#000"/><circle cx="35" cy="26" r="2" fill="#000"/></svg>`,
        legolas: `<svg viewBox="0 0 60 60" class="top8-avatar"><rect width="60" height="60" fill="#065f46"/><circle cx="30" cy="22" r="16" fill="#fef08a"/><circle cx="30" cy="25" r="11" fill="#fef3c7"/><circle cx="25" cy="23" r="2" fill="#0284c7"/><circle cx="35" cy="23" r="2" fill="#0284c7"/><path d="M 25 29 Q 30 33 35 29" stroke="#d97706" stroke-width="1.5" fill="none"/><polygon points="12,18 20,24 16,28" fill="#fef08a"/><polygon points="48,18 40,24 44,28" fill="#fef08a"/></svg>`,
        gimli: `<svg viewBox="0 0 60 60" class="top8-avatar"><rect width="60" height="60" fill="#7f1d1d"/><circle cx="30" cy="22" r="15" fill="#78350f"/><circle cx="30" cy="25" r="11" fill="#fdba74"/><path d="M 15 25 C 15 50 45 50 45 25 Z" fill="#b45309"/><circle cx="24" cy="22" r="2" fill="#000"/><circle cx="36" cy="22" r="2" fill="#000"/><rect x="20" y="8" width="20" height="10" fill="#94a3b8"/></svg>`,
        pippin: `<svg viewBox="0 0 60 60" class="top8-avatar"><rect width="60" height="60" fill="#15803d"/><circle cx="30" cy="22" r="16" fill="#ca8a04"/><circle cx="30" cy="26" r="12" fill="#fef08a"/><circle cx="25" cy="24" r="2" fill="#1e293b"/><circle cx="35" cy="24" r="2" fill="#1e293b"/><path d="M 24 30 Q 30 36 36 30" stroke="#b91c1c" stroke-width="1.5" fill="none"/></svg>`,
        merry: `<svg viewBox="0 0 60 60" class="top8-avatar"><rect width="60" height="60" fill="#b45309"/><circle cx="30" cy="22" r="16" fill="#a16207"/><circle cx="30" cy="26" r="12" fill="#fed7aa"/><circle cx="25" cy="24" r="2" fill="#1e293b"/><circle cx="35" cy="24" r="2" fill="#1e293b"/><path d="M 24 30 Q 30 35 36 30" stroke="#b91c1c" stroke-width="1.5" fill="none"/></svg>`,
        arwen: `<svg viewBox="0 0 60 60" class="top8-avatar"><rect width="60" height="60" fill="#312e81"/><circle cx="30" cy="22" r="18" fill="#1e1b4b"/><circle cx="30" cy="25" r="11" fill="#fdf2f8"/><circle cx="25" cy="23" r="2" fill="#4338ca"/><circle cx="35" cy="23" r="2" fill="#4338ca"/><path d="M 25 29 Q 30 32 35 29" stroke="#be185d" stroke-width="1.5" fill="none"/></svg>`,
        gollum: `<svg viewBox="0 0 60 60" class="top8-avatar"><rect width="60" height="60" fill="#292524"/><circle cx="30" cy="30" r="16" fill="#78716c"/><circle cx="22" cy="26" r="6" fill="#fef08a"/><circle cx="38" cy="26" r="6" fill="#fef08a"/><circle cx="22" cy="26" r="2" fill="#000"/><circle cx="38" cy="26" r="2" fill="#000"/><path d="M 22 36 Q 30 32 38 36" stroke="#000" stroke-width="2" fill="none"/></svg>`,
        sauron: `<svg viewBox="0 0 60 60" class="top8-avatar"><rect width="60" height="60" fill="#000000"/><path d="M 30 10 L 45 50 L 15 50 Z" fill="#991b1b"/><ellipse cx="30" cy="32" rx="10" ry="14" fill="#f59e0b"/><ellipse cx="30" cy="32" rx="2" ry="12" fill="#000000"/></svg>`,
        elrond: `<svg viewBox="0 0 60 60" class="top8-avatar"><rect width="60" height="60" fill="#1e1b4b"/><circle cx="30" cy="22" r="17" fill="#311b92"/><circle cx="30" cy="25" r="11" fill="#ffedd5"/><circle cx="25" cy="23" r="2" fill="#1e3a8a"/><circle cx="35" cy="23" r="2" fill="#1e3a8a"/><polygon points="30,8 26,14 34,14" fill="#eab308"/></svg>`,
        galadriel: `<svg viewBox="0 0 60 60" class="top8-avatar"><rect width="60" height="60" fill="#0284c7"/><circle cx="30" cy="22" r="18" fill="#fef08a"/><circle cx="30" cy="25" r="11" fill="#fff1f2"/><circle cx="25" cy="23" r="2" fill="#0284c7"/><circle cx="35" cy="23" r="2" fill="#0284c7"/><path d="M 26 29 Q 30 32 34 29" stroke="#e11d48" stroke-width="1.5" fill="none"/></svg>`,
        custom: `<svg viewBox="0 0 60 60" class="top8-avatar"><rect width="60" height="60" fill="#64748b"/><circle cx="30" cy="22" r="14" fill="#cbd5e1"/><path d="M 10 55 C 10 38 50 38 50 55 Z" fill="#94a3b8"/></svg>`
    };
    return avatars[characterKey] || avatars['custom'];
}

// Initial Top 8 Data
let top8Friends = [
    { id: 'sam', name: 'Samwise Gamgee', role: 'Loyal Gardener', quote: 'There is some good in this world, and it is worth fighting for.' },
    { id: 'gandalf', name: 'Gandalf the Grey', role: 'Wizard', quote: 'A wizard is never late, nor is he early.' },
    { id: 'aragorn', name: 'Aragorn', role: 'Chieftain of Dúnedain', quote: 'If by my life or death I can protect you, I will.' },
    { id: 'legolas', name: 'Legolas Greenleaf', role: 'Elven Prince', quote: 'They\'re taking the Hobbits to Isengard!' },
    { id: 'gimli', name: 'Gimli Gloin\'s Son', role: 'Dwarf Warrior', quote: 'And my axe!' },
    { id: 'pippin', name: 'Pippin Took', role: 'Fool of a Took', quote: 'What about second breakfast?' },
    { id: 'merry', name: 'Merry Brandybuck', role: 'Esquire of Rohan', quote: 'I don\'t think he knows about second breakfast.' },
    { id: 'arwen', name: 'Arwen Undómiel', role: 'Evenstar', quote: 'I would rather share one lifetime with you than face all the ages alone.' }
];

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initThemeSelector();
    initTop8Grid();
    initAudioPlayerUI();
    initCommentsSystem();
    initModals();
    initMiniGame();
});

// Theme Selector Logic
function initThemeSelector() {
    const themeSelect = document.getElementById('theme-select');
    if (!themeSelect) return;

    const savedTheme = localStorage.getItem('lotr_myspace_theme') || 'theme-shire';
    document.body.className = savedTheme;
    themeSelect.value = savedTheme;

    themeSelect.addEventListener('change', (e) => {
        const selectedTheme = e.target.value;
        document.body.className = selectedTheme;
        localStorage.setItem('lotr_myspace_theme', selectedTheme);
    });
}

// Render Top 8 Grid
function initTop8Grid() {
    const grid = document.getElementById('top8-grid');
    if (!grid) return;

    grid.innerHTML = '';
    top8Friends.forEach((friend, index) => {
        const card = document.createElement('div');
        card.className = 'top8-item';
        card.onclick = () => showFriendDetail(friend);

        card.innerHTML = `
            <div class="top8-avatar-container">
                ${getCharacterAvatarSvg(friend.id)}
            </div>
            <span class="top8-name">${index + 1}. ${friend.name}</span>
            <span class="top8-role">${friend.role}</span>
        `;
        grid.appendChild(card);
    });
}

// Friend Detail Popup
function showFriendDetail(friend) {
    alert(`💬 Fellowship Friend Detail:\n\nName: ${friend.name}\nTitle: ${friend.role}\nQuote: "${friend.quote}"`);
}

// Audio Player UI Integration
function initAudioPlayerUI() {
    const playBtn = document.getElementById('btn-play');
    const nextBtn = document.getElementById('btn-next');
    const muteBtn = document.getElementById('btn-mute');
    const volumeSlider = document.getElementById('volume-slider');
    const trackTitle = document.getElementById('player-track-title');
    const canvas = document.getElementById('visualizer-canvas');

    if (window.lotrAudio && canvas) {
        window.lotrAudio.renderVisualizer(canvas);
    }

    if (playBtn) {
        playBtn.addEventListener('click', () => {
            if (window.lotrAudio) {
                const playing = window.lotrAudio.togglePlay();
                playBtn.textContent = playing ? '⏸ Pause' : '▶ Play';
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (window.lotrAudio) {
                const nextIndex = (window.lotrAudio.currentTrackIndex + 1) % window.lotrAudio.tracks.length;
                window.lotrAudio.selectTrack(nextIndex);
                if (trackTitle) {
                    trackTitle.textContent = window.lotrAudio.tracks[nextIndex].title;
                }
            }
        });
    }

    if (muteBtn) {
        muteBtn.addEventListener('click', () => {
            if (window.lotrAudio) {
                const muted = window.lotrAudio.toggleMute();
                muteBtn.textContent = muted ? '🔇 Unmute' : '🔊 Mute';
            }
        });
    }

    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            if (window.lotrAudio) {
                window.lotrAudio.setVolume(e.target.value);
            }
        });
    }
}

// Interactive Comments System with localStorage
const DEFAULT_COMMENTS = [
    {
        id: 'c1',
        author: 'Samwise Gamgee',
        avatarKey: 'sam',
        date: '10/24/2006 4:15 PM',
        body: 'Don\'t forget to eat your lembas bread Mr. Frodo! I\'ve packed extra tea leaves for the journey.'
    },
    {
        id: 'c2',
        author: 'Gollum / Smeagol',
        avatarKey: 'gollum',
        date: '10/23/2006 11:02 PM',
        body: 'Precious master! We loves you, yes we does! But give us back the preciousssss...'
    },
    {
        id: 'c3',
        author: 'Lady Galadriel',
        avatarKey: 'galadriel',
        date: '10/20/2006 2:40 PM',
        body: 'May it be a light to you in dark places, when all other lights go out. Stay strong, Ringbearer.'
    },
    {
        id: 'c4',
        author: 'Sauron',
        avatarKey: 'sauron',
        date: '10/18/2006 3:30 AM',
        body: 'I SEE YOU... (Thanks for adding me to your Fellowship space!)'
    }
];

function initCommentsSystem() {
    renderComments();

    const form = document.getElementById('comment-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const author = document.getElementById('comment-author').value.trim();
            const avatarKey = document.getElementById('comment-avatar').value;
            const body = document.getElementById('comment-body').value.trim();

            if (!author || !body) return;

            const newComment = {
                id: 'c_' + Date.now(),
                author,
                avatarKey,
                date: new Date().toLocaleString(),
                body
            };

            const comments = getSavedComments();
            comments.unshift(newComment);
            saveComments(comments);
            renderComments();

            form.reset();
        });
    }

    const resetBtn = document.getElementById('btn-reset-comments');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm('Reset comments to Shire defaults?')) {
                saveComments(DEFAULT_COMMENTS);
                renderComments();
            }
        });
    }
}

function getSavedComments() {
    const saved = localStorage.getItem('lotr_myspace_comments');
    if (!saved) return DEFAULT_COMMENTS;
    try {
        return JSON.parse(saved);
    } catch (e) {
        return DEFAULT_COMMENTS;
    }
}

function saveComments(comments) {
    localStorage.setItem('lotr_myspace_comments', JSON.stringify(comments));
}

function renderComments() {
    const list = document.getElementById('comments-list');
    const countSpan = document.getElementById('comment-count');
    if (!list) return;

    const comments = getSavedComments();
    if (countSpan) countSpan.textContent = comments.length;

    list.innerHTML = '';
    comments.forEach(c => {
        const card = document.createElement('div');
        card.className = 'comment-card';

        card.innerHTML = `
            <div class="comment-avatar-col">
                ${getCharacterAvatarSvg(c.avatarKey || 'custom')}
                <div class="comment-author-name">${escapeHtml(c.author)}</div>
            </div>
            <div class="comment-content-col">
                <div class="comment-header">
                    <span>${escapeHtml(c.date)}</span>
                    <span class="delete-comment-btn" onclick="deleteComment('${c.id}')">❌ Delete</span>
                </div>
                <p class="comment-body">${escapeHtml(c.body)}</p>
            </div>
        `;
        list.appendChild(card);
    });
}

function deleteComment(commentId) {
    let comments = getSavedComments();
    comments = comments.filter(c => c.id !== commentId);
    saveComments(comments);
    renderComments();
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Modals Handling (Reorder Top 8 and Send Raven)
function initModals() {
    const btnReorder = document.getElementById('btn-reorder-top8');
    const modalReorder = document.getElementById('modal-reorder');
    const btnCloseReorder = document.getElementById('btn-close-reorder');
    const btnSaveReorder = document.getElementById('btn-save-reorder');
    const reorderList = document.getElementById('reorder-list');

    if (btnReorder) {
        btnReorder.addEventListener('click', () => {
            renderReorderList();
            modalReorder.classList.remove('hidden');
        });
    }

    if (btnCloseReorder) {
        btnCloseReorder.addEventListener('click', () => {
            modalReorder.classList.add('hidden');
        });
    }

    if (btnSaveReorder) {
        btnSaveReorder.addEventListener('click', () => {
            initTop8Grid();
            modalReorder.classList.add('hidden');
        });
    }

    // Raven Modal
    const modalRaven = document.getElementById('modal-raven');
    const btnCloseRaven = document.getElementById('btn-close-raven');
    const ravenForm = document.getElementById('raven-form');

    if (btnCloseRaven) {
        btnCloseRaven.addEventListener('click', () => {
            modalRaven.classList.add('hidden');
        });
    }

    if (ravenForm) {
        ravenForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const recipient = document.getElementById('raven-recipient').value;
            alert(`🦅 Carrier Raven dispatched to ${recipient}!`);
            modalRaven.classList.add('hidden');
            ravenForm.reset();
        });
    }
}

function openSendRavenModal() {
    const modalRaven = document.getElementById('modal-raven');
    if (modalRaven) {
        modalRaven.classList.remove('hidden');
    }
}

function renderReorderList() {
    const list = document.getElementById('reorder-list');
    if (!list) return;

    list.innerHTML = '';
    top8Friends.forEach((friend, idx) => {
        const li = document.createElement('li');
        li.className = 'reorder-item';
        li.innerHTML = `
            <span>${idx + 1}. ${friend.name}</span>
            <div class="reorder-btns">
                <button class="retro-btn small-btn" onclick="moveTop8(${idx}, -1)">▲</button>
                <button class="retro-btn small-btn" onclick="moveTop8(${idx}, 1)">▼</button>
            </div>
        `;
        list.appendChild(li);
    });
}

function moveTop8(index, direction) {
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= top8Friends.length) return;

    const temp = top8Friends[index];
    top8Friends[index] = top8Friends[targetIndex];
    top8Friends[targetIndex] = temp;

    renderReorderList();
}

/* ==========================================================================
   Mini Game: Quest to Mount Doom
   ========================================================================== */
function initMiniGame() {
    const canvas = document.getElementById('game-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const scoreSpan = document.getElementById('game-score');
    const highscoreSpan = document.getElementById('game-highscore');
    const distanceSpan = document.getElementById('game-distance');
    const realmSpan = document.getElementById('game-realm');
    const overlay = document.getElementById('game-overlay');
    const overlayTitle = document.getElementById('game-overlay-title');
    const overlayDesc = document.getElementById('game-overlay-desc');
    const btnStart = document.getElementById('btn-start-game');
    const btnPause = document.getElementById('btn-game-pause');
    const btnRestart = document.getElementById('btn-game-restart');
    const btnSfx = document.getElementById('btn-game-sfx');

    let sfxEnabled = true;
    let highScore = parseInt(localStorage.getItem('lotr_myspace_game_highscore') || '0', 10);
    if (highscoreSpan) highscoreSpan.textContent = highScore;

    // Game state
    const state = {
        running: false,
        paused: false,
        score: 0,
        distance: 1000,
        realm: 'Shire', // Shire -> Lothlórien -> Mordor
        player: {
            x: 40,
            y: 100,
            width: 24,
            height: 24,
            speed: 3.5,
            vx: 0,
            vy: 0
        },
        keys: {
            ArrowUp: false,
            ArrowDown: false,
            ArrowLeft: false,
            ArrowRight: false,
            w: false,
            a: false,
            s: false,
            d: false
        },
        items: [], // {x, y, type: 'lembas'|'ring', width: 18, height: 18}
        enemies: [], // {x, y, speed, type: 'nazgul'|'eye', width: 22, height: 22, vy: number}
        particles: [],
        spawnTimer: 0,
        animationFrameId: null
    };

    // Synthesize Retro Sound Effects with Web Audio API
    function playSound(type) {
        if (!sfxEnabled || !window.lotrAudio) return;
        window.lotrAudio.init();
        const audioCtx = window.lotrAudio.ctx;
        if (!audioCtx) return;

        try {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(window.lotrAudio.masterGain || audioCtx.destination);

            const now = audioCtx.currentTime;

            if (type === 'collect') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(523.25, now); // C5
                osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.12); // C6
                gain.gain.setValueAtTime(0.3, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
                osc.start(now);
                osc.stop(now + 0.12);
            } else if (type === 'ring') {
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(659.25, now); // E5
                osc.frequency.linearRampToValueAtTime(880.00, now + 0.1); // A5
                osc.frequency.linearRampToValueAtTime(1318.51, now + 0.25); // E6
                gain.gain.setValueAtTime(0.4, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
                osc.start(now);
                osc.stop(now + 0.25);
            } else if (type === 'hit') {
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(180, now);
                osc.frequency.exponentialRampToValueAtTime(40, now + 0.3);
                gain.gain.setValueAtTime(0.4, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
                osc.start(now);
                osc.stop(now + 0.3);
            } else if (type === 'victory') {
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(440, now); // A4
                osc.frequency.setValueAtTime(554.37, now + 0.1); // C#5
                osc.frequency.setValueAtTime(659.25, now + 0.2); // E5
                osc.frequency.setValueAtTime(880, now + 0.3); // A5
                gain.gain.setValueAtTime(0.4, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
                osc.start(now);
                osc.stop(now + 0.5);
            }
        } catch (e) {
            console.error("SFX error:", e);
        }
    }

    // Input Handlers
    window.addEventListener('keydown', (e) => {
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code) && state.running && !state.paused) {
            if (e.code !== 'Space') e.preventDefault();
        }
        const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
        if (state.keys.hasOwnProperty(k) || state.keys.hasOwnProperty(e.key)) {
            state.keys[k] = true;
            state.keys[e.key] = true;
        }
    });

    window.addEventListener('keyup', (e) => {
        const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
        if (state.keys.hasOwnProperty(k) || state.keys.hasOwnProperty(e.key)) {
            state.keys[k] = false;
            state.keys[e.key] = false;
        }
    });

    // Touch & On-screen DPAD setup
    const setupDpadBtn = (btnId, key) => {
        const btn = document.getElementById(btnId);
        if (!btn) return;

        const startMove = (e) => {
            e.preventDefault();
            state.keys[key] = true;
        };
        const endMove = (e) => {
            e.preventDefault();
            state.keys[key] = false;
        };

        btn.addEventListener('mousedown', startMove);
        btn.addEventListener('mouseup', endMove);
        btn.addEventListener('mouseleave', endMove);
        btn.addEventListener('touchstart', startMove, { passive: false });
        btn.addEventListener('touchend', endMove, { passive: false });
    };

    setupDpadBtn('btn-dpad-up', 'ArrowUp');
    setupDpadBtn('btn-dpad-down', 'ArrowDown');
    setupDpadBtn('btn-dpad-left', 'ArrowLeft');
    setupDpadBtn('btn-dpad-right', 'ArrowRight');

    // Controls listeners
    if (btnStart) {
        btnStart.addEventListener('click', () => {
            startGame();
        });
    }

    if (btnPause) {
        btnPause.addEventListener('click', () => {
            if (!state.running) return;
            state.paused = !state.paused;
            btnPause.textContent = state.paused ? '▶ Resume' : '⏸ Pause';
            if (!state.paused) {
                gameLoop();
            }
        });
    }

    if (btnRestart) {
        btnRestart.addEventListener('click', () => {
            startGame();
        });
    }

    if (btnSfx) {
        btnSfx.addEventListener('click', () => {
            sfxEnabled = !sfxEnabled;
            btnSfx.textContent = sfxEnabled ? '🔊 SFX: ON' : '🔇 SFX: OFF';
        });
    }

    function startGame() {
        state.running = true;
        state.paused = false;
        state.score = 0;
        state.distance = 1000;
        state.realm = 'Shire';
        state.player.x = 40;
        state.player.y = canvas.height / 2 - 12;
        state.items = [];
        state.enemies = [];
        state.particles = [];
        state.spawnTimer = 0;

        if (scoreSpan) scoreSpan.textContent = '0';
        if (distanceSpan) distanceSpan.textContent = '1000';
        if (realmSpan) realmSpan.textContent = 'Shire';
        if (btnPause) btnPause.textContent = '⏸ Pause';
        overlay.classList.add('hidden');

        if (state.animationFrameId) {
            cancelAnimationFrame(state.animationFrameId);
        }
        gameLoop();
    }

    function gameOver(won = false) {
        state.running = false;
        if (state.score > highScore) {
            highScore = state.score;
            localStorage.setItem('lotr_myspace_game_highscore', highScore.toString());
            if (highscoreSpan) highscoreSpan.textContent = highScore;
        }

        overlay.classList.remove('hidden');

        if (won) {
            playSound('victory');
            overlayTitle.textContent = '🌋 Ring Destroyed in Mount Doom!';
            overlayDesc.textContent = `You saved Middle-earth! Final Score: ${state.score}. High Score: ${highScore}. Frodo and Sam return to the Shire as legends!`;
        } else {
            playSound('hit');
            overlayTitle.textContent = '💀 Caught by Sauron\'s Servants!';
            overlayDesc.textContent = `The Ring was lost in ${state.realm}... Final Score: ${state.score}. Distance remaining: ${Math.floor(state.distance)} leagues. Try again!`;
        }
    }

    function spawnGameElements() {
        state.spawnTimer++;

        // Difficulty scaling based on realm
        let spawnRate = 50;
        if (state.realm === 'Lothlórien') spawnRate = 40;
        if (state.realm === 'Mordor') spawnRate = 30;

        if (state.spawnTimer % spawnRate === 0) {
            const y = Math.random() * (canvas.height - 30) + 10;
            const rand = Math.random();

            if (rand < 0.65) {
                // Item
                const type = Math.random() < 0.8 ? 'lembas' : 'ring';
                state.items.push({
                    x: canvas.width + 10,
                    y: y,
                    type: type,
                    width: 18,
                    height: 18,
                    speed: 2 + Math.random() * 1.5
                });
            } else {
                // Enemy
                const type = state.realm === 'Mordor' && Math.random() > 0.5 ? 'eye' : 'nazgul';
                const enemySpeed = 2.5 + Math.random() * 2 + (state.realm === 'Mordor' ? 1.5 : 0);
                state.enemies.push({
                    x: canvas.width + 10,
                    y: y,
                    type: type,
                    width: 22,
                    height: 22,
                    speed: enemySpeed,
                    vy: type === 'nazgul' ? (Math.random() - 0.5) * 1.5 : 0
                });
            }
        }
    }

    function update() {
        if (!state.running || state.paused) return;

        // Player movement
        let vx = 0;
        let vy = 0;

        if (state.keys.ArrowUp || state.keys.w) vy -= state.player.speed;
        if (state.keys.ArrowDown || state.keys.s) vy += state.player.speed;
        if (state.keys.ArrowLeft || state.keys.a) vx -= state.player.speed;
        if (state.keys.ArrowRight || state.keys.d) vx += state.player.speed;

        state.player.x += vx;
        state.player.y += vy;

        // Keep player in bounds
        if (state.player.x < 0) state.player.x = 0;
        if (state.player.x > canvas.width - state.player.width) state.player.x = canvas.width - state.player.width;
        if (state.player.y < 0) state.player.y = 0;
        if (state.player.y > canvas.height - state.player.height) state.player.y = canvas.height - state.player.height;

        // Decrement distance to Mount Doom
        state.distance -= 0.5;
        if (state.distance <= 0) {
            state.distance = 0;
            if (distanceSpan) distanceSpan.textContent = '0';
            gameOver(true);
            return;
        }

        // Update Realm progression based on distance
        if (state.distance > 650) {
            state.realm = 'Shire';
        } else if (state.distance > 300) {
            state.realm = 'Lothlórien';
        } else {
            state.realm = 'Mordor';
        }

        if (distanceSpan) distanceSpan.textContent = Math.floor(state.distance);
        if (realmSpan) realmSpan.textContent = state.realm;

        spawnGameElements();

        // Update items
        for (let i = state.items.length - 1; i >= 0; i--) {
            const item = state.items[i];
            item.x -= item.speed;

            // Collision check with player
            if (checkCollision(state.player, item)) {
                if (item.type === 'lembas') {
                    state.score += 100;
                    playSound('collect');
                    createParticles(item.x, item.y, '#fef08a');
                } else if (item.type === 'ring') {
                    state.score += 300;
                    state.distance = Math.max(0, state.distance - 25); // Bonus progress!
                    playSound('ring');
                    createParticles(item.x, item.y, '#f59e0b');
                }
                if (scoreSpan) scoreSpan.textContent = state.score;
                state.items.splice(i, 1);
                continue;
            }

            if (item.x < -20) {
                state.items.splice(i, 1);
            }
        }

        // Update enemies
        for (let i = state.enemies.length - 1; i >= 0; i--) {
            const enemy = state.enemies[i];
            enemy.x -= enemy.speed;
            enemy.y += enemy.vy;

            // Bounce enemy slightly off top/bottom
            if (enemy.y < 5 || enemy.y > canvas.height - 25) {
                enemy.vy = -enemy.vy;
            }

            // Collision check with player
            if (checkCollision(state.player, enemy)) {
                createParticles(state.player.x, state.player.y, '#ef4444');
                gameOver(false);
                return;
            }

            if (enemy.x < -30) {
                state.enemies.splice(i, 1);
            }
        }

        // Update particles
        for (let i = state.particles.length - 1; i >= 0; i--) {
            const p = state.particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= 0.04;
            if (p.alpha <= 0) {
                state.particles.splice(i, 1);
            }
        }
    }

    function checkCollision(r1, r2) {
        return !(r2.x > r1.x + r1.width ||
                 r2.x + r2.width < r1.x ||
                 r2.y > r1.y + r1.height ||
                 r2.y + r2.height < r1.y);
    }

    function createParticles(x, y, color) {
        for (let i = 0; i < 8; i++) {
            state.particles.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 4,
                vy: (Math.random() - 0.5) * 4,
                color: color,
                alpha: 1.0,
                radius: Math.random() * 3 + 1
            });
        }
    }

    function render() {
        // Clear canvas with realm background
        if (state.realm === 'Shire') {
            ctx.fillStyle = '#1c3a1e';
        } else if (state.realm === 'Lothlórien') {
            ctx.fillStyle = '#0f2338';
        } else {
            ctx.fillStyle = '#2d0d0d'; // Mordor dark red
        }
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw background terrain details (retro grass/stars/lava)
        drawTerrainDetails();

        // Draw Player (Frodo)
        ctx.save();
        // Cloak
        ctx.fillStyle = '#3a5a40';
        ctx.beginPath();
        ctx.arc(state.player.x + 12, state.player.y + 14, 10, 0, Math.PI * 2);
        ctx.fill();
        // Head / Curly hair
        ctx.fillStyle = '#8d5b4c';
        ctx.beginPath();
        ctx.arc(state.player.x + 12, state.player.y + 8, 7, 0, Math.PI * 2);
        ctx.fill();
        // Face
        ctx.fillStyle = '#fde047';
        ctx.beginPath();
        ctx.arc(state.player.x + 14, state.player.y + 8, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw Items
        state.items.forEach(item => {
            ctx.save();
            if (item.type === 'lembas') {
                // Lembas Bread 🍞
                ctx.fillStyle = '#a3e635';
                ctx.beginPath();
                ctx.ellipse(item.x + 9, item.y + 9, 8, 5, Math.PI / 4, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = '#65a30d';
                ctx.lineWidth = 1.5;
                ctx.stroke();
            } else {
                // One Ring 💍
                ctx.strokeStyle = '#f59e0b';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(item.x + 9, item.y + 9, 6, 0, Math.PI * 2);
                ctx.stroke();
                // Glow
                ctx.strokeStyle = '#fef08a';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(item.x + 9, item.y + 9, 8, 0, Math.PI * 2);
                ctx.stroke();
            }
            ctx.restore();
        });

        // Draw Enemies
        state.enemies.forEach(enemy => {
            ctx.save();
            if (enemy.type === 'nazgul') {
                // Ringwraith / Nazgûl 🗡️
                ctx.fillStyle = '#000000';
                ctx.beginPath();
                ctx.moveTo(enemy.x, enemy.y + 11);
                ctx.lineTo(enemy.x + 22, enemy.y + 2);
                ctx.lineTo(enemy.x + 22, enemy.y + 20);
                ctx.closePath();
                ctx.fill();
                // Red glowing eyes
                ctx.fillStyle = '#ef4444';
                ctx.fillRect(enemy.x + 4, enemy.y + 9, 3, 3);
            } else {
                // Sauron's Eye 👁️
                ctx.fillStyle = '#dc2626';
                ctx.beginPath();
                ctx.ellipse(enemy.x + 11, enemy.y + 11, 10, 6, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#f59e0b';
                ctx.beginPath();
                ctx.ellipse(enemy.x + 11, enemy.y + 11, 5, 5, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#000000';
                ctx.fillRect(enemy.x + 10, enemy.y + 7, 2, 8);
            }
            ctx.restore();
        });

        // Draw Particles
        state.particles.forEach(p => {
            ctx.save();
            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        });
    }

    function drawTerrainDetails() {
        ctx.save();
        const time = Date.now() * 0.002;
        if (state.realm === 'Shire') {
            ctx.fillStyle = 'rgba(74, 124, 54, 0.3)';
            for (let i = 0; i < 5; i++) {
                const x = ((i * 90) - (time * 40)) % canvas.width;
                ctx.fillRect(x < 0 ? x + canvas.width : x, 180 + (i % 3) * 15, 40, 4);
            }
        } else if (state.realm === 'Lothlórien') {
            ctx.fillStyle = 'rgba(254, 240, 138, 0.25)';
            for (let i = 0; i < 8; i++) {
                const x = ((i * 60) - (time * 20)) % canvas.width;
                const y = (i * 35) % canvas.height;
                ctx.beginPath();
                ctx.arc(x < 0 ? x + canvas.width : x, y, 2, 0, Math.PI * 2);
                ctx.fill();
            }
        } else { // Mordor
            ctx.fillStyle = 'rgba(239, 68, 68, 0.2)';
            ctx.fillRect(0, canvas.height - 15, canvas.width, 15);
            ctx.fillStyle = '#f59e0b';
            for (let i = 0; i < 4; i++) {
                const x = ((i * 110) - (time * 60)) % canvas.width;
                ctx.fillRect(x < 0 ? x + canvas.width : x, canvas.height - 12, 25, 2);
            }
        }
        ctx.restore();
    }

    function gameLoop() {
        if (!state.running) return;

        update();
        render();

        if (state.running && !state.paused) {
            state.animationFrameId = requestAnimationFrame(gameLoop);
        }
    }
}
