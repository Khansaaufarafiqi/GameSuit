var ulangi = true;
while( ulangi ){
    // pilihan kita
    var other = prompt(" Silihkan Pilih Kartu Mu: '    gunting    '  '    batu   ' atau '   kertas   ' ")

    // pilihan computer
    // mengaktifkan bilangan random
    var computer = Math.random();
    if( computer < 0.34){
        computer = "gunting";
    } else if ( computer >= 0.34 && computer < 0.68){
        computer = "batu" ;
    } else {
        computer = "kertas" ;
    }
    var hasil = "";
    // mennentukan rules
    if(other == computer){
        hasil = "Kalian Sama XD...."
    }else if(other == "gunting"){
        if( computer == "batu"){
            hasil = "Yahhh kamu kalah "
        }else {
            hasil = "Selamat anda menang  "
        };  
    }else if(other == "batu"){
        if(computer == "gunting"){
            hasil = "Selamat anda menang  "
        }else{
            hasil = "Yahhh Kamu Kalah'"
        }
    }else if(other == "kertas" ){
        // Alternatif dari if else
        hasil = (computer == "batu") ? "Selamat anda Menang" : " Yahhh kamu kalah ";

        // if(computer == "Batu" ){
        //     hasil = "Selamat anda Menang karena Computer pakek 'batu'"
        // }else{
        //     hasil = "Yahhh kalah gara gara computer pakek 'gunting'";
        // }
    }else{
        hasil = "Pilihan Anda Salah, Silakan Coba Lagi!";
    }
    // tampilkan hasilnya
    alert("kamu memilih : " + other + "\ndan computer memilih : " + computer + "\nmaka hasilnya : " + hasil);
    ulangi = confirm("Apakah anda ingin bermain lagi ? ")
}
alert("Thank You sudah bermain :)")