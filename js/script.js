let km_tot_user= parseInt(prompt('Quanti chilometri devi percorrere?')) 

let age_user=parseInt (prompt('indica la tua età'))

const euro = '€'

if(age_user < 18){
    let tot_under_18= km_tot_user * 0.21 * 0.8;
    let n= tot_under_18.toFixed(2)+euro
    console.log(n)
}
else if(age_user > 65){
    let tot_under_65= km_tot_user * 0.21 * 0.6;
    let m= tot_under_65.toFixed(2)+euro
    console.log(m)
}
else{
    let tot_middle= km_tot_user * 0.21;
    let p= tot_middle.toFixed(2)+euro
    console.log(p)
}
