
//generate random string of 7 length
export function shortid() {

    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let characterslength = characters.length;
    for (let i = 0; i < 7; i++) {
        result += characters.charAt(Math.floor(Math.random() * characterslength));
    }
 return result;
    // console.log(result);
}
// shortid()