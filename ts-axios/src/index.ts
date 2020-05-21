import { AxiosRequest } from "./types";
import xhr from './xhr'

function axiox(config: AxiosRequest): void {
    xhr(config);
}

export default axiox;