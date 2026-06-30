// Pokemon history timeline data
const timelineEvents = [
    {
        "id": 1,
        "year": "1977",
        "date": "May, 1977",
        "title": "CoroCoro Comic No. 1",
        "desc": "The debut issue of CoroCoro Comic, the magazine that would later become the single most influential publication in Pokémon history. It established the platform that helped launch Pokémon into a national phenomenon through its manga, promotions, exclusive content, and the mail-order release of Pokémon Blue.",
        "tag": "Publication",
        "metadata": {
            "Release Date": "May, 1977"
        }
    },
    {
        "id": 2,
        "year": "1982",
        "date": "December, 1982",
        "title": "Game Freak Magazine Issue No.1",
        "desc": "Marks the beginning of Game Freak and the partnership between Satoshi Tajiri and Ken Sugimori, laying the foundation for Pokémon.",
        "tag": "Publication",
        "metadata": {
            "Release Date": "December, 1982",
            "Cover Date": "January, 1983"
        }
    },
    {
        "id": 3,
        "year": "1983",
        "date": "August, 1983",
        "title": "Login Magazine No. 8",
        "desc": "Gave Game Freak Magazine its first major public exposure, helping Tajiri build the connections that would eventually lead to Pokémon.",
        "tag": "Publication",
        "metadata": {
            "Release Date": "August, 1983",
            "Pages": "153"
        }
    },
    {
        "id": 4,
        "year": "1984",
        "date": "July, 1984",
        "title": "Weekly Shōnen Sunday Zōkan (Special Edition) No. 7",
        "desc": "Contains Super Girl Namuko, Ken Sugimori's first known published manga. It offers a rare look at the future Pokémon art director's early creative work before joining Game Freak.",
        "tag": "Manga",
        "metadata": {
            "Release Date": "July, 1984"
        }
    },
    {
        "id": 5,
        "year": "1986",
        "date": "1986",
        "title": "Weekly Shōnen Sunday No. 44",
        "desc": "Contains Dragon Blaster, another early one-shot manga by Ken Sugimori published before Pokémon. It showcases Sugimori's developing artistic style.",
        "tag": "Manga",
        "metadata": {
            "Release Date": "1986"
        }
    },
    {
        "id": 6,
        "year": "1989",
        "date": "1989",
        "title": "Quinty Famicom Game",
        "desc": "Game Freak’s first video game, proving the studio could successfully develop commercial games and survive as a company.",
        "tag": "Video Game",
        "metadata": {
            "Release Date": "1989"
        }
    },
    {
        "id": 7,
        "year": "1994",
        "date": "July, 1994",
        "title": "Advertising Criticism No. 7",
        "desc": "Contains one of the earliest public hints at the secret project that would become Pokémon Red and Green.",
        "tag": "Publication",
        "metadata": {
            "Release Date": "July, 1994",
            "Pages": "54-63"
        }
    },
    {
        "id": 8,
        "year": "1995",
        "date": "February, 1995",
        "title": "Design Site No. 74",
        "desc": "Features an early public mention of the Game Boy RPG project that would become Pokémon Red and Green.",
        "tag": "Publication",
        "metadata": {
            "Release Date": "February, 1995",
            "Pages": "54-58"
        }
    },
    {
        "id": 9,
        "year": "1995",
        "date": "November 17, 1995",
        "title": "Weekly Famicom Magazine",
        "desc": "Contains the earliest known publicly sold Pokémon Game screenshot and print advertisement, giving fans their first look at the game.",
        "tag": "Publication",
        "metadata": {
            "Release Date": "November 17, 1995",
            "Cover Date": "December 1, 1995",
            "Pages": "110"
        }
    },
    {
        "id": 10,
        "year": "1995",
        "date": "November 22, 1995",
        "title": "Famicom Space World Magazine",
        "desc": "Helped introduce Pokémon to attendees at Nintendo’s biggest event through some of its earliest published screenshots.",
        "tag": "Publication",
        "metadata": {
            "Release Date": "November 22, 1995",
            "Pages": "10 & 28"
        }
    },
    {
        "id": 11,
        "year": "1995",
        "date": "November 22, 1995",
        "title": "Space World Flyer (Original Release Date)",
        "desc": "Widely considered the first publicly distributed Pokémon item and one of the earliest official showcases of Pokémon characters.",
        "tag": "Promo",
        "metadata": {
            "Release Date": "November 22, 1995"
        }
    },
    {
        "id": 12,
        "year": "1995",
        "date": "November 27, 1995",
        "title": "Design Site No. 79",
        "desc": "Documented Pokémon’s final pre-release period and preserved Tajiri’s vision for the series just before launch. Possibly the first public image of Pikachu ever released.",
        "tag": "Publication",
        "metadata": {
            "Release Date": "November 27, 1995",
            "Cover Date": "December 5, 1995",
            "Pages": "60"
        }
    },
    {
        "id": 13,
        "year": "1995",
        "date": "December 8, 1995",
        "title": "Weekly Famicom Tsūshin Magazine No. 364",
        "desc": "One of the earliest magazine references to Pokémon, documenting the game's original planned December 21, 1995 release date before its delay.",
        "tag": "Publication",
        "metadata": {
            "Release Date": "December 8, 1995",
            "Page": "201"
        }
    },
    {
        "id": 14,
        "year": "1995",
        "date": "December 15, 1995",
        "title": "Family Computer Magazine No. 25",
        "desc": "An early pre-release feature that introduced Pokémon's core concepts of catching, trading, and evolving monsters to the public before launch.",
        "tag": "Publication",
        "metadata": {
            "Release Date": "December 15, 1995",
            "Pages": "200"
        }
    },
    {
        "id": 15,
        "year": "1995",
        "date": "December 15, 1995",
        "title": "Weekly Famicom Tsūshin Magazine No. 365",
        "desc": "Features some of the earliest official Pokémon artwork ever printed, making it one of the most important pre-launch Pokémon magazines.",
        "tag": "Publication",
        "metadata": {
            "Release Date": "December 15, 1995",
            "Pages": "221"
        }
    },
    {
        "id": 16,
        "year": "1995",
        "date": "December 22, 1995",
        "title": "Weekly Famicom Tsūshin Magazine No. 366",
        "desc": "One of the final magazine listings to advertise Pokémon's original December 21, 1995 release date before the game's postponement.",
        "tag": "Publication",
        "metadata": {
            "Release Date": "December 22, 1995",
            "Pages": "177"
        }
    },
    {
        "id": 17,
        "year": "1995",
        "date": "December 29, 1995",
        "title": "Weekly Famicom Tsūshin Magazine No. 367",
        "desc": "Contains the first known published announcement of Pokémon's delayed February 27, 1996 release date, marking the final major Pokémon magazine appearance of 1995.",
        "tag": "Publication",
        "metadata": {
            "Release Date": "December 29, 1995",
            "Pages": "193"
        }
    },
    {
        "id": 18,
        "year": "1996",
        "date": "January, 1996",
        "title": "Red & Green Game Release Flyer (Revised Release Date)",
        "desc": "One of the earliest retail promotional pieces distributed after Pokémon’s launch delay was announced.",
        "tag": "Promo",
        "metadata": {
            "Release Date": "January, 1996"
        }
    },
    {
        "id": 19,
        "year": "1996",
        "date": "January 19, 1996",
        "title": "Dengeki RPG ’96 Special Issue",
        "desc": "Features one of the earliest major advertisements for Pokémon Red and Green on the back cover, marking the start of full-scale marketing.",
        "tag": "Publication",
        "metadata": {
            "Release Date": "January 19, 1996",
            "Pages": "Back Cover"
        }
    },
    {
        "id": 20,
        "year": "1996",
        "date": "January 15, 1996",
        "title": "CoroCoro Comic No. 214",
        "desc": "The first CoroCoro issue to feature Pokémon, beginning the influential partnership that helped fuel the franchise’s rise.",
        "tag": "Publication",
        "metadata": {
            "Release Date": "January 15, 1996",
            "Cover Date": "February 15, 1996",
            "Pages": "64"
        }
    },
    {
        "id": 21,
        "year": "1996",
        "date": "January 25, 1996",
        "title": "New Game Design: Ideas for TV Game Production (1st Edition)",
        "desc": "Preserves Satoshi Tajiri’s game design philosophy immediately before Pokémon’s release.",
        "tag": "Publication",
        "metadata": {
            "Release Date": "January 25, 1996"
        }
    },
    {
        "id": 22,
        "year": "1996",
        "date": "February, 1996",
        "title": "C&VG / Computer & Video Games #171",
        "desc": "Earliest confirmed English-language Pocket Monsters magazine reference found so far. UK magazine.",
        "tag": "Publication",
        "metadata": {
            "Release Date": "February, 1996"
        }
    },
    {
        "id": 23,
        "year": "1996",
        "date": "February 23, 1996",
        "title": "Family Computer Magazine No. 5",
        "desc": "Provided major pre-release coverage that helped introduce and legitimize Pokémon before launch.",
        "tag": "Publication",
        "metadata": {
            "Release Date": "February 23, 1996",
            "Cover Date": "March 8, 1996",
            "Pages": "38-41"
        }
    },
    {
        "id": 24,
        "year": "1996",
        "date": "February 27, 1996",
        "title": "Pokémon Red & Green Games",
        "desc": "The original games in Japanese that launched the Pokémon franchise and introduced the world of Pokémon.",
        "tag": "Video Game",
        "metadata": {
            "Release Date": "February 27, 1996"
        }
    },
    {
        "id": 25,
        "year": "1996",
        "date": "March, 1996",
        "title": "CoroCoro Bessatsu Special No. 4",
        "desc": "Pokémon’s first expansion into manga and serialized storytelling ever.",
        "tag": "Manga",
        "metadata": {
            "Release Date": "March, 1996",
            "Cover Date": "April, 1996",
            "Pages": "187-193"
        }
    },
    {
        "id": 26,
        "year": "1996",
        "date": "March, 1996",
        "title": "GameFan Vol. 4 #3",
        "desc": "Earliest confirmed U.S. magazine reference to Pokémon found to date.",
        "tag": "Publication",
        "metadata": {
            "Release Date": "March, 1996",
            "Pages": "92"
        }
    },
    {
        "id": 27,
        "year": "1996",
        "date": "March 8, 1996",
        "title": "Weekly Famitsu Magazine No. 365",
        "desc": "One of the earliest major reviews of Pokémon, helping generate momentum during its early sales period.",
        "tag": "Publication",
        "metadata": {
            "Release Date": "March 8, 1996",
            "Pages": "29"
        }
    }
];

/* ============================================================
   VERTICAL TIMELINE ENGINE v10
   No JS positioning math needed. Fully CSS grid and flexbox.
   ============================================================ */

let placedEvents = [];

function renderTimeline() {
    placedEvents = [];
    
    // Group events by year
    const byYear = {};
    timelineEvents.forEach(ev => {
        if (!byYear[ev.year]) byYear[ev.year] = [];
        byYear[ev.year].push(ev);
    });

    const content = document.getElementById('vt-content');
    if (!content) return;
    
    let html = '';

    let navHtml = '';

    // Sort and get min/max years
    const sortedYears = Object.keys(byYear).map(y => parseInt(y)).sort((a,b) => a - b);

    for (const year of sortedYears) {
        navHtml += `<button class="vt-year-btn" data-year="${year}">${year}</button>`;
        const events = byYear[year] || [];
        html += `
            <div class="vt-year-section" id="year-${year}" data-year="${year}">
                <div class="vt-year-rail">
                    <div class="vt-year-sticky">
                        <h2 class="vt-year-title">${year}</h2>
                    </div>
                </div>
                <div class="vt-events-list">
        `;
        
        events.forEach(ev => {
            const idx = placedEvents.length;
            html += `
                <div class="vt-event-row">
                    ${events.length > 1 ? `
                    <div class="vt-event-date-col">
                        <span class="vt-event-date">${ev.date}</span>
                    </div>
                    ` : ''}
                    <div class="vt-event-card-col">
                        <div class="vt-card" data-index="${idx}">
                            <span class="vt-card-icon"><img src="https://file.garden/adiOU0v5YCgViiM6/Docu/placeholder.png" alt="" style="width: 2.5em; height: 3.5em; object-fit: cover; border-radius: 0.15em; box-shadow: 0 8px 20px rgba(0,0,0,0.4);"></span>
                            <div class="vt-card-info">
                                <h3 class="vt-card-title">${ev.title}</h3>
                                <span class="vt-card-tag">${ev.tag}</span>
                                <p class="vt-card-desc">${ev.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            placedEvents.push(ev);
        });
        
        html += `
                </div>
            </div>
        `;
    }

    content.innerHTML = html;

    // Attach click events for cards
    document.querySelectorAll('.vt-card').forEach(card => {
        card.addEventListener('click', function() {
            openModal(this.getAttribute('data-index'));
        });
    });

    // Setup HUD Navigation
    const yearStrip = document.getElementById('vt-year-strip');
    if (yearStrip) {
        yearStrip.innerHTML = navHtml;
        document.querySelectorAll('.vt-year-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const year = this.getAttribute('data-year');
                const target = document.getElementById('year-' + year);
                if (target) {
                    const y = target.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({top: y, behavior: 'smooth'});
                }
            });
        });
    }
}

function updateScrollProgress() {
    const progress = document.getElementById('vt-progress');
    if (progress) {
        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        
        let pct = 0;
        if (docHeight > winHeight) {
            pct = (scrollTop / (docHeight - winHeight)) * 100;
        }
        progress.style.height = pct + '%';
    }

    // Highlight active year in HUD
    const groups = document.querySelectorAll('.vt-year-section');
    let activeYear = null;
    const triggerPoint = window.innerHeight * 0.4; // 40% from top

    groups.forEach(group => {
        const rect = group.getBoundingClientRect();
        if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
            activeYear = group.getAttribute('data-year');
        }
    });

    if (!activeYear && groups.length > 0) {
        // Fallback if between groups
        activeYear = groups[0].getAttribute('data-year');
        groups.forEach(group => {
            if (group.getBoundingClientRect().top <= triggerPoint) {
                activeYear = group.getAttribute('data-year');
            }
        });
    }

    if (activeYear) {
        document.querySelectorAll('.vt-year-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-year') === activeYear);
        });
        const activeBtn = document.querySelector('.vt-year-btn.active');
        if (activeBtn) {
            activeBtn.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
        }
    }
}

function openModal(idx) {
    const ev = placedEvents[idx];
    const modal = document.getElementById('vt-modal');
    const body = document.getElementById('vt-modal-body');
    if (!modal || !body || !ev) return;

    if (ev.isGroup) {
        let groupHtml = '';
        ev.events.forEach(subEv => {
            let metaRows = '';
            if (subEv.metadata) {
                Object.keys(subEv.metadata).forEach(function(k) {
                    metaRows += '<li class="vt-meta-item"><span class="vt-meta-label">' + k + '</span><span class="vt-meta-value">' + subEv.metadata[k] + '</span></li>';
                });
            }
            groupHtml += `
                <div style="margin-bottom: 3rem; padding-bottom: 2rem; border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <div style="display: flex; gap: 1.5rem; align-items: center; margin-bottom: 1rem;">
                        <span style="font-size: 3.5rem;"><img src="https://file.garden/adiOU0v5YCgViiM6/Docu/placeholder.png" alt="" style="width: 2.5em; height: 3.5em; object-fit: cover; border-radius: 0.15em; box-shadow: 0 8px 20px rgba(0,0,0,0.4);"></span>
                        <div>
                            <div style="color: var(--accent-cool); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600;">${subEv.date}</div>
                            <h3 style="font-family: var(--font-display); font-size: 2.2rem; margin: 0.2rem 0; color: var(--text-primary);">${subEv.title}</h3>
                        </div>
                    </div>
                    <p style="color: var(--text-muted); line-height: 1.7; font-size: 1.1rem; margin-bottom: 1.5rem;">${subEv.desc}</p>
                    ${metaRows ? '<ul class="vt-modal-meta" style="margin: 0;">' + metaRows + '</ul>' : ''}
                </div>
            `;
        });
        body.innerHTML = `
            <div style="margin-bottom: 3rem; text-align: center; border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: 2rem;">
                <h2 style="font-family: var(--font-display); font-size: 4rem; color: var(--accent-warm); line-height: 1; margin: 0;">${ev.year}</h2>
                <p style="color: var(--text-muted); font-size: 1.2rem; margin-top: 0.5rem;">${ev.events.length} Major Events</p>
            </div>
            <div>
                ${groupHtml}
            </div>
        `;
    } else {
        let metaRows = '';
        if (ev.metadata) {
            Object.keys(ev.metadata).forEach(function(k) {
                metaRows += '<li class="vt-meta-item"><span class="vt-meta-label">' + k + '</span><span class="vt-meta-value">' + ev.metadata[k] + '</span></li>';
            });
        }

        body.innerHTML =
            '<div class="vt-modal-grid">' +
            '<div class="vt-modal-icon-wrap">' +
            '<img src="https://file.garden/adiOU0v5YCgViiM6/Docu/placeholder.png" alt="" style="width: 100%; height: auto; aspect-ratio: 2.5/3.5; object-fit: cover; border-radius: 12px; box-shadow: 0 15px 40px rgba(0,0,0,0.4);">' +
            '</div>' +
            '<div class="vt-modal-info">' +
            '<div class="date">' + ev.year + '</div>' +
            '<h2 class="title">' + ev.title + '</h2>' +
            (metaRows ? '<ul class="vt-modal-meta">' + metaRows + '</ul>' : '') +
            '<p class="desc">' + ev.desc + '</p>' +
            '</div>' +
            '</div>';
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('vt-modal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function() {
    renderTimeline();
    updateScrollProgress();

    window.addEventListener('scroll', updateScrollProgress, { passive: true });

    const closeBtn = document.getElementById('vt-modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    const backdrop = document.getElementById('vt-modal-close-bg');
    if (backdrop) backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });

});
