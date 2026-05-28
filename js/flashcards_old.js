// Module Flashcards
class FlashcardsModule {
    constructor(flashcards) {
        this.flashcards = flashcards;
        this.currentIndex = 0;
        this.render();
        this.setupControls();
    }

    render() {
        if (this.flashcards.length === 0) return;
        
        const flashcard = this.flashcards[this.currentIndex];
        const container = document.getElementById('flashcards-container');
        
        document.getElementById('card-counter').textContent = 
            `${this.currentIndex + 1}/${this.flashcards.length}`;
        
        container.innerHTML = `
            <div class="flashcard" id="flashcard">
                <div class="flashcard-face flashcard-front">
                    <div class="flashcard-icon">${flashcard.icon}</div>
                    <div class="flashcard-chapter">Chapitre ${this.currentIndex + 1}</div>
                    <div class="flashcard-title">${flashcard.title}</div>
                    <div class="flashcard-hint">Cliquez pour révéler le contenu 👆</div>
                </div>
                <div class="flashcard-face flashcard-back">
                    <div class="flashcard-icon">${flashcard.icon}</div>
                    <div class="flashcard-chapter">Chapitre ${this.currentIndex + 1}</div>
                    <div class="flashcard-content">
                        <ul>
                            ${flashcard.content.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flashcard-swipe-hint">
                <span>◀ Précédent</span>
                <span class="swipe-icon">👆</span>
                <span>Suivant ▶</span>
            </div>
        `;

        this.setupFlashcardInteraction();
    }

    setupFlashcardInteraction() {
        const flashcard = document.getElementById('flashcard');
        let isFlipped = false;

        flashcard.addEventListener('click', () => {
            isFlipped = !isFlipped;
            if (isFlipped) {
                flashcard.classList.add('flipped');
            } else {
                flashcard.classList.remove('flipped');
            }
        });

        // Support du clavier
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevCard();
            } else if (e.key === 'ArrowRight') {
                this.nextCard();
            } else if (e.key === ' ') {
                e.preventDefault();
                flashcard.click();
            }
        });
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
}