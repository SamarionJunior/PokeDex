import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as FilterActions from "../../../../store/actions/filter";

const selectors = [    
    {title: "Nenhum", isOrder: false, direction: null, property: null},
    {title: "Id Crescente", isOrder: true, direction: "ascending", property: "id"},
    {title: "Id Decrescente", isOrder: true, direction: "descending", property: "id"},
    {title: "Nome Crescente", isOrder: true, direction: "ascending", property: "name"},
    {title: "Nome Decrescente", isOrder: true, direction: "descending", property: "name"},
]

const Order = ({setOrder}) => {

    const [selected, setSelected] = useState({title: "", isOrder: false, direction: null, property: null})

    useEffect(() => {
        setOrder(selected)
    }, [selected])
    
    return (
        <div>
            <select value={selected.title} onChange={
                (e) => {
                    const titleSelected = String(e.target.value)
                    if(titleSelected){
                        const selectorFiltered = selectors.filter(selector => selector.title === titleSelected)[0]
                        setSelected(selectorFiltered)
                    }
                }
            }>
                {selectors.map(index => 
                    <option key={index.title} value={index.title} >
                        {index.title}
                    </option>
                )}
            </select>
        </div>
    )
}

const mapDispatchToProps = dispatch => (
    bindActionCreators(FilterActions, dispatch)
)

export default connect(null, mapDispatchToProps)(Order)





