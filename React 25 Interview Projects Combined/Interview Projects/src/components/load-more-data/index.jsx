

import {useEffect,useState} from 'react';
import './styles.css';

const LoadMoreButton = () =>{

    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [count,setCount] = useState(0);
    const [disable, setDisable] = useState(false);
    

    const fetchdata = async() =>{
        try{
            setLoading(true);
         const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count*20}`);
         let data = await response.json();

        

        if(data && data.products && data.products.length){
            setProducts((prevData) => [...prevData, ...data.products])
            console.log(products);
            setLoading(false);
        }

        }catch(e){
            console.log(e);
        }


    }

    useEffect(()=>{
         fetchdata();
    },[count]);

    useEffect(()=>{
        {products && products.length === 100 && setDisable(true)} 
    },[products])

    if (loading) {
        return <div>Loading data! Please Wait.</div>;
      }

    return (<>

    <div className="load-more-container">
        <div className="product-container">
            
        
        {products && products.length ? products.map((item)=>(
             <div className="product" key ={item.id}>
                <img src={item.thumbnail} alt={item.title}/>
                <p>{item.title}</p>
            </div>
        )) : null }
        
        </div>

        <div>{disable && `You have reached 100 products limit`}</div>

        <div className="button-container">
            <button disabled = {disable} onClick={()=>setCount(count+1)} >Load More Products</button>
        </div>

        
    </div>

    

    </>)
}

export default LoadMoreButton;