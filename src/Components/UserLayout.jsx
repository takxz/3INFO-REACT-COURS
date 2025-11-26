import { Link, Outlet } from "react-router";

export default function UserLayout(){
    return (
        <div className="">
            <Link to="/User/Read">Liste</Link>
            <Link to="/User/Create">Ajouter</Link>
            <Link to="/User/Update">Modifier</Link>
            <Link to="/User/Delete">Supprimer</Link>
            <Outlet />
        </div>

    )
}