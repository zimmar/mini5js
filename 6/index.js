document.addEventListener('DOMContentLoaded', () => {
    const colorMap = {
        yellowField: { color: '#FFD600', sound: 'yellowSound' },
        redField:    { color: '#FF1744', sound: 'redSound' },
        greenField:  { color: '#00E676', sound: 'greenSound' },
        blueField:   { color: '#2979FF', sound: 'blueSound' }
    };

    Object.keys(colorMap).forEach(fieldId => {
        const field = document.getElementById(fieldId);
        const originalColor = colorMap[fieldId].color;
        const sound = document.getElementById(colorMap[fieldId].sound);

        field.style.backgroundColor = originalColor;

        field.addEventListener('mousedown', () => {
            field.style.backgroundColor = '#FFFFFF';
            sound.currentTime = 0;
            sound.play();
        });

        field.addEventListener('mouseup', () => {
            field.style.backgroundColor = originalColor;
        });

        field.addEventListener('mouseleave', () => {
            field.style.backgroundColor = originalColor;
        });
    });
});