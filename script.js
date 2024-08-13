document.getElementById('theme-select').addEventListener('change', function() {
    const bodyClass = document.body.classList;
    const selectedTheme = this.value;
    bodyClass.remove('light-mode', 'dark-mode');
    if (selectedTheme === 'dark') {
        bodyClass.add('dark-mode');
    } else {
        bodyClass.add('light-mode');
    }
});

document.getElementById('category-select').addEventListener('change', function() {
    const category = this.value;
    const imageSelect = document.getElementById('image-select');
    const options = imageSelect.options;

    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        if (option.getAttribute('data-category') === category) {
            option.style.display = 'block';
        } else {
            option.style.display = 'none';
        }
    }

    imageSelect.value = ""; // Reset the image selection
});

document.getElementById('generate-button').addEventListener('click', function() {
    const imageSelect = document.getElementById('image-select').value;
    const topText = document.getElementById('top-text').value;
    const creatorName = document.getElementById('creator-name').value;
    const fontFamily = document.getElementById('font-family').value;
    const fontSize = document.getElementById('font-size').value + 'px';
    const fontColor = document.getElementById('font-color').value;

    const memeImage = document.getElementById('meme-image');
    const memeText = document.getElementById('meme-text');
    const creatorDisplay = document.getElementById('creator-display');

    if (imageSelect) {
        memeImage.src = imageSelect;
        memeText.textContent = topText;
        memeText.style.fontFamily = fontFamily;
        memeText.style.fontSize = fontSize;
        memeText.style.color = fontColor;
        creatorDisplay.textContent = "Creado por: " + creatorName;
    } else {
        alert("Por favor selecciona una imagen.");
    }
});