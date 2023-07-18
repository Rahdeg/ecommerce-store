import getProducts from "@/actions/get-Products";
import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { Billboard as Bill, Product } from "@/types";


const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;



const HomePage = async() => {


const products = await getProducts({isFeatured: true});

const billboard = await getBillboard("c3e41594-8ab1-496f-8d6f-b872e8695279")

  

  return (
    <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard}/>
        </div>
        <div className=" flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" data={products}/>
        </div>
    </Container>
  )
};



export default HomePage;


