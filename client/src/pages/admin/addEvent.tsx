import { Header } from "../../components/Header";
import { NavBarAdmin } from "../../components/NavBarAdmin";
import { AddEventForm } from "../../components/AddEventForm";

export const AddEvent = () => {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen w-full pt-28 pb-20 px-4 focus:outline-none">
            <Header variant="page" title="Add Event" />
            <AddEventForm />
            <NavBarAdmin />
        </div>
    )
}