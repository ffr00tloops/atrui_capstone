
function Navbar() {
    return (
        <div className="p-6 m-6 flex justify-between">
            <h1 className="text-5xl" style={{fontFamily: 'Merriweather'}}>ATRUI</h1>
            <div>
                <button className="p-3 mr-3 text-xl rounded-3xl text-white bg-black">Register</button>
                <button className="p-3 mr-3 text-xl rounded-3xl text-white bg-black">Login</button>
            </div>
        </div>
    )
}

function Body(props){
    return (
        <div className="p-5 mt-12 bg-gray-300">
            <h1 className="text-5xl p-8 text-center">{props.title}</h1>
            <p className="text-xl text-justify p-4">{props.text}</p>
            <p className="text-xl text-justify p-4">{props.text2}</p>
        </div>
    )
}

export default function Homepage() {
    return (

        <div>
           <Navbar /> 
           <Body title="Charity Fundraising Platform" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A animi est, eveniet aliquid similique eum saepe unde optio autem maiores deserunt in eos at voluptate architecto exercitationem debitis doloremque natus inventore quas repellendus sint! Modi, aspernatur veritatis! Fugiat totam temporibus laborum aut voluptates reprehenderit deserunt iusto? Exercitationem dicta consequatur veritatis!" />
           
           <Body text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A animi est, eveniet aliquid similique eum saepe unde optio autem maiores deserunt in eos at voluptate architecto exercitationem debitis doloremque natus inventore quas repellendus sint! Modi, aspernatur veritatis! Fugiat totam temporibus laborum aut voluptates reprehenderit deserunt iusto? Exercitationem dicta consequatur veritatis!" text2="Lorem ipsum dolor sit amet consectetur adipisicing elit. A animi est, eveniet aliquid similique eum saepe unde optio autem maiores deserunt in eos at voluptate architecto exercitationem debitis doloremque natus inventore quas repellendus sint! Modi, aspernatur veritatis! Fugiat totam temporibus laborum aut voluptates reprehenderit deserunt iusto? Exercitationem dicta consequatur veritatis!"/>
        </div>
    )
}