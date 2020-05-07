import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { CardsContainerStyled, CardsStyled, CardStyled } from './style';

const Cards = ({
    items,
    onSeletedItemChange,
    onRenderItem,
    justifyContentItems,
    widthCard,
    onRenderActions,
    onDoubleClickItemChange,
    height,
}) => {
    const [selectedItem, setSelectedItem] = useState({});

    const handleOnSeletedItemChange = item => {
        setSelectedItem(item);
        if (onSeletedItemChange) {
            onSeletedItemChange(item);
        }
    };

    const handleOnDoubleClickItemChange = item => {
        if (onDoubleClickItemChange) {
            setSelectedItem(item);

            onDoubleClickItemChange(item);
        }
    };

    return (
        <CardsContainerStyled
            height={height}
        >
            <CardsStyled
                widthCard={widthCard}
                justifyContentItems={justifyContentItems}>
                {items.map((item, index) => (
                    <CardStyled
                        key={index}
                        isSelected={selectedItem === item}
                        onClick={() => handleOnSeletedItemChange(item)}
                        onDoubleClick={() => handleOnDoubleClickItemChange(item)}
                    >
                        {onRenderItem && onRenderItem(item)}

                        {onRenderActions && (
                            <div className="display-actions">
                                {onRenderActions(item)}
                            </div>
                        )}
                    </CardStyled>
                ))}
            </CardsStyled>
        </CardsContainerStyled>
    );
};

Cards.propTypes = {
    items: PropTypes.array.isRequired,
    justifyContentItems: 'start' || 'center' || 'end',
    widthCard: PropTypes.number,
    onSeletedItemChange: PropTypes.func.isRequired,
    onRenderItem: PropTypes.func.isRequired,
    onRenderActions: PropTypes.func,
    onDoubleClickItemChange: PropTypes.func,
    height: PropTypes.number,
};

Cards.defaultProps = {
    justifyContentItems: 'center',
    widthCard: 200,
};

export default Cards;
