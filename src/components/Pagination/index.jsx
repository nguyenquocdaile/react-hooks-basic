import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object,  
    onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
    onPageChange: null,
}

function Pagination(props) {
    const { pagination, onPageChange } = props;
    const { _page, _limit, _totalRows } = pagination;
    const totalPages = Math.ceil(_totalRows / _limit);

    function handlePaginationChange(newPage) {
        if(onPageChange) {
            onPageChange(newPage)
        }
    }
    return (
    <div> 
        <button
            disabled={_page <= 1}
            onClick={() => handlePaginationChange(_page - 1)}
        >
            Prev
        </button>

        <button
            disabled={_page >= totalPages}
            onClick={() => handlePaginationChange(_page + 1)}
        >
            Next
        </button>
    </div>
    );
}

export default Pagination;