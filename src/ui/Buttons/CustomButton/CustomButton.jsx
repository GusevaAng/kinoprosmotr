import './CustomButton.scss'

const CustomButton = ({onClick, text}) => {

    return (
        <button onClick={onClick} className='custom-button'>
            {text}
        </button>
    )
}

export default CustomButton