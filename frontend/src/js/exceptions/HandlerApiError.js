export default function(err){
    if(err.response && err.response.data.message){
        throw err.response.data.message;
    }else{
        console.error(err);
        throw 'Ops, houve um erro inesperado.';
    }
}
