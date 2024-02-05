import { parse } from "path";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function kalkulator() {
    input.question("Masukkan Angka Pertama : ", angka1 => {
        console.info(angka1);
        input.question("Masukkan Angka Kedua : ", angka2 => {
            console.info("Kamu menginputkan nomor " +angka2);
            input.question("masukkan operator (+,-,*,/) : ",operator => {
                console.info(operator);
                if(operator === "+") {
                    console.info(`Hasil Penjumlahan : ${parseFloat
                    (angka1) + parseFloat(angka2)}`);
                } else if(operator === "-") {
                    console.info(`Hasil Pengurangan : ${parseFloat
                    (angka1) - parseFloat(angka2)} `);
                } else if(operator === "*") {
                    console.info(`Hasil Perkalian : ${parseFloat
                    (angka1) * parseFloat(angka2)} `);
                } else if(operator === "/") {
                    console.info(`Hasil Pembagian : ${parseFloat
                    (angka1) / parseFloat(angka2)} `);
                } else { console.info("Operator Tidak Dikenal");
            }
            input.close();
            } )
        })

    
    })
}

kalkulator()