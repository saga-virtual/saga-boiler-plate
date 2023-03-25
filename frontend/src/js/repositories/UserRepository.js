import ApiClient from '@/js/infra/ApiClient.js';
import HandlerApiError from '@/js/exceptions/HandlerApiError.js';
const resource = '/users';

export default {
    get() {
        return ApiClient.get(`${resource}`).catch(HandlerApiError);
    },
    getById(id) {
        return ApiClient.get(`${resource}/${id}`).catch(HandlerApiError);
    },
    create(payload) {
        return ApiClient.post(`${resource}`, payload).catch(HandlerApiError);
    },
    update(payload, id) {
        return ApiClient.put(`${resource}/${id}`, payload).catch(HandlerApiError);
    },
    delete(id) {
        return ApiClient.delete(`${resource}/${id}`).catch(HandlerApiError)
    }
};