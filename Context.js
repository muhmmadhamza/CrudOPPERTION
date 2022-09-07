import React,{Component} from 'react';
import { rowData } from './AppData';
  
const ProductContext=React.createContext();
 class Productprovider  extends Component{

    state={
        Alldata: rowData,
        id:'',
        title:'',
        info:'',
        company:'',
        price:'',
        updateEdit:[]
    }

    getRecord=(id)=>{
        const product= this.state.Alldata.find(item => item.id === id);
        return product;
    }
    onEdit=(id)=>{
        const tempproduct=this.state.Alldata;
        const index=tempproduct.indexOf(this.getRecord(id));
        const seclectedRecord=tempproduct[index]
        this.setState({
            id:seclectedRecord['id'],
            title:seclectedRecord['title'],
            info:seclectedRecord['info'],
            price:seclectedRecord['price'],
            company :seclectedRecord['company']
        })


    }
    
    updatevalue=(e, test)=>{
        if(test=="title"){
            this.state.title=e.target.value;
        }
        if(test=="info"){
            this.state.info=e.target.value;
        }

        if(test=="price"){
            this.state.price=e.target.value;
        }

        if(test=="company"){
            this.state.company=e.target.value;
        }
        const tempArr=[this.state.id,this.state.title,this.state.info,this.state.price,this.state.company]
        this.setState({
            updateEdit:tempArr
        })
        


    }
    onSave=(id)=>{
        if(id!==''){
        const SavedRecord=this.state.Alldata;
        const index=SavedRecord.indexOf(this.getRecord(id));
        const Record=SavedRecord[index]
        Record['title']=this.state.updateEdit[1];
        Record['info']=this.state.updateEdit[2];
        Record['price']=this.state.updateEdit[3];
        Record['company']=this.state.updateEdit[4];
        this.setState({
            Alldata:[...this.state.Alldata],
            id:"",info:"",title:"",price:"",company:""
        })
       
        }
        else{
            const MaxId=Math.max(...this.state.Alldata.map(item=>item.id))
            const id = MaxId+1;
            const newArr=[];
            newArr['title']=this.state.updateEdit[1];
            newArr['info']=this.state.updateEdit[2];
            newArr['price']=this.state.updateEdit[3];
            newArr['company']=this.state.updateEdit[4];
            this.setState({
                Alldata:[...this.state.Alldata, newArr],
                id:"",info:"",title:"",price:"",company:""});
        }

    }

    onDelete=(id)=>{
        const tempproduct=this.state.Alldata.filter(item=>item.id !==id);
        this.setState({
            Alldata:tempproduct
        })
    }
    render(){
        // console.log(this.state.AllData)
            return(  
                <div>
                    <ProductContext.Provider
                     value={{...this.state,
                        onEdit:this.onEdit,
                        updatevalue:this.updatevalue,
                        onSave:this.onSave,
                        onDelete:this.onDelete,
                     
                     }}>
                  {this.props.children}
                    </ProductContext.Provider>
                </div>
            )
        }
    
}


const ProductConsumer=ProductContext.Consumer;

export {Productprovider,ProductConsumer}