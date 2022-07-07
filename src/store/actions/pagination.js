export function setItens(itens){
    return {
        type: "SET_ITENS",
        itens
    }
}

export function setItensPerPage(itens, itensPerPage){
    return {
        type: "SET_ITENS_PER_PAGE",
        itens,
        itensPerPage,
    }
}

export function setCurrentPage(itens, currentPage, itensPerPage){
    return {
        type: "SET_CURRENT_PAGE",
        itens,
        currentPage,
        itensPerPage,
    }
}

export function setPages(pages){
    return {
        type: "SET_PAGES",
        pages
    }
}

export function setStartIndex(startIndex){
    return {
        type: "SET_START_INDEX",
        startIndex
    }
}

export function setEndIndex(endIndex){
    return {
        type: "SET_END_INDEX",
        endIndex
    }
}

export function setCurrentItens(currentItens){
    return {
        type: "SET_CURRENT_ITENS",
        currentItens
    }
}