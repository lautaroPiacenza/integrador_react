const MenuItem = ({data, onClick}) =>{
    return (
      <li>
        <a href="#" onClick={onClick}>{data.name}</a>
      </li>
      )
    }

export default MenuItem