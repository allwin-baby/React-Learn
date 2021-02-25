const Single_Task = ({single_task}) => {
    return (
        <div>
            
            <h1 key={single_task.id}>{single_task.text}</h1>
            {/* key can be inserted in calling widget */}
            <h1>{single_task.virgin}</h1>
        </div>
    )
}
export default Single_Task
