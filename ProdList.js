import ProdListItem from "./ProdListItem"; 

function ProdList ({products, onDelete, poxvac, manufacturers}) {
    return (
        <div>
            {products.map((prod) => { return <ProdListItem product={prod}  key={prod.ID} onDelete={onDelete} poxvac={poxvac} manufacturers={manufacturers}/>})}
        </div>
    );
}

export default ProdList;