document.getElementById('change-pict-btn').addEventListener('click', function() {
    document.getElementById('change-pict-in').click();
  });

// tambahin logic ganti gambarny disini

// back button
const backButton = document.querySelector('.back-button');
backButton.addEventListener('click', () => {window.history.back();});