// Module QCM
class QCMModule {
    constructor(questions) {
        this.questions = questions;
        this.currentIndex = 0;
        this.score = 0;
        this.answers = [];
        this.render();
    }

    render() {
        if (this.currentIndex >= this.questions.length) {
            this.showResults();
            return;
        }

        const question = this.questions[this.currentIndex];
        const progress = ((this.currentIndex) / this.questions.length) * 100;
        
        document.getElementById('progress-fill').style.width = progress + '%';
        document.getElementById('progress-text').textContent = 
            `Question ${this.currentIndex + 1}/${this.questions.length}`;
        
        const content = document.getElementById('qcm-content');
        content.innerHTML = `
            <div class="question-card">
                <div class="question-number">Chapitre ${question.id.split('.')[0]} - Question ${question.id}</div>
                <div class="question-text">${question.question}</div>
                <ul class="options-list">
                    ${question.options.map((option, index) => `
                        <li class="option-item" data-index="${index}">
                            <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                            <div class="option-text">${option.substring(2).trim()}</div>
                        </li>
                    `).join('')}
                </ul>
                <div class="correction-box" id="correction-box">
                    <div class="correction-title">💡 Correction</div>
                    <div class="correction-text">${question.correction}</div>
                </div>
                <button class="next-btn" id="next-btn" style="display: none;">Question suivante →</button>
            </div>
        `;

        this.setupOptionListeners(question);
    }

    setupOptionListeners(question) {
        const options = document.querySelectorAll('.option-item');
        const correctionBox = document.getElementById('correction-box');
        const nextBtn = document.getElementById('next-btn');
        let answered = false;

        options.forEach(option => {
            option.addEventListener('click', () => {
                if (answered) return;
                answered = true;

                const selectedIndex = parseInt(option.dataset.index);
                const isCorrect = selectedIndex === question.correctAnswer;

                // Mettre à jour le score
                if (isCorrect) this.score++;
                this.answers.push({
                    questionId: question.id,
                    correct: isCorrect
                });

                // Afficher les réponses
                options.forEach((opt, idx) => {
                    opt.style.pointerEvents = 'none';
                    if (idx === question.correctAnswer) {
                        opt.classList.add('correct');
                    } else if (idx === selectedIndex && !isCorrect) {
                        opt.classList.add('incorrect');
                    }
                });

                // Afficher la correction
                correctionBox.classList.add('show');
                nextBtn.style.display = 'block';

                nextBtn.addEventListener('click', () => {
                    this.currentIndex++;
                    this.render();
                });
            });
        });
    }

    showResults() {
        const content = document.getElementById('qcm-content');
        const percentage = Math.round((this.score / this.questions.length) * 100);
        
        let message = '';
        if (percentage >= 80) message = 'Excellent travail ! 🎉';
        else if (percentage >= 60) message = 'Bon travail, continuez ! 👍';
        else if (percentage >= 40) message = 'Continuez vos révisions ! 📚';
        else message = 'Il faut encore travailler ! 💪';

        document.getElementById('progress-fill').style.width = '100%';
        document.getElementById('progress-text').textContent = 'Résultats';

        content.innerHTML = `
            <div class="qcm-results">
                <h2>Résultats du QCM</h2>
                <div class="results-score">${this.score}/${this.questions.length}</div>
                <div class="results-message">${message}</div>
                <p style="color: var(--text-secondary); margin-bottom: 30px;">
                    Score : ${percentage}%
                </p>
                <button class="retry-btn" onclick="location.reload()">
                    Retour à l'accueil
                </button>
            </div>
        `;
    }
}