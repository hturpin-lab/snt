// Module Flashcards - Version améliorée
class FlashcardsModule {
    constructor(flashcards) {
        this.flashcards = flashcards;
        this.currentIndex = 0;
        this.render();
        this.setupControls();
        this.setupKeyboardNavigation();
    }

    render() {
        if (this.flashcards.length === 0) return;
        
        const flashcard = this.flashcards[this.currentIndex];
        const container = document.getElementById('flashcards-container');
        
        document.getElementById('card-counter').textContent = 
            `${this.currentIndex + 1} / ${this.flashcards.length}`;
        
        container.innerHTML = `
            <div class="flashcard" id="flashcard">
                <!-- Face avant -->
                <div class="flashcard-face flashcard-front">
                    <div class="flashcard-icon">${flashcard.icon}</div>
                    <div class="flashcard-chapter-badge">CHAPITRE ${this.currentIndex + 1}</div>
                    <div class="flashcard-title">${flashcard.title}</div>
                    <div class="flashcard-subtitle">Cliquez pour découvrir le contenu</div>
                    <div class="flashcard-hint">
                        <span class="hint-icon">👆</span>
                        <span>Appuyez pour révéler</span>
                    </div>
                </div>
                
                <!-- Face arrière -->
                <div class="flashcard-face flashcard-back">
                    <div class="flashcard-content-title">
                        📝 Points clés à retenir
                    </div>
                    <ul class="flashcard-list">
                        ${flashcard.items.map(item => `
                            <li class="flashcard-list-item">
                                <span class="emoji-bullet">${item.emoji}</span>
                                ${item.text}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="flashcard-swipe-hint">
                <div class="swipe-btn" id="swipe-prev">
                    <span class="swipe-icon">◀</span>
                    <span>Précédent</span>
                </div>
                <div class="swipe-btn" id="swipe-flip">
                    <span class="swipe-icon">🔄</span>
                    <span>Retourner</span>
                </div>
                <div class="swipe-btn" id="swipe-next">
                    <span>Suivant</span>
                    <span class="swipe-icon">▶</span>
                </div>
            </div>
        `;

        this.setupFlashcardInteraction();
        this.setupSwipeButtons();
    }

    setupFlashcardInteraction() {
        const flashcard = document.getElementById('flashcard');
        let isFlipped = false;

        // Clic sur la carte
        flashcard.addEventListener('click', (e) => {
            // Empêcher le flip si on clique sur un élément interactif
            if (e.target.closest('.flashcard-list-item') || e.target.closest('.swipe-btn')) {
                return;
            }
            this.toggleFlip();
        });

        // Double-clic pour flipper
        flashcard.addEventListener('dblclick', (e) => {
            e.preventDefault();
            this.toggleFlip();
        });
    }

    toggleFlip() {
        const flashcard = document.getElementById('flashcard');
        if (flashcard) {
            flashcard.classList.toggle('flipped');
        }
    }

    setupSwipeButtons() {
        const swipeFlip = document.getElementById('swipe-flip');
        const swipePrev = document.getElementById('swipe-prev');
        const swipeNext = document.getElementById('swipe-next');

        if (swipeFlip) {
            swipeFlip.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleFlip();
            });
        }

        if (swipePrev) {
            swipePrev.addEventListener('click', (e) => {
                e.stopPropagation();
                this.prevCard();
            });
        }

        if (swipeNext) {
            swipeNext.addEventListener('click', (e) => {
                e.stopPropagation();
                this.nextCard();
            });
        }
    }

    setupKeyboardNavigation() {
        this.keyHandler = (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    this.prevCard();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.nextCard();
                    break;
                case ' ':
                case 'Enter':
                    e.preventDefault();
                    this.toggleFlip();
                    break;
                case 'f':
                case 'F':
                    e.preventDefault();
                    this.toggleFlip();
                    break;
            }
        };
        
        document.addEventListener('keydown', this.keyHandler);
    }

    setupControls() {
        document.getElementById('prev-card').addEventListener('click', () => {
            this.prevCard();
        });
        
        document.getElementById('next-card').addEventListener('click', () => {
            this.nextCard();
        });
    }

    prevCard() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.render();
        }
    }

    nextCard() {
        if (this.currentIndex < this.flashcards.length - 1) {
            this.currentIndex++;
            this.render();
        }
    }

    // Nettoyage des écouteurs d'événements
    destroy() {
        document.removeEventListener('keydown', this.keyHandler);
    }
}