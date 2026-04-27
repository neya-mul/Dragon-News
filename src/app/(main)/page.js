import { redirect } from "next/navigation"

// import { redirect } from "next/dist/server/api-utils";
const defaultPage = '01'

export default async function Home() {
 redirect(`/category/${defaultPage}`)
}
