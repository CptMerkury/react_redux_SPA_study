import React, {useState} from 'react';
import classesItem from './paginator.module.css'

const Paginator = ({totalItemsCount, pageSize, selectPage, isLoading, currentPage, portionSize = 5, ...props}) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize)

    const pagesArray = new Array(pagesCount).fill(1)
    const btnArray = []

    pagesArray.map((btn, idx) => {
        return btnArray.push(idx + 1)
    })

    const portionCount = Math.ceil(pagesCount / portionSize)

    const [portionNum, setPortionNum] = useState(1)
    const leftPortionSize = (portionNum - 1) * portionSize + 1;
    const rightPortionSize = portionNum * portionSize;

    const pagesBtn = btnArray.filter(btn => btn >= leftPortionSize && btn <= rightPortionSize).map((btn) => {
        return (
                <button
                    className={currentPage === btn ? classesItem.myPaginationBtnActive : classesItem.myPaginationBtn}
                    onClick={() => selectPage(btn)}
                    disabled={isLoading}
                    key={btn}
                >{btn}
                </button>
        )
    })
    return (
        <div className={classesItem.paginationWrapper}>
            {portionNum > 1
            && <button
                className={classesItem.myPaginationBtn}
                onClick={() => setPortionNum(portionNum - 1)
                }>PREV</button>}
            {pagesBtn}
            {portionCount > portionNum
            && <button
                className={classesItem.myPaginationBtn}
                onClick={() => setPortionNum(portionNum + 1)
                }>NEXT</button>}
        </div>
    )
}

export default Paginator