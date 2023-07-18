import { useParams } from "react-router-dom"

export function LaunchDetails() {

    let { launchId } = useParams()

    console.log('Hola', launchId)
    return (
        <>
            <div>Hola {launchId}</div>
        </>
    )
}