import { ElMessage  } from 'element-plus';
import axios from 'axios';


export function request(object) {
    axios(object=Object.assign({
        url: '',
        method: 'get',
        params:{},
        data: {},
        successMessage: false,
        errorMessage: true,
        success: (resques) => { },
        error: (resques) => { },
    }, object)).then((resques) => {
        if (resques.data.code == 200) {
            object.successMessage && ElMessage.success(object.successMessage === true ? resques.data.message : object.successMessage);
            object.success(resques.data);
        } else {
            object.errorMessage && ElMessage.error(object.errorMessage === true ? resques.data.message : object.errorMessage);
            object.error(resques.data);
        }
    }).catch((resques) => {
        ElMessage.error('网络请求错误');
    });
}