let km_tot_user=prompt('Quanti chilometri devi percorrere?')

let age_user=prompt('indica la tua età')

if(age_user < 18){
    let tot_under_18= km_tot_user * 0.21 * 0.8;
    console.log(tot_under_18)
    
}
else if(age_user > 65){
    let tot_under_65= km_tot_user * 0.21 * 0.6;
    console.log(tot_under_65)
    
}
else{
    let tot_middle= km_tot_user * 0.21;
    console.log(tot_middle)

}
    
