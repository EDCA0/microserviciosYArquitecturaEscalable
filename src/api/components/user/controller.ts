import { dbList } from "../../../../store/dummy";

const TABLA = 'user'

export function list() {
    return dbList(TABLA)
}