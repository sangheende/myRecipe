import './components.css';

const Chip = ({text, type, onClick, categoryId}) => {
    return <div className={`chip chip--${type}`} onClick={() => onClick(categoryId)}>
        {text}
    </div>
}

export default Chip;