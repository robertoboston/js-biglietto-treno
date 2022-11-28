let km_tot_user=parseInt(prompt('Quanti chilometri devi percorrere?')) 

let age_user=parseInt(prompt('indica la tua età'))

const euro = '€'

if(age_user < 18){
    let tot_under_18= (km_tot_user * 0.21 * 0.8).toFixed(2) + euro;
    document.getElementById('cost').innerHTML=`${'il prezzo del biglietto scontato under 18 è'} ${tot_under_18}`
}
else if(age_user > 65){
    let tot_under_65= (km_tot_user * 0.21 * 0.6).toFixed(2) + euro;
    document.getElementById('cost').innerHTML=`${'il prezzo del biglietto scontato under 65 è'} ${tot_under_65}`
}
else{
    let tot_middle= (km_tot_user * 0.21).toFixed(2) + euro;
    document.getElementById('cost').innerHTML=`${'il prezzo del biglietto è'} ${tot_middle}`
}

