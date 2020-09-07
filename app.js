const stonesBtn = document.getElementById('stones');
const poundsBtn = document.getElementById('pounds');

stonesBtn.addEventListener('click', () => {
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input / 6.35 + ' stone';
});

poundsBtn.addEventListener('click', () => {
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input * 2.205 + ' Lbs';
});