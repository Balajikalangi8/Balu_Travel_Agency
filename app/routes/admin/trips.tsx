import {Header} from "../../../components";

const Trips=()=>{
    return(
        <main className="all-users wrapper">
            <Header
                title="Trips"
                description="AI generated Trips"
                ctaText="Create aTrip"
                ctaUrl="/trips/create"
            />
        </main>
    )
}
export default Trips;