let lsTool = {
    setItem: (params)=>{
        localStorage.setItem(`${params.key}`,JSON.stringify(params.value))
    },
    getItem: (params)=>{
        return JSON.parse(localStorage.getItem(params))
    },
    removeItem: (params)=>{
        localStorage.removeItem(params)
    }
}
export {lsTool}