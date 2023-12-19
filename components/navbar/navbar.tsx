
import Link from "next/link"
import Container from "../ui/container"
import NavbarActions from "./navbar-actions"
import MainNav from "./main-nav"
import { getCategories } from "@/actions/get-categories"

const Navbar = async() => {
  const categories = await getCategories()

  return (
    <div className="border-b">
        <Container>
            <div className="px-4 sm:px-6 lg:px-8 ">
                <div className="h-16 flex items-center">
                    <Link href={'/'} className="ml-4 lg:ml-0 gap-x-2">
                        <p className="text-xl font-bold">STORE</p>
                    </Link>
                    <MainNav data={categories}/>
                    <NavbarActions />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Navbar