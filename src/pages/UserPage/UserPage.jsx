import { useParams } from "react-router";

export default function UserPage() {
    const { id } = useParams();
    return (
        <div>
            <h1>User Details</h1>
            <p>User ID: {id}</p>
        </div>
    );
}