export const Searcher = (arr, search) => {

    const shift1 = arr.filter(item => {
        for (var i = 0; i < item.length; i++)
            if (item.indexOf(search) !== -1) return item
    })

    const shift2 = shift1.filter((item, index)=>{
        if(index <= 4) return item
    })

    return shift2
}