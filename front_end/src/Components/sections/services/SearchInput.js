import React from "react";

const SearchInput = ({ searchQuery, handleSearchInputChange }) => {
    return (
        <div className="wt-widget wt-startsearch">
            <div className="wt-widgettitle">
                <h2>Start Your Search</h2>
            </div>
            <div className="wt-widgetcontent">
                <form className="wt-formtheme wt-formsearch">
                    <fieldset>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Search by name..."
                                value={searchQuery}
                                onChange={handleSearchInputChange}
                                className="search-input"
                            />
                            <a href="javascript:void(0);" className="wt-searchgbtn">
                                <i className="lnr lnr-magnifier"></i>
                            </a>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default SearchInput;