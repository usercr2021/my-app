export interface ApiResponse<T = unknown> {
    code: number;
    message: string;
    error: string;
    data: T;
}
