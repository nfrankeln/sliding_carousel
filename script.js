const carItems = document.querySelectorAll('.car-item');

 carItems.forEach(div => {
      div.addEventListener('click', () => {
        if (!div.classList.contains('selected')) {
          carItems.forEach(otherDiv => {
            otherDiv.classList.remove('selected');
          });
          div.classList.add('selected');
        }
      });
    });