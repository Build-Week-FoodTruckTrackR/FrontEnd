import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {connect} from 'react-redux';
import {editTrucks} from '../actions/trucks';


const EditTruck = (props) => {
    const [editing, setEditing] = useState(false);
    const [menuItems, setMenuItems] = useState([...props.location.state.truck.menu]);
    
    const {handleSubmit, register} = useForm();
    console.log(props);
    
    
    const updateMenu = (e) => {
       const key = e.currentTarget.getAttribute('data-key');
       
       setMenuItems([
            ...menuItems.map((item,index) => {
                if(index === key){
                   return { ...item, [e.target.name]: e.target.value }
                }else{
                    return item;
                }
            })

       ]);
       
       
    //    console.log(menuItems);
    };

    const onSubmit = values => {
        let data = {
            name: values.name ? values.name : props.location.state.truck.name,
            description: values.description ? values.description : props.location.state.truck.description,
            imageUrl: values.imageUrl ? values.imageUrl : props.location.state.truck.imageUrl,
            price: values.price ? values.price : props.location.state.truck.price,
            customerRating: values.customerRating ? values.customerRating : props.location.state.truck.customerRating,
            menu: menuItems ? menuItems : props.location.state.truck.menu
        }
        props.editTrucks(data, props.match.params.id);
        props.history.push('/home');
    };
    return(<>
        <div>
            <h2>Editing Truck: {props.location.state.truck.name}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name: 
                    <input name="name" placeholder={props.location.state.truck.name} ref={register} /></label>
                <label>Description: 
                    <textarea name="description" ref={register} placeholder={props.location.state.truck.description} /></label>    
                <label>Image: 
                    <input name="imageUrl" placeholder={props.location.state.truck.imageUrl} ref={register} /></label>
                <label>Price: 
                    <input name="price"  placeholder={props.location.state.truck.price} ref={register} /></label>
                <label>Customer Rating: 
                    <input name="rating"  placeholder={props.location.state.truck.rating} ref={register} /></label>

                
                {!editing && <button onClick={()=> setEditing(true)} > Edit Menu </button>}
                {editing &&
                    <div>
                     {menuItems && menuItems.map((item,index) => 
                        <div key={index}>
                        <label >Menu Item:
                            <input name='name' data-key={index} placeholder={item.name} onChange={updateMenu}/></label>
                        <label >Price:
                            <input name='price' data-key={index} placeholder={item.price} onChange={updateMenu} /></label>
                        </div>
                     )}
                     <div className='addMenuItem' onClick={ () => {
                            setMenuItems([...menuItems, { name:'',price:''}])
                     }}><h4>+ Add Item</h4></div>
                    </div>
                    
                
                }
                { console.log(menuItems) }
                
                <button>Save</button>
            </form>

        </div>
    
    </>);
};
const mapStateToProps = state => {
    return{};
}
export default connect(
    mapStateToProps,
    {editTrucks}
    )(EditTruck);