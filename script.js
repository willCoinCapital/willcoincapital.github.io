// 1. CALCULATOR LOGIC
const depositInput = document.getElementById('depositInput');
const depositSlider = document.getElementById('depositSlider');
const displayInvest = document.getElementById('displayInvest');
const displayBonus = document.getElementById('displayBonus');
const displayTotal = document.getElementById('displayTotal');

function updateCalculator(value) {
    const amount = Number(value);
    const bonus = amount * 0.5;
    const total = amount + bonus;

    displayInvest.innerText = `$${amount.toLocaleString()}`;
    displayBonus.innerText = `$${bonus.toLocaleString()}`;
    displayTotal.innerText = `$${total.toLocaleString()}`;
}

depositInput.addEventListener('input', (e) => {
    updateCalculator(e.target.value);
    depositSlider.value = e.target.value;
});

depositSlider.addEventListener('input', (e) => {
    updateCalculator(e.target.value);
    depositInput.value = e.target.value;
});

// 2. LIVE PRICE FEED (CoinGecko API)
async function fetchMarketData() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,cardano&vs_currencies=usd&include_24hr_change=true');
        const data = await response.json();
        const ticker = document.getElementById('ticker-content');
        
        // Build the ticker HTML
        let tickerHTML = '';
        const coins = ['bitcoin', 'ethereum', 'solana', 'cardano'];
        
        coins.forEach(coin => {
            const price = data[coin].usd.toLocaleString();
            const change = data[coin].usd_24h_change.toFixed(2);
            const color = change >= 0 ? 'text-green-400' : 'text-red-400';
            
            tickerHTML += `
                <div class="flex gap-2 font-mono text-xs uppercase tracking-widest">
                    <span class="text-gray-400">${coin}/USD:</span>
                    <span class="font-bold">$${price}</span>
                    <span class="${color}">${change >= 0 ? '▲' : '▼'} ${Math.abs(change)}%</span>
                </div>
            `;
        });

        // Repeat content to make the loop seamless
        ticker.innerHTML = tickerHTML + tickerHTML + tickerHTML;
    } catch (error) {
        console.error("Price fetch error:", error);
    }
}

// Run on load and every 60 seconds
fetchMarketData();
setInterval(fetchMarketData, 60000);
