function getDice() {
    const noOfDice = document.getElementById('noOfDice').value;
    const DiceValue = document.getElementById('DiceValue');
    const DiceImage = document.getElementById('DiceImage');
    const values = [];
    const images = [];


    for (let i = 0; i < noOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt='Dice:${value}' >`);
    }
    DiceValue.textContent = `Dice Values: ${values.join(", ")}`;
    DiceImage.innerHTML = images.join('');

}