import 'axios';

declare module 'axios' {
    interface AxiosRequestConfig {
        isInternal?: boolean; // 添加你的自定义属性
        url: string;
        // 可以添加其他自定义属性
        // retry?: number;
        // showLoading?: boolean;
    }
}