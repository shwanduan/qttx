
import { Notification,Message } from 'element-ui';
export function isPoneAvailable(poneInput) {
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(poneInput)) {
        Message({
            message: '手机号格式不正确',
            type: 'error',
            duration: 5 * 1000
        });  
        return false;
    } else {
        return true;
    }
}