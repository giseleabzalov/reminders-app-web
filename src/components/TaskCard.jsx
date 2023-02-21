export default function TaskCard ({ data, toggleDone }) {
    const { done } = data;
    const handleButtonClick = () => {
        toggleDone(data);
    }
    return (
        <div>
            <button style= { done 
            ? {color: 'red'} 
            : {color: 'blue'}}
            onClick={handleButtonClick}>
                {data.task}
            </button>
        </div>
    )
}