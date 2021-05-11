const Header = (props) => {
    return (
        <div>
            <h1 style ={ headingstyle} >{props.title}</h1>            
        </div>
    )
}
Header.defaultProps ={
    title: 'task',
} 
const headingstyle ={
    color: 'red', backgroundColor: 'black'
}
export default Header
