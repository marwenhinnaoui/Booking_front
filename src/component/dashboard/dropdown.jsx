import 'bootstrap/dist/css/bootstrap.min.css';
export default function DropDown(props){
    return(
        <ul className={`dropDown d-flex justify-content-center align-items-center p-0 flex-column  ${props.dropDown.opacity}`}>

                <li>Setting</li>
                <li className='text-danger' onClick={props.logout}>Logout</li>

        </ul>
    );
}