if (confirm('Do you want to play a game?')) {
        let availableAttempts = 3;
        let userNumber;
        let prizeForStroke; 
        let userChoice; 
        let attempt;
            do {
                let prizeTotal = 0;
                let startPrize = 10;
                let startRangeEnd = 5;
                do {
                    userChoice = Math.round(Math.random() * startRangeEnd);
                    attempt = availableAttempts;
                    for (attempt; attempt > 0; attempt--) {
                        prizeForStroke = Math.floor(startPrize / Math.pow(2, availableAttempts - attempt));
                        userNumber = parseInt(prompt(
                            'Enter a number from 0 to ' + startRangeEnd +
                            '\nAttempts left: ' + attempt +
                            '\nTotal prize: ' + prizeTotal +
                            '\nPossible prize on current attempt: ' + prizeForStroke));
                            
                        if (userNumber === userChoice) {
                            prizeTotal = prizeForStroke + prizeTotal;
                            startPrize = 3 * startPrize;
                            startRangeEnd = 2 * startRangeEnd;
                            break;
                        }
                    }
                    if (attempt === 0) {
                        break;
                    }
                } while (confirm('Congratulation! Your prize is: ' + prizeTotal + ' Do you want to continue?'));
                    alert('Thank you for a game. Your prize is: ' + prizeTotal);
        } while (confirm('Do you want to play a game again?'));
} else {
	alert('You did not become a millionaire, but can.');
}

