import './css/components.css';

const SectionHeader = ({title, chip}) => {
    return <div className="section__header">
        <h2 className="section__header__title">{title}</h2>
        {chip && <div className="section__header__chip">{chip}</div>}
    </div>
}

export default SectionHeader;