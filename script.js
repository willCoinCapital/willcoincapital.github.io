// This will make your dashboard balance change slightly 
// based on the deposit you enter in the calculator!
function update(val) {
    const d = Number(val); 
    const b = d * 0.5;
    
    // Update Calculator
    document.getElementById('invTxt').innerText = '$' + d.toLocaleString();
    document.getElementById('bonTxt').innerText = '$' + b.toLocaleString();
    document.getElementById('totTxt').innerText = '$' + (d + b).toLocaleString();

    // Update Dashboard Balance (Simulated)
    const baseBalance = 45280;
    document.getElementById('dashBalance').innerText = '$' + (baseBalance + d).toLocaleString();
}
