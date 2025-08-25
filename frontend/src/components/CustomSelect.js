import React from 'react';

const CustomSelect = ({
    label,
    selected,
    setSelected,
    showOptions,
    setShowOptions,
    search,
    setSearch,
    filteredCities
}) => {
    return (
        <div className="custom-select-container">
            {/* Top box (selected value) */}
            <div className="custom-select-header" onClick={() => setShowOptions(!showOptions)}>
                <p id="from-to">{label}</p>
                <div className="select-selected">{selected}</div>
            </div>

            {/* Dropdown options */}
            {showOptions && (
                <div className="select-items" onClick={(e) => e.stopPropagation()}>
                    <input
                        type="text"
                        className="select-search"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        autoFocus
                    />
                    <div className="options-list">
                        {filteredCities.length > 0 ? (
                            filteredCities.map((city) => (
                                <div
                                    key={city}
                                    className="select-item"
                                    onClick={() => {
                                        setSelected(city);
                                        setShowOptions(false);
                                        setSearch(""); // reset search after selection
                                    }}
                                >
                                    {city}
                                </div>
                            ))
                        ) : (
                            <div className="no-results">No cities found</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomSelect;
