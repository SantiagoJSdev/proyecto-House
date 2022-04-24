

 export const paginacionClick = (value, setpage, setfirst) => {
    switch (value) {
        case 'primero':
            setfirst(item => item.primero === true ? { ...item, primero: true } : { ...item, primero: true, segundo: false, tercero: false, cuarto: false })
            setpage(page => ({ ...page, page: 1 }))
            break;
        case 'segundo':
            setfirst(item => ({ ...item, segundo: true, primero: false, tercero: false, cuarto: false }))
            setpage(page => ({ ...page, page: 2 }))
            break;
        case 'tercero':
            setfirst(item => ({ ...item, segundo: false, primero: false, tercero: true, cuarto: false }))
            setpage(page => ({ ...page, page: 3 }))
            break;
        case 'cuarto':
            setfirst(item => ({ ...item, segundo: false, primero: false, tercero: false, cuarto: true }))
            setpage(page => ({ ...page, page: 4 }))
            break;
        default:
            break;
    }
}