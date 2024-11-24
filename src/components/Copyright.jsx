import './Copyright.css';

function Copyright({legalName}){
    
    const date=new Date();
    const currentYear=date.getFullYear();

    return(
<div className='copyright'>
<p>&copy;{legalName} {currentYear}</p>
</div>
);
}
export default Copyright;