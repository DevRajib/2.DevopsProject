import { Link } from "react-router-dom";
import Styles from "../../Styles/Styles"
import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { FaOpencart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import "./ShopMenu.scss";
import QuickView from "../QuickView/QuickView";


const ShopMenuLayoutProducts = ({data,open,setOpen}) => {
    const [count,setCount] = useState(1);
    const decrementQuantity = () =>{
        if(count>1){
            setCount(count-1);
        }
    }
    const incrementQuantity = () =>{
        setCount(count+1);
    }
    const d = data.name;
    const product_name = d.replace(/\s+/g,"-");
    return(
      <div className="flex items-center gap-[30px] w-[98%] rounded-sm shadow-md shadow-[gray]">
         <div>
        
        <div className="h-[250px] w-[250px] 1350px:h-[180px] 1350px:w-[180px] overflow-hidden bg-[#242424] relative group">
        <Link to={`/product/${product_name}`}>
          <img src={data.image_Url[0].url} alt="" className='w-full h-full p-[5px] 1350px:p-[1px] object-cover 
          group-hover:scale-[1.1] transition-all duration-[0.8s] delay-0 ease-in'/>
          </Link>
          <span className='quickView5 absolute  hidden 
           group-hover:block'title='Quick View'
           onClick={()=>setOpen(!open)}><IoIosSearch size={18}/></span>
           {open?(<QuickView open={open} setOpen={setOpen} data={data}/>):null}
        </div>
   
        </div>
        <div className="flex flex-col  gap-[10px]">
          <div className="pb-[5px] pl-2">
          <Link to={`/product/${product_name}`}>
          <h3 className='font-[700] text-[22px] 1350px:text-[14px] text-[#242424]'>{data.name}</h3>
          </Link>
          </div>
           <div className="flex  pl-2 items-center gap-[60px]">
            <div className="flex items-center gap-[1px]">
                (<GiCheckMark  className="text-[#077bc4] text-[18px] 1350px:text-[13px]"/>
                <h6 className="font-semibold italic text-[17px] 1350px:text-[13px] text-[#242424]">{data.stock}</h6>)
            </div>
            <div className="flex  items-center">
                  <h4 className={` mr-[10px] text-[19px] 1350px:text-[13px] font-[600] line-through`}>
                    {data.price.toFixed(2)}
                    <strong className="text-[19px] 1350px:text-[13px]">৳</strong>
                  </h4>
                  <h4 className={` text-[19px] 1350px:text-[13px] font-[600] text-[#077bc4]`}>
                    {data.discount_price.toFixed(2)}
                    <strong className="text-[19px] 1350px:text-[13px]">৳</strong>
                  </h4>
                </div>
           </div>
           <div className="flex items-center gap-[50px]">
           <div className={`${Styles.normal_flex} mt-3 pl-2 pr-3`}>
                  <button
                    className="py-1
                             px-[15px] 1350px:px-[12px] text-center text-white bg-[#077bc4] text-[18px] 1350px:text-[13px]"
                    onClick={decrementQuantity}
                  >
                    -
                  </button>
                  <span className="py-1 px-5 text-center 1350px:text-[13px] ">{count}</span>
                  <button
                    className="py-1
                             px-[15px] 1350px:px-[12px] text-center text-white bg-[#077bc4] text-[18px] 1350px:text-[13px]"
                    onClick={incrementQuantity}
                  >
                    +
                  </button>
                </div>   

           <div className="pt-[10px]">
              <button className={`w-[150px] flex items-center justify-center rounded-md cursor-pointer gap-[10px] 
              bg-[#242424] text-white my-1 h-[40px] 1350px:w-[125px] 1350px:h-[35px]`}>
                <span className="uppercase font-semibold 1350px:text-[12px]">add to cart</span> <FaOpencart 
                className="font-semibold text-[15px] 1350px:text-[13px]"/> </button>
           </div>
           </div>
          {/* <div className={`${Styles.normal_flex} mt-3 pl-2 pr-3`}>
                  <button
                    className="py-1
                             px-[15px] text-center text-white bg-[#077bc4] text-[18px]"
                    onClick={decrementQuantity}
                  >
                    -
                  </button>
                  <span className="py-1 px-5 text-center ">{count}</span>
                  <button
                    className="py-1
                             px-[15px] text-center text-white bg-[#077bc4] text-[18px]"
                    onClick={incrementQuantity}
                  >
                    +
                  </button>
                </div> */}
           {/* <div className=" mb-[10px] mt-[10px]">
              <button className={`${Styles.button} gap-[10px] 
              bg-[#242424] text-white !my-1 !h-[40px]`}>
                <span className="uppercase font-semibold">add to cart</span> <FaOpencart size={15}
                className="font-semibold"/> </button>
           </div> */}
        </div>
      </div>
    )
  }
  export default ShopMenuLayoutProducts;

  