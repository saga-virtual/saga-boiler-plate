import LocalDB from '@/js/infra/LocalDB';
import ApiClient from '@/js/infra/ApiClient';
import HandlerApiError from '@/js/exceptions/HandlerApiError';

let AuthService = {
    user: (LocalDB.data && LocalDB.data.user) ? LocalDB.data.user : false,
    async login(payload){
        await ApiClient.post('/auth/login', payload)
        .then((response)=>{
            let data = response.data.data;
            LocalDB.data = {};
            LocalDB.data.token = data.token;
            LocalDB.data.user = data.user;
            LocalDB.saveData();
            return response;
        }).catch(HandlerApiError);
    },
    async logout(){
        LocalDB.eraseData();
        ApiClient.get('/auth/logout');
    },
}

export default AuthService;
