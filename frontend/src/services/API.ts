import request from './httpRequest'
import env from './../env'

export interface IAdd {
    num1: number;
    num2: number;
}
const api = {
    postAddition(data: IAdd) {
        return request({
            url: `${env.APP_URL}/addition`,
            method: 'post',
            data
        })
    },
};

export default api
