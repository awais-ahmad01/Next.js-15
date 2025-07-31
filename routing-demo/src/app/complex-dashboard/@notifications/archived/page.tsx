import { Card } from "@/components/card"
import Link from "next/link"

export default function Archived(){
    return (
        <Card>
            <h1>Archived Notifications</h1>
            <Link href="/complex-dashboard">Default</Link>
        </Card>
    )
}