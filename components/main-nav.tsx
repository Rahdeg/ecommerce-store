"use client"
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { Select} from "antd";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation"

interface MainNavProps{
    data: Category[]
}

const MainNav: React.FC<MainNavProps> = ({data}) => {
    const pathname = usePathname();
    const router = useRouter();

    const routes = data.map((route)=>({
        href:` /category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }))

    const onSelectCategory = (value: string) => {
         if (value) {
            const filtered = routes?.filter((route) => route.label === value);
         return   router.push(filtered[0]?.href)
        }
       
      };

  return (
    <>
     <nav className="hidden md:flex mx-6  items-center space-x-3 md:space-x-4 lg:space-x-6 ">
        {
            routes.map((route)=>(
                <Link href={route.href} key={route.href} className={cn('text-sm font-medium transition-colors hover:text-black', 
                route.active ? "text-black" : "text-neutral-500")}>
                {route.label}
                </Link>
            ))
        }
    </nav>
    <nav className="flex md:hidden mx-6  items-center space-x-3 md:space-x-4 lg:space-x-6 ">
    <Select defaultValue=" Overview" size="large"
                   allowClear
                    showSearch
                    placeholder="Overview"
                    optionFilterProp="children"
                    onChange={(val)=> onSelectCategory(val)} bordered={false}
                    filterOption={(input, option) =>
                      (option?.value?.toString() ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    className=" border  rounded-md " style={{width:200}}> 
                        {
                          routes?.map((route)=>(
                            <Select.Option value={route.label} key={`${route.href}`} className={cn(' text-sm font-medium transition-colors hover:text-primary',route.active ? 'text-black dark:text-white' : " text-muted-foreground")}>{route.label}</Select.Option> 
                          ))
                        }
                    </Select>
    </nav>
    </>
   
  )
}

export default MainNav