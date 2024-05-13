import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const MultiSelect = ({ options, placeholder, onChange }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const handleSelect = (item) => {
        const selectedIndex = selectedItems.indexOf(item.id);
        let newSelectedItems = [...selectedItems];
        if (selectedIndex === -1) {
            newSelectedItems.push(item.id);
        } else {
            newSelectedItems.splice(selectedIndex,1);
        }
        setSelectedItems(newSelectedItems);
        onChange(newSelectedItems);
    };
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    console.log('Selected Items:', selectedItems);
    return (
        <div className="multiselect">
            <div className="multiselect-input" onClick={handleToggle} >
                <span>{placeholder}</span>
                <span className="toggle-icon">
                {isOpen ? <FaChevronDown/> : <FaChevronUp/>}
                </span>
            </div>
            {isOpen && (
                <ul className="multiselect-list">
                    {options.map((item, index) => (
                        <li key={index}>
                            <input
                                type="checkbox"
                                checked={selectedItems.includes(item.id)}
                                onChange={() => handleSelect(item)}
                            />
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MultiSelect;