// Cambiar tema de la página
document.getElementById('theme-select').addEventListener('change', function() {
    const bodyClass = document.body.classList;
    const selectedTheme = this.value;
    bodyClass.remove('formal', 'crazy');
    bodyClass.add(selectedTheme);

    // Crear figuras según el tema
    clearShapes();
    if (selectedTheme === 'formal') {
        createPolygons();
    } else if (selectedTheme === 'crazy') {
        createRandomShapes();
    }
});

// Limpiar figuras anteriores
function clearShapes() {
    const shapes = document.querySelectorAll('.polygon, .random-shape');
    shapes.forEach(shape => shape.remove());
}

// Crear figuras poligonales cayendo (tema formal)
function createPolygons() {
    for (let i = 0; i < 10; i++) {
        const polygon = document.createElement('div');
        polygon.classList.add('polygon');
        polygon.style.left = `${Math.random() * 100}vw`;
        polygon.style.top = `${Math.random() * -100}px`;
        document.body.appendChild(polygon);
    }
}

// Crear figuras aleatorias sin sentido que caen (tema loco)
function createRandomShapes() {
    for (let i = 0; i < 10; i++) {
        const shape = document.createElement('div');
        shape.classList.add('random-shape');
        shape.style.left = `${Math.random() * 100}vw`;
        shape.style.top = `${Math.random() * -100}px`;
        shape.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Color aleatorio
        document.body.appendChild(shape);
    }
}

// Filtrar imágenes por categoría
document.getElementById('category-select').addEventListener('change', function() {
    const category = this.value;
    const options = document.getElementById('image-select').options;
    for (let i = 0; i < options.length; i++) {
        options[i].style.display = options[i].getAttribute('data-category') === category ? 'block' : 'none';
    }
    document.getElementById('image-select').value = "";
});

// Generar Meme
document.getElementById('generate-button').addEventListener('click', function() {
    const imageUrl = document.getElementById('image-select').value;
    const topText = document.getElementById('top-text').value;
    const fontFamily = document.getElementById('font-family').value;
    const fontSize = document.getElementById('font-size').value + 'px';
    const fontColor = document.getElementById('font-color').value;
    const creatorName = document.getElementById('creator-name').value;

    if (imageUrl) {
        document.getElementById('meme-image').src = imageUrl;
        document.getElementById('meme-text').textContent = topText;
        document.getElementById('meme-text').style.fontFamily = fontFamily;
        document.getElementById('meme-text').style.fontSize = fontSize;
        document.getElementById('meme-text').style.color = fontColor;
        document.getElementById('creator-display').textContent = `Creado por: ${creatorName}`;
    } else {
        alert('Por favor, selecciona una imagen.');
    }
});
