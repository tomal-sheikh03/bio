import './error.css'
import { Link } from 'react-router-dom';


export default function Error() {
    return (
        <div className="error">
            <p className="errorMessage">
                Are you lost? Click <Link to='/'>here</Link> or use the links in the navigation panel...
            </p>
        </div>
    )
}
