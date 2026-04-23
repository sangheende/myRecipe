import './components.css';

const Chip = ({text, type, onClick}) => {
    return <div className={`chip chip--${type}`} onClick={onClick}>
        {text}
    </div>
}

export default Chip;