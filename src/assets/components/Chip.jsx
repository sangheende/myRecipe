import './components.css';

const Chip = ({label, type}) => {
    return <div className={`chip chip--${type}`}>
        {label}
    </div>
}

export default Chip;