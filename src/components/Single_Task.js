import './Single_Task.css'
import './Button.css'
const Single_Task = ({single_task}) => {
    return (
        <div className="SingleTask">
            <h3 key={single_task.id}>{single_task.text}</h3>
            {/* key can be inserted in calling widget */}
            <h3>{single_task.virgin}</h3>
            <button>DELETE</button>
        </div>
    )
}
export default Single_Task
