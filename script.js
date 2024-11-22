
    function generatePersonalizedMessage() {
        const name = document.getElementById('nameInput').value.trim();
        if (!name) {
            alert('Please enter your name');
            return;
        }

        // Hide form section
        document.getElementById('formSection').style.display = 'none';
        
        // Update personalized content
        document.getElementById('personName').textContent = name;
        document.getElementById('visitorName').textContent = name;
        
        // Show personalized content
        document.getElementById('personalizedContent').style.display = 'block';
    }

    function resetForm() {
        document.getElementById('nameInput').value = '';
        document.getElementById('personalizedContent').style.display = 'none';
        document.getElementById('formSection').style.display = 'block';
    }
    