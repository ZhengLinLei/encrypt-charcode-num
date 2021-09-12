/*=====================

    ZhengLinLei - 2021/09/11

    Apache2.0 - Javascript

======================*/


class KeyStr{
    constructor(key, str){ // str PARAMETER IT'S USED FOR SPLIT THE TEXT
        // INIT THE KEY
        this.changeKey(key, str);
    }


    strToArr(key, str = ','){
        // GENERATE AN ARRAY FROM STRING 
        let arr = key.split(str);

        // CHANGE THE VALUE TO INT
        arr = arr.map(el => parseInt(el));

        //
        return arr;
    }

    changeKey(key, str){
        // CHANGE THE REAL KEY
        this.key = this.strToArr(key, str);
    }
    /* ============

    tmpkey VARIABLE IT'S USED FOR TEMPORAL DIFFERENT KEY
    LIKE IF YOU DON'T WANT TO USE THE PERMANENT KEY, AND YOU ARE GOING TO USE IT ONLY ONE TIME
    YOU CAN USE THIS PARAMETER WITHOUT CHANGING THE REAL KEY

    SYNTAX: [key, str]

    ==============*/

    // FNC TO ENCRYPT THE TEXT FROM 
    encryptStr(str, tmpkey){
        var key, index, charcode, eChar, eStr; // INIT THE KEY FOR ENCRYPT

        // IF tmpkey EXIST CHOOSE THE tmpkey
        if(tmpkey){
            key = this.strToArr(tmpkey[0], tmpkey[1]);
        }else{
            key = this.key;
        }

        index = 0;
        charcode = [];
        eChar = [];

        // CONVERT TEXT TO CHARCODE
        str.split('').forEach(el => {
            charcode.push(el.charCodeAt());
        });

        // ADD THE KEY
        charcode.forEach(el =>{
            eChar.push(el + key[index]);

            //BACK TO INDEX 0
            if(index == key.length-1){
                index = 0;
            }else{
                index++;
            }
        });
    
        // ENCRYPTED CHARCODE TO TEXT
        eStr = '';
        eChar.forEach(el => eStr += String.fromCharCode(el));
        
        return eStr;
    }

    // FNC TO DECRYPT THE TEXT ENCRYPTED
    dencryptStr(str, tmpkey){
        var key, index, charcode, eChar, eStr; // INIT THE KEY FOR ENCRYPT

        // IF tmpkey EXIST CHOOSE THE tmpkey
        if(tmpkey){
            key = this.strToArr(tmpkey[0], tmpkey[1]);
        }else{
            key = this.key;
        }

        index = 0;
        charcode = [];
        eChar = [];

        // CONVERT TEXT TO CHARCODE
        str.split('').forEach(el => {
            charcode.push(el.charCodeAt());
        });

        // REMOVE THE KEY
        charcode.forEach(el =>{
            eChar.push(el - key[index]);

            //BACK TO INDEX 0
            if(index == key.length-1){
                index = 0;
            }else{
                index++;
            }
        });
    
        // ENCRYPTED CHARCODE TO TEXT
        eStr = '';
        eChar.forEach(el => eStr += String.fromCharCode(el));
        
        return eStr;
    }
}

let CharVar = new KeyStr('0')

console.log(CharVar.encryptStr('Hello world!', ['20 10 30', ' ']))

console.log(CharVar.dencryptStr('\oy>yn?', ['20 10 30', ' ']))


// For node only
// module.exports = KeyStr;