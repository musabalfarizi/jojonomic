// const getUserSync = (id) => {

//     // let nama = "";
//     // // if(id === 1) {
//     // //     nama = 'Santika';

//     // // } else {
//     // //     nama = "galih";
//     // // }
// const nama = id === 1 ? 'Sandika' : 'Galih';
//     return {id, nama} ;

// };


// const userSatu = getUserSync(1);
// console.log(userSatu);

// const userDua = getUserSync(2);
// console.log(userDua);

// const halo = 'Hello Word';
// console.log(halo);

const getData = (id) => {

    let nama = "";
    
    if(id === 1){

        nama = "Musab";

    }else{

        nama = "Dia";

    }

    return {id, nama};


};

const getData1 = getData(1);
console.log(getData1);

const getData2 = getData(2);
console.log(getData2);

const nampak = "Successfully";
console.log(nampak);