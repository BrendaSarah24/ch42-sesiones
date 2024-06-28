/* Exercise # 6
Realizar una función que realice el algoritmo de burbuja.
Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100]

 */
let input=[3,6,12,5,100,1];
let output=[];
let i=0;
while(i<=input.length-1){
    let inicial=input[i];
    for(let j=0;j<=input.length-1;j++){
        let comparado=input[j];
        let valorcomparado=0;
        if(inicial>comparado){
            output.push(comparado)
            console.log(comparado);
            //input.splice(j,1);
            i=0;
          
        }
        i++;
    }
}
