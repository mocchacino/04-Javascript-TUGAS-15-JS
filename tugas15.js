function phytagoras(a, b){
    var phy = Math.sqrt(Math.pow(a,2) + Math.pow(b,2))

    return phy
}

function main(){
    var ab = 8;
    var bc = 6;
    console.log("Nilai AB : ", ab);
    console.log("Nilai BC : ", bc);

    console.log("Panjang sisi AC  pada segitiga  siku-siku tersebut  adalah : ", phytagoras(8,6));
}

main()