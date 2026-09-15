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
