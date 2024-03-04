import './UserProfile.css'

export default function UserProfile (props)
{
    return (
        <div className='card-user'>
            <div>
                <img src={props.avatar}></img>
            </div>
            <div>
                <p>Username: {props.username}</p>
            </div>
            <div>
                <p>Password: {props.email}</p>
            </div>
        </div>
    );
}
