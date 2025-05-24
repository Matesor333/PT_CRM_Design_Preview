function Overview(){
    const programDetails = {
        programId: 1,
        name:"1o1 Coaching",
        startDate:"01.01.2025",
        endDate:null,
        description:"General information for everyone",
        programGoal:"Introduction to my workout style and all materials needed to start"


    }

    return(
        <div>
            <h4>Description</h4>
        <p> {programDetails.description}</p>
            <h4>Goals</h4>
            <p>{programDetails.programGoal}</p>
            <span>Start:{programDetails.startDate}</span>
            <span>End:{programDetails.endDate}</span>

        </div>


    )
}
export default  Overview;