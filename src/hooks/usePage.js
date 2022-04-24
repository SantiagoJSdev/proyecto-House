import { useState } from "react"



export const usePage = () => {

const [page, setpage] = useState({
    page: 1
});
const maximo = (3);

return {
    setpage,
    page,
    maximo
}
}