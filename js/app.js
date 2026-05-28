// Application principale
class SNTApp {
    constructor() {
        this.selectedChapters = [];
        this.currentMode = null;
        this.init();
    }

    init() {
        this.createParticles();
        this.renderChapterCards();
        this.setupEventListeners();
    }

    createParticles() {
        const container = document.getElementById('particles');
        const colors = ['#00ff88', '#00b4d8', '#00d4ff', '#03045e'];
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = Math.random() * 4 + 2;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            particle.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 6}s;
                animation-duration: ${Math.random() * 6 + 4}s;
            `;
            
            container.appendChild(particle);
        }
    }

// Remplacer la méthode renderChapterCards dans la classe SNTApp

    renderChapterCards() {
    const grid = document.getElementById('chapters-grid');
    
    // Ajouter le conteneur de sélection avant la grille
    const chapterSection = document.querySelector('.chapter-selection');
    
    // Insérer le conteneur de sélection
    const selectAllContainer = document.createElement('div');
    selectAllContainer.className = 'select-all-container';
    selectAllContainer.innerHTML = `
        <button id="select-all-btn" class="select-all-btn">
            <span class="select-icon">☐</span>
            <span id="select-all-text">Tout sélectionner</span>
        </button>
        <div class="selection-counter">
            <span class="count" id="selected-count">0</span>
            <span> / </span>
            <span class="total">${sntData.chapters.length}</span>
            <span> chapitres sélectionnés</span>
        </div>
    `;
    
    // Insérer avant la grille
    const chaptersGrid = document.getElementById('chapters-grid');
    chaptersGrid.parentNode.insertBefore(selectAllContainer, chaptersGrid);
    
    // Créer les cartes de chapitres
    sntData.chapters.forEach(chapter => {
        const card = document.createElement('div');
        card.className = 'chapter-card';
        card.dataset.chapterId = chapter.id;
        
        card.innerHTML = `
            <div class="chapter-icon">${chapter.icon}</div>
            <div class="chapter-number">Chapitre ${chapter.id}</div>
            <div class="chapter-title">${chapter.title}</div>
        `;
        
        card.addEventListener('click', () => this.toggleChapter(chapter.id, card));
        grid.appendChild(card);
    });
    
    // Configurer le bouton "Tout sélectionner"
    this.setupSelectAllButton();
}

// Ajouter ces nouvelles méthodes dans la classe SNTApp

    setupSelectAllButton() {
    const selectAllBtn = document.getElementById('select-all-btn');
    const selectAllText = document.getElementById('select-all-text');
    const selectIcon = selectAllBtn.querySelector('.select-icon');
    
    selectAllBtn.addEventListener('click', () => {
        const allCards = document.querySelectorAll('.chapter-card');
        const allSelected = this.selectedChapters.length === sntData.chapters.length;
        
        if (allSelected) {
            // Tout désélectionner
            this.deselectAll(allCards);
            selectAllText.textContent = 'Tout sélectionner';
            selectIcon.textContent = '☐';
            selectAllBtn.classList.remove('all-selected');
        } else {
            // Tout sélectionner
            this.selectAll(allCards);
            selectAllText.textContent = 'Tout désélectionner';
            selectIcon.textContent = '☑';
            selectAllBtn.classList.add('all-selected');
        }
    });
}

    selectAll(cards) {
    this.selectedChapters = [];
    cards.forEach(card => {
        const chapterId = parseInt(card.dataset.chapterId);
        this.selectedChapters.push(chapterId);
        card.classList.add('selected');
        
        // Ajouter une animation
        card.classList.add('selecting');
        setTimeout(() => {
            card.classList.remove('selecting');
        }, 300);
    });
    this.updateSelectionCounter();
    this.updateActionButtons();
    this.updateSelectAllButton();
}

    deselectAll(cards) {
    this.selectedChapters = [];
    cards.forEach(card => {
        card.classList.remove('selected');
    });
    this.updateSelectionCounter();
    this.updateActionButtons();
    this.updateSelectAllButton();
}

    toggleChapter(chapterId, cardElement) {
    const index = this.selectedChapters.indexOf(chapterId);
    
    if (index > -1) {
        this.selectedChapters.splice(index, 1);
        cardElement.classList.remove('selected');
    } else {
        this.selectedChapters.push(chapterId);
        cardElement.classList.add('selected');
    }
    
    this.updateSelectionCounter();
    this.updateActionButtons();
    this.updateSelectAllButton();
}

    updateSelectionCounter() {
    const counter = document.getElementById('selected-count');
    if (counter) {
        counter.textContent = this.selectedChapters.length;
        
        // Animation du compteur
        counter.style.transform = 'scale(1.2)';
        counter.style.transition = 'transform 0.3s ease';
        setTimeout(() => {
            counter.style.transform = 'scale(1)';
        }, 300);
    }
}

    updateSelectAllButton() {
    const selectAllBtn = document.getElementById('select-all-btn');
    const selectAllText = document.getElementById('select-all-text');
    const selectIcon = selectAllBtn.querySelector('.select-icon');
    
    if (!selectAllBtn || !selectAllText || !selectIcon) return;
    
    const allSelected = this.selectedChapters.length === sntData.chapters.length;
    
    if (allSelected) {
        selectAllText.textContent = 'Tout désélectionner';
        selectIcon.textContent = '☑';
        selectAllBtn.classList.add('all-selected');
    } else {
        selectAllText.textContent = 'Tout sélectionner';
        selectIcon.textContent = '☐';
        selectAllBtn.classList.remove('all-selected');
    }
}
    toggleChapter(chapterId, cardElement) {
        const index = this.selectedChapters.indexOf(chapterId);
        
        if (index > -1) {
            this.selectedChapters.splice(index, 1);
            cardElement.classList.remove('selected');
        } else {
            this.selectedChapters.push(chapterId);
            cardElement.classList.add('selected');
        }
        
        this.updateActionButtons();
    }

    updateActionButtons() {
        const qcmBtn = document.getElementById('start-qcm');
        const flashcardBtn = document.getElementById('start-flashcards');
        
        const hasSelection = this.selectedChapters.length > 0;
        qcmBtn.disabled = !hasSelection;
        flashcardBtn.disabled = !hasSelection;
    }

    setupEventListeners() {
        document.getElementById('start-qcm').addEventListener('click', () => {
            this.startMode('qcm');
        });
        
        document.getElementById('start-flashcards').addEventListener('click', () => {
            this.startMode('flashcards');
        });
        
        document.getElementById('qcm-back').addEventListener('click', () => {
            this.showHome();
        });
        
        document.getElementById('flashcards-back').addEventListener('click', () => {
            this.showHome();
        });
    }

    startMode(mode) {
        this.currentMode = mode;
        document.getElementById('home-page').classList.remove('active');
        
        if (mode === 'qcm') {
            document.getElementById('qcm-page').classList.add('active');
            this.initQCM();
        } else {
            document.getElementById('flashcards-page').classList.add('active');
            this.initFlashcards();
        }
    }

// Remplacer la méthode showHome existante

showHome() {
    document.getElementById('qcm-page').classList.remove('active');
    document.getElementById('flashcards-page').classList.remove('active');
    document.getElementById('home-page').classList.add('active');
    
    // Réinitialiser les sélections
    this.selectedChapters = [];
    document.querySelectorAll('.chapter-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Réinitialiser le bouton "Tout sélectionner"
    const selectAllBtn = document.getElementById('select-all-btn');
    const selectAllText = document.getElementById('select-all-text');
    const selectIcon = selectAllBtn?.querySelector('.select-icon');
    
    if (selectAllBtn && selectAllText && selectIcon) {
        selectAllText.textContent = 'Tout sélectionner';
        selectIcon.textContent = '☐';
        selectAllBtn.classList.remove('all-selected');
    }
    
    this.updateSelectionCounter();
    this.updateActionButtons();
}

    getSelectedQuestions() {
        let questions = [];
        this.selectedChapters.forEach(chapterId => {
            const chapter = sntData.chapters.find(c => c.id === chapterId);
            if (chapter) {
                questions = questions.concat(chapter.questions);
            }
        });
        // Mélanger les questions
        return this.shuffleArray(questions);
    }

    getSelectedFlashcards() {
        let flashcards = [];
        this.selectedChapters.forEach(chapterId => {
            const chapter = sntData.chapters.find(c => c.id === chapterId);
            if (chapter) {
                flashcards.push(chapter.flashcard);
            }
        });
        return flashcards;
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    initQCM() {
        const qcmModule = new QCMModule(this.getSelectedQuestions());
    }

    initFlashcards() {
        const flashcardsModule = new FlashcardsModule(this.getSelectedFlashcards());
    }
}

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', () => {
    new SNTApp();
});