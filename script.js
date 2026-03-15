const input=document.getElementById("depositInput")

if(input){

input.oninput=()=>{

let v=input.value

document.getElementById("invest").innerText="$"+v
document.getElementById("bonus").innerText="$"+(v0.5)
document.getElementById("total").innerText="$"+(v1.5)

}

}

const users=["Alpha_User","TraderX","CryptoQueen","Investor88"]

function addLedger(){

const table=document.getElementById("ledgerBody")

if(!table)return

const user=users[Math.floor(Math.random()*users.length)]

const amount="$"+(Math.floor(Math.random()*5000)+500)

const row=document.createElement("tr")

row.innerHTML="<td>"+user+"</td><td>"+amount+"</td><td style='color:#22c55e'>Paid</td>"

table.prepend(row)

if(table.children.length>6) table.lastChild.remove()

}

setInterval(addLedger,4000)

addLedger()



const investors=["Michael","WhaleTrader","CryptoBoss","AlphaFund"]

function showDeposit(){

const popup=document.getElementById("depositPopup")

const text=document.getElementById("depositText")

if(!popup)return

const name=investors[Math.floor(Math.random()*investors.length)]

const amount="$"+(Math.floor(Math.random()*4000)+300)

text.innerText=name+" deposited "+amount

popup.style.display="block"

setTimeout(()=>popup.style.display="none",4000)

}

setInterval(showDeposit,9000)
